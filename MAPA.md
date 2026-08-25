# MAPA — Produto e PSP6 · 2026/2

> O índice desta pasta. Em caso de dúvida sobre onde algo mora, este arquivo ganha.
> Ficha das disciplinas: [DISCIPLINA.md](./DISCIPLINA.md) · Leitura da professora: [PROFESSORA.md](./PROFESSORA.md)

> Acompanhamento recorrente do projeto: [LOG-SEMANAL.md](./03_Projeto/LOG-SEMANAL.md)

## Em uma tela

**Duas disciplinas, uma professora, um projeto.** *Engenharia de Produto* (EPR 0013, teórica, 19:00)
ensina o método; *PSP6* (EPR 008, prática/PBL, 20:50) aplica no projeto de equipe da mesma noite.
Professora **Andréa Cristina dos Santos**, coordenadora do **Laboratório Aberto de Brasília**.
Tema imposto: **ESG–Social · saúde e segurança do trabalho na construção civil**.

**Projeto da equipe:** *Segurança no manuseio de louças sanitárias em canteiros de obra* — a quebra de
louças gera cacos cortantes que ferem trabalhadores. Fase atual: **Descoberta (Discover)** do Diamante
Duplo. Já entregue: definição do problema (Entrega 1.1). Próximo passo: **visita de campo** →
sustentação empírica do problema.

**Turma A (segunda-feira).** Aula 03 em **24/08** · **1ª Entrega em 31/08** — apresentação de 5 minutos,
só problema e relevância, com fotos e dados. Sem solução.

---

## Estrutura-alvo

```
Produto e PSP6/
├── MAPA.md                     ← este arquivo (índice mestre)
├── DISCIPLINA.md               ← planos, calendário, avaliação, formato das entregas
├── PROFESSORA.md               ← perfil da Profa. Andréa (cresce com as transcrições)
│
├── 01_Disciplina/              ← planos de ensino, Aula 01, orientações oficiais
├── 02_Aulas/
│   ├── transcricoes/           ← ★ transcrições das aulas (convenção no README de lá)
│   └── material/               ← slides e material distribuído por aula
├── 03_Projeto/                 ← o projeto das louças sanitárias
│   ├── entregas/               ← o que vai pro Teams (docx + pptx, padrão "semana xx")
│   ├── campo/                  ← roteiros, notas, fotos, entrevistas
│   └── metodos/                ← QFD, Mudge, Kano, Pareto, matriz morfológica, FMEA…
├── 04_Referencias/             ← acervo bibliográfico (hoje "Materiais TEAMS")
│   ├── Livros/
│   ├── 1..5 por fase do PDP/
│   └── Ferramentas/            ← CANVAS, DFX, FMEA, TRL, DesignForCost
├── 05_Exemplos/                ← 34 relatórios de equipes 2021–2025 (hoje "OneDrive_1_8-17-2026")
└── _inbox/                     ← dropzone; nada fica solto na raiz
```

**Estado hoje:** ✅ **migração executada em 17/08/2026.** As pastas `Materiais TEAMS/` e `Produzido/`
não existem mais — todo o conteúdo foi redistribuído na estrutura acima.

### Migração executada (17/08/2026)

| Origem | Destino |
|---|---|
| `Materiais TEAMS/Plano PSP6 2026_2.pdf`, `PlanoEP2026_2.pdf`, `Aula 01 _PSP6.pdf` | `01_Disciplina/` |
| `Materiais TEAMS/` (pastas 1–5 + Livros) | `04_Referencias/` |
| `Materiais TEAMS/{CANVAS, DFX, FMEA, TRL, DesignForCost}` + `LISTA EXERCÍCIO DE MODELAGEM FUNCIONAL.docx` | `04_Referencias/Ferramentas/` |
| `Materiais TEAMS/OneDrive_1_8-17-2026/` (34 relatórios de turmas antigas) | `05_Exemplos/` |
| `Produzido/Entrega 1.1 *.docx` + `Slides - Entrega 1.1.pptx` | `03_Projeto/entregas/` |
| `Produzido/Visita 1 PSP.docx` | `03_Projeto/campo/` |

