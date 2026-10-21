# Apresentação complementar das modelagens

Registro: 21 de outubro de 2026.

Pedido: seguir o formato visual de um exemplo do Grupo 9, além das modelagens já elaboradas no Figma.

Foram acrescentadas sete pranchas editáveis no mesmo arquivo UNB, à direita das anteriores. A organização usa contextualização, entradas e saídas de material, energia e sinal, blocos principais, funções vinculadas abaixo e explicação breve das diferenças. O conteúdo técnico e os julgamentos permanecem os do projeto da Equipe 2.

## Conteúdo

1. Função global: caixa-preta e fronteira do dispositivo.
2. V0: comportamento descrito da situação atual e limites da evidência.
3. M1: proteção direta após preparo no distribuidor.
4. M2: volume embalado e acondicionamento original mantido.
5. M3: mesma base de M2, com OP-01 em ramo opcional de energia para sinal.
6. FAST: finalidade, meios e funções de suporte.
7. Primeira Pugh: cinco critérios, empate 0/0/0 e preferência de planejamento por M1.

As fontes editáveis e o [PDF complementar](../../modelagem-funcional/Modelagem_Funcional_Selecao_Equipe2.pdf) estão relacionados no [guia da apresentação](../../modelagem-funcional/README.md). O rodapé de cada página do PDF também permite abrir sua prancha no Figma.

## Coerência conceitual

Os blocos são agrupamentos de leitura e suas conexões não descrevem sequência cronológica. Não foram apresentados como módulos ou como novas alternativas. O detalhamento mantém a expressão "funções vinculadas" para respeitar os níveis e IDs do catálogo, em vez de reclassificar todas como elementares pelo formato do exemplo.

As 17 funções da base permanecem nas três alternativas e na FAST. Acesso, liberação, união, separação material e recolhimento no retorno representam capacidades do produto que apoiam operações humanas. O preparo no distribuidor permanece contexto externo ao dispositivo. Metas, atributos e restrições continuam qualificando as soluções.

M1 foi priorizada após empate; não foi declarada vencedora numérica. M2 continua datum e contingência. O sinal opcional de M3 não diagnostica trinca, não torna a embalagem transparente e não integra automaticamente a base de C1/C2/C3 sob M1.

## Preservação e verificação

As sete pranchas originais do Figma foram preservadas com os mesmos IDs e dimensões. A planilha operacional não foi alterada; seu hash permanece idêntico ao da versão anterior. O relatório principal também não foi substituído.

As exportações nativas foram reunidas em um PDF de sete páginas A4 paisagem, com marcadores e links para o Figma. A conferência compara todos os caracteres de cada exportação com a página final, desconsiderando espaços inferidos pelo extrator durante a redução de escala. Verifica também a cobertura dos 17 IDs funcionais e a integridade do arquivo. A inspeção visual das páginas renderizadas complementa essas conferências.

As sete páginas finais foram renderizadas e examinadas visualmente. Foram corrigidos o espaçamento dos rótulos externos e a borda dos links do rodapé; a versão final mantém textos legíveis, margens e paginação consistentes. Nas três alternativas, o menor intervalo entre os grupos de entrada ou de saída é de 19 pixels na fonte editável.

Os IDs das novas pranchas, os hashes e os resultados estão em `verificacao.json`. O registro descreve a apresentação e não substitui a validação física do produto.

## Revisão solicitada: identificar Material, Energia e Sinal e reduzir texto

A equipe solicitou identificar os tipos de fluxo por extenso e remover o texto que poluía os desenhos. A revisão consultou diretamente a Aula 16, slides 22, 24 e 25, e o encadeamento apresentado na Aula 17. As apresentações foram recuperadas do histórico anterior à retirada dos materiais privados, somente para consulta temporária.

- Os rótulos genéricos de entrada e saída foram substituídos por **Material**, **Energia** e **Sinal**. A direção continua indicada pelas setas.
- Material representa a louça, o acondicionamento mantido e eventuais fragmentos. Energia representa a energia mecânica associada ao transporte e ao manuseio, transmitida e dissipada no conjunto. Sinal representa comandos do usuário e informação visual de condição, uso e identidade. A classificação é uma aplicação ao nosso produto, sem introduzir eletrônica na base.
- A convenção visual segue os exemplos da Aula 16: material contínuo, energia contínua mais espessa e sinal em traço-ponto.
- Foram retirados títulos duplicados, parágrafos longos, legendas repetidas, instruções de estudo da V0 e perguntas de feedback dentro da prancha. O texto remanescente apresenta os estados dos fluxos e a diferença essencial de cada alternativa.
- As 17 funções continuam visíveis em M1/M2/M3 e na FAST. As cinco linhas e as notas da primeira Pugh foram preservadas. Os esclarecimentos metodológicos detalhados permanecem no guia, neste registro e no relatório principal.

O PDF foi substituído pela versão simplificada. A verificação anterior está preservada em `verificacao-primeira-versao.json`; a fonte atual, os hashes e a revisão visual correspondem a `verificacao.json`.

As sete páginas simplificadas foram renderizadas e examinadas. Os rótulos de Material, Energia e Sinal aparecem dos dois lados nas cinco modelagens de fluxos. Nas três alternativas, o menor intervalo entre os grupos de rótulos passou a 29 pixels. As 17 funções e as notas da primeira Pugh permanecem conferidas na versão final.
