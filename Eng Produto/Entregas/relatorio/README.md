# Relatório acadêmico em LaTeX

O projeto foi separado em arquivos pequenos para facilitar a edição:

- `main.tex`: arquivo principal;
- `configuracao.tex`: tipografia, margens, títulos, tabelas e paginação;
- `dados-projeto.tex`: autoria, equipe, disciplina, título e estado do trabalho;
- `secoes/`: conteúdo do relatório, organizado segundo o padrão da disciplina;
- `referencias.bib`: referências bibliográficas;
- `figuras/`: diagramas vetoriais editáveis em TikZ, com o visual do relatório;
- `quadros/`: linhas dos quadros sincronizadas com o catálogo, as metas e a primeira Pugh da planilha.

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

A versão 0.19, de 26/10/2026, apresenta a análise e a recomendação em linguagem de entrega para uma empresa. O texto mantém o formato acadêmico e os diagramas vetoriais. A fundamentação combina dados publicados com atribuição, cálculos de engenharia e critérios de aceitação. As 23 metas, as notas da primeira Pugh e a seleção M1 foram preservadas.

**Orientação de escrita:** apresentar problema, evidências, método, resultados, condições e recomendação. Datas de atualização, controles da planilha, migrações e histórico de edição ficam em `logs-ajustes/`, fora do corpo do relatório. Dados externos não são resultados do dispositivo; metas adotadas não devem ser descritas como ensaios concluídos.

| Etapa | Situação |
|---|---|
| Ciclo de vida do produto | Concluída — ciclo macro e ciclo operacional sob estratégia ATO (13 fases) |
| Identificação das necessidades | Concluída — 44 necessidades (N-01 a N-44) |
| Requisitos dos clientes | Concluída — 23 requisitos (A–W), matriz de atributos, cenários e rastreabilidade |
| Importância dos requisitos | Elaborada — Kano preliminar da equipe, Mudge (253 pares / 577 pts), Pareto (11 vitais) e benchmarking (R1–R4); revisão após ampliação do campo |
| QFD | Concluída — 23 RP, relacionamento, quantificação (12.223 pts) e correlação |
| Especificações-meta | Elaboradas — 23 metas de trabalho e linha de base; confirmação ou revisão por coleta e ensaios ainda pendente |
| Legislação e normas | Concluída no pré-desenvolvimento — NR-17, NR-11, NR-18, CONTRAN 945, PNRS, regras do DF e métodos de ensaio |
| Custo-meta | Teto provisório do dispositivo: até R$ 15/ciclo; a operação completa considera preparo, custo atribuível/destinação da embalagem, retorno, manutenção, consumíveis e avaria residual, conforme a fronteira |

## Estado atual do Projeto Conceitual — revisão de 26/10/2026

| Etapa | Situação |
|---|---|
| Função global | Proteger louça; fluxos de material, energia e sinal, com limites e estados explicitados |
| Requisitos e funções | 23 RP; oito parâmetros/restrições tratados sem gerar blocos artificiais; exemplos de vínculo às metas |
| Parciais, elementares e complementares | Sete parciais, 21 elementares da M1 e sete complementares de retorno, manutenção e fim de vida |
| FAST | Catálogo atual, leitura por quê/como e elementares de cada parcial no mesmo nível |
| Modelagens M1/M2/M3 | M1: peça descoberta; M2: volume embalado e acesso adicional A01; M3: M2 com monitoramento paralelo O01–O04 |
| Primeira Pugh | 23 critérios, 69 notas e pesos do Mudge/Pareto; M2 datum; totais M1 +7, M2 0 e M3 −4; M1 selecionada para desenvolvimento |
| Fundamentação e sensibilidade | Notas diferentes de zero justificadas; retirar vantagem em imobilização leva M1 a +2, e retirar também inspeção leva a −1 |
| TRIZ e morfológica | Estudos de continuidade; completar a cobertura do catálogo atual antes de consolidar os princípios |
| MIM e arquitetura | 156 escores e agrupamentos anteriores preservados como estudos históricos; reavaliar cobertura, motivos e interfaces sob M1 |
| Concepções e segunda seleção | C1/C2/C3 em estudo; C1 datum da segunda Pugh, sem concepção final selecionada |
| Fundamentação técnica | Dados publicados, resultados de cálculo, bases de referência e critérios de aceitação, sem atribuição de ensaios ao dispositivo |
| Técnica, valor, FMEA e viabilidade | Condições de aceitação, modos de falha e cenários econômicos; estudos físicos exploratórios |

A consolidação desta entrega termina na primeira Pugh. A seleção funcional define a fronteira M1; não fixa a posição do amortecimento, os materiais, os módulos ou uma concepção física aprovada. As etapas posteriores permanecem no documento como estudos em desenvolvimento, com as dependências da revisão identificadas.

O registro de choque é OP-01, associado à M3 nesta comparação. Alerta de evento não diagnostica trinca nem substitui inspeção ou contenção. Sua eventual inclusão futura na M1 exigirá avaliação própria.

Fonte dos números: [planilha da Equipe 2](../planilha/Planilha_PSP6_Grupo2_Loucas.xlsx), revisão alinhada à [apresentação adotada](https://docs.google.com/presentation/d/1PIiw4DZbp-6MtumhLrUObnUPZhm7Tn64/edit). A planilha e o Figma não foram modificados durante a integração do relatório.

O PDF final possui 71 páginas, com quatro páginas de diagramas em paisagem para manter a legibilidade. As figuras são vetoriais; cores neutras, tipografia, margens, legendas e fontes seguem o relatório.

## Feedback e histórico de ajustes

O [registro da redação executiva](../logs-ajustes/2026-10-26-redacao-executiva/registro-ajustes.md) documenta as fontes externas, os cálculos, a revisão de linguagem e as conferências da versão 0.19.

O [registro da integração de 26/10](../logs-ajustes/2026-10-26-relatorio-integrado/registro-ajustes.md) documenta a base consultada, a atualização das metas no texto, as seis figuras, a primeira Pugh e as conferências do PDF.

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

O documento usa a classe `article` apenas como base técnica do LaTeX e uma configuração inspirada na ABNT: papel A4, margens 3 cm/2 cm, fonte Times New Roman 12 (TeX Gyre Termes quando Times New Roman não estiver disponível), espaçamento 1,5, parágrafo de 1,25 cm, seções numeradas, citações autor-data, legendas e indicação de fonte. A classe não define a estrutura do conteúdo; as fases seguem o relatório-base.

A pasta local `fontes/` é ignorada pelo Git. Quando disponíveis, arquivos locais de Times New Roman e Arial são utilizados para manter a prévia do editor; essas fontes não são distribuídas no repositório. Sem eles, a configuração procura as fontes instaladas e usa TeX Gyre Termes/Heros como alternativa.

Os nomes e as matrículas ficam no arquivo local ignorado `_inbox/privado/relatorio-autores.tex`. Sem esse arquivo, a capa exibe apenas “Equipe 2”. O PDF com a capa preenchida deve permanecer fora do repositório público.

Os trechos destacados como “Ponto a validar” indicam informações que devem ser confirmadas com a equipe ou em campo antes de serem tratadas como requisito.

---
