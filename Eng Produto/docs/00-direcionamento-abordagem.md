# Direcionamento de Abordagem — Como esta central deve ser usada e como as respostas devem ser construídas

> Este é o documento-mãe da central. Ele define **a lente** com que todo o conteúdo é escrito e com que qualquer resposta de prova, exercício ou trabalho deve ser construída. Leia antes de qualquer semana.

---

## 1. A persona de estudo: três chapéus, um só raciocínio

A disciplina de Engenharia de Produto da UnB (Profa. Andréa Cristina dos Santos) não é uma disciplina de "design de produto" nem de "gestão de projetos". Ela senta exatamente na interseção de três campos, e as questões de prova cobram a capacidade de transitar entre eles. Toda resposta deve ser produzida vestindo os três chapéus simultaneamente:

### Chapéu 1 — Especialista em Engenharia de Produto (a dimensão técnica)

O que este chapéu vê: o produto como um **sistema técnico** que transforma entradas em saídas (fluxos de energia, material e sinal), decomposto em funções, subsistemas e componentes, submetido a requisitos mensuráveis e a compromissos (*trade-offs*) físicos.

Vocabulário e ferramentas: função global e funções elementares, estrutura funcional, princípios de solução, matriz morfológica, arquitetura modular/integral, seleção de materiais (diagramas de Ashby), DfX, FMEA, TRL, tolerâncias, ensaios e simulações.

Referências-âncora: **Back et al. (2008)**, **Pahl & Beitz**, **Ashby**, **Boothroyd & Dewhurst (DFMA)**, **Altshuller (TRIZ)**.

Pergunta que este chapéu sempre faz: *"Qual é a função? Qual o princípio físico que a realiza? Qual o custo e o risco técnico dessa escolha?"*

### Chapéu 2 — Especialista em PDP — Processo de Desenvolvimento de Produtos (a dimensão de processo)

O que este chapéu vê: o desenvolvimento como um **processo de negócio** estruturado em macrofases, fases, atividades, entregáveis e **gates** de decisão, com gestão explícita de incerteza, requisitos e mudanças.

Vocabulário e ferramentas: macrofases (pré-desenvolvimento, desenvolvimento, pós-desenvolvimento), modelos de referência, *stage-gates*, engenharia simultânea, curva de custo comprometido vs. incorrido, custo de mudança, gestão de mudanças de engenharia, modelos de maturidade.

Referências-âncora: **Rozenfeld et al. (2006)** — o Modelo Unificado é a espinha dorsal da disciplina —, **Back et al. (2008)**, **Cooper (Stage-Gate)**, **PMBOK**.

Pergunta que este chapéu sempre faz: *"Em que fase estamos? Que informação já deveria estar consolidada aqui? Que decisão o gate desta fase exige e o que ela compromete para o futuro?"*

### Chapéu 3 — Especialista em Gestão de Produto (a dimensão de negócio e valor)

O que este chapéu vê: o produto como **portfólio, proposta de valor e ciclo de vida comercial** — um investimento que precisa se pagar, alinhado à estratégia da empresa e à sua capacidade tecnológica.

Vocabulário e ferramentas: análise de portfólio, funil de projetos, *roadmap* tecnológico, ciclo de vida comercial (Kotler), PSS/servitização/produtização, proposta de valor, *Business Model Canvas*, propriedade industrial, inteligência competitiva, indicadores de inovação (Manual de Oslo), MVP e prontidão de mercado.

Referências-âncora: **Rozenfeld et al. (2006) cap. 4**, **Back et al. (2008) cap. 4**, **Manual de Oslo (OCDE, 2018)**, **Kotler**, **Osterwalder**, **Cooper**, **Phaal/Farrukh/Probert (roadmapping)**.

Pergunta que este chapéu sempre faz: *"Que valor isso entrega, para qual stakeholder, e como esse valor se sustenta ao longo do ciclo de vida?"*

---

## 2. Por que os três chapéus juntos: a regra de ouro das respostas

A maioria das perdas de nota nesta disciplina vem de responder com **um chapéu só**. Os enunciados são deliberadamente construídos para exigir a travessia entre eles. Veja o padrão nos casos reais do cronograma:

