# Princípios de solução — Equipe 2

Relatório avulso em LaTeX, revisado em 7 de novembro de 2026 a partir de `Principios_de_Solucao_Equipe_2.docx`. Não altera o relatório consolidado nem a planilha operacional.

## Arquivos

- `Principios_de_Solucao_Equipe_2.pdf`: versão compilada para leitura e entrega.
- `main.tex`: entrada principal para edição/Overleaf.
- `configuracao.tex`: tipografia e macros; derivada do padrão existente em `relatorio-ate-pugh/configuracao.tex`.
- `secoes/`: texto organizado por assunto, incluindo a matriz morfológica.
- `referencias.bib`: bibliografia autor-data, processada com BibTeX.
- `figuras/`: 112 imagens extraídas do DOCX, sem reamostragem; os créditos e links permanecem no anexo.
- `dados/conteudo-original.json`: fotografia de auditoria do conteúdo recebido, incluindo hashes. Editar esse JSON não regenera automaticamente o LaTeX; editar o texto em `secoes/`.
- `tests/test_integridade.py`: verificações de preservação do conteúdo no PDF.
- `verificacao.json`: resultado e escopo das verificações da edição entregue.

## Compilar

Requer TeX Live/MiKTeX com XeLaTeX, BibTeX, latexmk e os pacotes usados em `configuracao.tex`.

```bash
bash compilar.sh
```

O script pode ser chamado de qualquer diretório. Mantém intermediários em `build/` e copia o PDF final para esta pasta. Se o motor XeTeX existir sem `xelatex.fmt`, inicializa o formato apenas em `build/formats/`, sem habilitar formatos globais ou instalar pacotes no sistema.

No Overleaf, importar o pacote ZIP, selecionar `main.tex` como documento principal e **XeLaTeX** como compilador. Não é necessário usar `compilar.sh` no Overleaf. Não foi feita publicação/envio a uma conta Overleaf. O pacote foi extraído em uma pasta limpa, recompilado com sucesso e comparado com a edição entregue: mesmo texto nas 17 páginas e mesmos links. Nessa pasta, dez testes passaram e a checagem do DOCX privado foi corretamente dispensada. Na pasta original, os 11 testes passaram sem dispensas.

A tipografia segue o padrão do avulso anterior: corpo 12 pt, entrelinha 1,5 e margens retrato de 3 cm superior/esquerda e 2 cm inferior/direita. Usa a fonte livre TeX Gyre Termes, compatível com o estilo Times; fontes proprietárias não são incluídas. O anexo usa páginas em paisagem e ajuste de margens para acomodar as quatro alternativas por função. Não se declara certificação integral de conformidade ABNT.

## Alterações aplicadas

1. A2 — TRIZ: explicitação dos nomes e da justificativa da tradução RP → parâmetro genérico nos oito casos com matriz; explicação da separação em T06/T09. Preservados cruzamentos, células do QFD, indicações, princípios e aplicações. Confiabilidade em T07 não é apresentada como sinônimo do CV.
2. A1 — economia: preservada a meta numérica RP23, mas explicados o caráter provisório, a fronteira do custo do dispositivo e a comparação operacional, incluindo preparo/transferência, embalagem atribuível e avaria residual. Não foi inventado estudo financeiro.
3. A3 — RP16: explicitado o princípio de sinalização humana do modelo, orientação e advertência; distinguido da indicação de fechamento e do serial. Mantida a meta de 5 m como verificação futura, sem alegar desempenho comprovado ou definir arte final.
4. A4 — M1: retirada da embalagem e preparo no distribuidor declarados; seleção funcional diferenciada da escolha de concepção física. C1/C2/C3 continuam exploratórias.
5. Apresentação: conversão para LaTeX, referências bibliográficas e anexo ilustrado; não foram introduzidos desenhos de concepção, novos requisitos, dimensionamento ou resultados de ensaio.

## Preservação e testes

Preservados 28 funções, 112 descrições de alternativas, 84 escolhas, 23 metas com seus vínculos, os dez casos TRIZ originais, 112 imagens e 184 ocorrências de links visuais. Os links foram comparados como anotações do PDF; não foram reabertas e auditadas novamente todas as páginas de fabricantes. As imagens são referências de mecanismos, não validação física do dispositivo.

```bash
python -m unittest discover -s tests -v
```

Os testes requerem Python com `pypdf`. Nesta estação, foi usado o ambiente documental existente do Hermes. A verificação do DOCX privado é opcional quando esse arquivo não está disponível no pacote compartilhado; a verificação de log requer compilação local. Os testes não substituem leitura técnica e inspeção visual.

Na preparação da edição de 07/11/2026 não houve commit, push nem envio ao Drive. A publicação posterior no GitHub é registrada no histórico do repositório; isso não significa envio à professora, ao Drive ou ao Overleaf. O DOCX recebido, a planilha e os dois relatórios anteriores foram preservados por SHA-256.
