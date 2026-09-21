# Normas e regulações aplicáveis ao produto

**Equipe 2 — Engenharia de Produto / PSP6 · 2026/2**  
**Uso:** dossiê da seção *Legislação e Normas* do pré-desenvolvimento.  
**Conferido em:** 21/09/2026 · segunda passagem, com fonte e URL em cada instrumento.  
**Recorte geográfico:** operação no **Distrito Federal** (distribuidor e obra em Brasília). No DF não existe camada “estadual” aparte: o que vale além da União é a legislação **distrital**.

---

## Como ler este dossiê

Três camadas, para não misturar lei com método de ensaio:

| Camada | O que é | Entra no relatório como |
|---|---|---|
| **A — Obrigação legal** | NR, CLT, CONTRAN, PNRS, CONAMA, leis e decretos do DF | Restrição de projeto. Frase: *o produto será projetado sob o item X* |
| **B — Norma técnica de interface** | NBR da louça, palete, símbolo, RCC | Envelope com o qual o produto convive. Não certifica o nosso dispositivo |
| **C — Método de verificação** | ASTM, ISO de ensaio, ISO 11228 | Como a especificação-meta se prova (Aula 13). Não é homologação INMETRO |

Critério de inclusão — o mesmo do nosso `.tex`, ainda vazio:

> Somente o que é **diretamente aplicável** ao recorte, com **versão, item, implicação e requisito amarrado**.

Instrumento sem esses quatro campos não entra na seção do relatório.

---

## 1. O que a disciplina e a base pedem

### 1.1 Cronograma

A 2ª entrega (28/09) é o relatório consolidado em **ABNT NBR 10719:2015**. Isso é norma de **documento**, não de produto.