| Caso do cronograma | Chapéu que o aluno costuma usar | Chapéus que a resposta completa exige |
|---|---|---|
| Drone AgTech pulverizador (TRL) | Técnico: "atingiu TRL 7" | Técnico (TRL 7, não 9) **+** Gestão de Produto (faltou prontidão de mercado: homologação ANATEL, peças de reposição, modelo de cobrança) |
| Coletor de perfurocortantes (modular vs. integral) | Técnico: "modular é melhor" | Técnico (diretrizes de modularização) **+** PDP (decisão tomada no projeto conceitual) **+** Negócio (variantes, upgrade, cadeia de suprimentos, fim de vida) |
| Lavadora para microapartamentos | Técnico: modelar em CAD | PDP (voltar ao projeto informacional/conceitual — abstrair o problema em função, não em forma) **+** Técnico (síntese funcional, morfológica, TRIZ) |
| Cápsula de transporte biológico (fornecedores) | Técnico: especificar o componente | Técnico (grau de definição da especificação) **+** Negócio (tipo de relacionamento: catálogo, *black box*, *build-to-print*) |
| Havaianas / Alpargatas | Negócio: marketing e marca | Negócio (ciclo de vida, linhas, público) **+** PDP (tipos de projeto: radical → plataforma → incrementais/derivados) **+** Técnico (desenvolvimento tecnológico da vulcanização) |

**Regra de ouro:** toda resposta longa deve conter, explicitamente, (a) *o conceito com definição precisa e fonte*, (b) *o "onde no PDP" isso acontece*, e (c) *a consequência para o negócio/ciclo de vida*.

---

## 3. Padrão de resposta que a banca premia (calibrado pelas correções reais)

As duas provas corrigidas disponíveis no projeto mostram exatamente o que reprova:

- Uma resposta **correta em essência** sobre PDP recebeu pedido de mais precisão ("ler pág. 7") — faltava enumerar explicitamente as dimensões do PDP.
- Uma resposta sobre custo comprometido vs. incorrido foi marcada como **"confusa"** — a ideia estava lá, mas a redação misturava as duas curvas.
- Uma resposta sobre projeto vs. processo foi marcada com **X** — o aluno apoiou a distinção em "cadeia de valor vs. fase", quando o eixo correto é **natureza temporal e de repetição**.

Daí o template abaixo. Use-o mecanicamente sob pressão de tempo:

```
[1] DEFINIÇÃO CANÔNICA (1 frase, com autor/fonte)
    "Segundo Rozenfeld et al. (2006), PDP é o processo de negócio que..."

[2] DECOMPOSIÇÃO NUMERADA (o que a banca conta como pontos)
    "Ele compreende: (i) ...; (ii) ...; (iii) ..."

[3] LOCALIZAÇÃO NO PDP
    "Essa decisão pertence à fase de projeto conceitual, cujo gate exige..."

[4] EXEMPLO CONCRETO (de preferência industrial brasileiro ou o do enunciado)
    "Ex.: no caso do coletor de perfurocortantes, ..."

[5] CONSEQUÊNCIA / TRADE-OFF
    "Como consequência, ... em contrapartida, ..."
```

**Cinco hábitos que valem nota:**

1. **Sempre cite o autor** quando o conceito tem dono: Rozenfeld (PDP/Modelo Unificado), Back (projeto integrado/síntese funcional), PMBOK (projeto), Slack (valor), Baines (PSS), Smith 1991 (70% da influência no custo), Huthwaite & Schneberger 1992 (custo de mudança 10-100-1.000-10.000), Altshuller (TRIZ), Ashby (materiais), Erixon (MIM/MFD), Miles (análise de valor), Kano, Osterwalder (Canvas), OCDE (Oslo).
2. **Sempre traga o número** quando ele existe: 80–90% do custo comprometido até o fim do conceitual; ~70% da influência das decisões de projeto; escala 10→100→1.000→10.000 do custo de mudança; TRL 1–9; RPN = S×O×D.
3. **Nunca use "projeto" sem desambiguar**: diga *project* (empreendimento) ou *design* (concepção). A disciplina usa "Projeto" no sentido de **design**.
4. **Responda "onde no processo"** mesmo quando a pergunta não pede. É barato e é exatamente o que diferencia a resposta de nota máxima.
5. **Feche com o trade-off.** Engenharia de produto é a disciplina dos compromissos; uma resposta sem trade-off parece uma resposta decorada.

---

## 4. Os cinco eixos conceituais que atravessam o semestre inteiro

Se você dominar estes cinco, responde qualquer questão da disciplina, inclusive as inéditas:

### Eixo A — Decide-se cedo, paga-se tarde
Custo **comprometido** sobe rápido no início (80–90% até o fim do conceitual); custo **incorrido** sobe devagar e acelera na produção. A distância entre as curvas é a **margem de redução de custo**, e ela fecha com o tempo. Corolário: o custo de mudar cresce exponencialmente (10→100→1.000→10.000). Consequência prática: todo esforço de método (QFD, síntese funcional, DfX, FMEA, prototipagem, SBCE) existe para **antecipar informação para o momento em que ela é barata**.

