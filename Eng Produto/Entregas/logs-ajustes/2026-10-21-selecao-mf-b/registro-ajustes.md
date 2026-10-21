# Seleção da modelagem funcional MF-B

Data: 21/10/2026. Solicitação da equipe: “seleciona”, após confirmar que a primeira Pugh ainda estava aberta. A escolha foi feita a partir da avaliação existente e registrada como **seleção funcional para desenvolvimento**, com condições técnicas explícitas.

## Decisão

Selecionar **MF-B — amortecimento antes do conjunto portador** para orientar a composição de princípios na matriz morfológica. A organização põe F01 antes de F11 e F02 no fluxo de energia e preserva a proteção direta da peça após preparo no distribuidor, as 17 funções e os 23 requisitos de projeto.

A preferência anterior por M1 definia a fronteira de proteção direta. MF-B é a escolha da organização funcional dentro dessa fronteira. M1/M2/M3, MF-A/MF-B/MF-C e C1/C2/C3 continuam designações de decisões diferentes.

| Alternativa | Saldo parcial | Avaliações AV | Encaminhamento |
|---|---:|---:|---|
| MF-A | 0, datum | — | Reserva viável e referência comparativa |
| MF-B | +2 | 9 | Selecionada para desenvolvimento |
| MF-C | −1 | 9 | Não encaminhada nesta rodada; reexaminar se surgir benefício demonstrável |

MF-B apresenta dois potenciais distintos sob as hipóteses de apoio já registradas:

1. **RP7/H3:** separar a geometria do cartucho externo da regulagem dos contatos que acomodam a louça. A extensão do curso e a imobilização ainda precisam ser demonstradas.
2. **RP15/H4:** prever acesso e reposição do cartucho externo preservando a regulagem do contato. A vantagem depende de essa interface realmente funcionar.

Esses potenciais orientam a escolha conceitual. Não se atribuiu vantagem presumida em proteção, deslocamento, uniformidade, compressão, vida ou custo. A desvantagem da MF-C em manutenção depende do arranjo H5 e não constitui penalidade automática por usar dois estágios.

## Como interpretar a Pugh

**Nenhuma nota foi alterada e nenhum AV foi convertido em zero.** Continuam pendentes RP1, RP2, RP8, RP9, RP11, RP12, RP14, RP18 e RP23. Os saldos completos permanecem pendentes. O registro da decisão é separado da completude da comparação: escolher uma estrutura para desenvolver não demonstra superioridade geral nem aprova o desempenho da concepção física.

O método de comparação de estruturas funcionais admite imaginar/simular princípios no nível abstrato (Back et al., 2008, seção 7.3.4, p. 322–323). A avaliação anterior explicitou H1–H5 para isso. Nesta rodada, a equipe pediu que a decisão fosse tomada. O potencial de ajuste e de acesso favorece encaminhar MF-B, mantendo o risco das comparações ainda abertas e MF-A como reserva. Essa decisão não é uma conclusão de que os nove critérios faltantes sejam equivalentes.

Na planilha, `Matriz Pugh das Modelagens!E126` registra a alternativa escolhida. `E30` apresenta o encaminhamento e sinaliza revisão se houver nota inválida, datum alterado, retirada de uma das vantagens que fundamentaram a escolha ou perda da liderança parcial. O bloqueio anterior que exigia avaliar todos os critérios antes de registrar uma decisão funcional foi substituído por esse registro explícito e suas condições. Não se declarou a comparação completa.

## Condições e sequência

- Dimensionar o estágio externo considerando também a massa do portador, não apenas a massa cerâmica.
- Representar o caminho de carga de F11 e verificar que um eventual caminho rígido não anule a função F01.
- Preservar inspeção da cerâmica, retenção de fragmentos, contato protegido e imobilização para o mix definido em Dados.
- Confrontar ajuste, envelope, paletização, estabilidade, compressão/fluência, umidade, vida e custo nos mesmos casos de comparação.
- Rever a decisão se as vantagens H3/H4 não se sustentarem, se uma restrição crítica não for atendida ou se outra estrutura se mostrar preferível. As nove AV podem mudar a preferência; a fórmula de consistência não substitui essa análise técnica.
- Gerar ou revisar concepções físicas aderentes à MF-B; depois reavaliar portadores/interfaces na MIM, arquitetura e segunda Pugh. Nenhuma C1/C2/C3 foi escolhida ou validada nesta rodada.

## Escopo aplicado

Atualizados: decisão e interpretação da primeira Pugh; encaminhamento em Modelagens Alternativas e Morfológica; notas de continuidade em MIM, Arquitetura Modular, Concepções e segunda Pugh; distinção entre seleção funcional e aprovação técnica em duas notas de Especificação Meta; registro na aba Revisão.

O aviso da MIM recebeu disposição legível em B3:O3, sem cobrir o controle OP-01 em P3/Q3. Essa correção de exibição não alterou os escores nem a condição de inclusão da função opcional.

Preservados: todas as notas dos 23 critérios da primeira Pugh, nove AV por alternativa, metas numéricas, QFD e pesos anteriores, catálogo e vínculos funcionais, FAST, imagens, gráfico, princípios da morfológica, escores/cálculos da MIM e notas/pesos da segunda Pugh. Os registros históricos anteriores continuam identificando a situação da respectiva rodada.

Relatório, PDFs e Figma não foram alterados. Não houve ensaio físico ou nova coleta. A seleção está registrada na planilha; a documentação externa ainda precisa ser consolidada para apresentar uma mesma revisão.

## Verificação

Os testes registrados em [verificacao.json](verificacao.json) verificam a seleção, a preservação das notas/AV e a reação a mudança de vantagens, decisão ausente, notas inválidas ou vazias, datum alterado, empate e mudança de liderança. O arquivo foi reaberto e os trechos alterados foram inspecionados visualmente. A integração dos trechos autorizados preservou o restante do pacote Excel.

Os valores anteriores das células alteradas estão em [valores-anteriores.json](valores-anteriores.json).
