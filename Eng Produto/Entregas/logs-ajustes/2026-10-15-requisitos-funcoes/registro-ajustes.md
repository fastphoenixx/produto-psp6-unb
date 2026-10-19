# Revisão dos vínculos entre requisitos e funções

Revisão de **15 de outubro de 2026**, a pedido da equipe, para explicitar o tratamento dos requisitos funcionais, atributos de desempenho, condições ambientais e restrições. A apresentação anterior tinha 23 linhas com IDs F, incluindo duplicidade de amortecimento e custo como linha de função. Isso permitia interpretar incorretamente que os 23 RP eram 23 funções independentes.

## Decisões de método

Os 23 RP e suas especificações-meta foram preservados. V01–V23 passam a identificar os vínculos, separados de um catálogo de **17 funções e capacidades de suporte**. A natureza do requisito e a classe da função ficam em campos distintos. Funções podem atender vários requisitos, e um requisito pode depender de várias funções.

Uniformidade qualifica Amortecer impacto; umidade qualifica Suportar carga após condicionamento; vida qualifica o desempenho nos ciclos. Prover acesso, Liberar partes, Unir partes e Separar materiais tornam explícito o suporte à manutenção e ao fim de vida. Recolher partes atua no retorno vazio: não comprova o volume carregado. Custo continua restrição econômica. Acrescentar um verbo ao requisito não basta para justificar uma função.

Os IDs compatíveis foram preservados. F10 foi reunida em F16; F12 em F01; RP13 passou a F11; F18 deixou de representar durabilidade como função autônoma; RP20 usa acesso e uniões, sem F20 independente; F23 deixou de ser ID de função. A descontinuação de rótulos não elimina requisitos ou metas.

## Propagação às entregas

- **Função Global:** natureza, vínculo, tratamento e meta ligados aos RP; catálogo separado de funções com efeitos, fronteiras e limites.
- **FAST:** nomes e IDs do catálogo, suporte ao reuso e compressão distinguidos de atributos e restrições.
- **Funções Parciais:** funções sem duplicidade nas estruturas E1/E2/E3; condições verificáveis em campo próprio; custo como linha de restrição.
- **Morfológica:** IDs ligados ao catálogo, acesso para manutenção e recolhimento no retorno explícitos; princípios e combinações preservados. Comunicação de uso deve acompanhar a identidade, sem presumir que RFID ou serial substitua orientação.
- **MIM:** vínculos funcionais e registro de origem atualizados para os mesmos 13 portadores. Os 156 julgamentos, as justificativas dos escores e os agrupamentos físicos foram preservados.
- **Arquitetura, concepções e planejamento:** condições e alcance da revisão explicitados; seleção e demonstração de troca independente continuam pendentes.
- **Relatório:** versão 0.16, com catálogo e quadro de encaminhamento dos requisitos, FAST e rastreabilidade atualizados.

## Fundamentação

Aplicação da síntese funcional da disciplina: função como ação/efeito necessário, separada de princípio de solução e componente; FAST para relações de finalidade e meios; atributos e metas como critérios de avaliação. Conferência complementar com [NASA, Technical Requirements Definition](https://www.nasa.gov/reference/4-2-technical-requirements-definition/) e [NASA, Logical Decomposition](https://www.nasa.gov/reference/4-3-logical-decomposition/). As aplicações ao nosso produto são decisões de modelagem, não exemplos literais das referências.

## Conferência

Foram aprovadas **49 verificações documentais e computacionais**, registradas em [verificacao.json](verificacao.json). O [modelo-funcional.json](modelo-funcional.json) conserva o catálogo, os 23 vínculos, a natureza dos requisitos e a migração dos IDs. Os resultados dos testes de dependência estão em [testes-vinculos.json](testes-vinculos.json).

A conferência confirmou:

- 33 abas com nomes, ordem e visibilidade preservados; 40 partes nativas não alteradas permanecem idênticas;
- 23 RP e 23 especificações-meta preservados, incluindo protocolos; cada vínculo usa IDs válidos e toda função do catálogo atende pelo menos um RP;
- uniformidade ligada à mesma função de amortecimento; umidade ligada ao suporte de carga; custo sem função física autônoma;
- estruturas alternativas sem repetição da mesma função no grupo, custo como condição transversal e IDs válidos em FAST e morfológica;
- princípios e combinações C1/C2/C3, 156 notas e justificativas da MIM, somas, posições, agrupamentos e controles preservados;
- recálculo mantendo Mudge em 577, QFD em 12.223, triagem inicial de Pugh em 12/0/40 e soma da base MIM em 266; OP-01 continua fora por padrão;
- mudança de nome no catálogo propagada aos vínculos, às estruturas, à FAST, à morfológica e à MIM; mudança da meta na fonte propagada ao vínculo do requisito;
- ausência de erros Excel nos intervalos alterados; relatório 0.16 recompilado com **57 páginas**, sem referências pendentes ou margens excedidas, e revisão visual das tabelas e do diagrama FAST.

O leitor usado na edição manteve caches nas duas abas cujos nomes contêm espaços nas extremidades. A avaliação foi complementada no **LibreOffice**, em cópia temporária do XLSX final, com duas entradas alteradas e caches de fórmulas removidos para forçar o cálculo. Os nove resultados de nomes e um de meta foram confirmados, preservando os nomes originais. Essa cópia não é uma entrega. As entradas temporárias não foram gravadas na planilha publicada.

## Pendências físicas preservadas

Não foram executados ensaios de proteção, compressão úmida, vida, inspeção, recondicionamento ou troca independente. As metas continuam provisórias. C1 continua referência de estudo, e a seleção das modelagens e concepções permanece pendente de análises comparáveis e evidência suficiente.
