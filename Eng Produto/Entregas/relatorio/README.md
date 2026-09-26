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

## Estado atual do Projeto Informacional

| Etapa | Situação |
|---|---|
| Ciclo de vida do produto | Concluída — ciclo macro e ciclo operacional sob estratégia ATO (13 fases) |
| Identificação das necessidades | Concluída — 44 necessidades (N-01 a N-44) |
| Requisitos dos clientes | Concluída — 23 requisitos (A–W), matriz de atributos, cenários e rastreabilidade |
| Importância dos requisitos | Concluída — Kano, Mudge (253 pares / 577 pts), Pareto (11 vitais) e benchmarking (R1–R4) |
| QFD | Concluída — 23 RP, relacionamento, quantificação (12.223 pts) e correlação |
| Especificações-meta | Concluída — 23 metas com linha de base da planilha |
| Legislação e normas | Concluída no pré-desenvolvimento — NR-17, NR-11, NR-18, CONTRAN 945, PNRS, regras do DF e métodos de ensaio |
| Custo-meta | Concluída no pré-desenvolvimento como teto provisório: até R$ 15/ciclo, frente a cerca de R$ 27,40 da situação atual |

Fonte dos números: `Entregas/planilha/Planilha_PSP6_Grupo2_Loucas.xlsx`. Relatório e planilha devem ser atualizados na mesma rodada.

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