### Eixo B — Abstração antes da forma
O erro recorrente dos casos é pular para a geometria/CAD antes de definir a **função**. Sequência canônica: necessidade → requisito do cliente → requisito de projeto (mensurável) → **função** → princípio de solução → concepção → forma. O caso da lavadora sem água é a encarnação desse eixo.

### Eixo C — Processo vs. projeto, produto vs. serviço, design vs. project
A disciplina é obsessiva com pares terminológicos. Domine: processo (contínuo/repetitivo) vs. projeto (temporário/único); *design* vs. *project*; bem vs. serviço e o espectro PSS; servitização vs. produtização; necessidade vs. requisito; custo comprometido vs. incorrido; MVP vs. protótipo; homologação de produto vs. de processo; modular vs. integral; verificação vs. validação.

### Eixo D — Valor é multi-stakeholder e intangível
Valor (Slack, 1998) = importância que o cliente atribui, função de utilidade × relevância da necessidade × disposição a pagar. Mas: quem percebe valor é **todo stakeholder**, não só o consumidor final; e o valor está **também nos intangíveis** (informação, serviço, relacionamento, marca, disponibilidade). Isso conecta direto a PSS, análise de valor (valor = função/custo) e proposta de valor (Canvas).

### Eixo E — Todo o ciclo de vida é responsabilidade do projetista
A responsabilidade não termina no lançamento: vai até descontinuidade, descarte e reciclagem. Isso justifica DfX (DfA, DfM, DfS, DfD, DfE), eco-design, PLM, planejamento de fim de vida e o pós-desenvolvimento do Modelo Unificado.

---

## 5. Fontes confiáveis: hierarquia de confiança

Use nesta ordem. Em prova, **cite preferencialmente o nível 1**, porque é o que a banca reconhece.

### Nível 1 — Bibliografia oficial da disciplina (canônica, cite sempre)
| Obra | Papel na disciplina |
|---|---|
| **ROZENFELD, H. et al. (2006).** *Gestão de Desenvolvimento de Produtos: uma referência para a melhoria do processo.* São Paulo: Saraiva. | Espinha dorsal. Modelo Unificado do PDP, macrofases, portfólio, todas as fases. |
| **BACK, N.; OGLIARI, A.; DIAS, A.; SILVA, J. C. (2008).** *Projeto Integrado de Produtos: planejamento, concepção e modelagem.* Barueri: Manole. | Métodos de projeto: sistemas técnicos, síntese funcional, engenharia reversa, projeto preliminar, DfX. |
| **WOOD, K. L. et al. (2023/2025).** *Design Innovation* (metodologia DIM). | Ferramentas modernas: Kano, benchmarking, casa da qualidade, morfológica, canvas de prototipagem, modelos físicos. |
| **OCDE/Eurostat. Manual de Oslo (2018, 4ª ed.).** | Tipologia e medição da inovação. |
| **PMI. Guia PMBOK.** | Definição de projeto, escopo do produto vs. do projeto. |
| **KOTLER, P.** *Administração/Introdução ao Marketing.* | Ciclo de vida comercial do produto. |
| **Slides das Aulas 01–24 (Profa. Andréa C. dos Santos)** e Biblioteca do Teams da disciplina. | Fonte de autoridade final: em conflito, o slide manda. |

### Nível 2 — Clássicos internacionais reconhecidos (excelentes para aprofundar e enriquecer respostas)
- **ULRICH, K.; EPPINGER, S.** *Product Design and Development* — arquitetura do produto, tipos de modularidade, protótipos, *teardown*.
- **PAHL, G.; BEITZ, W.** *Engineering Design: A Systematic Approach* — base alemã (VDI 2221) da síntese funcional.
- **COOPER, R. G.** *Winning at New Products* — Stage-Gate, gestão de portfólio, Agile-Stage-Gate.
- **ASHBY, M.** *Materials Selection in Mechanical Design* — mapas de propriedades e índices de material.
- **BOOTHROYD, G.; DEWHURST, P.; KNIGHT, W.** *Product Design for Manufacture and Assembly* — DFMA.
- **ALTSHULLER, G.** *The Innovation Algorithm / Creativity as an Exact Science* — TRIZ.
- **ERIXON, G.** *Modular Function Deployment* — Matriz Indicadora de Módulos (MIM).
- **EPPINGER, S.; BROWNING, T.** *Design Structure Matrix Methods and Applications* — DSM.
- **MILES, L. D.** *Techniques of Value Analysis and Engineering* — engenharia/análise de valor.
- **OSTERWALDER, A.; PIGNEUR, Y.** *Business Model Generation* / *Value Proposition Design* — Canvas.
- **RIES, E.** *The Lean Startup* — MVP.
- **WARD, A.; SOBEK, D.** *Lean Product and Process Development* — SBCE, engenheiro-chefe.
- **STARK, J.** *Product Lifecycle Management* — PLM.
- **BENYUS, J.** *Biomimicry* — sistemas bioinspirados.

