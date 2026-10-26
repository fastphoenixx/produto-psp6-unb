# Refinamento funcional conforme orientação da disciplina

Data: 25/10/2026. Solicitação: aplicar a avaliação das últimas melhorias, garantindo a linha lógica do projeto e as orientações de verbo + substantivo, sistema técnico, referências e requisitos.

## Alterações aplicadas

- Diagramas MF-A/MF-B/MF-C: cada bloco apresenta uma função, com ID separado do nome. Foram eliminados blocos compostos como “Suportar e portar”, “Acomodar e imobilizar” e “Expor condição e conter”. A posição do amortecimento está fora do nome da função.
- Fluxos: E tracejado identifica o caminho dinâmico proposto e a dissipação; M contínuo identifica a louça e a retenção se houver quebra; S traço-ponto identifica comandos e informação de condição, orientação e identidade. Interfaces e ciclo de vida aparecem como capacidades comuns, sem cronologia de tarefas.
- FAST: função global e funções principais mantidas, com meios separados em expressões verbo + substantivo. Os meios sem ID são desdobramentos, sem ampliar os 17 IDs-base ou definir módulos. A tabela descreve efeitos físicos, sem usar a própria função como sua explicação de “como”.
- Catálogo: efeitos físicos de F02/F04/F07/F08/F15 esclarecidos. Os 17 nomes e IDs foram preservados. F07 adapta fisicamente a interface; F08 trata de apoio/amarração e geometria de transporte. Nenhuma função de gestão foi acrescentada.
- Referências: criada a ligação dos 17 IDs aos princípios dos dossiês e às derivações dos requisitos. ER01-ER05 identificam fontes já estudadas. Os dossiês antigos receberam aviso para que seus 22 RC, massa de kit e fronteiras anteriores não sejam tratados como o projeto atual.
- Relatório complementar: novas figuras sincronizadas e página de referências aplicada às funções. Dez páginas revisadas; tipografia e apresentação preservadas.

## Planilha

Atualizadas 60 células de texto: 23 em Função Global, 13 em FAST, 17 em Funções Parciais e sete em Modelagens Alternativas. Os quadros editáveis continuam junto das imagens. Quatro das seis imagens foram substituídas mantendo os mesmos pontos de ancoragem e tamanho de exibição. Função global e V0 permaneceram com suas imagens anteriores.

O pacote final preserva as 33 abas, seus nomes/visibilidades, fórmulas, estilos, validações, seis imagens e gráfico nativo. Os XML das abas não envolvidas são idênticos aos da fonte, incluindo **toda a primeira Pugh**, Dados, QFD, Especificação Meta, Morfológica, MIM, Arquitetura e segunda Pugh.

## Seleção preservada

As estruturas mantêm o caminho dinâmico: MF-A F11-F01-F02; MF-B F01-F11-F02; MF-C F01a-F11-F01b-F02. F01a/F01b desdobram F01. A representação deixa esses caminhos explícitos, sem selecionar dimensões, materiais ou concepções físicas.

Mantidos os 23 critérios e todas as 69 notas. MF-B segue selecionada para desenvolvimento; os saldos parciais são 0/+2/-1 e os AV são 0/9/9. A avaliação completa segue pendente. A revisão não fornece evidência nova que confirme H3/H4 ou justifique mudar notas; as verificações técnicas e econômicas continuam obrigatórias.

## Verificação

- Catálogo, vínculos e nomes confrontados com a fonte; todas as fórmulas e células fora do escopo preservadas.
- Reabertura no Artifact Tool sem erros de fórmula identificados.
- Recálculo obrigatório de cópia no LibreOffice: sem erros nas 33 abas, com 60 textos, 69 notas, 23 vínculos de metas e resumo da seleção conferidos. A cópia exportada pelo LibreOffice não foi usada como entrega.
- Figma: 17 nomes-base presentes em cada alternativa, com F01a/F01b como desdobramentos na MF-C. Todos os rótulos de funções e meios seguem verbo + substantivo; nenhum texto ultrapassa os limites de seu bloco.
- PDF: compilação no XeLaTeX e no editor do Codex, dez páginas revisadas, cinco figuras atuais, sem transbordamento/caracteres ausentes. As 69 notas foram extraídas do PDF e confrontadas com a planilha.

Os resultados, hashes e nós atuais do Figma estão em `verificacao.json`. A fonte da planilha desta rodada é `ad7d44d83b817ee00eca5de90e56ce8a2fdb738405671ef84c43f8b12927f699`.

## Limites

Sem nova coleta, ensaio físico, desmontagem ou pesquisa de patentes. Teams/Gemini não foram apresentados como consultados. Referência documental não comprova atendimento, ineditismo ou viabilidade. O relatório geral e a Pugh histórica antiga no Figma não foram consolidados nesta revisão; a seleção vigente é a da planilha e do relatório complementar. As três modelagens e a FAST atuais no Figma foram atualizadas nos mesmos nós.
