# Primeira Pugh e prioridade da proteção direta

Em **15 de outubro de 2026**, a primeira seleção foi delimitada ao nível das estruturas funcionais. A comparação qualitativa terminou em **empate 0/0/0**. A equipe priorizou **M1: retirar a embalagem original no distribuidor e desenvolver proteção direta da peça**. Essa é a direção de desenvolvimento; nenhuma concepção física foi selecionada.

## Decisão da equipe

A preferência foi solicitada para o caso de empate e respondida explicitamente:

> Priorizar M1: retirar a embalagem original no distribuidor e desenvolver proteção direta da peça.

A resposta orientou a decisão sem alterar as notas. M1 oferece um caminho potencialmente mais direto para inspeção, mas acrescenta retirada e transferência no distribuidor. M2 permanece alternativa de contingência. M3 foi definida sobre volume embalado; acrescentar futuramente OP-01 à M1 exigiria revisar o complemento, mantendo a fronteira direta da peça.

## Método e justificativas

A primeira Pugh atual usa M2 como datum, escala **−1/0/+1** e cinco critérios qualitativos sem pesos novos. A comparação ponderada inicial de **12/0/40**, seus pesos e a revisão anterior com AV permanecem identificados como histórico. Os 23 requisitos não foram excluídos: um quadro encaminha cada um à comparação física C1/C2/C3, com vínculo funcional, dependência técnica e verificação requerida.

| Critério | M1 × M2 | M3 × M2 | Base do julgamento |
|---|---:|---:|---|
| CF01 Cobertura da proteção e movimentação | 0 | 0 | Mesmos efeitos obrigatórios descritos nas estruturas; desempenho não comparado. |
| CF02 Barreiras pré-existentes para inspeção | +1 | 0 | M1 retira a embalagem de origem do caminho de acesso; a barreira nova permanece e a área crítica continua por verificar. |
| CF03 Continuidade do acondicionamento | −1 | 0 | M1 exige desencaixotar e transferir; tempo, custo e dano ainda não foram medidos. |
| CF04 Informação obrigatória ao usuário | 0 | 0 | Comunicar uso e exibir identidade são comuns. Evento opcional não demonstra integridade. |
| CF05 Retorno, manutenção e fim de vida | 0 | 0 | Mesma cobertura de acesso, uniões, recolhimento e separação; vida e troca independente ainda por demonstrar. |

Zero significa equivalência **no aspecto descrito**, sem afirmar desempenho físico igual. AV significa comparação sem base. As fórmulas do novo quadro bloqueiam soma e decisão quando uma nota está ausente, AV ou fora da escala. Se uma nota alterar o equilíbrio, o estado solicita revisão da decisão.

Referência metodológica: [MIT OpenCourseWare, Olivier de Weck, sessão 5, 2015](https://ocw.mit.edu/courses/16-842-fundamentals-of-systems-engineering-fall-2015/dac225aff5a84125fd1bf9364d748221_MIT16_842F15_Ses_5_Design.pdf), páginas 8–9 e 19: comparação no mesmo nível de abstração, sinais relativos ao datum e total como orientação. Os critérios, as notas e a aplicação ao produto são julgamentos próprios de engenharia, sem nova pesquisa de preferência dos clientes.

## Ajustes nas entregas

- **Primeira Pugh:** quadro funcional, justificativas por alternativa, contagens, saldo, decisão da equipe, condições de revisão e encaminhamento dos 23 requisitos.
- **Segunda Pugh:** mantém pesos, 23 critérios e C2/C3 AV; esclarece a comparação das três concepções sob M1 e a evidência necessária para cada nota física.
- **Modelagens e funções parciais:** M1 priorizada; preparo no distribuidor e destino da embalagem incluídos na operação; M2/M3 preservadas como alternativas.
- **Morfológica e concepções:** peças diretamente apoiadas, tensão/pressão de contato a definir, inspeção pela barreira do próprio dispositivo e OP-01 fora das três configurações base. Os princípios de inspeção foram adaptados; C3 passa a combinar regiões transparentes distribuídas.
- **Custo:** quadro próprio de M1 inclui preparo, destinação e custo atribuível da embalagem, além de aquisição/vida, retorno, manutenção, consumíveis e avaria residual. As entradas ausentes permanecem vazias e o custo completo indisponível. Retirar a caixa não prova eliminar seu custo. O cenário de M2/M3 permanece identificado separadamente.
- **MIM e arquitetura:** portadores descritos para M1, contatos e inspeção atualizados. Os **156 escores anteriores foram preservados como histórico**, com reavaliação sinalizada nas 156 relações. A transferência dos escores e dos quatro núcleos para M1 **não foi validada**. Mudança de rótulo não substitui essa revisão.
- **Planejamento, mapa e relatório:** estado alinhado à primeira seleção funcional; relatório **0.17**, com distinção entre prioridade M1 e escolha futura da concepção.

Os 23 RP, as metas e protocolos, o catálogo de 17 funções, os pesos Mudge/Pareto e os cálculos QFD foram preservados. Não foram gerados resultados de ensaios nem cotação das concepções.

## Conferência

Foram aprovadas **59 verificações** documentais, de preservação, cálculo, entradas ausentes e recálculo, registradas em [verificacao.json](verificacao.json). Foram preservadas as 33 abas e 39 partes nativas fora da edição. O relatório 0.17 foi compilado com **60 páginas**, sem erros, referências pendentes ou margens excedidas. O [modelo da seleção](selecao-funcional.json) registra critérios, justificativas, encaminhamento e decisão; os [testes de recálculo](testes-recalculo.json) conservam os resultados dos casos temporários.

O recálculo foi conferido com Artifact Tool e, de forma independente, com LibreOffice em cópias descartáveis do XLSX, removendo os caches de fórmula para forçar a avaliação. As cópias alteradas são testes, não entregas. O XLSX final mantém os nomes originais das 33 abas, inclusive espaços nas extremidades. O relatório foi recompilado e suas páginas alteradas revisadas visualmente.

## Próxima etapa e condições de revisão

A direção funcional está definida para prosseguir com M1. Desenvolver princípios e interfaces de proteção direta; resolver preparo, contato, inspeção e contenção; reavaliar a MIM quando essas interfaces estiverem descritas. Obter dimensões, custos e análises comparáveis para a segunda Pugh. Ensaios são necessários para as afirmações que dependem de desempenho físico. Reabrir a direção funcional se a proteção direta não atender às condições críticas.