**Removidos na migração** (duplicatas exatas conferidas por MD5, cópia preservada):

- `Relatorio-Semanal-002-Botteles-2026-08-17.pdf` — arquivo de cliente fora de lugar; original em `~/Projects/QuartzFilters/Grupo Botteles/entregas/`
- `2014_GiselleAmaralLeite.pdf` — cópia solta na raiz; mantida em `04_Referencias/4. Projeto Informacional/`
- `2016_MauricioMerinoPérez.pdf` — cópia solta na raiz; mantida em `04_Referencias/5. Projeto Conceitual/5.1 Modelagem Funcional/`
- `2021-DesignInnovationDIMethodologyHandbook…pdf` — cópia solta na raiz; mantida em `04_Referencias/Livros/`

---

## Índice do acervo

### 01 · Documentos oficiais da disciplina

| Arquivo | O que é |
|---|---|
| `Plano PSP6 2026_2.pdf` | Plano da EPR 008: programa, 4 módulos de avaliação, **cronograma das turmas A e B**, 16 orientações de conduta, formato do relatório ABNT, contato do LAB |
| `PlanoEP2026_2.pdf` | Plano da EPR 0013: programa, 3 módulos, **cronograma das 25 aulas teóricas** |
| `Aula 01 _PSP6.pdf` | Slide de abertura — ESG/pilar Social, LABSeguro, pesquisa-ação em fatores humanos, modelo em "V" |

### 02 · Aulas

- `transcricoes/` — **vazia, esperando as transcrições**. Convenção de nome no
  [README de lá](./02_Aulas/transcricoes/README.md).
- `material/` — a criar quando chegarem slides por aula.

### 03 · Projeto — louças sanitárias

| Arquivo | Estado |
|---|---|
| `Entrega 1.1 _ Local_Atividade - Usuários_Clientes.docx` | Relatório da 1ª entrega. **Pendências no texto:** número da equipe e nomes dos integrantes ainda com `[preencher]` |
| `Slides - Entrega 1.1.pptx` | 9 slides: contexto ESG → problema → dados de acidentes → dados de perdas → stakeholder mapping → matriz influência×interesse → próximos passos. **Slide 8 ("O que cada stakeholder espera") está com 4 campos "Definir"** |
| `Visita 1 PSP.docx` | Roteiro de campo pronto: Parte A observação (armazenamento, transporte, instalação, evidências de quebra, sinalização) + Parte B entrevistas (contato, trabalhador, mestre de obras) |

**Método declarado na entrega:** Diamante Duplo (DI Handbook) + modelo de referência de
Rozenfeld et al. + Stakeholder Mapping + pesquisa documental (MTE, CBIC) + visita de campo.
**Narrativa em 3 camadas:** dado macro → evidência de campo → consequência concreta.

### 04 · Referências, por fase do PDP

| Fase | Pasta | Destaques |
|---|---|---|
| Introdução | `1. Introduçao` | Revisão de literatura PSS · State-of-the-art PSS 2007 · 45 Years with design methodology · Back et al. cap. 4 |
| Planejamento estratégico de produto | `2. Planejamento estratégico…` | 5 artigos do *Journal of Product Innovation Management* |
| Planejamento do projeto | `3. Planejamento de Projeto…` | jpim.12547 · sys.21421 · Tool Management Project |
| **Projeto informacional** | `4. Projeto Informacional` | **12 arquivos — a pasta mais densa**: QFD, taxonomia de requisitos, **Mudge (2 aplicações)**, tolerâncias, Giselle Amaral Leite, Fonseca cap. 2–3–4, circular design |
| Projeto conceitual | `5. Projeto Conceitual` | `5.1` Modelagem funcional · `5.2` Matriz morfológica · `5.3` Arquitetura do produto · `5.3` TRIZ · `5.4` Seleção de materiais · PROFNIT prospecção tecnológica |

