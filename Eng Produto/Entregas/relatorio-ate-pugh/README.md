# Entrega até a primeira Pugh

Cópia independente do relatório acadêmico, com o mesmo padrão de escrita e visual. O conteúdo termina na seleção da modelagem funcional M1 e na explicação da decisão pela primeira matriz de Pugh.

- Mantém pré-desenvolvimento, projeto informacional, especificações-meta, modelagem funcional, FAST, M1/M2/M3, matriz completa, justificativas e sensibilidade.
- Não inclui seções posteriores de TRIZ, morfológica, MIM, arquitetura, concepções, conclusão, referências bibliográficas ou anexos.
- Preserva as 23 metas, os 23 pesos e as 69 notas: M1 +7, M2 0, M3 −4, com M2 datum.
- Mantém os créditos e as citações autor-data no corpo. `bibentry` fornece os dados das citações sem imprimir uma seção de bibliografia. `referencias.bib` é suporte de compilação.
- A versão completa em `../relatorio/` permanece inalterada.

## Arquivos

PDF de entrega: `Relatorio_Engenharia_Produto_Loucas_ate_Pugh.pdf`. Fonte principal: `main.tex`. Fontes das figuras: `figuras/`. Texto: `secoes/`.

Compilação: `xelatex main.tex`, `bibtex main` e três execuções de `xelatex main.tex`, até estabilizar as citações e o sumário. A pasta local `fontes/` fica ignorada pelo Git, com as mesmas alternativas de tipografia da versão completa.

## Conferência

57 páginas. O documento termina na seleção fundamentada da M1. As 23 metas, os 23 pesos e as 69 notas foram conferidos, assim como o sumário e os diagramas. `conferencia.json` registra os hashes e as verificações. O PDF e os arquivos do relatório completo permanecem idênticos aos originais.
