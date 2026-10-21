# Referência preliminar de peças e transporte

Data: 21/10/2026. Solicitação da equipe: definir limites realistas para peças médias, incluindo cubas e bacias/vasos, coerentes com o produto e os métodos de envio. A equipe autorizou definir as premissas com base nessa lógica.

## O que foi definido

A unidade de proteção é **uma peça cerâmica individual**, no fluxo distribuidor–obra, após retirada da embalagem original no distribuidor. O recorte inicial inclui cubas e corpos de bacias sanitárias. Caixa acoplada montada, monobloco, coluna e acessórios não entram automaticamente na mesma configuração. Não se propõe desmontar um conjunto de fábrica para fazê-lo caber.

| Parâmetro | Cubas | Bacias individuais |
|---|---:|---:|
| Maior dimensão horizontal nominal A | 350–600 mm | 500–630 mm |
| Dimensão horizontal perpendicular B | 300–420 mm | 340–400 mm |
| Altura nominal H | 80–200 mm | 350–420 mm |
| Massa cerâmica máxima para desenvolvimento | 15 kg | 40 kg |
| Orçamento externo carregado | 680 × 480 × 275 mm | 680 × 480 × 480 mm |
| Volume calculado desse orçamento | 0,089760 m³ | 0,156672 m³ |

As faixas são **premissas de desenvolvimento** apoiadas em exemplos de catálogo, não levantamento representativo de vendas nem declaração de compatibilidade. A amostra publicada reúne duas marcas e formatos diferentes; os extremos das faixas e tetos de massa são escolhas de projeto, ainda não amostradas em toda sua extensão.

Adotou-se reserva de ±10 mm por dimensão nominal para estudar ajuste. A Celite declara tolerância aproximada de 10 mm nas fichas consultadas; a aplicação da reserva a outras marcas é uma premissa conservadora a confirmar, sem atribuir a todos os fabricantes a mesma especificação. A/B são normalizados pelo maior e menor lado horizontal para evitar confusão entre largura e comprimento nas fichas. A peça permanece na orientação vertical de transporte; essa normalização não permite invertê-la ou apoiá-la em região inadequada.

A aceitação de um SKU exige confirmar forma, zonas frágeis, superfícies admissíveis de apoio, massa, centro de gravidade, imobilização, inspeção da cerâmica e contenção. Dimensões externas, isoladamente, não garantem atendimento.

## Catálogo, premissa e cálculo

Sete exemplos de catálogo e oito fontes estão em `Dados!B31:K39` e `Dados!B112:K128`, e em [fontes.json](fontes.json). Massas não publicadas permanecem vazias, com indicação de pesagem pendente. Os modelos incluem:

- Cubas Celite Q5 (350 × 350 × 135 mm, massa não informada na ficha), Celite D5 (450 × 400 × 95 mm normalizados, 9,5 kg) e Deca Liquid cerâmica L.13050.LQ.17 (500 × 350 × 140 mm normalizados, 9,746 kg líquidos).
- Bacias Celite Like (610 × 360 × 370 mm, 18 kg declarados), Celite Elite (565 × 360 × 400 mm, 27 kg declarados) e Deca LK P.23.17 (515 × 355 × 400 mm normalizados, 32,341 kg líquidos).
- Kit Deca Flex KP.381.BR.17: 600 × 360 × 760 mm normalizados, 39,449 kg líquidos. Seu volume delimitador é 0,16416 m³ antes de qualquer dispositivo. Ele ilustra por que um kit montado não pode ser tratado como o corpo isolado nem receber o antigo limite universal de 0,107 m³.

O orçamento de massa do dispositivo é de 8 kg, resultando em até 48 kg carregados no caso de bacia. Esse valor **não é limite de levantamento manual**. Manuseio deve ser estudado com carrinho ou outro apoio, mantendo a distinção entre força de partida RP3, pega RP5 e avaliação própria para levantar/carregar.

## Palete e transporte

- Palete de referência: 1200 × 1000 mm. Altura de 150 mm e tara de 35 kg são premissas, a substituir pelos dados do palete contratado. Não foi presumida capacidade de carga do palete.
- Três bases de 680 × 480 mm por camada, em T, com coordenadas verificáveis na planilha. Há folgas de 10 mm entre conjuntos e ausência de balanço/sobreposição no arranjo. A verificação geométrica reage à mudança das dimensões.
- Os 81,6% medem a ocupação de área. O número de peças continua três por camada, como na referência histórica; a base maior não demonstra ganho de frete. Verificar peças por volume de carga, massa, custo por peça e retorno no mesmo mix.
- Dois níveis por 24 h são o **caso de dimensionamento**, sujeito à operação real, ensaio e estudo de fluência. Não constituem liberação para empilhar. São seis conjuntos, 323 kg incluindo a tara assumida do palete e 1110 mm de altura no caso de bacias.
- Veículo de referência: Renault Master Furgão L1H1, catálogo brasileiro 2026, página 13. As dimensões da mesma versão foram usadas: comprimento útil 2606 mm, vão entre caixas de roda 1380 mm, altura útil 1700 mm e abertura traseira 1580 × 1627 mm. Dois paletes em linha ocupam 2400 mm de comprimento, têm folgas geométricas nominais e somam 646 kg neste estudo.
- A carga útil máxima publicada de 1450 kg não é o saldo disponível da viagem. Ocupantes, equipamentos, outras cargas e restrições por eixo devem ser conferidos. A verificação de dimensões não aprova amarração, acesso do equipamento, carga/descarga ou estabilidade. O veículo contratado pode exigir outro arranjo.

