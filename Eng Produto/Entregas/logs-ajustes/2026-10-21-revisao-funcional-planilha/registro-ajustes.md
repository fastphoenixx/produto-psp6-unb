# Revisão das modelagens, FAST e primeira Pugh

Data: 21 de outubro de 2026.

**Revisão posterior da seleção:** a Pugh de dois critérios e a indicação MF-B abaixo foram substituídas pela [comparação ampla dos 23 RP](../2026-10-21-pugh-ampla/registro-ajustes.md), com seleção em aberto. O restante desta entrada registra a rodada anterior e seus hashes.

## Solicitação e base preservada

Alinhar a planilha ao trio redesenhado no Figma, mantendo a linha requisitos → funções → FAST → estruturas funcionais → seleção → princípios e concepções.

Permanecem os 23 requisitos e suas metas de trabalho, os pesos e julgamentos anteriores de Kano/Mudge/QFD e o catálogo de 17 funções. A opção de 15/10 por estudar a peça descoberta permanece como fronteira comum. Ela não seleciona uma das três novas estruturas.

- **MF-A:** F11 → F01 → F02, com amortecimento na interface da peça.
- **MF-B:** F01 → F11 → F02, com amortecimento antes do conjunto portador.
- **MF-C:** F01a → F11 → F01b → F02, com dois estágios de F01.

F01a/F01b são desdobramentos de F01. Não criam requisitos, funções base ou módulos exclusivos. M1/M2/M3 identificam fronteiras históricas; C1/C2/C3 identificam combinações físicas posteriores. OP-01 não integra a base do novo trio.

## Alterações

As abas Função Global, FAST, Funções Parciais e Modelagens Alternativas explicitam a fronteira direta, os fluxos de material, energia e sinal, os grupos funcionais e os vínculos aos RP. Na FAST, os meios passam a detalhar contatos, movimento relativo, absorção/dissipação de energia, distribuição de esforços, observação e contenção. As relações de finalidade e meios são distintas da posição de F01 no caminho de energia das alternativas.

Os quadros permanecem editáveis. Cinco imagens foram atualizadas: global, FAST e o trio. A imagem V0 foi preservada. As seis imagens continuam com 1.000 pixels de largura de exibição e abaixo do conteúdo das células.

## Primeira Pugh revisada

MF-A é datum por representar a organização de interface já estudada sob proteção direta. A comparação usa −1/0/+1, sem novos pesos. A cobertura comum das funções não recebe linhas artificiais de empate; continua como condição obrigatória, acompanhada do encaminhamento dos 23 RP.

| Critério | Origem | MF-A | MF-B | MF-C |
| --- | --- | ---: | ---: | ---: |
| CF01: separar o estágio amortecedor do contato diretamente ajustável à peça | F01/F07; RP7/RP12 | 0 | +1 | 0 |
| CF02: evitar a interação entre dois estágios amortecedores | F01; RP12/RP18 | 0 | 0 | −1 |
| Saldo funcional preliminar | Dois julgamentos conceituais | 0 | +1 | −1 |

O +1 da MF-B registra a separação proposta entre o estágio amortecedor e o contato ajustável. A MF-C ainda mantém um estágio junto à peça. Isso não demonstra menor aceleração, melhor uniformidade ou independência de toda regulagem.

O −1 da MF-C registra a compatibilização adicional das respostas de dois estágios. Não presume mais componentes, pior manutenção, maior custo ou pior proteção. Distribuir a atenuação em dois níveis é uma hipótese de benefício que deverá ser analisada.

**Encaminhamento:** MF-B tem indicação conceitual para aprofundamento. Trata-se de julgamento de engenharia registrado nesta revisão, sem atribuí-lo a uma nova resposta do usuário ou da professora. A estrutura precisa compatibilizar carga sustentada, massa, compressão, estabilidade, deslocamento residual e os demais requisitos.

**Sensibilidade:** se CF01 da MF-B passar para zero, MF-A e MF-B empatam. Se CF02 da MF-C passar para zero, seu saldo volta a zero. Reabrir a seleção quando os princípios não mantiverem a separação proposta ou demonstrarem benefício dos dois estágios que justifique seu acoplamento. Não se usou o número de funções como prova de desempenho.

Os totais, a contagem das notas e o encaminhamento são calculados. AV ou nota fora da escala impedem um resultado válido. O datum tem lista de validação restrita a zero; MF-B/MF-C aceitam −1/0/+1/AV. As validações das antigas linhas de notas removidas não permanecem nos textos explicativos.

## Dependências posteriores

Morfológica, Concepções, MIM, Arquitetura Modular e segunda Pugh recebem notas de dependência. C1/C2/C3 são combinações anteriores sob proteção direta e precisam ter a aderência a MF-B revista antes da segunda seleção. Não foram declaradas novas concepções nem transferidos resultados pelo nome.

Os 156 julgamentos numéricos e os cálculos da MIM permanecem históricos e preservados. A reavaliação deve considerar o estágio anterior ao conjunto portador, a massa/carga sustentada, os contatos e as interfaces de ajuste, contenção e inspeção. A indicação MF-B não aprova os módulos nem RP20.

O quadro de custeio da proteção direta vale como estrutura de cálculo para o trio, sem cotação específica ou economia demonstrada. Permanecem preparo no distribuidor, custo e destino da embalagem, retorno, manutenção, consumíveis e avaria residual.

## Figuras utilizadas

- [Função global](https://www.figma.com/design/hF2hV3uNVjhzfP6jEfPY7F/UNB?node-id=44-2)
- [FAST revisada](https://www.figma.com/design/hF2hV3uNVjhzfP6jEfPY7F/UNB?node-id=49-2)
- [MF-A](https://www.figma.com/design/hF2hV3uNVjhzfP6jEfPY7F/UNB?node-id=27-2)
- [MF-B](https://www.figma.com/design/hF2hV3uNVjhzfP6jEfPY7F/UNB?node-id=27-103)
- [MF-C](https://www.figma.com/design/hF2hV3uNVjhzfP6jEfPY7F/UNB?node-id=27-204)

## Verificação e limites

O arquivo final é conferido por reabertura, recálculo da Pugh, renderização das vistas modificadas e comparação das partes internas com o original. A preservação verifica os 33 nomes de abas, requisitos/metas/pesos, o catálogo, os valores e fórmulas não envolvidos, as imagens, o gráfico e as relações internas do pacote.

Os testes de entrada cobrem a retirada da vantagem de CF01, empate parcial, AV, valor fora da escala e restauração das notas. As imagens são verificadas por conteúdo, tamanho e posição. Os resultados e hashes específicos desta rodada estão em verificacao.json.

Nenhum ensaio físico ou nova coleta de campo foi realizado. As metas continuam provisórias conforme o plano de validação já existente. O relatório e o PDF complementar produzidos antes deste trio não foram recompilados nesta rodada; a planilha e este registro documentam a revisão atual. A Pugh antiga do Figma e do PDF não deve ser usada como resultado de MF-A/MF-B/MF-C.
