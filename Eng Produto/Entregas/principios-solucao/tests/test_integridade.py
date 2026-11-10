import unittest
from pathlib import Path
import hashlib
import json
import re
import unicodedata
from collections import Counter
from pypdf import PdfReader

ROOT = Path(__file__).resolve().parents[1]

class EntregaLatex(unittest.TestCase):
    def test_pdf_compilado_existe(self):
        pdf = ROOT / "Principios_de_Solucao_Equipe_2.pdf"
        self.assertTrue(pdf.is_file(), "A entrega LaTeX ainda não foi compilada em PDF.")
        self.assertGreater(pdf.stat().st_size, 10000)
        self.assertTrue(pdf.read_bytes().startswith(b"%PDF-"))

    @classmethod
    def setUpClass(cls):
        cls.data = json.loads((ROOT / "dados/conteudo-original.json").read_text(encoding="utf-8"))
        cls.reader = PdfReader(ROOT / "Principios_de_Solucao_Equipe_2.pdf")
        cls.pages = [p.extract_text() for p in cls.reader.pages]
        cls.text = "\n".join(cls.pages)
        cls.normalized = cls.norm(cls.text)

    @staticmethod
    def norm(text):
        return "".join(c for c in unicodedata.normalize("NFKD", text).casefold()
                       if c.isalnum() or c in "≤≥×°$")

    def test_112_alternativas_e_28_funcoes_no_pdf(self):
        functions = self.data["functions"]
        self.assertEqual(len(functions), 28)
        self.assertEqual(sum(len(f["options"]) for f in functions), 112)
        for f in functions:
            with self.subTest(function=f["id"]):
                self.assertIn(self.norm(f["name"]), self.normalized)
            for o in f["options"]:
                with self.subTest(option=o["id"]):
                    self.assertIn(self.norm(o["id"] + o["description"]), self.normalized)

    def test_84_escolhas_preservadas_nas_fontes_e_no_pdf(self):
        annex = (ROOT / "secoes/04-matriz-ilustrada.tex").read_text(encoding="utf-8")
        rows = re.findall(r"\\celulafuncao\{([EC]\d{2})\}\{([^}]*)\}\{([1-4])\}\{([1-4])\}\{([1-4])\}", annex)
        self.assertEqual(len(rows), 28)
        actual = {r[0]: [int(v) for v in r[2:]] for r in rows}
        for f in self.data["functions"]:
            with self.subTest(function=f["id"]):
                self.assertEqual(actual[f["id"]], f["choices"])
                sequence = f["id"] + f["name"] + "".join(f"C{i}:{v}" for i, v in enumerate(f["choices"], 1))
                self.assertIn(self.norm(sequence), self.normalized)

    def test_23_metas_e_vinculos_preservados_no_pdf(self):
        self.assertEqual(len(self.data["specifications"]), 23)
        for s in self.data["specifications"]:
            with self.subTest(target=s["id"]):
                self.assertIn(self.norm(s["id"] + s["target"] + s["functions"]), self.normalized)

    def test_10_casos_triz_originais_preservados(self):
        self.assertEqual(len(self.data["triz_cases"]), 10)
        for case in self.data["triz_cases"]:
            for n, paragraph in enumerate(case["paragraphs"]):
                with self.subTest(case=case["id"], paragraph=n):
                    self.assertIn(self.norm(paragraph), self.normalized)

    def test_112_figuras_extraidas_intactas_e_incorporadas(self):
        expected = [o for f in self.data["functions"] for o in f["options"]]
        self.assertEqual(len(list((ROOT / "figuras").glob("*.png"))), 112)
        for o in expected:
            with self.subTest(image=o["id"]):
                self.assertEqual(hashlib.sha256((ROOT / o["image"]).read_bytes()).hexdigest(), o["sha256"])
        images = set()
        for page in self.reader.pages:
            for obj in page["/Resources"].get("/XObject", {}).values():
                if obj.get_object().get("/Subtype") == "/Image":
                    images.add((obj.idnum, obj.generation))
        self.assertEqual(len(images), 112)

    def test_184_links_visuais_preservados_no_pdf(self):
        expected = Counter(link["url"] for f in self.data["functions"] for o in f["options"] for link in o["links"])
        self.assertEqual(sum(expected.values()), 184)
        actual = Counter()
        for page in self.reader.pages:
            for ref in page.get("/Annots", []):
                action = ref.get_object().get("/A", {})
                if action.get("/S") == "/URI":
                    actual[str(action["/URI"])] += 1
        self.assertFalse(expected - actual, f"Links ausentes ou alterados: {expected - actual}")

    def test_quatro_ajustes_validados_aparecem_no_pdf(self):
        for text in ["A embalagem original é retirada no distribuidor", "meta provisória",
                     "leitura humana direta", "Tradução adotada", "facilidade de reparo",
                     "confiabilidade", "não representa a escolha de uma concepção física final"]:
            with self.subTest(text=text):
                self.assertIn(self.norm(text), self.normalized)

    def test_anexo_tem_sete_paginas_paisagem_e_nenhuma_vazia(self):
        landscape = [p for p in self.reader.pages if p.get("/Rotate", 0) == 90]
        self.assertEqual(len(landscape), 7)
        self.assertTrue(all(len(t.strip()) > 150 for t in self.pages))
        for n, page in enumerate(landscape, 1):
            self.assertIn(f"Bloco {n} de 7", page.extract_text())

    def test_docx_original_permanece_intacto_quando_disponivel(self):
        source = ROOT.parents[2] / "_inbox" / self.data["source_file"]
        if not source.exists():
            self.skipTest("DOCX privado não faz parte do pacote LaTeX.")
        self.assertEqual(hashlib.sha256(source.read_bytes()).hexdigest(), self.data["source_sha256"])

    def test_compilacao_final_sem_referencias_pendentes_ou_extravasamento(self):
        path = ROOT / "build/Principios_de_Solucao_Equipe_2.log"
        if not path.exists():
            self.skipTest("Compile localmente para examinar o log.")
        log = path.read_text(encoding="utf-8")
        for marker in ["Overfull", "Missing character", "undefined", "LaTeX Warning", "Package natbib Warning"]:
            with self.subTest(marker=marker):
                self.assertNotIn(marker, log)


if __name__ == "__main__":
    unittest.main()
