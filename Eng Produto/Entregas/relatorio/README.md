# Relatório acadêmico em LaTeX

O projeto foi separado em arquivos pequenos para facilitar a edição:

- `main.tex`: arquivo principal;
- `configuracao.tex`: tipografia, margens, títulos, tabelas e paginação;
- `dados-projeto.tex`: autoria, equipe, disciplina, título e estado do trabalho;
- `secoes/`: conteúdo do relatório, organizado segundo o padrão da disciplina;
- `referencias.bib`: referências bibliográficas.

## Estrutura padronizada

O relatório segue a mesma sequência do relatório-base:

1. Introdução;
2. Pré-Desenvolvimento;
3. Projeto Informacional;
4. Projeto Conceitual;
5. Consideração Final;
6. Referências Bibliográficas;
7. Anexos.

As técnicas e entregas aparecem como subseções da fase correspondente. Não há capítulos independentes de metodologia, plano de desenvolvimento ou discussão.

## Compilação

Execute a partir desta pasta:

```bash
xelatex main.tex
bibtex main
xelatex main.tex
xelatex main.tex
```

O documento usa a classe `article` apenas como base técnica do LaTeX e uma configuração inspirada na ABNT: papel A4, margens 3 cm/2 cm, fonte Times New Roman 12, espaçamento 1,5, parágrafo de 1,25 cm, seções numeradas, citações autor-data, legendas e indicação de fonte. A classe não define a estrutura do conteúdo; as fases seguem o relatório-base.

Os trechos destacados como “Ponto a validar” indicam informações que devem ser confirmadas com a equipe ou em campo antes de serem tratadas como requisito.
