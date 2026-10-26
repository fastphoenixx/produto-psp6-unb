# Relatório complementar de modelagem funcional

Data: 25 de outubro de 2026.

**Revisão posterior no mesmo dia:** o [refinamento funcional](../2026-10-25-refino-funcional/registro-ajustes.md) atualizou os desenhos, a planilha e o relatório para a orientação verbo + substantivo e incluiu a relação com as referências. O PDF atual tem dez páginas; os hashes e as nove páginas abaixo pertencem à criação inicial.

## Solicitação

Preparar um relatório que explique os motivos da entrega, usando a escrita e o visual do projeto e uma estrutura semelhante ao PDF de modelagem funcional do Grupo 9 fornecido pela equipe.

## Entrega

Criado o [relatório de modelagem funcional e seleção](../../relatorio-modelagem-funcional/Relatorio_Modelagem_Funcional_Equipe2.pdf), com nove páginas e fontes LaTeX editáveis. A tipografia, o esquema neutro, as legendas, as fontes e a linguagem técnica seguem o relatório-base. O formato em paisagem favorece os diagramas e a comparação completa.

O documento explica:

1. O objetivo da entrega, a função global e os fluxos de material, energia e sinal.
2. A continuidade necessidades/requisitos/Kano/Mudge/QFD → metas → 17 funções, preservando atributos e restrições.
3. A finalidade e os meios no FAST e as capacidades de suporte oferecidas pelo produto.
4. As diferenças entre amortecimento na interface, antes do portador e em dois estágios.
5. A primeira Pugh com os 23 RP e as 69 notas atuais.
6. As hipóteses H1–H5, as equivalências, as duas vantagens da MF-B, a desvantagem prevista da MF-C e os nove AV.
7. A seleção da MF-B para desenvolvimento, sua sensibilidade e as condições para rever a escolha.
8. O encaminhamento à morfológica e à revisão de concepções, MIM e arquitetura antes da segunda Pugh.

Os diagramas foram extraídos do pacote Excel atual. O corte das margens retira áreas vazias, títulos duplicados e notas já tratadas no texto, mantendo os blocos, fluxos e funções representados. O PDF de terceiro foi usado como referência de organização e não foi copiado para o repositório.

## Preservação e limites

A planilha mantém o hash `ad7d44d83b817ee00eca5de90e56ce8a2fdb738405671ef84c43f8b12927f699`. Nenhuma nota, meta, fórmula, função, peso ou decisão foi alterada. O relatório geral e o Figma também não foram modificados. O novo documento apresenta a revisão atual da entrega funcional; não substitui uma futura consolidação completa do relatório geral.

Mantidos os saldos parciais 0/+2/−1, nove AV em MF-B e MF-C, a seleção funcional da MF-B e a ausência de seleção de concepção física. Catálogos e premissas de envelope não foram apresentados como ensaios ou resultados operacionais. Nenhum teste físico ou nova coleta de campo foi realizado nesta rodada.

## Verificação

- Compilação final aprovada no XeLaTeX e no compilador do editor do Codex.
- Nove páginas A4 em paisagem, todas inspecionadas visualmente.
- Comparação das 69 notas extraídas do PDF renderizado com a planilha.
- Catálogo de 17 IDs conferido, sem criar IDs para atributos ou custo.
- Sem avisos de transbordamento ou caracteres ausentes no log final do XeLaTeX.
- Textos dentro das páginas; figuras, tabelas, cabeçalhos e rodapés conferidos.

O arquivo `verificacao.json` registra o hash do PDF e os resultados da conferência. As fontes tipográficas locais estão ignoradas no Git para evitar redistribuir arquivos de sistema.
