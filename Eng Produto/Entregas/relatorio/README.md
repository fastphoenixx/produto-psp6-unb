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

O projeto informacional foi elaborado para orientar as concepções, com metas de trabalho ainda dependentes de validação. A versão 0.17 mantém as correções do Feedback 2 e separa 23 vínculos de requisitos de 17 funções. A primeira Pugh foi delimitada ao nível funcional: empate qualitativo, com M1 priorizada pela equipe para proteção direta da peça. Morfológica e concepções foram alinhadas. Os 156 escores anteriores da MIM permanecem históricos, com reavaliação aberta sob M1. Interfaces, dimensionamento, custo e segunda seleção continuam em desenvolvimento.

| Etapa | Situação |
|---|---|
| Ciclo de vida do produto | Concluída — ciclo macro e ciclo operacional sob estratégia ATO (13 fases) |
| Identificação das necessidades | Concluída — 44 necessidades (N-01 a N-44) |
| Requisitos dos clientes | Concluída — 23 requisitos (A–W), matriz de atributos, cenários e rastreabilidade |
| Importância dos requisitos | Elaborada — Kano preliminar da equipe, Mudge (253 pares / 577 pts), Pareto (11 vitais) e benchmarking (R1–R4); revisão após ampliação do campo |
| QFD | Concluída — 23 RP, relacionamento, quantificação (12.223 pts) e correlação |
| Especificações-meta | Elaboradas — 23 metas de trabalho e linha de base; confirmação ou revisão por coleta e ensaios ainda pendente |
| Legislação e normas | Concluída no pré-desenvolvimento — NR-17, NR-11, NR-18, CONTRAN 945, PNRS, regras do DF e métodos de ensaio |
| Custo-meta | Teto provisório do dispositivo: até R$ 15/ciclo; a operação completa inclui caixa mantida, retorno, manutenção, consumíveis e avaria residual |

## Estado atual do Projeto Conceitual — revisão de 15/10/2026

| Etapa | Situação |
|---|---|
| V0, função global e FAST | Elaboradas; 23 vínculos V separados de 17 funções F; uniformidade, umidade, vida, geometria e custo permanecem critérios |
| Modelagens M1/M2/M3 | Descritas e diagramadas; M1 priorizada para proteção direta após preparo no distribuidor |
| Pugh das modelagens | Histórico 12/0/40 preservado; comparação funcional com cinco critérios, saldo 0/0/0; preferência explícita por M1 |
| TRIZ | Contradições e princípios explorados por analogia; números e conceitos corrigidos; consulta 39×39 não declarada como comprovada |
| Morfológica | C1/C2/C3 sob M1: contato direto protegido e inspeção pela própria barreira; OP-01 fora das bases; sem troca de insertos durante ajuste |
| MIM e arquitetura | Escores 0/1/3/5 e quatro núcleos anteriores preservados como histórico; reavaliar 156 relações e interfaces sob M1 antes de adotá-los |
| Concepções e seleção | Três propostas sob M1; segunda Pugh com C1 datum e C2/C3 AV, sem concepção final |
| Técnica, valor e FMEA | Verificações e falhas a investigar registradas; nenhum resultado de ensaio ou prioridade de risco inventado |
| Viabilidade | Quadro M1 inclui preparo e destino/custo atribuível da embalagem; cenário M2/M3 preservado separadamente; vantagem econômica não demonstrada |

O registro de choque é OP-01, complemento fora das configurações base. Ele não substitui RP4. M3 continua uma alternativa sobre volume embalado; acrescentar futuramente OP-01 à M1 não altera sua fronteira material direta. A planilha mantém as 33 abas, seus nomes e visibilidades, bem como os objetos nativos das áreas não alteradas.

Fonte dos números: `Entregas/planilha/Planilha_PSP6_Grupo2_Loucas.xlsx`. Relatório e planilha devem ser atualizados na mesma rodada.

## Feedback e histórico de ajustes

O [registro do Feedback 2](../logs-ajustes/2026-10-14-feedback-2-equipe-2/registro-ajustes.md) preserva a imagem original, a transcrição e a correspondência entre cada ponto e os trechos corrigidos. A correção documental está separada das validações de campo ainda pendentes.

O [registro de elaboração da MIM](../logs-ajustes/2026-10-14-mim/registro-ajustes.md) documenta as hipóteses, a convenção da base, os julgamentos, os agrupamentos e os testes desta etapa. A referência C1 não foi selecionada como vencedora; C2/C3 exigem seus próprios portadores e reavaliação.

O [registro da revisão funcional](../logs-ajustes/2026-10-15-requisitos-funcoes/registro-ajustes.md) documenta a natureza dos requisitos, o catálogo de funções, a migração de IDs e a conferência de FAST, estruturas alternativas, morfológica e MIM. Os julgamentos da MIM e as metas foram preservados.

O [registro da primeira Pugh e da prioridade M1](../logs-ajustes/2026-10-15-pugh-funcional/registro-ajustes.md) documenta os critérios, as justificativas, a escolha da equipe, o encaminhamento dos 23 requisitos e os efeitos sobre concepções, custo e reavaliação da MIM.

## Compilação

Execute a partir desta pasta:

```bash
xelatex main.tex
bibtex main
xelatex main.tex
xelatex main.tex
```

O documento usa a classe `article` apenas como base técnica do LaTeX e uma configuração inspirada na ABNT: papel A4, margens 3 cm/2 cm, fonte Times New Roman 12 (Liberation Serif quando Times New Roman não estiver instalada), espaçamento 1,5, parágrafo de 1,25 cm, seções numeradas, citações autor-data, legendas e indicação de fonte. A classe não define a estrutura do conteúdo; as fases seguem o relatório-base.

Os nomes e as matrículas ficam no arquivo local ignorado `_inbox/privado/relatorio-autores.tex`. Sem esse arquivo, a capa exibe apenas “Equipe 2”. O PDF com a capa preenchida deve permanecer fora do repositório público.

Os trechos destacados como “Ponto a validar” indicam informações que devem ser confirmadas com a equipe ou em campo antes de serem tratadas como requisito.

---
