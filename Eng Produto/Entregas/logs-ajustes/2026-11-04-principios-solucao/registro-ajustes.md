# Princípios de solução da modelagem M1

Data: 04/11/2026.

A equipe solicitou avançar inicialmente na planilha para matriz morfológica e TRIZ, mantendo a apresentação adotada, a modelagem M1 e a cadeia de requisitos e especificações-meta.

## Base e conteúdo consultado

Mantidas a função global **Proteger louça**, as sete parciais, as 21 elementares E01–E21 e as sete complementares C01–C07. A primeira Pugh continua selecionando M1, proteção direta de uma cuba ou corpo individual de bacia depois do preparo no distribuidor: M1 +7, M2 0 e M3 −4. O01–O04 e A01 não foram incorporadas à base M1.

No acervo disponível, não foi localizado um arquivo identificado como Aula 14. O conteúdo correspondente aparece em **Aula 15 — Projeto Conceitual** (criatividade), **Aula 17 — Exemplo modelagem, Matriz Morfológica e TRIZ** e **Aula 18 — Engenharia reversa e TRIZ**. Foram consultados os slides 13–17, 27–39 e 48–51 da Aula 17, incluindo as figuras do exemplo morfológico, e o roteiro de formulação e adaptação da Aula 18. A bibliografia é Back et al. (2008), cap. 6.

Os arquivos foram recuperados do acervo privado no histórico `cc16e18`, somente para consulta local. `fontes.json` identifica os caminhos e hashes. Não foram incluídos os slides, livros ou exemplos de outras equipes no conteúdo público. Não se declara consulta a uma Aula 14 inexistente nesse acervo.

## Morfológica

A aba **Matriz Morfologica ** contém uma linha por função de menor nível, com nomes e IDs vinculados ao catálogo. Cada uma das 28 linhas apresenta quatro meios físicos alternativos, totalizando 112 opções. As alternativas descrevem mecanismos, interfaces, caminhos de carga, contenção e comunicação, sem se limitarem a trocar o material.

As colunas H/I/J definem C1/C2/C3 por escolhas inteiras de 1 a 4 em cada função. `E04.1`, por exemplo, significa a primeira alternativa de Absorver impacto. Uma peça física pode realizar várias funções. A arquitetura depende da análise das interfaces e da ausência de caminhos rígidos que anulem o amortecimento.

- **C1**: contatos distribuídos, cintas limitadas, guias ortogonais, amortecimento celular, carrinho externo, envoltório com visores e bandeja retida.
- **C2**: quadro telescópico, sapatas flutuantes, elastômeros, rolamento removível, painéis transparentes e cuba coletora.
- **C3**: painéis articulados, apoios conformáveis, lâminas amortecidas e isoladores, mobilidade integrada, bolsa coletora e visores distribuídos.

São combinações exploratórias. Nenhuma foi selecionada como concepção física. A síntese dinâmica lê cinco funções centrais; as 28 escolhas de cada coluna representam o caminho completo. Escolha vazia, não inteira ou fora de 1–4 torna a síntese indisponível com orientação de preenchimento.

As linhas 47–69 vinculam as 23 metas à fonte e explicam a aplicação aos princípios. Permanecem explícitas as distinções entre deslocamento e folga, força de partida e levantamento, inspeção e alerta de impacto, volume carregado e retorno vazio, ajuste e reposição, identidade e sinalização, contenção de massa e risco de fragmentos pequenos. Vida, umidade, custo completo, reciclabilidade e modularidade qualificam as propostas. As funções continuam capacidades físicas do produto, sem incorporar gestão de estoque ou logística.

## TRIZ

Dez casos partem de células negativas do telhado do QFD. Cada um identifica melhoria, efeito prejudicado, mecanismo do conflito, parâmetros genéricos quando aplicáveis, consulta, princípios utilizados, aplicação na M1, opções morfológicas e verificação conjunta.

A referência é a matriz clássica 39×39 da figura 15 da documentação DTOceanPlus/Oxford Creativity. Foram realizadas oito consultas, com sete pares distintos:

| Melhorar × evitar piora | Indicações da matriz |
|---|---|
| 30 × 35 | 35, 11, 22, 31 |
| 37 × 31 | 2, 21 |
| 10 × 25 | 10, 37, 36 |
| 35 × 25 | 35, 28 |
| 31 × 34 | sem indicação; usado em dois casos |
| 34 × 27 | 11, 10, 1, 16 |
| 34 × 24 | sem indicação |

Nas células sem indicação, a busca continua pela lista dos 40 princípios. Os complementos por analogia são distinguidos dos resultados da matriz. Transparência/alteração óptica, por exemplo, não foi apresentada como indicação inexistente de 37×31. Os conflitos com estabilidade ao tombamento usam separação no tempo e no espaço, sem equiparar o parâmetro 13 ao ângulo de tombamento.

Fonte consultada em 04/11/2026: [DTOceanPlus — Theory of Inventive Problem Solving](https://dtoceanplus.gitlab.io/documentation/si/docs/explanation/si-triz.html), figura 15, tabelas 6/7 e seção de separação. Os encaminhamentos são hipóteses de engenharia a verificar conjuntamente, sem declarar o conflito experimentalmente superado.

## Dependência e preservação

Em **Concepções**, nove células de título, síntese e enquadramento foram atualizadas, além da altura das três linhas da síntese. As sínteses e pendências leem a morfológica por fórmula. Essa alteração alinha o resumo existente e não realiza a segunda seleção.

As outras 30 abas mantêm valores e fórmulas. Os nomes e a ordem das 33 abas, as seis imagens e o gráfico nativo foram preservados. A MIM, seus 156 julgamentos, a arquitetura e a segunda Pugh permanecem estudos históricos a reavaliar a partir das combinações atuais. Relatórios e Figma não foram alterados.

O pacote final substitui apenas os XML das duas matrizes, as células dependentes de Concepções e os estilos necessários. Os estilos preexistentes mantêm seus índices. Os documentos de orientação do repositório foram atualizados para refletir o estágio atual, incluindo a correção de referências obsoletas a 17 funções e empate na primeira Pugh.

## Verificação

- Conferidas as 28 funções, 112 opções, 84 escolhas e 23 metas vinculadas, os dez pares negativos do QFD e as coordenadas da matriz TRIZ.
- Recálculo pelo Artifact Tool e testes de troca, vazio, zero, valor fora da faixa e não inteiro, com restauração da base.
- Recálculo no LibreOffice em cópias descartáveis, removendo caches para forçar avaliação nova: base, troca da alternativa de retenção, escolha vazia e escolha inválida. Todos propagam o resultado esperado à síntese de Concepções, sem erros de fórmula nas 33 abas.
- Comparados os resultados das fórmulas autoradas com o cálculo nativo, as 30 abas preservadas e as partes do pacote.
- Revisadas visualmente as matrizes, combinações, condições de aceitação e síntese dependente. Ajustadas alturas e quebras para manter os textos visíveis.

Os resultados estão em `verificacao.json`, `pacote-preservado.json`, `testes-artifact.json` e `testes-nativos.json`. Não houve ensaio físico, nova coleta ou comprovação de desempenho das soluções. Nenhum commit ou push foi realizado nesta tarefa.
