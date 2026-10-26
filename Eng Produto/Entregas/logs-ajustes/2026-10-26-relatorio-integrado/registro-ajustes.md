# Integração do relatório à entrega funcional — 26/10/2026

## Pedido e ponto de partida

O usuário pediu acrescentar os textos e as modelagens posteriores às especificações-meta, mantendo escrita e design do relatório e utilizando a referência da pasta base. O relatório 0.17 já continha um capítulo conceitual, mas ainda apresentava o catálogo de 17 funções e a primeira Pugh empatada. Essa parte foi atualizada à entrega adotada em 26/10, em vez de duplicar um segundo capítulo.

## Base e fontes

- Relatório acadêmico existente: Times New Roman 12, espaçamento 1,5, margens 3/2 cm, tons neutros, seções numeradas, legendas e indicação de fonte.
- Relatório Final Revisado — Grupo 5, recuperado de `cc16e18`, em `Eng Produto/Entregas/Exemplos de entregas - base`: referência para a sequência função global → desdobramento → alternativas → seleção. O conteúdo de outro produto e suas avaliações não foram transferidos.
- Aulas 16 e 4 de modelagem e seleção funcional, recuperadas do mesmo histórico: verbo no infinitivo e substantivo, sistema técnico, material/energia/sinal e alternativas orientadas às especificações.
- Planilha atual e apresentação da Equipe 2 adotada em 26/10: catálogo, estruturas, pesos e notas da primeira Pugh. Os diagramas seguem o mesmo conteúdo funcional do Figma.

[Identificação e hashes das fontes](fontes-consultadas.json). Os arquivos-base de terceiros e as fontes tipográficas locais não foram adicionados ao repositório.

## Atualizações

1. **Especificações-meta:** as 23 metas do relatório agora reproduzem a planilha. Foram corrigidos, em especial, RP7 (300 mm em A e 150 mm em B), RP8 (mínimo 80% no PBR, otimização 90%) e RP14 (0,090 m³/cuba e 0,160 m³/bacia individual). O texto apresenta mix, reserva dimensional, massa, envelope e ocupação como premissas de desenvolvimento. A referência histórica de 334 N foi explicitada como peso de kit, sem equivaler a força de partida medida ou ampliar o mix atual.
2. **Função global e tratamento dos requisitos:** Proteger louça; material, energia e sinal; oito RP como parâmetros/restrições, com exemplos de vínculo entre metas, efeitos e interfaces. Nenhum requisito foi eliminado por não gerar um bloco próprio.
3. **Desdobramento:** sete parciais, 21 elementares da M1 e sete complementares do ciclo de vida. IDs servem à rastreabilidade. O produto oferece capacidades físicas; o operador executa limpeza, inspeção, ajuste e reposição.
4. **FAST:** finalidade/meios, com as três elementares de cada parcial no mesmo nível. Não se descrevem as três como níveis sucessivos ou sequência cronológica.
5. **M1/M2/M3:** proteção direta da peça descoberta; proteção do volume embalado com A01; volume embalado com monitoramento paralelo O01–O04. A figura da M3 inclui seu ramo de monitoramento. Alerta de evento foi distinguido de diagnóstico de trinca, inspeção e contenção.
6. **Primeira Pugh:** 23 critérios, 69 notas, pesos do Mudge/Pareto, M2 datum e totais +7/0/−4. Fundamentação das diferenças, significado dos zeros, hipóteses da apresentação e sensibilidade +2/−1 registrados. M1 selecionada para desenvolvimento, sem aprovação de uma concepção física.
7. **Continuidade:** referências antigas do catálogo e o encaminhamento foram atualizados. Morfológica, MIM, arquitetura, concepções e análises posteriores continuam estudos a completar/reavaliar. Os 156 escores históricos da MIM não foram recalculados nem apresentados como validados.
8. **Fechamento:** resumo, conclusão, referências e documentação foram sincronizados. Versão 0.18; 68 páginas. Seis figuras vetoriais editáveis em TikZ; FAST e três modelagens em paisagem. A tipografia e os tons neutros do relatório foram preservados.

## Limites preservados

A consolidação desta entrega termina na primeira Pugh. A seleção de M1 define a fronteira funcional, sem escolher a posição do amortecimento, materiais, módulos ou uma concepção física. Não houve nova coleta de campo, desmontagem, ensaio, cotação ou comprovação de novidade. A base de campo continua uma obra residencial e duas entrevistas. As metas seguem provisórias, com plano de validação.

A planilha e o Figma não foram modificados nesta rodada. Fontes locais em `relatorio/fontes/` ficam ignoradas pelo Git; a configuração oferece alternativas para instalação sem Times New Roman/Arial. A capa pública mantém somente Equipe 2, sem nomes e matrículas de arquivo privado.

## Conferências e arquivos

- Compilação XeLaTeX/BibTeX concluída e compilação no editor do Codex confirmada.
- Sem referências/citações indefinidas, glifos ausentes ou avisos de estouro na compilação final.
- As 23 metas foram comparadas por coluna no PDF à extração da planilha.
- Os 23 pesos e as 69 notas foram relidos do PDF e comparados à planilha; totais e contagens conferidos.
- Catálogo de funções, IDs dos diagramas, acesso adicional e ramo paralelo verificados; figuras permanecem vetoriais.
- Revisão visual do sumário, resumo, páginas alteradas e páginas seguintes afetadas pela paginação, incluindo todos os diagramas e tabelas de seleção.
- `git diff --check` sem erros; hash da planilha preservado.

[Conferência com hashes e páginas](conferencia-pdf.json).

Entrega: [Relatorio_Engenharia_Produto_Loucas.pdf](../../relatorio/Relatorio_Engenharia_Produto_Loucas.pdf). O arquivo `main.pdf` contém os mesmos bytes para manter a saída de compilação existente sincronizada. Fontes editáveis: `relatorio/secoes/`, `relatorio/figuras/` e `relatorio/quadros/`.
