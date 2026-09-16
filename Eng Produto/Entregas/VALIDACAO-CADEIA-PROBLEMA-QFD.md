# Validação da cadeia — da dor ao QFD

Revisão completa do encadeamento lógico do projeto, da formulação do problema até as
especificações-meta, com verificação das premissas externas em fonte. Data: 15/09/2026.

## 1. O que foi verificado

| Elo | Situação | Números conferidos |
|---|---|---|
| Problema e contexto | Coerente, com ressalva de fronteira (achado A) | 5 etapas de cadeia mapeadas |
| Ciclo de vida | Coerente | 13 fases, com retorno explicitado |
| Necessidades | Coerente | 44 necessidades por fase e tipo de cliente |
| Matriz de atributos e cenários | Coerente | 44 necessidades agrupadas em 22 requisitos |
| Rastreabilidade | Fechada nos dois sentidos | 44 ligações, nenhum requisito sem origem |
| Kano | Uma classificação a revisar (achado B) | 22: 7 básicos, 10 desempenho, 5 atrativos |
| Mudge | Coerente, pendência de validação já declarada | 231 pares, 535 pontos, 4 empates |
| Pareto | Coerente | 10 de 22 requisitos concentram 81,1% |
| Benchmarking | Coerente, avaliação da equipe a revalidar | 22 × 4 referências, índice 2,59 a 3,19 |
| Requisitos de projeto | Coerente, 1 para 1 | 22 requisitos, cada um com parâmetro e unidade |
| Matriz de relacionamento | Coerente | 8.612 pontos, diagonal completa, sem órfãos |
| Correlação | Coerente | 38 pares, 1 conflito forte |
| Especificações-meta | Coerentes, com partida provisória (ver anexo) | 22 metas em valor absoluto, 11 delas sobre estimativa |

## 2. Achados que exigem ação

### A. A fronteira declarada do problema é mais estreita que o conjunto de requisitos

O enunciado do pré-desenvolvimento delimita o problema ao **transporte entre o distribuidor
e a obra**. Mas os requisitos de maior peso incluem movimentação (72 pontos), pontos de pega
(36) e retirada segura da louça (35) — que acontecem na descarga, na movimentação interna e na
abertura, depois do trecho rodoviário. O ciclo de vida de 13 fases já cobre isso; o enunciado do
problema é que ficou para trás.

**Ação:** reescrever a fronteira como *transporte, descarga e movimentação até o ponto de
instalação*. Sem isso, um avaliador pode apontar requisito fora do escopo declarado.

### B. "Ter identificação visível" está classificado como atrativo, e provavelmente é básico

No Kano, atrativo é o requisito que o cliente não verbaliza e não espera. A embalagem atual já
traz modelo, lado correto e advertência de frágil impressos — tanto que recebeu nota 4 nesse
requisito no benchmarking. Um requisito que o mercado já entrega e cuja ausência gera
insatisfação é **básico**, não atrativo.

**Ação:** reclassificar para básico. Impacto: nenhum na pontuação de Mudge; muda a leitura
qualitativa e tira um item da análise de sensibilidade.

### C. A louça já excede o limite ergonômico antes de somar a embalagem

Um kit de bacia com caixa acoplada pesa da ordem de **34 kg**. A ISO 11228-1 trabalha com massa
de referência de **25 kg** para levantamento manual, e a prática corrente adota 20 a 25 kg como
teto seguro. Ou seja: a movimentação manual unitária de uma peça já parte de uma condição
desfavorável, e qualquer massa que o dispositivo acrescente piora um requisito que vale 72
pontos no Mudge.

**Ação:** o requisito de projeto RP2 (força de movimentação) precisa de meta de massa total e de
número de operadores, ou de previsão de meio auxiliar. Já registrado no detalhamento do RP2;
falta virar meta numérica quando a linha de base for medida.

### D. A faixa do ensaio de queda pode estourar

O ASTM D5276 cobre embalagens carregadas de até 50 kg. Com louça de cerca de 34 kg mais o
dispositivo, a unidade carregada pode ultrapassar esse limite.

**Ação:** verificar a massa da unidade carregada antes de contratar o ensaio; se passar de 50 kg,
usar procedimento para cargas unitizadas em vez do D5276.

### E. O limiar do registro de impacto precisa sair de ensaio, não de arbítrio

