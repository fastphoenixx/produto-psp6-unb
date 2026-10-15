# Elaboração da MIM e continuidade do projeto conceitual

MIM elaborada em **14 de outubro de 2026** para a **C1 como referência de estudo**, mantendo o escopo, as correções do Feedback 2 e a seleção final pendente. A referência permite julgar portadores técnicos concretos; não declara C1 superior a C2/C3.

## Método e hipóteses

Foram mantidos os **12 direcionadores** e a escala **0/1/3/5** da aba MIM do material-base da disciplina, recuperado do histórico do repositório. A literatura consultada apresenta relação forte com 9; essa diferença foi explicitada. A matriz cruza os direcionadores com **13 portadores**, sendo **12 da C1 e um de registro de evento opcional**. Há **156 julgamentos propostos**, cada um com justificativa e origem. Não são dados de pesquisa com clientes ou resultados de ensaio.

Carry-over distingue reaproveitamento de projeto entre gerações de reuso da unidade por ciclos. Unidade comum trata de partes entre variantes. Compra pronta distingue subsistema funcional de matéria-prima. Alterações planejadas e estilo ficam com zero por falta de roteiro de gerações ou estratégia estética. Manutenção, vida, destinação, troca e custo continuam critérios transversais; não foram criados componentes fictícios para essas funções.

## Resultado de arquitetura

| Núcleo | Portadores | Fundamentação e limite |
| --- | --- | --- |
| MD1 estrutura, pega e circulação | S05/S06/S08/S09/S10/S11/S12 | Corpo comum, caminho de carga, estabilidade, articulação, pega e identidade compartilham interfaces. Não é contado na hipótese de três trocas independentes. |
| MD2 ajuste e imobilização | S02/S03 | Cintas e guias regulam o mesmo volume e combinam variação, padronização e manutenção. Ajuste permanece na mesma configuração, sem troca de módulo. |
| MD3 amortecimento | S01 | Material/processo, teste próprio, desgaste e destinação justificam separar o calço da estrutura. |
| MD4 contenção e inspeção | S04/S07 | Barreira e painel têm teste, manutenção e material próprios. O agrupamento é condicionado à continuidade da contenção e ao acesso real à louça. |
| MD6 opcional de evento | S13 | Tecnologia, compra pronta, calibração e atualização favorecem separação se entrar no escopo. Está fora da base e da hipótese de RP20. |

O antigo grupo MD5 de uso/identidade foi integrado ao corpo MD1 na referência C1. As funções permanecem. Somar notas por núcleo não foi usado para comparar grupos com quantidades diferentes de portadores. Não se escolheu um número de módulos pelo topo da ordenação ou para completar o mínimo de RP20.

## Implementação e verificações

A planilha calcula somas por direcionador e portador, posições com empates e inclusão opcional explícita. Nota vazia ou fora da escala não é convertida em zero. O registro de julgamentos indica alterações de nota que exigem rever a justificativa. Arquitetura e concepções foram alinhadas ao alcance da MIM; o relatório foi atualizado na versão 0.15.

A conferência final passou em **45 verificações documentais e computacionais**. A matriz salva foi reaberta e recalculada; as somas foram confrontadas com cálculo independente. Os 12 portadores da base somam **266**, e a inclusão explícita do opcional leva a **297**. Amortecimento tem 36 pontos; ajuste, 28; imobilização, 27; inspeção, 26; retenção, 25. Esses números indicam motivos de modularização e não desempenho.

Os testes verificaram:

- manutenção dos empates e recálculo das posições quando as notas mudam;
- inclusão do opcional somente pelo controle explícito, com soma 31 e posição 2 quando incluído;
- bloqueio das posições com nota obrigatória vazia ou inválida, ou controle fora de 0/1;
- aceitação de zero como nota válida e aviso de revisão da justificativa após alteração;
- ausência de interferência de nota opcional vazia quando a opção está fora; bloqueio quando ela entra;
- sensibilidade à troca de forte 5 por 9: retenção passa a 37 e imobilização a 35; a ordenação muda, sem escolha automática de módulos;
- rastreabilidade à morfológica C1 e cobertura dos 23 RP e das 23 funções, incluindo critérios transversais;
- manutenção das 33 abas, das 23 especificações-meta, de Mudge (577), QFD (12.223) e triagem inicial de Pugh (12/0/40), além das pendências de avaliação de C2/C3;
- integridade do XLSX, preservação de 44 partes nativas fora do ajuste e ausência de erros Excel nos intervalos alterados;
- compilação do relatório 0.15 com **55 páginas**, sem estouro de margem ou referências pendentes, e revisão visual das novas tabelas; a capa também foi corrigida para não duplicar “Equipe 2” quando não há autoria privada carregada.

Os resultados detalhados estão em [verificacao.json](verificacao.json) e [testes-mim.json](testes-mim.json). O modelo de notas, critérios e justificativas desta revisão está em [julgamentos-mim.json](julgamentos-mim.json). As entradas temporariamente alteradas nos testes foram restauradas antes da entrega; o opcional continua fora por padrão.

### Base e literatura consultadas

O material-base foi recuperado apenas para consulta do histórico Git: `Entregas - Grupo 5.xlsx`, objeto `b2607831074ddd6877ccfc591d30d7041d0b9e9c`, aba MIM. Não foi copiado para as entregas públicas. A convenção 1/3/5 veio dessa legenda; zero explicita ausência de relação e não é confundido com nota ausente.

A referência primária de conferência foi [Blees, Jonas e Krause (2009), *Perspective-Based Development of Modular Product Architectures*](https://www.designsociety.org/download-publication/28652/perspective-based_development_of_modular_product_architectures), especialmente a Figura 1 e a seção 2. A escala clássica 1/3/9 e a necessidade de examinar perfis e interfaces foram distinguidas da convenção da base. As notas aplicadas ao nosso produto são propostas de julgamento de projeto, abertas à revisão pela equipe.

## Verificações físicas ainda pendentes

Definir e dimensionar I12 (estrutura–ajuste), I13 (estrutura/ajuste–amortecimento) e I14 (estrutura/ajuste–barreira). Retirar e reinstalar MD2, MD3 e MD4 individualmente, em conjunto descarregado, mantendo os outros núcleos e a identidade. Registrar acesso, ações, tempo e partes removidas, e repetir as verificações funcionais afetadas. Somente essa avaliação poderá comprovar a troca independente requerida pelo RP20.

Resolver a interface de inspeção da caixa original e verificar contenção na abertura/retirada. Confirmar mix, cargas, manutenção e custos completos. C2/C3 exigem reavaliação de seus portadores, sobretudo rodas, RFID e sinal; as notas da C1 não foram aplicadas automaticamente às outras concepções.

O detalhamento das trocas dá continuidade à atividade 19 do plano de validação na aba Especificação Meta (RP7 e RP20). Essa atividade permanece **não iniciada**: elaborar a MIM e testar seus cálculos não equivale a executar o protocolo físico. A amplitude de ajuste e a troca por manutenção continuam verificações distintas.
