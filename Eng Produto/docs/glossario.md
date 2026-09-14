# Glossário e Pares Terminológicos-Armadilha

> Duas partes: (1) os **pares que a banca usa para reprovar** — leia sempre antes do teste; (2) o glossário alfabético de siglas e termos.

---

## PARTE 1 — Pares terminológicos-armadilha

Estes são os pares em que respostas "quase certas" viram X. Cada um tem o **eixo de distinção** que deve aparecer explicitamente na resposta.

### 1. Processo × Projeto → eixo: **natureza temporal e de repetição**
| Processo (de negócio) | Projeto |
|---|---|
| Contínuo e **repetitivo** | **Temporário** e único |
| Objetivos atualizados periodicamente | Objetivos únicos, não recorrentes |
| Transforma entradas em saídas de forma recorrente | Tem início e fim determinados; resultado diferente de tudo que já foi feito |
| Ex.: o **PDP institucionalizado** na empresa | Ex.: desenvolver **um** produto específico |

PMBOK: projeto é *"um esforço temporário com a finalidade de criar um produto/serviço único"*.
❌ **Erro fatal já cometido:** dizer que projeto é "a cadeia de valor" e processo é "a fase dentro do projeto". O eixo **não** é abrangência — é tempo/repetição.

### 2. Design × Project → eixo: **concepção vs. gerenciamento**
- **Design** = concepção/criação da solução técnica (o "o quê" e o "como" do produto). É o sentido usado na disciplina quando se diz "Projeto de Produtos".
- **Project** = gerenciamento do empreendimento temporário (cronograma, recursos, prazos, escopo).
- Coexistem: atividades de *design* são geridas dentro de um *project*.

### 3. Custo comprometido × Custo incorrido → eixo: **decidir vs. desembolsar**
| Custo comprometido | Custo incorrido |
|---|---|
| Custo **determinado** pelas decisões de projeto | Custo **efetivamente gasto** (desembolso de caixa) |
| Sobe **rápido no início**; 80–90% já ao fim do projeto conceitual | Sobe **devagar** no desenvolvimento e **acelera na produção** |
| Decide-se cedo | Paga-se tarde |

A **distância entre as curvas = margem para redução de custo**, que encolhe conforme o desenvolvimento avança.
❌ **Erro fatal já cometido:** definir custo incorrido como "custo que foge do planejado". Não é desvio de orçamento — é desembolso real.

### 4. Necessidade × Requisito do cliente × Requisito de projeto × Especificação-meta → eixo: **grau de formalização e mensurabilidade**
1. **Necessidade**: expressa na linguagem do cliente, subjetiva ("não quero que quebre fácil").
2. **Requisito do cliente**: necessidade traduzida em linguagem de projeto, ainda qualitativa ("ter peças resistentes").
3. **Requisito de projeto**: grandeza técnica associada ("resistência ao impacto").
4. **Especificação-meta**: requisito + **unidade + valor-meta + sensor/forma de avaliação + saídas indesejáveis** ("tenacidade ≥ 580 MPa, medida por ensaio de tração").

### 5. Servitização × Produtização → eixo: **direção do movimento no espectro PSS**
- **Servitização**: produto → serviço (fabricante de elevador vende contrato de disponibilidade/manutenção preditiva). Proposta de valor: *uptime*, risco operacional transferido.
- **Produtização**: serviço → produto (consultoria contábil vira SaaS padronizado). Proposta de valor: escala, custo previsível, acesso imediato.
- Espectro PSS (Baines et al., 2007): Produto puro → Produto e Serviço → Serviço e Produto → Sistema Produto-Serviço.

### 6. MVP × Protótipo → eixo: **o que se quer aprender e para quem**
- **Protótipo**: artefato de **engenharia** para reduzir incerteza técnica (validar função, forma, geometria, resistência). Pode ser físico ou analítico, focado ou abrangente. Público interno.
- **MVP** (*Minimum Viable Product*, Ries): versão **mínima comercializável** entregue a clientes reais para validar hipóteses de **valor e negócio** (há demanda? paga-se por isso?). Público externo.
- **Produto**: solução completa, homologada, certificada e sustentada por cadeia de suprimentos e assistência técnica.
- Relação: protótipo valida *viabilidade técnica*; MVP valida *desejabilidade e viabilidade de negócio*; produto exige ambas + prontidão industrial e regulatória.