A meta do RP16 (aceleração registrada de forma irreversível) e a do RP3 (aceleração transmitida)
só têm sentido contra o nível de aceleração que efetivamente trinca a peça — o *g-factor* do
produto. Existe método normalizado para determiná-lo: **ASTM D3332**. A prática de projeto de
cushioning situa cerâmica e vidro na faixa delicada, da ordem de **40 a 60 g**, o que dá uma
ordem de grandeza inicial, não um valor para o nosso produto.

**Ação:** o item 2 do plano de coleta passa a ser explicitamente um ensaio tipo D3332 em peça
refugada. Já aplicado na planilha.

### F. "Custo-benefício" está sendo medido só pelo custo

O RP10 mede custo por ciclo. O lado do benefício está distribuído nos outros 21 requisitos de
projeto, não dentro desse. É uma simplificação legítima, mas precisa estar declarada no
relatório para não parecer omissão.

### G. Duas avaliações ainda são da equipe, não do cliente

A comparação pareada do Mudge e as notas do benchmarking foram feitas pela equipe com base nas
evidências de campo. A Aula 12 estabelece que a comparação é do cliente. A pendência já está
registrada no relatório e na planilha; ela continua sendo o principal risco metodológico da
entrega.

### H. A seção de normas do relatório pode sair do vazio

A validação levantou âncoras normativas concretas e verificadas, que preenchem a seção hoje
marcada como etapa futura:

- **ABNT NBR 15097-1 e 15097-2** — aparelhos sanitários de material cerâmico: requisitos,
  métodos de ensaio e procedimento de instalação. É a norma do produto que se quer proteger.
- **ABNT NBR 8252** — palete padrão brasileiro PBR 1200 × 1000 mm, referência do RP9.
- **NR-11 e NR-17, com ISO 11228-1** — transporte, movimentação e limites de levantamento manual.
- **ASTM D5276** (queda livre), **ASTM D999** (vibração), **ISO 12048** (compressão e
  empilhamento), **ASTM D3332** (fragilidade do produto) — métodos dos ensaios que sustentam as
  metas.

## 3. O que está sólido

- **A lógica de agrupamento resiste à conferência.** 44 necessidades viram 22 requisitos por
  atributo, e a verificação nos dois sentidos fecha: nenhum requisito sem necessidade de origem,
  nenhuma necessidade perdida.
- **O benchmarking confirma o recorte por caminho independente.** Os três requisitos em que
  nenhuma referência de mercado passa de 2 — conferência sem abrir, retirada segura e indicação
  de impacto — são exatamente os atrativos do Kano e a lacuna que a pesquisa de patentes já
  havia apontado. Três métodos diferentes convergindo para a mesma lacuna é o achado mais forte
  do trabalho até aqui.
- **O conflito central do projeto está explícito e tem saída.** O telhado mostra conflito forte
  entre imobilizar a louça e acomodar modelos diferentes; a modularidade aparece com sinergia
  para os dois lados, o que dá direção ao projeto conceitual.
- **As metas são verificáveis.** Por serem relativas à embalagem em uso, cada uma se comprova
  comparando as duas soluções no mesmo ensaio, sem depender de valor absoluto arbitrado.

## 4. O risco que continua aberto

As 22 metas passaram a ter valor absoluto, mas 11 delas partem de estimativa da equipe, não de
medição (ver anexo). A mais sensível é a taxa de avaria de 2%, que sustenta sozinha o envelope
econômico do projeto: é faixa de mercado para longa distância aplicada a um trecho curto. Enquanto
o distribuidor não confirmar esse número, a viabilidade permanece plausível e não demonstrada.

## 5. Fontes consultadas