### Nível 3 — Normas, órgãos e bases oficiais (para dados, definições formais e patentes)
- **ISO 16290** e escala **TRL da NASA/ESA** — níveis de prontidão tecnológica.
- **AIAG-VDA FMEA Handbook (2019)** e **IEC 60812** — FMEA e priorização de ações.
- **ISO 9001 / ISO 14006 (eco-design) / ISO 14040-44 (ACV)**.
- **VDI 2221 / VDI 2206** — metodologia sistemática de projeto e mecatrônica.
- **INPI** (`inpi.gov.br`), **Espacenet** (EPO), **Patentscope** (WIPO), **Google Patents**, **Lens.org** — busca de anterioridade.
- **Lei 9.279/1996 (LPI)** — propriedade industrial no Brasil.
- **CDT/UnB — NUPITEC** — material institucional de patentes da própria UnB.
- **ANATEL / ANVISA / INMETRO** — homologação e certificação (aparecem nos casos do drone e dos equipamentos médicos).

### Nível 4 — Portais acadêmicos e videoteca (aprofundamento e revisão ativa)
- **Portal de Periódicos CAPES**, **SciELO**, **Scopus/Web of Science** — artigos de aplicação (útil para os casos de Diagrama de Mudge e análise de valor).
- **Revista Produção (ABEPRO)**, **Product: Management & Development (IGDP)**, **Journal of Engineering Design**, **Research-Technology Management** — literatura brasileira e internacional de PDP.
- **AskNature.org** — repositório de biomimética.
- **OpenSourceTRIZ.com**, **TRIZ40.com** — matriz de contradições e 40 princípios.
- **Videoteca curada do plano de aula** → ver [`plano-de-aula-e-midias.md`](plano-de-aula-e-midias.md).

> **Higiene de fontes:** para prova, cite nível 1. Use nível 2 e 3 como *reforço* ("Ulrich e Eppinger classificam ainda em..."), nunca como substituto. Evite blogs e resumos de terceiros como fonte de definição — sirva-se deles apenas para exemplos.

---

## 6. Rotina semanal sugerida (para os "testinhos")

| Momento | Ação | Tempo |
|---|---|---|
| Antes da aula | Ler a **fonte primária** indicada no cronograma (capítulo/páginas exatas de Rozenfeld/Back/Wood). A disciplina é de **aula invertida** — o plano de aula pede leitura prévia explícita. | 40–60 min |
| Depois da aula | Abrir `docs/semanas/semana-XX.md`, conferir se cada conceito da aula tem definição precisa e completar com o que o slide trouxe de diferente. | 20 min |
| Meio da semana | Responder as **questões oficiais da semana** por escrito, no template da seção 3, sem consultar. Depois comparar. | 40 min |
| Véspera do teste | Reler apenas: os cinco eixos (seção 4), as definições-armadilha (`glossario.md`) e a tabela comparativa dos modelos (`mapa-modelos-pdp.md`). | 25 min |
| Reforço | Assistir 1–2 vídeos da videoteca do tema — a professora cobra os vídeos nas questões (EMBRAER/WEG/Origem, roadmapping, portfólio). | 20 min |

**Escrita à mão importa.** As provas são manuscritas e uma das correções foi "confusa" — não por conteúdo, mas por organização. Treine responder com marcadores numerados, não em bloco corrido.

---

## 7. Mapa de navegação da central

- [`mapa-modelos-pdp.md`](mapa-modelos-pdp.md) — comparação Rozenfeld × Back × Wood × Cooper/Ulrich-Eppinger. **É o exercício mais recorrente da disciplina** (aparece formalmente na Semana 2, questão 4).
- [`glossario.md`](glossario.md) — siglas e, principalmente, os **pares terminológicos-armadilha**.
- [`fontes-e-referencias.md`](fontes-e-referencias.md) — bibliografia completa com o que buscar em cada obra.
- [`plano-de-aula-e-midias.md`](plano-de-aula-e-midias.md) — videoteca e links do plano de aula, organizados por tema.
- [`temas/`](temas/) — quatro temas transversais que o plano de aula acrescenta ao cronograma: Canvas, propriedade industrial, PLM/abordagens modernas e criatividade (biomimética, engenharia reversa, testes e simulações).
- [`semanas/`](semanas/) — o conteúdo-base semana a semana, alinhado ao cronograma oficial.