### 7. Homologação de produto × Homologação de processo → eixo: **o que está sendo aprovado**
- **Homologação do produto**: o produto atende às especificações-meta, requisitos legais e normas (ensaios, certificação — INMETRO/ANVISA/ANATEL). Ocorre no fim do projeto detalhado.
- **Homologação do processo**: o **processo produtivo** é capaz de fabricar repetidamente aquele produto conforme especificado (capabilidade, lote piloto, aprovação de ferramental). Ocorre na preparação da produção.
- Um produto aprovado com processo não homologado gera refugo e variabilidade em série; o inverso não faz sentido.

### 8. Verificação × Validação → eixo: **conformidade vs. adequação ao uso**
- **Verificação**: "construímos o produto **certo conforme a especificação**?" (contra requisitos).
- **Validação**: "construímos **o produto certo** para o usuário?" (contra necessidades reais, em uso).

### 9. Arquitetura Modular × Integral → eixo: **mapeamento função↔componente e interfaces**
| Modular | Integral |
|---|---|
| Relação **um-para-um** entre função e componente/módulo | Uma função distribuída em vários componentes ou um componente cumprindo várias funções |
| Interfaces **desacopladas e padronizadas** | Interfaces acopladas, geometria compartilhada |
| Benefícios: variedade, plataformas, upgrade, manutenção/reparo, reuso, terceirização, reciclagem, teste separado | Benefícios: desempenho global otimizado, menos peças, menor peso/volume/custo unitário, vedação e integração melhores, difícil de copiar |

### 10. Escopo do produto × Escopo do projeto → eixo: **o quê vs. o trabalho**
- **Escopo do produto**: características e funções que o produto terá (requisitos do produto).
- **Escopo do projeto**: o **trabalho** necessário para entregar aquele produto (atividades, entregáveis, exclusões).

### 11. Inovação radical × Incremental (e tipos de projeto) → eixo: **grau de mudança**
Tipos de projeto de desenvolvimento (por grau de mudança em relação a projetos anteriores):
1. **Radicais / breakthrough** — ruptura tecnológica ou conceitual, "novo para o mundo".
2. **Plataforma / próxima geração** — criam base para uma **família** de produtos futuros.
3. **Incrementais / derivados** — melhorias sobre produto ou plataforma existente.
4. **Follow-source** *(categoria adicional no contexto brasileiro)* — projetos vindos da matriz ou de clientes, adaptados à realidade local ("tropicalização").
5. **P&D avançado** — não geram produto, geram **conhecimento/tecnologia** para projetos futuros.

### 12. TRL × MRL × CRL → eixo: **prontidão de quê**
- **TRL** (*Technology Readiness Level*, 1–9): maturidade da **tecnologia**.
- **MRL** (*Manufacturing Readiness Level*): maturidade da **capacidade de fabricar**.
- **CRL** (*Commercial Readiness Level*): maturidade **comercial/mercadológica** (modelo de negócio, canal, regulação, pós-venda).
- ❗ O caso do drone AgTech é exatamente sobre confundir TRL alto com prontidão de mercado.

### 13. Bem de capital × Bem de consumo → eixo: **função econômica**
- **Bem de capital**: usado para **produzir outros bens/serviços**; ativo fixo, vida útil longa (torno CNC, robô industrial, equipamento de hemodiálise em clínica).
- **Bem de consumo**: consumido pelo usuário final; **durável** (automóvel, eletrodoméstico) ou **não durável**.

### 14. Função × Princípio de solução × Componente → eixo: **nível de abstração**
- **Função**: o que deve ser feito, expresso como **verbo + substantivo** e neutro quanto à solução ("prender na panturrilha", "tensionar musculatura").
- **Princípio de solução**: o efeito físico/técnico que realiza a função ("velcro", "fita com catraca", "botão de pressão", "elástico").
- **Componente**: a peça concreta especificada.
- ❗ Escrever a função já com a solução embutida ("usar velcro") é o erro clássico da síntese funcional.

---

## PARTE 2 — Glossário alfabético

**ACV (Análise de Ciclo de Vida / LCA)** — avaliação dos impactos ambientais do produto do berço ao túmulo (ISO 14040-44). Base do eco-design e do DfE.

**AIAG-VDA** — manual conjunto (2019) que padronizou o FMEA na indústria automotiva, substituindo o RPN por **AP (Action Priority)**.

**ARIZ** — algoritmo estruturado de resolução de problemas inventivos da TRIZ, para problemas que a matriz de contradições não resolve.