- [ASTM D5276 — Drop Test of Loaded Containers by Free Fall](https://store.astm.org/d5276-98.html)
- [ISO 12048:1994 — Compression and stacking tests](https://www.iso.org/standard/20810.html)
- [ABNT NBR 8252 — palete PBR 1200 × 1000 mm](https://www.abpaineiras.com.br/blog/artigos/medida-palete-pbr-guia-completo)
- [ABNT NBR 15097 — aparelhos sanitários de material cerâmico](https://abceram.org.br/normas-tecnicas/)
- [NR-17 — ergonomia e levantamento manual de cargas](https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/nr-11-atualizada-2016.pdf)
- [Fragilidade de produto e faixas de g-factor em projeto de cushioning](https://larsonpkg.com/articles/foam-packaging-cushioning-design/)
- [Massa de kit de bacia com caixa acoplada](https://www.obramax.com.br/kit-bacia-com-caixa-acoplada-art-saida-vertical-3-6-litros-branca-89353691/p)

---

# Anexo — Linhas de base levantadas (15/09/2026)

Pesquisa em fonte para as metas que estavam sem valor. O que não existe publicado foi estimado
a partir do que o mercado indica, com o critério de estimativa declarado. Toda meta absoluta
carrega a classificação do seu valor de partida: onde a partida é estimativa, a meta é
provisória e a medição continua no plano de coleta.

## Valores de fonte

| Dado | Valor | Fonte |
|---|---|---|
| Massa do kit bacia com caixa acoplada | ≈ 34 kg | Catálogo de varejista, modelo 3/6 L |
| Dimensões da peça | 610 × 360 × 370 mm | Mesmo catálogo |
| Massa de referência para levantamento manual | 25 kg | ISO 11228-1; prática adota 20 a 25 kg |
| Fragilidade de cerâmica e vidro | 40 a 60 g (classe delicada) | Prática de projeto de cushioning; método ASTM D3332 |
| Perda de compressão do papelão com umidade | ≈ 50% de 50% para 90% de UR | Literatura de embalagem de transporte |
| Taxa de avaria de louça sanitária em transporte | 3 a 5% em longa distância; abaixo de 0,5% com embalagem de primeira linha | Fontes do setor de sanitary ware |
| Palete PBR | 1200 × 1000 mm | ABNT NBR 8252 |
| Caixa de papelão de parede dupla, porte equivalente | R$ 21 no varejo | Fornecedor nacional |
| Kit bacia com caixa acoplada no varejo | R$ 800 a R$ 1.600 | Grandes varejistas |

## Valores calculados

| Dado | Valor | Como |
|---|---|---|
| Volume por peça acondicionada | 0,107 m³ | Envoltório de 650 × 400 × 410 mm sobre a peça de catálogo |
| Aproveitamento do palete | 65%, 3 peças por camada | Base de 650 × 400 mm no PBR 1200 × 1000 mm |
| Alvo de base para 4 peças por camada | 600 × 500 mm, 100% da área | Arranjo 2 × 2 no mesmo palete |
| Força de levantamento manual integral | 334 N (34 kgf) | Massa de catálogo |
| Força com meio auxiliar em piso irregular | 17 a 33 N | Resistência ao rolamento de 5 a 10% do peso |
| Ângulo de tombamento | ≈ 47° | Geometria da caixa, centro de massa a 45% da altura |
| Altura de queda de ensaio | ≈ 300 mm | Faixa de massa do conjunto nas tabelas de queda por peso |

## O envelope econômico

Esta é a conta que faltava para o projeto deixar de ser exercício metodológico:

| Parcela | Valor por peça | Base |
|---|---|---|
| Embalagem de papelão | R$ 15,00 | R$ 21 no varejo, ajustado para compra industrial |
| Perda por avaria | R$ 10,00 | 2% de avaria sobre louça a R$ 500 no atacado |
| Rateio da reentrega | R$ 2,40 | R$ 120 por ocorrência, na mesma taxa de 2% |
| **Custo logístico atual** | **R$ 27,40** | |

O dispositivo retornável não compete com os R$ 15 da caixa: compete com os **R$ 27,40** que a
operação já gasta por peça. Isso abre o envelope de viabilidade:

- dispositivo de R$ 300 com 20 ciclos → R$ 15,00 por ciclo;
- dispositivo de R$ 300 com 30 ciclos → R$ 10,00 por ciclo;
- dispositivo de R$ 500 com 30 ciclos → R$ 16,67 por ciclo.

Ou seja, há folga para um dispositivo de **R$ 300 a R$ 500** desde que alcance **20 a 30 ciclos**
e reduza a avaria — e é exatamente por isso que o RP14 (ciclos de reuso) e o RP10 (custo por
ciclo) precisam ser lidos juntos. A taxa de avaria de 2% é o ponto mais frágil da conta: é
estimativa ancorada em faixa de mercado para longa distância, e o trecho distribuidor–obra é
curto, com menos transbordos e um último trecho mais bruto. Confirmar essa taxa com o
distribuidor muda o resultado mais do que qualquer outro dado do plano de coleta.

## O que segue sem valor

Dois itens continuam sem nenhuma partida, e não foi possível estimá-los com honestidade:

1. **Tempo atual de conferência por peça no recebimento** — depende da prática da obra, não há
   referência publicada aplicável.
2. **Pressão de contato e área de apoio na embalagem atual** — depende da geometria do berço,
   que varia por fabricante.
