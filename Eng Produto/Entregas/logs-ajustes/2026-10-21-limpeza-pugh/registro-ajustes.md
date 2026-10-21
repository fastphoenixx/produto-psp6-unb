# Limpeza da primeira Pugh

Data: 21/10/2026. Solicitação da equipe: limpar a aba da primeira Pugh e retirar o histórico da visualização.

A aba **Matriz Pugh das Modelagens** passou a conter somente a avaliação atual, organizada até a linha 49:

- Linhas 2–4: título, alternativas comparadas e legenda.
- Linhas 6–29: os 23 requisitos, funções vinculadas, notas das três modelagens, justificativa condensada e meta vinculada à aba Especificação Meta.
- Linha 30: encaminhamento atual, preservado em E30 para manter o vínculo com o restante do arquivo.
- Linhas 32–41: contagens, saldos parciais/completos, situação e controle de notas inválidas.
- Linhas 42–49: registro da escolha MF-B, hipóteses e condições essenciais, pendências, próxima etapa e referência metodológica.

Foram retirados da aba o quadro histórico M1/M2/M3, a triagem ponderada antiga, notas de revisões anteriores e blocos repetidos. O histórico existente nas pastas de logs foi preservado fora da aba. Justificativas de MF-B/MF-C foram reunidas por requisito, mantendo o sentido dos julgamentos e suas condições; a coluna de metas mantém fórmulas para a fonte atual.

**Nenhuma nota foi alterada.** Os 69 valores de comparação foram transferidos pela identidade RP1–RP23, preservando todos os vínculos com as 17 funções. MF-B continua selecionada para desenvolvimento, com saldo parcial +2; MF-C conserva −1 e MF-A permanece datum 0. Continuam nove AV em cada alternativa comparada e os saldos completos pendentes.

Foram ajustadas larguras, alturas, bordas, cores de notas e cabeçalho congelado. A grade preta herdada da formatação padrão das colunas foi removida, inclusive dos espaços vazios. As validações antigas foram substituídas pelas listas nas novas posições das notas. A formatação condicional distingue +1, −1, AV e notas inválidas, sem transformar ausência de avaliação em zero.

Fora dessa aba, apenas `Modelagens Alternativas!B68` teve o texto da fórmula atualizado para remover a referência às antigas linhas 125–132. O vínculo com E30 foi preservado. As demais abas, critérios, metas, pesos, MIM, segunda Pugh, figuras e gráfico não foram modificados.

Os testes e a preservação do pacote estão em [verificacao.json](verificacao.json): correspondência dos 69 escores, contagens/saldos, reação a mudanças nas vantagens, entradas inválidas/vazias, datum alterado, decisão ausente e empate; reabertura, inspeção visual e recálculo obrigatório de uma cópia no LibreOffice. A exportação do LibreOffice foi usada apenas para verificação, sem substituir o pacote da entrega.

Relatório e Figma não foram alterados nesta rodada. Não houve mudança de avaliação física ou de seleção da concepção.