- Plano PSP6: [DISCIPLINA.md](../../DISCIPLINA.md) — formato ABNT, lições ao fim de cada fase.
- Catálogo da norma de relatório: [ABNT Catálogo](https://www.abntcatalogo.com.br/).

A seção *Legislação e Normas* fica no **pré-desenvolvimento**, depois de público-alvo e antes de soluções de mercado — posição idêntica à do relatório-base do Grupo 5 (`Exemplos de entregas - base/Relatório Final Revisado - Grupo 5.docx`).

### 1.2 O que a professora cobra nos slides

| Aula | Trecho que manda | Consequência |
|---|---|---|
| **11** | Andrade (1991): *“Qual é a legislação associada com o produto e com os clientes?”* | Norma gera necessidade, não parágrafo |
| **12** | Atributo de conformidade (ISO, NR). Checklist de especificação: item **11 Normas**, **16 Segurança**, **19 Responsabilidade do produto**, **21 Reúso / reciclagem / descarte**. Exemplo da aula: *Atender à NBR NM 60335-1:2006* | Cada norma vira especificação com número |
| **13** | Origem da especificação = necessidade do cliente **ou** norma / interface externa. Unicidade e quantificação | Se a meta não veio do Mudge, veio da lei — e isso se escreve |
| **16** | Requisitos não funcionais incluem regulamentação (exemplo INMETRO) | Homologação só se o tipo de produto exigir. O nosso **não** exige |
| **20** | Material: conformidade normativa é parâmetro inicial | Fim de vida do retornável tem de ser justificável |
| **21 (DfX)** | Ergonomia de **concepção**. DfE | Pega, massa e aresta se resolvem agora |
| **23 (FMEA)** | Severidade 9–10 = infração legal **ou** perigo ao trabalhador | Caco e levantamento acima do teto já nascem graves |
| **24** | Homologar no detalhado | Nesta fase só mapeamos a restrição |

Arquivos: `Eng Produto/Engenharia de Produto - cópia/Slides do Conteúdo/` — Aulas 11, 12, 13, 16, 20, 21, 23 e 24.

### 1.3 O que a base fez e o que não copiamos

O Grupo 5 listou NR-18, NR-17, NR-6, Lei 6.514/1977 e NR-12, sem item e sem requisito. O esqueleto serve. O conteúdo, não.

| Eles citaram | Por que não repetimos assim |
|---|---|
| **NR-12** | Só se o produto for máquina com força motriz. Hoje é dispositivo de acondicionamento |
| **NR-6** | Regula EPI. O produto não é luva; no máximo reduz exposição a caco |
| **Lei 6.514/1977** | Chapéu da CLT. Sem artigo e sem implicação é enchimento |

---

## 2. Recorte do produto que a norma precisa enxergar

Fonte: `Planilha_PSP6_Grupo2_Loucas.xlsx` (abas *Dados*, *Lista de Necessidades*, *Requisito de Projeto*, *Especificação Meta*) e [VALIDACAO-CADEIA-PROBLEMA-QFD.md](VALIDACAO-CADEIA-PROBLEMA-QFD.md).

- Dispositivo **retornável** (ATO, ≥ 20 ciclos) que acomoda louça no fluxo **distribuidor → transporte → descarga → movimentação no canteiro → retorno**.
- Objeto protegido: louça sanitária cerâmica. Kit bacia + caixa acoplada ≈ **34 kg**, envelopado ≈ **0,107 m³**.
- 23 requisitos. Maiores pesos no Mudge: imobilizar, movimentar, amortecer, conferir sem abrir, pega, retirada segura, veículo, empilhar, estabilidade, custo por ciclo.
- A peça **sozinha** já passa do teto ergonômico de levantamento. Qualquer massa extra piora o RP2.

A norma vê: **carga frágil e pesada + embalagem de transporte + canteiro no DF + logística reversa**. Não vê certificação da louça nem projeto de máquina.

---

## 3. Camada A — obrigação legal (União)

### 3.1 Segurança e saúde no trabalho

Fundamento das NRs: [CLT, arts. 154–200](https://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm), com a redação da [Lei nº 6.514/1977](https://www.planalto.gov.br/ccivil_03/leis/l6514.htm). No relatório: no máximo uma frase de abertura. O que amarra o produto são os **itens** abaixo.

| Instrumento | Item | Implicação no produto | Amarra | Onde está escrito |
|---|---|---|---|---|
| **NR-17** — Ergonomia. Redação da [Portaria MTP nº 423/2021](https://www.gov.br/trabalho-e-emprego/pt-br/assuntos/inspecao-do-trabalho/seguranca-e-saude-no-trabalho/sst-portarias/2021/portaria-mtp-no-423-nova-nr-17.pdf), com atualizações posteriores | **17.5.1** não exigir transporte manual cujo peso comprometa saúde ou segurança. **17.5.2** pega, acesso e altura sem flexão/rotação excessiva; carga perto do corpo. **17.5.2.1** vedado levantamento não eventual com alcance horizontal **> 60 cm**. **17.5.3** impulsão/tração de carros. **17.5.4** meios facilitadores; adequar peso e formato | A NR-17 **não fixa 25 kg em lei**. Com 34 kg, o levantamento individual já nasce desconforme. Exige pega definida, alcance ≤ 60 cm, dois operadores ou meio auxiliar, e proíbe somar massa que force o levantamento integral | RC-06, RC-07, RC-08, RC-23 · RP2, RP5, RP9 | [Página oficial](https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/norma-regulamentadora-no-17-nr-17) · [PDF 2021](https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/arquivos/normas-regulamentadoras/nr-17-atualizada-2021.pdf) · [PDF 2023](https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/nr-17-atualizada-2023.pdf) |
| **NR-11** — Transporte, movimentação, armazenagem e manuseio. Última alteração: Portaria MTPS nº 505/2016 | **11.1.3 / 11.1.3.2** equipamento com resistência e **carga máxima visível**. **11.1.4** carro manual com **protetor das mãos**. **11.2** armazenagem sem obstruir circulação nem risco de desabamento | Se a concepção for carro/berço: carga máxima marcada e proteção de mão. Mesmo como embalagem rígida, empilhamento no palete e no canteiro cai neste item | RC-11, RC-14, RC-23 · RP8, RP9, RP12, RP21 | [Página oficial](https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/norma-regulamentadora-no-11-nr-11) · [PDF](https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/arquivos/normas-regulamentadoras/nr-11.pdf) |
| **NR-18** — Construção civil. [Portaria SEPRT nº 3.733/2020](https://www.gov.br/trabalho-e-emprego/pt-br/assuntos/inspecao-do-trabalho/seguranca-e-saude-no-trabalho/sst-portarias/2022/portaria-seprt-n-o-3-733-altera-a-nr-18.pdf) | **18.4** PGR do canteiro. Circulação, sinalização e movimentação de materiais. Não detalha louça; define o **lugar de uso** | Porta, corredor, estabilidade apoiado e retirada sem caco são requisitos **porque** o uso é canteiro | RC-06, RC-08, RC-23 · N-32 a N-35 | [Página oficial](https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/norma-regulamentadora-no-18-nr-18) · [PDF consolidado](https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/nr-18-atualizada-2020.pdf) |
| **NR-01** — GRO. Texto em vigor até 25/05/2026; nova redação do cap. 1.5 a partir de 26/05/2026 ([Portaria MTE nº 765/2025](https://www.gov.br/trabalho-e-emprego/pt-br/assuntos/inspecao-do-trabalho/seguranca-e-saude-no-trabalho/sst-portarias/2025/portaria-mte-no-765-prorroga-inicio-de-vigencia-cap-1-5-da-nr-01.pdf)) | **1.5** a organização identifica perigos, avalia e controla riscos. Hierarquia: eliminar / substituir / engenharia / administrativo / EPI | Não gera geometria. Gera argumento de adoção: o dispositivo entra no inventário de riscos do distribuidor e da construtora como medida de engenharia | Proposta de valor | [Página oficial](https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/nr-1) · [PDF 2024](https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/nr-01-atualizada-2024.pdf) |

**ISO 11228-1:2021** não é lei. É a régua que a NR-17 deixa em aberto.

- Massas de referência (*m_ref*): **15 kg** (maior proteção da população trabalhadora); **23 kg** (equivalente NIOSH); **25 kg** (adultos saudáveis em condição de referência). Ultrapassar 25 kg é exceção.
- O kit de 34 kg **já está fora**. Por isso o RP2 exige meta de massa + número de operadores ou meio auxiliar.
- Ficha oficial: [ISO 11228-1:2021](https://www.iso.org/standard/76820.html) · prévia: [ISO OBP](https://www.iso.org/obp/ui/#iso:std:iso:11228:-1:ed-2:v1:en).
- Parte 2 (empurrar/puxar), se a concepção for carro: [ISO 11228-2:2007](https://www.iso.org/standard/26521.html).

### 3.2 Trânsito e amarração da carga

| Instrumento | Item | Implicação | Amarra | Onde está escrito |
|---|---|---|---|---|
| **Resolução CONTRAN nº 945/2022** (revogou a 552/2015) | Arts. 1º–3º: carga amarrada, ancorada e acondicionada **sem movimento relativo** em curva, freada ou solavanco. Corda não vale como amarração | “Ser compatível com o veículo” (RC-05) vira geometria + interface de cinta / ponto de amarração do baú | RC-02, RC-05 · RP1 | [PDF oficial](https://www.gov.br/transportes/pt-br/assuntos/transito/conteudo-contran/resolucoes/Resolucao9452022.pdf) · [lista CONTRAN](https://www.gov.br/transportes/pt-br/assuntos/transito/conteudo-Senatran/resolucoes-contran) |
| **CTB — Lei nº 9.503/1997** | Arts. 237 e 248: transitar com carga em desacordo / sem condições de segurança | Sanção recai sobre o transportador. O produto que desloca no baú **causa** a infração | RC-05 | [Planalto](https://www.planalto.gov.br/ccivil_03/leis/l9503.htm) |

### 3.3 Resíduos e logística reversa (União)

| Instrumento | Item | Implicação | Amarra | Onde está escrito |
|---|---|---|---|---|
| **Lei nº 12.305/2010 (PNRS)** | Arts. 3º, 9º e **33**: responsabilidade compartilhada; logística reversa de produtos e embalagens, na forma do regulamento / acordo setorial | O produto **já é** retorno ao distribuidor. No descarte: material identificável, desmontável e com cadeia de reciclagem | RC-15, RC-18, RC-19 · RP14, RP22, RP23 | [Planalto](https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2010/lei/l12305.htm) |
| **Decreto nº 10.936/2022** | Arts. 12–20: Programa Nacional de Logística Reversa; extensão a embalagens plásticas, metálicas, de vidro e demais | Se o dispositivo for plástico/metal, o fabricante/distribuidor no DF pode cair em sistema de embalagens em geral — ver também o decreto distrital na seção 4 | RC-19 · RP23 | [Planalto](https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2022/decreto/d10936.htm) |
| **Decreto nº 11.413/2023** | Certificados de crédito de reciclagem (CCRLR, CERE) para comprovar meta de logística reversa | Não muda geometria. Muda o argumento de negócio se a equipe vender “ciclo fechado” | Modelo de negócio (fase futura) | [Planalto](https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2023/decreto/D11413.htm) |
| **Resolução CONAMA nº 307/2002**, alterada pelas Res. 348/2004, 431/2011, **448/2012** e **469/2015** | Art. 3º: Classe **A** (cerâmica da louça quebrada) e Classe **B** (plástico, papelão, metal, madeira do dispositivo). Art. 4º: prioridade não gerar / reduzir / reutilizar. Art. 10: destinação após triagem, **sem misturar classes** | Caco e dispositivo **não vão no mesmo fluxo**. Identificação de material deixa de ser “sustentabilidade genérica” | RC-14, RC-19 · RP21, RP23 | [Texto original CONAMA](https://conama.mma.gov.br/?id=305&option=com_sisconama&task=arquivo.download) · [Res. 448/2012](https://conama.mma.gov.br/?id=652&option=com_sisconama&task=arquivo.download) · [Res. 469/2015](https://conama.mma.gov.br/?id=688&option=com_sisconama&task=arquivo.download) |

A PNRS **não** cria, sozinha, acordo setorial de louça sanitária. Cria a obrigação de não projetar um objeto que só possa ser lixo misturado no canteiro.

### 3.4 Responsabilidade pelo produto (Aula 12, item 19)

| Instrumento | Item | Implicação | Onde está escrito |
|---|---|---|---|
| **CDC — Lei nº 8.078/1990** | Arts. 12–14: responsabilidade pelo fato do produto; defeito de projeto ou informação | Aresta cortante, tombamento e falta de advertência de frágil são defeito de informação / segurança | [Planalto](https://www.planalto.gov.br/ccivil_03/leis/l8078compilado.htm) |
| **Código Civil — Lei nº 10.406/2002** | Art. 927, parágrafo único: responsabilidade objetiva por atividade de risco | Transporte de peça frágil de 34 kg é atividade de risco. O produto que contém o caco reduz a exposição do distribuidor | [Planalto](https://www.planalto.gov.br/ccivil_03/leis/2002/l10406compilada.htm) |

Não viram geometria sozinhos. Sustentam RC-08, RC-13, RC-14 e a classificação de Kano de “retirada segura” e “indicação de impacto” como atrativos que também são defesa jurídica.

---

## 4. Camada A — Distrito Federal

O uso e o descarte acontecem em Brasília. A União classifica o resíduo; o DF diz **como** a obra e o transportador operam.

| Instrumento | Item | Implicação no produto | Onde está escrito |
|---|---|---|---|
| **Lei distrital nº 4.704/2011** — gestão de RCC e volumosos | Arts. 1º e 10: gerador de grande volume elabora **PGRCC**. Segregação na origem. Destinação em local autorizado | Louça quebrada = RCC Classe A. Dispositivo ao fim da vida = Classe B (se plástico/metal/madeira) ou volumoso. Misturar os dois no mesmo saco **fere o PGRCC da obra-cliente** | [SINJ](https://www.sinj.df.gov.br/sinj/Norma/70152/Lei_4704_20_12_2011.html) |
| **Decreto nº 37.782/2016** | Arts. 1º–2º e 6º–7º: transporte de RCC só por agente **cadastrado no SLU**. Gerador exige **CTR** | Se a obra devolver caco ou dispositivo descartado, o fluxo é o do SLU, não o caminhão do pedreiro | [SINJ](https://www.sinj.df.gov.br/sinj/Norma/4b6287cf31034a869ae5fd2f0388f67a/exec_dec_37782_2016.html) · [SLU — RCC](https://www.slu.df.gov.br/residuos-da-construcao-civil/) |
| **Decreto nº 45.189/2023**, alterado pelo **Decreto nº 46.279/2024** | PGRCC cadastrado no sistema eletrônico no licenciamento da [Lei nº 6.138/2018](https://www.sinj.df.gov.br/). Pequeno volume (< 1 m³/dia) declara inexigibilidade, mas **não fica dispensado** da destinação correta. Comprovação por CTR ou MTR/SINIR | Uma peça quebrada já pode ser o evento que o PGRCC da obra tem de registrar. O produto que reduz avaria reduz o próprio RCC | [Decreto 45.189](https://www.sinj.df.gov.br/sinj/Norma/c42e3ff694d5485bb499bd2b23390cb0/exec_dec_45189_2023.html) · [Decreto 46.279](https://dflegis.df.gov.br/ato.php?p=decreto-46279-de-20-de-setembro-de-2024) |
| **Decreto nº 46.520/2024** | Institui o **PGRS Digital** (Sema / Brasília Ambiental / SLU / DF Legal) | Canal oficial em que a obra-cliente declara resíduo. Nosso produto precisa ser **identificável** nesse fluxo (RC-14) | [SINJ](https://www.sinj.df.gov.br/sinj/Norma/7e14d2021e9d4620b08f40bef985fef7/Decreto_46520_13_11_2024.html) |
| **Lei distrital nº 5.418/2014** — Política Distrital de Resíduos, alterada pela [Lei nº 7.380/2024](https://dflegis.df.gov.br/ato.php?p=lei-7380-de-04-de-janeiro-de-2024) | Art. 26: logística reversa no território do DF, em linha com o art. 33 da PNRS. Art. 14: PDGIRS | Espelho distrital da PNRS. Fabricante/distribuidor que circular embalagem no DF observa o art. 26 | [SINJ](https://www.sinj.df.gov.br/sinj/Norma/78558/Lei_5418_27_11_2014.html) |
| **Decreto nº 44.607/2023** — logística reversa de **embalagens em geral** e certificado **RECICLADF** | Art. 1º e parágrafo único: fabricantes, importadores, distribuidores e comerciantes de produtos que, após o uso, gerem embalagens como resíduo **no DF**. Art. 3º: sistemas autodeclaratórios protocolados na Sema | A embalagem de papelão **atual** já é o caso típico. O dispositivo retornável **adianta** a obrigação (volta ao dono). Se for descartável de plástico/metal, cai neste decreto | [SINJ](https://www.sinj.df.gov.br/sinj/Norma/f37263a3de4a49a7b021882ac60af1f5/exec_dec_44607_2023.html) |
| **PDGIRS / SLU** | Plano distrital de gestão integrada; identifica fluxos sujeitos a logística reversa, inclusive embalagens em geral | Contexto de adoção no DF, não geometria | [SLU — PDGIRS](https://www.slu.df.gov.br/planos/plano-distrital-de-residuos-solidos) |

**Leitura para o relatório.** No DF, quebrar louça sem segregação e sem CTR é irregularidade da **obra**. O produto que (a) reduz a quebra e (b) traz identificação de material ajuda o cliente a cumprir a Lei 4.704 e o PGRCC. Isso é argumento de venda, não enfeite ESG.

Não foi encontrada lei distrital que fixe **massa máxima de levantamento** ou **dimensão de porta de apartamento** específica para louça. Circulação no canteiro continua sendo NR-18 + evidência de campo (N-32).

---

## 5. Camada B — normas técnicas de interface

Não certificam o nosso dispositivo. Fixam o envelope da louça, do palete, do símbolo e do resíduo. Texto pago: [ABNT Catálogo](https://www.abntcatalogo.com.br/).

| Instrumento | O que fixa | Implicação | Amarra | Onde descrever / comprar |
|---|---|---|---|---|
| **ABNT NBR 16727-1 e 16727-2** (bacia) · **NBR 16728-1 e 16728-2** (tanque, lavatório, bidê) | Requisitos, ensaios e instalação da louça. A **NBR 15097-1/2** é a família histórica ainda citada no mercado; a vigente foi desdobrada. **Abrir o catálogo ABNT no dia da citação no `.tex`** | Massa, dimensão e fragilidade vêm daqui e do catálogo do fabricante. A parte 2 (instalação) é **fora** da fronteira — o dispositivo não é berço de assentamento | RC-04 · RP7 | [ABCERAM — lista setorial](https://abceram.org.br/normas-tecnicas/) · [ficha 16727-2](https://www.target.com.br/produtos/normas-tecnicas/44873/nbr16727-2-bacia-sanitaria-parte-2-procedimento-para-instalacao) |
| **ABNT NBR 8252** — dimensões básicas de paletes | Face superior do palete. O **PBR-1** de mercado é **1 200 × 1 000 mm** | Meta de ocupação ≥ 90% e base ≤ 600 × 500 mm (RP8) só existe contra esse retângulo | RC-05, RC-11 · RP8 | [Ficha NBR 8252](https://www.target.com.br/produtos/normas-tecnicas/36785/nbr8252-paletes-dimensoes-basicas) · [Manual PBR-1 ABRAS](https://static.abras.com.br/pdf/manual-de-utilizacao-pbr-1.pdf) |
| **ISO 780:2015** / **ABNT NBR ISO 780** | Símbolos de manuseio: frágil, este lado para cima, proteger da umidade | RC-13 e RC-14 têm código normalizado. Não inventar pictograma | RC-13, RC-14 · RP21 | [ISO 780:2015](https://www.iso.org/standard/59933.html) · [ABNT Catálogo](https://www.abntcatalogo.com.br/) |
| **ABNT NBR 15112:2004** (ATT), **15113** (aterro Classe A), **15114** (reciclagem Classe A) | Destinação técnica do RCC depois da CONAMA 307 | Caco de louça (Classe A) e carcaça do dispositivo (Classe B) **não compartilham** a mesma ATT / aterro | RC-19 · RP23 | [Ficha 15112](https://www.abntcatalogo.com.br/) — buscar “15112” |
| **ABNT NBR 10004:2024** (partes 1 e 2) | Classificação de resíduo **quanto à periculosidade** (Classe 1 perigoso / Classe 2 não perigoso). É outro eixo que o da CONAMA 307 | Louça e polímero/metal típicos são não perigosos. Só muda se a concepção usar substância que confira periculosidade | Seleção de material (Aula 20) | [ABNT Catálogo](https://www.abntcatalogo.com.br/) |

**ABNT NBR 7500** (identificação no transporte de produto **perigoso**) **não se aplica**: louça e o dispositivo não são carga perigosa.

---

## 6. Camada C — como a meta se prova

A Aula 13 pede especificação quantificável e rastreável. Nenhum destes métodos é exigência INMETRO para o nosso tipo de produto.

| Método | Para que | Cuidado | Onde está descrito |
|---|---|---|---|
| **ASTM D3332** | Fragilidade da peça (*g-factor*). Alimenta RP3 e RP17 | Peça **refugada**. Faixa de literatura para cerâmica/vidro (40–60 g) é ordem de grandeza, não o valor do nosso modelo | [ASTM D3332](https://store.astm.org/d3332-99.html) |
| **ASTM D5276-19** | Queda livre de recipiente carregado | Cobre até **50 kg** e manuseio manual. Louça 34 kg + dispositivo pode estourar o teto → [ASTM D880](https://store.astm.org/) (impacto de carga unitizada) ou procedimento ISTA de carga paletizada | [ASTM D5276](https://store.astm.org/d5276-98.html) · resumo: [ANSI](https://blog.ansi.org/ansi/drop-test-loaded-containers-free-fall-astm-d5276/) |
| **ASTM D999** | Vibração de transporte | Amortecimento no trecho rodoviário | [ASTM D999](https://store.astm.org/) |
| **ASTM D4169** | Ensaio de desempenho da embalagem no ciclo de distribuição (alternativa / complemento ao D5276 isolado) | Útil quando formos montar o plano de ensaio do detalhado | [ASTM D4169](https://store.astm.org/) |
| **ISO 12048** | Compressão e empilhamento de embalagem completa | RP12 (≥ 7,5 kN) e RP16 (perda após umidade) | [ISO 12048:1994](https://www.iso.org/standard/20810.html) |
| **ISO 2248** | Impacto vertical por queda (equivalente ISO do D5276) | Alternativa normativa europeia/ISO ao D5276 | [ISO 2248](https://www.iso.org/standard/7045.html) |
| **ISO 11228-2** | Empurrar / puxar | Se a concepção for carro: junta-se a NR-17 item 17.5.3 e NR-11 item 11.1.4 | [ISO 11228-2](https://www.iso.org/standard/26521.html) |

---

## 7. Mapa rápido — requisito → norma

| Requisito do cliente (planilha) | Camada A | Camada B / C |
|---|---|---|
| A Amortecer impactos do transporte | CONTRAN 945 (não deslocar no baú) | ASTM D3332, D5276, D999 |
| B Imobilizar a louça | CONTRAN 945 art. 3º | D5276 / ISO 2248 |
| C Conferência sem abrir | — | — (sem norma; evidência de campo) |
| D Ajustável a diferentes louças | — | NBR 16727 / 16728 (envelope da peça) |
| E Compatível com o veículo | CONTRAN 945; CTB 248 | NBR 8252 + PBR-1 |
| F Fácil movimentação | NR-17 17.5; NR-18 | ISO 11228-1 / -2 |
| G Pontos de pega | NR-17 17.5.2 e 17.5.2.1 (60 cm) | ISO 11228-1 (acoplamento) |
| H Retirada segura | NR-17; CDC arts. 12–14 | — |
| I Uso intuitivo | NR-01 (informação / capacitação do tomador) | — |
| J Compacto | — | NBR 8252 |
| K Empilhável | NR-11 11.2 | ISO 12048; NBR 8252 |
| L Desempenho uniforme | — | repetição do ensaio de queda |
| M Indicação visual de uso | CDC (informação) | ISO 780 / NBR ISO 780 |
| N Identificação visível | Lei 4.704/DF; PGRCC; CONAMA 307 | ISO 780; NBR 10004 (classe) |
| O Reutilizável | PNRS art. 9º; Lei 5.418 art. 26 | ensaio cíclico (RP14) |
| P Resistente a intempéries | — | ISO 12048 após umidade |
| Q Manutenção simples | — | — |
| R Fácil desmontagem | PNRS; CONAMA 307 (triagem) | — |
| S Materiais recicláveis | PNRS; Dec. 10.936; Dec. DF 44.607 | NBR 15112–15114; NBR 10004 |
| T Peças modulares | — | — |
| U Montagem em poucas etapas | NR-17 17.5.4 (não aumentar a tarefa) | — |
| V Baixo custo por ciclo | — | envelope econômico da validação |
| W Estável quando apoiado | NR-11 11.2; NR-18 | plano inclinado (RP9) |

---

## 8. O que fica de fora — de propósito

| Instrumento | Por quê |
|---|---|
| **NR-12** | Só se a concepção virar máquina. Reavaliar no conceitual |
| **NR-6** | EPI. Pode aparecer no FMEA como controle **residual** contra corte, nunca como função do produto. [Página oficial](https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/norma-regulamentadora-no-6-nr-6) |
| **INMETRO / ANVISA / ANATEL** | Sem regulamentação compulsória para este tipo de dispositivo. O liquidificador da Aula 16 não é o nosso caso |
| **ISO 9001, 14001, 14040** | Sistema de gestão ou ACV. Úteis no DfE, não como restrição atual |
| **NBR 10719** | Forma do relatório |
| **NBR 7500 / produtos perigosos** | Carga não é perigosa |
| **NR-18** (elevador, andaime, eletricidade) | Fora da fronteira. Não copiar a NR-18 inteira porque o tema da professora é canteiro |
| **Lei distrital de edificações (6.138/2018)** | Licenciamento da **obra**, não do nosso produto. Só entra como gancho do PGRCC (Decreto 45.189) |

---

## 9. Texto-base para o `.tex`

Tom da base, rigor das Aulas 12 e 13. Enquanto não houver concepção, **não** escrever “o produto atende à NR-X”.

1. Frase de recorte: o produto opera em transporte de carga, descarga, canteiro no Distrito Federal e retorno.
2. Tabela **norma / item / implicação / requisito**, com as linhas da camada A (NR-17, NR-11, NR-18, CONTRAN 945, PNRS + CONAMA 307, Lei 4.704/DF).
3. Um parágrafo separando **lei** de **método de ensaio**.
4. O conflito: a louça já excede as massas de referência da ISO 11228-1; o produto não pode piorar o RP2.
5. Uma frase distrital: no DF, caco (Classe A) e carcaça (Classe B) não compartilham o CTR.
6. Lição da fase: norma sem item e sem requisito amarrado não entra.

---

## 10. Decisões que a equipe ainda precisa tomar

1. **Teto do RP2.** ISO 11228-1 oferece 15, 20, 23 e 25 kg. Qual adotamos: 15 kg (quase obriga meio auxiliar) ou 25 kg + dois operadores? A NR-17 não escolhe.
2. **Família da louça no `.tex`.** 15097 (validação) ou 16727/16728 (desdobramento vigente)? Abrir o [ABNT Catálogo](https://www.abntcatalogo.com.br/) no dia da citação.
3. **RC-05.** Concordam em redigir como “aceita cinta e não permite deslocamento relativo no baú”, no espírito da CONTRAN 945?
4. **NR-11 11.1.4.** Só vira requisito de concepção se houver roda. Se for embalagem rígida, cai.
5. **Decreto DF 44.607.** Se a concepção for retornável de fato, o decreto trabalha a nosso favor (não vira embalagem-resíduo). Se for híbrido descartável de plástico, o fabricante no DF entra no RECICLADF.

---

## 11. Índice de fontes (todos os links)

### União — trabalho

- NRs vigentes (índice): https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes
- NR-01 página: https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/nr-1
- NR-01 PDF 2024: https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/nr-01-atualizada-2024.pdf
- Portaria MTE 1.419/2024 (cap. 1.5): https://www.gov.br/trabalho-e-emprego/pt-br/assuntos/inspecao-do-trabalho/seguranca-e-saude-no-trabalho/sst-portarias/2024/portaria-mte-no-1-419-nr-01-gro-nova-redacao.pdf
- Portaria MTE 765/2025 (vigência 1.5): https://www.gov.br/trabalho-e-emprego/pt-br/assuntos/inspecao-do-trabalho/seguranca-e-saude-no-trabalho/sst-portarias/2025/portaria-mte-no-765-prorroga-inicio-de-vigencia-cap-1-5-da-nr-01.pdf
- NR-11 página: https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/norma-regulamentadora-no-11-nr-11
- NR-11 PDF: https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/arquivos/normas-regulamentadoras/nr-11.pdf
- NR-17 página: https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/norma-regulamentadora-no-17-nr-17
- NR-17 Portaria 423/2021: https://www.gov.br/trabalho-e-emprego/pt-br/assuntos/inspecao-do-trabalho/seguranca-e-saude-no-trabalho/sst-portarias/2021/portaria-mtp-no-423-nova-nr-17.pdf
- NR-18 página: https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/norma-regulamentadora-no-18-nr-18
- NR-18 Portaria 3.733/2020: https://www.gov.br/trabalho-e-emprego/pt-br/assuntos/inspecao-do-trabalho/seguranca-e-saude-no-trabalho/sst-portarias/2022/portaria-seprt-n-o-3-733-altera-a-nr-18.pdf
- CLT: https://www.planalto.gov.br/ccivil_03/decreto-lei/del5452.htm
- Lei 6.514/1977: https://www.planalto.gov.br/ccivil_03/leis/l6514.htm

### União — trânsito, consumo, civil

- CONTRAN 945/2022: https://www.gov.br/transportes/pt-br/assuntos/transito/conteudo-contran/resolucoes/Resolucao9452022.pdf
- Lista CONTRAN: https://www.gov.br/transportes/pt-br/assuntos/transito/conteudo-Senatran/resolucoes-contran
- CTB: https://www.planalto.gov.br/ccivil_03/leis/l9503.htm
- CDC: https://www.planalto.gov.br/ccivil_03/leis/l8078compilado.htm
- Código Civil: https://www.planalto.gov.br/ccivil_03/leis/2002/l10406compilada.htm

### União — resíduos

- Lei 12.305/2010: https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2010/lei/l12305.htm
- Decreto 10.936/2022: https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2022/decreto/d10936.htm
- Decreto 11.413/2023: https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2023/decreto/D11413.htm
- CONAMA 307/2002: https://conama.mma.gov.br/?id=305&option=com_sisconama&task=arquivo.download
- CONAMA 448/2012: https://conama.mma.gov.br/?id=652&option=com_sisconama&task=arquivo.download
- CONAMA 469/2015: https://conama.mma.gov.br/?id=688&option=com_sisconama&task=arquivo.download

### Distrito Federal

- Lei 4.704/2011: https://www.sinj.df.gov.br/sinj/Norma/70152/Lei_4704_20_12_2011.html
- Decreto 37.782/2016: https://www.sinj.df.gov.br/sinj/Norma/4b6287cf31034a869ae5fd2f0388f67a/exec_dec_37782_2016.html
- Decreto 45.189/2023: https://www.sinj.df.gov.br/sinj/Norma/c42e3ff694d5485bb499bd2b23390cb0/exec_dec_45189_2023.html
- Decreto 46.279/2024: https://dflegis.df.gov.br/ato.php?p=decreto-46279-de-20-de-setembro-de-2024
- Decreto 46.520/2024: https://www.sinj.df.gov.br/sinj/Norma/7e14d2021e9d4620b08f40bef985fef7/Decreto_46520_13_11_2024.html
- Lei 5.418/2014: https://www.sinj.df.gov.br/sinj/Norma/78558/Lei_5418_27_11_2014.html
- Lei 7.380/2024: https://dflegis.df.gov.br/ato.php?p=lei-7380-de-04-de-janeiro-de-2024
- Decreto 44.607/2023 (RECICLADF): https://www.sinj.df.gov.br/sinj/Norma/f37263a3de4a49a7b021882ac60af1f5/exec_dec_44607_2023.html
- SLU — RCC: https://www.slu.df.gov.br/residuos-da-construcao-civil/
- SLU — PDGIRS: https://www.slu.df.gov.br/planos/plano-distrital-de-residuos-solidos
- SINJ (busca): https://www.sinj.df.gov.br/

### Normas técnicas e ensaios

- ABNT Catálogo: https://www.abntcatalogo.com.br/
- ABCERAM — normas do setor cerâmico: https://abceram.org.br/normas-tecnicas/
- NBR 8252 (ficha): https://www.target.com.br/produtos/normas-tecnicas/36785/nbr8252-paletes-dimensoes-basicas
- Manual PBR-1 ABRAS: https://static.abras.com.br/pdf/manual-de-utilizacao-pbr-1.pdf
- ISO 780:2015: https://www.iso.org/standard/59933.html
- ISO 11228-1:2021: https://www.iso.org/standard/76820.html
- ISO 11228-2: https://www.iso.org/standard/26521.html
- ISO 12048:1994: https://www.iso.org/standard/20810.html
- ISO 2248: https://www.iso.org/standard/7045.html
- ASTM D3332: https://store.astm.org/d3332-99.html
- ASTM D5276: https://store.astm.org/d5276-98.html

### Internos do projeto

- Relatório-base Grupo 5: `Eng Produto/Entregas/Exemplos de entregas - base/`
- Planilha da equipe: `Eng Produto/Entregas/planilha/Planilha_PSP6_Grupo2_Loucas.xlsx`
- Validação da cadeia: [VALIDACAO-CADEIA-PROBLEMA-QFD.md](VALIDACAO-CADEIA-PROBLEMA-QFD.md)
- Relatório (seção ainda vazia): `Eng Produto/Entregas/relatorio/secoes/02-pre-desenvolvimento.tex`

---

**Nota de conferência.** Textos de NR, lei e decreto foram lidos nas páginas oficiais em 21/09/2026. NBRs e ASTM/ISO são normas pagas: o que está acima é o **escopo publicado na ficha**, não o texto integral. Antes de colar número de item de NBR no `.tex`, abrir o PDF no ABNT Catálogo. A vigência da família da louça (15097 vs 16727/16728) é o único ponto que ainda depende dessa abertura.

*[Segunda revisão — dossiê de entrega da seção Legislação e Normas.]*
