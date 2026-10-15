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

O projeto informacional foi elaborado para orientar as concepções, com metas de trabalho ainda dependentes de validação. A versão 0.15 mantém as correções do Feedback 2 e acrescenta a MIM pontuada na referência de estudo C1: 12 direcionadores, 13 portadores, 156 justificativas e indicação de quatro núcleos. O projeto conceitual continua em desenvolvimento, com interfaces, dimensionamento e ensaios pendentes.

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

## Estado atual do Projeto Conceitual — revisão de 14/10/2026

| Etapa | Situação |
|---|---|
| V0, função global e FAST | Elaboradas, distinguindo funções, atributos, estimativas e observação |
| Modelagens M1/M2/M3 | Descritas e diagramadas; interface de inspeção ainda em estudo |
| Pugh das modelagens | Triagem inicial 12/0/40 preservada como histórico; notas revisadas AV impedem seleção definitiva |
| TRIZ | Contradições e princípios explorados por analogia; números e conceitos corrigidos; consulta 39×39 não declarada como comprovada |
| Morfológica | Combinações preliminares C1/C2/C3, sem troca de insertos durante ajuste |
| MIM e arquitetura | MIM pontuada para C1, escala 0/1/3/5 da base; quatro núcleos propostos e OP-01 fora por padrão; interfaces e troca independente ainda não demonstradas |
| Concepções e seleção | Três propostas descritas; Pugh preparado com notas AV, sem concepção final |
| Técnica, valor e FMEA | Verificações e falhas a investigar registradas; nenhum resultado de ensaio ou prioridade de risco inventado |
| Viabilidade | Cenário condicional e entradas faltantes expostos; vantagem econômica não demonstrada |

O registro de choque é OP-01, complemento opcional da M3. Ele não substitui a inspeção requerida pelo RP4. A M3 permanece candidata exploratória. A planilha mantém as 33 abas, seus nomes e visibilidades, bem como os objetos nativos das áreas não alteradas.

Fonte dos números: `Entregas/planilha/Planilha_PSP6_Grupo2_Loucas.xlsx`. Relatório e planilha devem ser atualizados na mesma rodada.

## Feedback e histórico de ajustes

O [registro do Feedback 2](../logs-ajustes/2026-10-14-feedback-2-equipe-2/registro-ajustes.md) preserva a imagem original, a transcrição e a correspondência entre cada ponto e os trechos corrigidos. A correção documental está separada das validações de campo ainda pendentes.

O [registro de elaboração da MIM](../logs-ajustes/2026-10-14-mim/registro-ajustes.md) documenta as hipóteses, a convenção da base, os julgamentos, os agrupamentos e os testes desta etapa. A referência C1 não foi selecionada como vencedora; C2/C3 exigem seus próprios portadores e reavaliação.

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