Na coluna de dois conjuntos carregados de 48 kg, a reação estática total na base é 0,94176 kN. O peso da unidade superior sobre a inferior é 0,47088 kN. São grandezas diferentes, separadas da carga externa aplicada numa prensa. Não incluem esforços dinâmicos, fluência, umidade ou amarração. A compressão deve percorrer a estrutura F11 fora da cerâmica e preservar amortecimento, imobilização e inspeção.

## Metas revistas e continuidade

| RP | Antes | Revisão preliminar | Justificativa e condição |
|---|---|---|---|
| RP7 | Curso ≥150 mm na dimensão governante | ≥300 mm em A e ≥150 mm em B, sem troca no ajuste | Com reserva, A varia de 340 a 640 mm e B de 290 a 430 mm. Verificar curso efetivo, contato e imobilização, além da caixa delimitadora. |
| RP8 | Ocupação ≥90% do PBR | Mínimo de desenvolvimento ≥80%, mantendo alvo de otimização ≥90% | A reserva geométrica do mix permite estudar três bases com 81,6%. Não há evidência de que 90% seja um mínimo confirmado do cliente; buscar densidade sem sacrificar proteção. Confirmar custo/frete por família antes da seleção final. Não declarar o alvo de 90% atendido. |
| RP14 | ≤0,107 m³ por peça; alvo0,096 | ≤0,090 m³/cuba e ≤0,160 m³/bacia individual | A caixa antiga era referência de uma peça específica. O recorte ampliado exige limites por família. O orçamento não comprova que uma concepção caiba nem que seja economicamente melhor; comparar a mesma peça e otimizar. |
| RP11 | ≥7,5 kN provisórios | Mantido, com caso de carga e duração explícitos | O cálculo estático não fundamenta reduzir o limite nem confirma a margem necessária. Continuam pendentes dimensionamento, fluência, umidade, proteção e ensaio. |
| RP12 | CV do pico≤10% | Valor mantido, protocolo esclarecido | Comparar unidades com a mesma peça, configuração e condição; repetir por família/extremo. Não misturar modelos de massas diferentes para calcular uniformidade entre unidades. |

Os limites anteriores e células alteradas são preservados em [valores-anteriores.json](valores-anteriores.json). As alterações não são resultados de ensaio nem confirmação da nova meta. Revisar requisitos provisórios pelo escopo físico é diferente de reduzir um requisito confirmado para aprovar uma concepção que falhou. O impacto sobre frete, economia, proteção e satisfação precisa ser confrontado com o distribuidor.

Foram atualizados Dados, Especificação Meta, caches vinculados da Função Global e Pugh, resumos de Modelagens Alternativas, a restrição de ajuste na Morfológica e as duas menções de curso na Arquitetura, além da aba Revisão. A matriz do QFD, pesos, Kano/Mudge, catálogo de 17 funções e vínculos dos 23 RP foram preservados. As dependências geométricas não criam novas funções de gestão operacional.

MF-A, MF-B e MF-C recebem o mesmo mix, carga e orçamento de envelope. Definir a base não prova a superioridade de qualquer caminho de amortecimento. Continuam nove AV por alternativa; parciais MF-A=0, MF-B=+2 e MF-C=−1, com **seleção em aberto**. Os +1/−1 continuam condicionados às hipóteses auxiliares registradas. As combinações físicas e a MIM não foram recalculadas como se já existisse estrutura selecionada.

O relatório, os PDFs e o Figma não foram atualizados nesta rodada. Seus registros anteriores não substituem esta revisão da planilha. É necessária uma consolidação editorial antes de apresentar esses documentos como uma mesma versão.

## Verificação

O registro [verificacao.json](verificacao.json) reúne o hash anterior/final, partes alteradas, verificação independente dos volumes, massas, cursos, arranjo sem sobreposição e caches, testes de variação das entradas, reabertura e inspeção visual. A autoria das células foi realizada com Artifact Tool e os trechos autorizados foram integrados ao pacote original, preservando abas, imagens, gráfico, fórmulas e objetos fora do escopo.

Passaram 19 verificações de fórmulas e sensibilidade, incluindo um/três níveis, mudança de massa, base dentro/fora do palete, massa vazia/zero/texto e nível fracionário. O importador do Artifact Tool apresentou uma limitação de atualização de dependências no nome existente `Dados `, com espaço final. Os testes de sensibilidade usaram as mesmas entradas, endereços e fórmulas em uma aba temporária sem esse espaço, sem alterar o nome da entrega. Além disso, o arquivo completo e três variações descartáveis foram recalculados no **LibreOffice Calc**, com perfil temporário configurado para recálculo obrigatório na abertura: os resultados, vínculos com as metas e a Pugh conferiram, sem erros de fórmula nas 33 abas. As variações verificaram um nível (630 mm e179 kg por palete), massa ausente (resultados pendentes) e base de710 mm (arranjo sinalizado para revisão). O arquivo exportado pelo LibreOffice não substituiu a entrega; a integração preservou o pacote original. A opção de recálculo obrigatório e seu valor foram conferidos no código oficial do [LibreOffice](https://raw.githubusercontent.com/LibreOffice/core/master/sc/inc/calcconfig.hxx).

Não houve ensaio físico, visita adicional ou teste da interface do Microsoft Excel nesta rodada.
