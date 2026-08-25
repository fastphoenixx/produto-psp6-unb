# Revisão 03 — correção objetiva de overflow

Corrija o arquivo existente `psp6-semana-03-sustentacao-problema.html` sem mudar a linguagem visual.

## Defeito confirmado

Na renderização 1600×900, com o palco 1920×1080 escalado proporcionalmente, conteúdo interno ultrapassa a borda direita em quatro slides. A causa está nas larguras/grades internas, não no mecanismo de escala.

## Correções obrigatórias

1. Slide “Evidências e limites”: todo o painel da direita, textos e imagens devem terminar antes de x=1920. Reduza colunas/gaps/paddings e permita quebra de linha. Nenhum texto truncado.
2. Slide “Escala setorial”: a coluna clara da direita deve caber integralmente dentro do palco, incluindo “26 unidades fabris de médio e grande porte”, “8 estados produtores”, “≈ 7 mil empregos diretos” e “entre os 5 maiores produtores mundiais”. Preserve a fonte ANFACER clicável e visível.
3. Slide “Patentes”: as quatro capas devem aparecer completas dentro do palco. Faça uma grade real de quatro colunas que caiba entre as margens; reduza gaps, padding e largura das capas se necessário. IDs, descrições e links não podem vazar. As capas reais já incorporadas devem permanecer.
4. Slide “Fechamento metodológico”: a coluna clara e os quatro passos devem caber integralmente. Quebre textos longos e reduza tamanho apenas o suficiente, mantendo corpo mínimo legível.
5. Audite também os outros três slides. Garanta `overflow-wrap`, `min-width: 0` nos filhos de grid/flex e `overflow: hidden` no slide apenas como última contenção — o conteúdo precisa continuar visível, não simplesmente cortado.
6. Valide o layout-base em 1920×1080. Nenhum elemento pode ultrapassar x=1920 ou y=1080.

Não altere o conteúdo factual nem retire: dados ANFACER, enquadramento “campo anterior à disciplina”, fotos como evidência contextual e quatro capas de patentes.

*[Codex — 2026-08-23]*
