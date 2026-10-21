# Primeira Pugh ampliada e alinhamento das dependências

Data: 21 de outubro de 2026.

**Avaliação posterior:** os quinze AV desta rodada foram reavaliados com princípios auxiliares e hipóteses explícitas. A [avaliação conceitual posterior](../2026-10-21-pugh-avaliacao/registro-ajustes.md) registra nove AV por alternativa e saldos parciais +2/−1 para MF-B/MF-C, mantendo a seleção em aberto. Esta entrada preserva a rodada anterior e seus hashes.

## Motivo e metodologia

A comparação anterior de MF-A/MF-B/MF-C restringia a pontuação a dois aspectos do amortecimento. Ela não representava suficientemente o conjunto das necessidades do produto. Esta revisão substitui essa comparação, sem alterar os requisitos, suas metas provisórias, os pesos anteriores ou as modelagens.

Materiais consultados: Aula 4, *Projeto Conceitual: Seleção da Modelagem Funcional*, slide 18; Aula 19, slides 6–7; Back et al. (2008), seção 7.3.4, p. 322–323, e seção 9.2, p. 369–372. O exemplo da aula compara danos, segurança, manutenção, robustez, esforço e custos. Back orienta confrontar as estruturas com as especificações e admite aprofundar mais de uma alternativa quando a escolha não estiver sustentada. Na triagem, admite critérios qualitativos agrupados em menor número. Portanto, não se interpretou que o método exige uma linha por função: adotaram-se os 23 RP para tornar a abrangência explícita nesta planilha.

Referência complementar: [MIT, O. de Weck, sessão 5, p. 9](https://ocw.mit.edu/courses/16-842-fundamentals-of-systems-engineering-fall-2015/dac225aff5a84125fd1bf9364d748221_MIT16_842F15_Ses_5_Design.pdf), critérios ligados aos requisitos, comparação no mesmo nível de abstração e saldo como orientação.

## Implementação

Na aba **Matriz Pugh das Modelagens**, o bloco B44:K101 passa a conter:

- RP1–RP23 em B48:K70, com critério e meta ligados à Função Global, funções vinculadas, notas e justificativas distintas de MF-B e MF-C em relação a MF-A.
- Síntese em C73:G80: vantagens, desvantagens, equivalências, AV, entradas inválidas, saldo parcial, saldo completo e situação.
- Encaminhamento calculado em E30 e B82. AV impede uma classificação completa; entrada vazia ou inválida exige revisão. O subtotal de itens avaliados não escolhe uma estrutura.
- Interpretação, condições de avanço e base metodológica no restante do bloco. A antiga tabela de encaminhamento foi integrada aos critérios; nenhum RP foi descartado.

O datum continua MF-A, com notas zero por definição. Para MF-B e MF-C, oito aspectos têm a mesma organização funcional descrita: RP4, RP5, RP6, RP10, RP16, RP17, RP21 e RP22. O zero refere-se à organização de inspeção, pega, contenção, comunicação, liberação, identidade ou união. Não declara área visível, retenção, legibilidade, tempo ou número de ações fisicamente equivalentes ou atendidos.

Os outros quinze RP ficam AV, com análise necessária registrada por linha. Os diferentes caminhos de energia e carga precisam de princípios, interfaces e estimativas comparáveis para sustentar julgamentos. Falta de ensaio, isoladamente, não impede uma avaliação conceitual fundamentada. Não foram inventados valores de desempenho nem custos.

## Resultado e continuidade lógica

**Seleção em aberto.** Cada alternativa comparada tem oito equivalências e quinze avaliações pendentes. O saldo parcial é zero; o saldo completo permanece pendente. Isso não é empate final nem rejeição das alternativas.

O +1 automático da MF-B e o −1 automático da MF-C foram retirados. Separar amortecimento e ajuste permanece uma hipótese para MF-B; distribuir a atenuação em dois níveis permanece uma hipótese para MF-C. Os benefícios e as limitações precisam ser comparados com os requisitos.

A decisão anterior de estudar **proteção direta da peça descoberta após preparo no distribuidor** permanece. Não foi substituída por outra fronteira nem confundida com a seleção do novo trio. As 17 funções e os conflitos do QFD permanecem aplicáveis.

Modelagens Alternativas, Morfológica, MIM, Arquitetura Modular, Concepções e segunda Pugh deixam de tratar MF-B como estrutura escolhida. Princípios e combinações anteriores continuam propostas de estudo, exigindo aderência funcional identificada. Os 156 julgamentos numéricos da MIM e os pesos da segunda Pugh são preservados. Ampliar princípios e análises das estruturas viáveis ajuda a concluir a primeira seleção; não dispensa essa seleção nem aprova C1/C2/C3.

## Verificação e limites

As evidências e os hashes da versão salva estão em `verificacao.json`; a comparação anterior está em `pugh-anterior.json`. A conferência verifica os 23 RP, os vínculos com as 17 funções, a preservação de metas/QFD/pesos, das imagens, do gráfico e das partes não envolvidas. Os testes exercitam AV, vazio, texto inválido, valor fora da escala, datum, subtotal, empate e mudança de indicação em cenários hipotéticos, restaurando as notas antes de salvar.

Não houve coleta ou ensaio físico. Relatório/PDF e a prancha antiga de Pugh no Figma continuam em versão anterior; o resultado atual da seleção está nesta revisão da planilha.
