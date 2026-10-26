# Alinhamento da planilha e do Figma à apresentação adotada

Data: 26/10/2026.

A equipe definiu a apresentação [Modelagem Funcional — PSP6](https://docs.google.com/presentation/d/1PIiw4DZbp-6MtumhLrUObnUPZhm7Tn64/edit) como a nova referência da entrega e solicitou conferir e ajustar a planilha e o Figma. Foi consultada a versão modificada em 26/10/2026, com 154.824 bytes. O hash está no arquivo de verificação. A revisão anterior da planilha tinha SHA-256 `85ba52bad402eb1cf371e5bbcf17167edcb7c09345edce378260a56f5dc919f5`.

## Base adotada

- Função global: **Proteger louça**.
- Sete parciais: Imobilizar louça, Atenuar esforços, Conter fragmentos, Acomodar louça, Movimentar conjunto, Informar condição e Liberar louça.
- Vinte e uma elementares da M1, sete complementares comuns ao ciclo de vida, quatro adicionais de monitoramento da M3 e Abrir acesso adicional de M2/M3.
- Quinze RP geram funções; RP8/RP10/RP12/RP13/RP14/RP18/RP20/RP23 são tratados como parâmetros ou restrições. As metas continuam aplicáveis.
- M1: proteção direta da louça descoberta. M2: proteção do volume embalado. M3: cadeia da M2 com monitoramento de impacto em paralelo.
- Primeira Pugh ponderada pelos graus do Mudge/Pareto, M2 como datum e **M1 selecionada para desenvolvimento**, com totais **+7/0/−4**.

Essa referência substitui MF-A/MF-B/MF-C e a escolha MF-B na entrega funcional atual. As antigas nove AV pertenciam à comparação anterior; não foram tratadas como ensaios concluídos. A nova matriz reproduz os 23 critérios e as 69 notas da apresentação adotada, sob suas premissas.

## Planilha

Reorganizadas Função Global, FAST, Funções Parciais, Modelagens Alternativas e Matriz Pugh das Modelagens. O catálogo usa P1–P7, E01–E21, C01–C07, O01–O04 e A01 apenas como IDs de rastreabilidade. Os efeitos equivalentes sobre o volume preservam os IDs, com o material explicitado nos nomes.

Mantidas tabelas editáveis e figuras. Cinco imagens do Figma foram atualizadas nas mesmas relações do pacote; a imagem V0 permanece como referência da situação anterior. As figuras atualizadas usam 1.000 px de largura e proporção preservada, abaixo das tabelas. Foram mantidos seis objetos de imagem e o gráfico nativo.

Os critérios da Pugh seguem a ordem do Pareto e da apresentação. Os pesos leem a aba Diagrama de Pareto e os totais usam SOMARPRODUTO. Há validação de notas entre −1 e +1, identificação de notas incompletas/inválidas e decisão que sinaliza empate ou necessidade de revisão. As metas continuam vinculadas à Especificação Meta. A aba não recebeu o histórico das versões anteriores.

Os vínculos de Morfológica/MIM foram redirecionados ao catálogo atual, incluindo os IDs das parciais na morfológica. Dados, Especificação Meta, Arquitetura, Concepções e segunda Pugh receberam encaminhamento coerente com M1. O diagnóstico V0 recebeu esclarecimento sobre a ausência de força medida. A revisão e a fonte foram registradas nas abas existentes.

Os princípios, portadores e escores posteriores permanecem estudos a revisar: não se completou uma nova morfológica de 21 linhas, não se reavaliaram os escores da MIM nem se selecionou concepção física. A necessidade de completar a cobertura das 21 elementares e sete complementares está explícita antes da segunda seleção. A posição do amortecimento não é fixada pela escolha da fronteira M1.

## Figma

Atualizados os nós existentes da função global (44:2), FAST (49:2), M1/M2/M3 (27:2, 27:103, 27:204), primeira Pugh (11:441) e guia (3:2). Criada prancha de ciclo de vida (109:1920). A representação segue a apresentação: material escuro, energia laranja e sinal azul tracejado. As funções e os textos continuam editáveis.

As pranchas anteriores foram preservadas na página **Histórico até 25-10-2026**, ID 109:2. O conteúdo ativo identifica a revisão de 26/10. O FAST mostra as três elementares de cada parcial no mesmo nível, evitando interpretar colunas como etapas sucessivas de decomposição.

## Premissas e limites mantidos visíveis

As 69 notas foram preservadas conforme a entrega adotada. Folga de aproximadamente 20 mm por face, perda de resistência do papelão em umidade e reposição do indicador são premissas/referências da apresentação, sem ensaio realizado no fluxo. A escolha de tecnologia reutilizável de monitoramento pode mudar notas da M3.

O +1 da M3 em retirada segura reproduz a hipótese de aviso prévio do evento; o texto registra que alerta não comprova retenção nem retirada segura. Inspeção em M2/M3 depende de acesso pelo papelão e continua sujeita ao requisito de conjunto fechado. Peso zero de reciclabilidade não elimina RP19. O custo inclui preparo, destino da embalagem, retorno, manutenção, consumíveis e avaria residual.

O recorte físico continua sendo cubas e corpos individuais de bacias de porte médio. A menção da apresentação a geometrias variadas foi aplicada a esse mix, sem ampliar silenciosamente o escopo para kits montados ou caixas acopladas.

## Verificação

- Conferidas as 69 notas, os 23 pesos e vínculos de metas, o catálogo de funções e os textos dos diagramas.
- Recálculo de cópia descartável no LibreOffice, sem erros nas 33 abas. A entrega conserva o pacote original e seus recursos nativos, incorporando apenas conteúdo/estilos autorados e as figuras autorizadas.
- Testes de sensibilidade: M1 +7 na base; +2 sem a vantagem de imobilização; −1 sem as vantagens de imobilização e inspeção. O último caso pede revisão da seleção. Notas vazias e fora da escala não produzem um resultado válido.
- Conferidos nomes/ordem das abas, seis imagens, proporções, gráfico nativo e relações internas. QFD, Mudge, Pareto, Kano e requisitos de origem foram preservados; as 23 metas e os valores numéricos históricos de MIM/segunda Pugh permanecem.
- Revisão visual das tabelas alteradas, dos vínculos posteriores e das pranchas. Corrigidos rótulos, largura do catálogo e sobreposições de texto com setas antes da entrega.

Os hashes, resultados e evidências estruturais estão em `verificacao.json`, `figma-verificacao.json` e `testes-artifact.json`. Não houve nova coleta de campo, ensaio físico ou pesquisa de anterioridade.

O relatório complementar de 25/10 conserva o trio MF-A/MF-B/MF-C e foi identificado como histórico no seu README. O escopo desta solicitação foi a planilha e o Figma; os PDFs históricos não foram reescritos. Não foi realizado commit ou push nesta rodada.