**Ferramentas transversais:**

| Pasta | Conteúdo |
|---|---|
| `CANVAS` | Business Model Generation (livro) · Canvas.pdf · aula_canvas.pptx · 2 vídeos (BMC e Project Model Canvas) · e-book |
| `DFX` | DFMA e DFE (apostilas EPR707) · aplicação DFMA · 2 vídeos (DFMA, Why Modular Product Design) |
| `FMEA` | Apostila + **planilha `.xlsm` pronta** |
| `TRL` | 2 artigos de nível de prontidão tecnológica |
| `DesignForCost` | Dissertação Villano 2017 + **modelo `.xlsm`** |
| `Livros` | **Rozenfeld (PDP)** · **Ulrich & Eppinger 6ª ed.** · **PRODIP (Back et al.)** · **DI Handbook 2021 e 2023** · Manual de Oslo 4ª ed. |

> **Os dois `.xlsm` (FMEA e Design for Cost) são entregáveis prontos** — vão ser usados em novembro,
> não precisam ser reconstruídos.

### 05 · Exemplos de turmas anteriores

34 relatórios de equipes de **2021 a 2025**, todos sobre risco em canteiro de obra
(lista completa e leitura do padrão em [PROFESSORA.md](./PROFESSORA.md)).
Referência de formato: `2025_MontagemAndaimes.pdf` — relatório de 34 páginas com o esqueleto completo
pré-desenvolvimento → projeto informacional → QFD → especificações-meta → lições aprendidas.

---

## Onde o material vive (fora desta pasta)

| Fonte | O que tem | Observação |
|---|---|---|
| **Microsoft Teams** — equipe *Engenharia de Produto* | Fonte oficial: caderno, slides das aulas, biblioteca, **e o lugar onde as entregas semanais são submetidas** | A professora repete "ACOMPANHE A DISCIPLINA PELO TEAMS" nos dois planos. Esta pasta é uma cópia local do que vem de lá |
| **Google Drive** (diogo@skedula.com.br) | Só material avulso de semestres anteriores compartilhado por colegas: `Entrega parcial 1 - Grupo 10 PSP 6 2025.1`, `Relatório PSP6 - Equipe 10 VF_2607`, `QFD - PSP6`, `Planejamento \| PSP6`, pasta `PSP5 PUMA \| 2025.1` | **Não existe pasta de PSP6 2026/2 no seu Drive.** Se quiser espelhar esta estrutura lá, é criar do zero |
| **LAB** — labeabertobsb@gmail.com | Apoio ao protótipo a partir da modelagem funcional | Agendar com **5 dias de antecedência**, 9–13h / 14–18h |
| **GitHub Pages** — [fastphoenixx.github.io/pdp-flashcards](https://fastphoenixx.github.io/pdp-flashcards/) | Flashcards + guia de estudo da Aula 03 (Abordagens do PDP) | **Repositório público.** Fonte em `02_Aulas/estudo/site/` (repo git próprio). Para atualizar: editar, `git commit` e `git push` |

---

## Pendências

1. **Confirmar a turma (A ou B).** Muda a data da 1ª entrega: 31/08 ou 02/09.
2. **Número da equipe e nomes dos integrantes** — ainda `[preencher]` na Entrega 1.1.
3. **Slide 8** da apresentação — os 4 quadros de expectativa de stakeholder estão como "Definir".
4. **Fazer a visita de campo.** O roteiro está pronto; a apresentação exige **fotos do problema**, e a
   Aula 03 (24/08 ou 26/08) pede a sustentação do problema com evidência de campo.
5. **Responder as perguntas da p. 87** do DI Handbook para a Aula 03.

*[Claude — 2026-08-17]*
