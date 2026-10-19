# Diagramas do Figma incorporados à planilha

Registro: 19 de outubro de 2026.

Pedido: acrescentar os prints das modelagens e da FAST nas abas correspondentes da planilha operacional.

Foram inseridas seis imagens PNG, inicialmente com 1.600 pixels de largura. Após a solicitação de manter as duas representações e diminuir os prints, a largura foi reduzida para 1.000 pixels, preservando as proporções e os quadros editáveis em células. Todas ficam abaixo dos quadros existentes, sem inserir linhas nem deslocar células. Os diagramas editáveis permanecem no arquivo UNB do Figma.

| Diagrama | Aba | Início | Fonte |
| --- | --- | --- | --- |
| GLOBAL | `Função Global` | B64 | [Prancha no Figma](https://www.figma.com/design/hF2hV3uNVjhzfP6jEfPY7F/UNB?node-id=3-21) |
| V0 | `Modelagem V0` | B13 | [Prancha no Figma](https://www.figma.com/design/hF2hV3uNVjhzfP6jEfPY7F/UNB?node-id=3-83) |
| M1 | `Modelagens Alternativas` | B72 | [Prancha no Figma](https://www.figma.com/design/hF2hV3uNVjhzfP6jEfPY7F/UNB?node-id=3-153) |
| M2 | `Modelagens Alternativas` | B116 | [Prancha no Figma](https://www.figma.com/design/hF2hV3uNVjhzfP6jEfPY7F/UNB?node-id=3-245) |
| M3 | `Modelagens Alternativas` | B160 | [Prancha no Figma](https://www.figma.com/design/hF2hV3uNVjhzfP6jEfPY7F/UNB?node-id=3-335) |
| FAST | ` FAST ` | B23 | [Prancha no Figma](https://www.figma.com/design/hF2hV3uNVjhzfP6jEfPY7F/UNB?node-id=3-449) |

## Verificação

- As 33 abas mantêm nomes, ordem, células, valores, fórmulas, resultados salvos, estilos, validações e objetos anteriores.
- Os seis PNGs incorporados são idênticos aos prints revisados do Figma. As relações internas do XLSX foram verificadas.
- As posições foram conferidas contra o último conteúdo de cada aba e as alturas das linhas, sem sobrepor os quadros ou outras imagens.
- As seis áreas alteradas foram renderizadas a partir do arquivo final preparado e examinadas visualmente. Nenhum texto foi cortado pelas imagens.
- A inclusão das figuras não altera a prioridade M1, o caráter opcional de OP-01 nem as pendências técnicas registradas no projeto.

Os hashes de entrada e saída e o inventário das figuras estão em `verificacao.json`. O registro descreve esta rodada de inserção e não substitui validação física do produto.

## Redimensionamento solicitado pela equipe

A redução de 37,5% na largura e na altura e a aproximação das figuras M2 e M3 alteraram somente os quatro arquivos de desenho internos ao XLSX. Os XMLs das 33 abas e todos os demais componentes do arquivo permaneceram idênticos à versão anterior. As tabelas existentes também foram comparadas com a cópia anterior à inserção dos prints, confirmando a preservação das duas representações. As seis áreas foram examinadas novamente após o ajuste. Os hashes e as posições desta revisão estão em `verificacao-redimensionamento.json`.