**Ashby (diagramas / mapas de propriedades)** — gráficos log-log que cruzam duas propriedades de material (ex.: módulo E vs. densidade ρ), permitindo triagem por **índices de material** (ex.: E^{1/2}/ρ para rigidez mínima em flexão com peso mínimo). Vantagem sobre tabelas: visualizam simultaneamente milhares de materiais e classes, mostram trade-offs e permitem traçar linhas de índice para selecionar a fronteira ótima.

**Atributos do produto** — características do produto associadas a valor percebido e a custos do ciclo de vida (funcionalidade, ergonomia, estética, confiabilidade, manutenibilidade, sustentabilidade, custo). Organizados em **matriz de atributos** no projeto informacional.

**Benchmarking** — comparação sistemática do produto/processo com concorrentes ou referências de excelência. No QFD, alimenta as colunas de avaliação competitiva e as metas.

**BOM (Bill of Materials)** — lista estruturada de materiais e componentes do produto.

**Business Model Canvas** — 9 blocos (segmentos de clientes, proposta de valor, canais, relacionamento, fontes de receita, recursos-chave, atividades-chave, parcerias-chave, estrutura de custos). Osterwalder & Pigneur.

**Canvas da Proposta de Valor** — dois lados: **perfil do cliente** (tarefas/*jobs*, dores, ganhos) e **mapa de valor** (produtos e serviços, aliviadores de dor, criadores de ganho). O encaixe (*fit*) entre eles é a proposta de valor.

**Casa da Qualidade** — primeira matriz do QFD. Elementos: *o quê* (requisitos dos clientes + importância), *como* (requisitos de projeto), matriz de relacionamento, **telhado** (correlações entre os "comos"), benchmarking competitivo, e metas/especificações na base.

**Ciclo de vida do produto (de engenharia)** — planejamento → desenvolvimento → produção → uso/comercialização → descontinuidade/descarte. A responsabilidade do projetista atravessa todo ele.

**Ciclo de vida comercial (Kotler)** — introdução → crescimento → maturidade → declínio, medido em vendas/receita ao longo do tempo.

**Concepção do produto** — resultado do projeto conceitual: descrição da solução em nível de princípios e arquitetura (esquemas, croquis, modelos), suficiente para avaliar viabilidade, mas antes do dimensionamento e detalhamento.

**Custo de mudança** — cresce exponencialmente ao longo do desenvolvimento (Huthwaite e Schneberger, 1992): **10 (projeto) → 100 (protótipo) → 1.000 (produção) → 10.000 (após lançamento)**.

**DFMA** — *Design for Manufacture and Assembly* (Boothroyd & Dewhurst): reduzir número de peças, facilitar inserção e fixação, projetar para montagem em um só eixo, eliminar ajustes.

**DfX** — *Design for X*, família de abordagens que incorporam preocupações do ciclo de vida no projeto: **DfM** (manufatura), **DfA** (montagem), **DfS** (serviceabilidade ou sustentabilidade), **DfR** (confiabilidade), **DfD** (desmontagem), **DfE** (ambiente), **DfC** (custo), **DfT** (testabilidade), **DfL** (logística), **DfAM** (manufatura aditiva).

**Diagrama de Kano** — classifica requisitos em **obrigatórios** (*must-be*: ausência causa insatisfação, presença não encanta), **unidimensionais/de desempenho** (satisfação proporcional), **atrativos** (*delighters*: encantam quando presentes, não frustram quando ausentes), **indiferentes** e **reversos**. Requisitos migram de atrativo → desempenho → obrigatório com o tempo.

**Diagrama de Mudge** — método de **comparação aos pares** para hierarquizar requisitos/funções, atribuindo pesos numéricos (ex.: 5/3/1) a cada comparação e somando para obter a importância relativa em %.

**DSM (Design Structure Matrix)** — matriz quadrada componente×componente (ou tarefa×tarefa) que registra interações/dependências. Por **clusterização**, revela agrupamentos naturais = candidatos a **módulos**. Também usada para sequenciar atividades e identificar iterações.

**Engenharia de Valor / Análise de Valor** — método de Miles: **Valor = Função / Custo**. Levanta as funções do produto, distribui os custos por função e calcula o índice de valor, revelando funções que consomem custo desproporcional ao valor entregue. "Engenharia de valor" = aplicada durante o projeto; "análise de valor" = aplicada em produto existente.

**Engenharia reversa** — desmontagem e análise sistemática de um produto existente (*teardown*) para extrair funções, princípios de solução, materiais, processos e custos. Insumo para síntese funcional e benchmarking. Ferramentas: escaneamento 3D, CMM, análise de custo por peça.

**Engenharia simultânea** — atividades de desenvolvimento executadas em paralelo por equipes multifuncionais, com relação cliente-fornecedor interna e uso de DFMA/QFD, para reduzir *time-to-market* e antecipar requisitos de manufatura.

**Especificação-meta** — ver par nº 4 acima.

**Estrutura funcional** — desdobramento da **função global** (caixa-preta com fluxos de entrada e saída de **energia, material e sinal**) em funções parciais e **elementares**, conectadas pelos fluxos. Podem existir estruturas funcionais alternativas, entre as quais se seleciona uma.

**FMEA** — *Failure Mode and Effects Analysis*. Identifica modos de falha, efeitos e causas, avaliando **Severidade (S)**, **Ocorrência (O)** e **Detecção (D)**, com **RPN = S × O × D** (ou AP no padrão AIAG-VDA 2019). Variantes: **DFMEA** (produto/projeto) e **PFMEA** (processo).

**Funil de desenvolvimento** — representação da seleção progressiva de ideias/projetos ao longo do pré-desenvolvimento; muitas entradas, poucas saídas, com gates de triagem.

**Gate (stage-gate)** — ponto de decisão formal ao fim de uma fase, com critérios definidos e quatro saídas possíveis: seguir, seguir com condições, reciclar (refazer) ou cancelar.

**Gestão de mudanças de engenharia (ECM)** — processo de apoio que controla, avalia impacto e libera alterações de engenharia após congelamentos.

**Gestão do conhecimento** — captura, organização e reuso de conhecimento gerado nos projetos (lições aprendidas, catálogos de soluções, padronização), para não redescobrir o já sabido.

**Inteligência competitiva** — coleta e análise sistemática de informações sobre mercado, concorrentes e tecnologias para apoiar decisões estratégicas de produto.

**Manual de Oslo (OCDE, 2018 — 4ª ed.)** — na 4ª edição, a inovação é classificada em **dois tipos**: **inovação de produto** (bens e serviços) e **inovação de processo de negócio** (que absorve os antigos tipos processo, organizacional e marketing, distribuída em 6 funções: produção; distribuição e logística; marketing e vendas; sistemas de informação e comunicação; administração e gestão; desenvolvimento de produtos e processos). A 3ª edição (2005) usava **quatro** tipos: produto, processo, organizacional e marketing. Grau de novidade: **nova para a empresa / nova para o mercado / nova para o mundo**.

**Matriz morfológica (Zwicky)** — tabela cujas **linhas são as funções elementares** e cujas colunas trazem **princípios de solução alternativos** para cada função. Combinando um princípio por linha, geram-se concepções alternativas. Requisitos de bom preenchimento: uma função por linha, no mesmo nível hierárquico; princípios em nível comparável de abstração; soluções fisicamente realizáveis e representadas (esquema/imagem); variedade suficiente; verificação de compatibilidade entre as combinações escolhidas.

**MIM — Matriz Indicadora de Módulos** (Erixon, *Modular Function Deployment*) — cruza funções/soluções técnicas com **direcionadores de módulo** (*module drivers*), agrupados em: desenvolvimento e projeto (*carry-over*, *technology push*, mudanças planejadas de projeto), variância (especificação diferente/variantes, estilo), fabricação (unidade comum, processo/organização), qualidade (teste separado), compras (*black-box engineering*), pós-venda (serviço/manutenção, *upgrade*, reciclagem). Somando as pontuações, identificam-se os agrupamentos que devem formar módulos.

**Modularidade** — pode ser descrita sob diferentes perspectivas: **funcional** (relação função↔módulo), **física/técnica** (interfaces e geometria), **de ciclo de vida/negócio** (fabricação, montagem, variedade, manutenção, upgrade, fim de vida) e, na tipologia de Ulrich, quanto ao tipo de interface: **slot** (encaixe específico por módulo), **bus** (barramento comum) e **seccional** (interfaces idênticas encadeáveis).

**MVP** — ver par nº 6.

**Plataforma de produto** — conjunto de subsistemas e interfaces comuns compartilhado por uma família de produtos; permite variedade externa com comunalidade interna.

**PLM (Product Lifecycle Management)** — abordagem e conjunto de sistemas para gerenciar informação, processos e decisões do produto ao longo de todo o ciclo de vida, integrando CAD/CAE/PDM/ERP/MES, BOM, mudanças de engenharia e, mais recentemente, *digital twin*.

**Portfólio de produtos** — conjunto de produtos e projetos da empresa, gerido para maximizar valor, equilibrar risco/retorno e prazos, e garantir alinhamento estratégico e número adequado de projetos aos recursos disponíveis.

**PSS (Product-Service System)** — sistema em que valor é entregue pela combinação produto+serviço. Tipologia usual (Tukker): orientado ao **produto**, ao **uso** e ao **resultado**.

**Pugh (matriz de seleção)** — cada conceito é comparado a um **datum** (referência) critério por critério com **+ / 0 / −**; somam-se os sinais. Serve para convergir e para **hibridizar** conceitos, não apenas para eleger um vencedor.

**QFD (Quality Function Deployment)** — desdobramento da voz do cliente em requisitos de projeto e, em cascata, em características de peças, processo e produção, através de matrizes encadeadas — a primeira é a **Casa da Qualidade**.

**Requisitos conflitantes** — pares de requisitos em que melhorar um piora o outro (peso × resistência; custo × durabilidade). Aparecem no **telhado** do QFD e são o alvo da TRIZ.

**Roadmap tecnológico (Technology Roadmapping)** — mapa temporal em camadas (mercado → produto → tecnologia → recursos) que alinha o *quando* das necessidades de mercado ao *quando* da disponibilidade tecnológica. Método T-Plan (Phaal, Farrukh, Probert).

**SBCE (Set-Based Concurrent Engineering)** — prática Lean de manter **conjuntos** de alternativas em paralelo, estreitando-os por evidência à medida que o conhecimento cresce, em vez de escolher cedo uma única solução (*point-based*).

**Síntese funcional** — método de obter a estrutura funcional do produto a partir do problema; etapas típicas: definir o sistema técnico e suas fronteiras/interfaces → estabelecer a função global (caixa-preta com fluxos E-M-S) → desdobrar em funções parciais e elementares → montar estruturas funcionais alternativas → selecionar a estrutura.

**Sistema técnico** — conjunto de elementos que transforma **energia, material e sinal** de entrada em saídas desejadas (e indesejadas), delimitado por **fronteiras** e conectado ao ambiente por **interfaces**, organizado hierarquicamente em sistema → subsistemas → componentes.

**TRIZ** — Teoria da Resolução Inventiva de Problemas (Altshuller). Núcleo: **contradições** técnicas (melhorar A piora B) e físicas (o mesmo parâmetro precisa ser A e não-A); **39 parâmetros de engenharia** e a **matriz de contradições** que aponta, para cada par, os **40 princípios inventivos** mais usados; **IFR** (Resultado Final Ideal), idealidade, análise Su-Field, soluções-padrão, princípios de separação (no tempo, no espaço, na condição, entre o todo e a parte), leis de evolução dos sistemas técnicos e o algoritmo **ARIZ**.

**TRL (Technology Readiness Level)** — 1 princípios básicos observados; 2 conceito tecnológico formulado; 3 prova de conceito experimental; 4 validação em laboratório; 5 validação em ambiente relevante; 6 demonstração em ambiente relevante; 7 **demonstração de protótipo em ambiente operacional**; 8 sistema completo qualificado; 9 sistema comprovado em ambiente operacional (referência ISO 16290 / NASA).

**Tipos de relacionamento com fornecedores no PDP** — (i) **componente de catálogo / padrão do fornecedor**: o projeto se adapta a um item já existente; (ii) ***build-to-print* / *white box* (peça controlada em detalhe)**: o comprador projeta integralmente e o fornecedor apenas fabrica conforme os arquivos e parâmetros entregues; (iii) ***grey box* / codesenvolvimento**: projeto conjunto; (iv) ***black box***: o comprador entrega apenas **especificações funcionais/meta** e o fornecedor projeta, testa e entrega o subsistema pronto.

**Valor (Slack, 1998)** — medida da importância que o cliente atribui a um produto/serviço; função da utilidade em satisfazer uma necessidade, da importância relativa dessa necessidade e da disposição a pagar. É percebido por **todos os stakeholders** e reside também nos **intangíveis**.
