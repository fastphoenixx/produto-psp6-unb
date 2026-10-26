# Entrega de modelagem funcional e primeira seleção

**Registro histórico de 25/10/2026.** Em 26/10 a equipe adotou a apresentação *Modelagem Funcional — PSP6* como nova referência. A planilha e o Figma passaram a usar M1/M2/M3, 21 elementares e Pugh ponderada com M1 selecionada (+7/0/−4). Este PDF e seus fontes conservam a revisão MF-A/MF-B/MF-C; não representam a seleção vigente. Ver [base atual](../modelagem-funcional/README.md) e [registro da mudança](../logs-ajustes/2026-10-26-base-apresentacao/registro-ajustes.md).

[Abrir o relatório em PDF](Relatorio_Modelagem_Funcional_Equipe2.pdf).

Documento de 25 de outubro de 2026, com dez páginas. Incorpora a seleção de 21 de outubro e o refinamento funcional de 25 de outubro. Apresenta o motivo da entrega, os vínculos entre requisitos e funções, a função global, as referências dos princípios, a FAST, as estruturas MF-A/MF-B/MF-C, a comparação dos 23 requisitos e os motivos da seleção funcional da MF-B.

O relatório usa a tipografia Times New Roman, os tons neutros, as legendas, as fontes e a organização acadêmica da base existente. A apresentação em A4 paisagem e o espaçamento mais compacto acomodam os diagramas, seguindo o formato da entrega do grupo de referência. Cada alternativa permanece junto de sua explicação. Os diagramas atuais do Figma foram sincronizados com a planilha e o PDF; cada bloco contém uma função e os fluxos M/E/S foram identificados. Margens e títulos repetidos foram retirados na composição das páginas.

MF-B foi selecionada **para desenvolvimento**. Seus dois pontos positivos dependem das hipóteses de ajuste e acesso. Permanecem nove AV por alternativa comparada e os saldos completos pendentes. Nenhuma concepção física foi escolhida ou validada por esta entrega.

## Arquivos editáveis

- `main.tex`: documento principal;
- `configuracao.tex`: adaptação da configuração visual do relatório-base;
- `conteudo.tex`: narrativa, quadros e explicações;
- `pugh-linhas.tex`: as 23 linhas da comparação, reproduzidas da planilha;
- `imagens/`: função global, FAST e trio funcional atuais.

O projeto compila no editor LaTeX do Codex e com `xelatex main.tex`. Os arquivos de fonte instalados no computador são usados apenas localmente e ficam ignorados pelo Git. Em outra instalação, a configuração procura Times New Roman e Arial e prevê TeX Gyre Termes/Heros como alternativas.

## Conferência

Foram comparadas as 69 notas do PDF renderizado com a planilha, conferidos os 17 IDs e revisadas visualmente as dez páginas. Os saldos parciais são 0/+2/−1 e os AV são 0/9/9 para MF-A/MF-B/MF-C. O recálculo obrigatório de uma cópia da planilha no LibreOffice não apresentou erros nas 33 abas. A primeira Pugh, as metas, o QFD e a MIM numérica foram preservados. O relatório geral permanece fora desta revisão complementar.

O [registro de criação](../logs-ajustes/2026-10-25-relatorio-modelagem/registro-ajustes.md) descreve a primeira versão. O [registro do refinamento](../logs-ajustes/2026-10-25-refino-funcional/registro-ajustes.md) e a [ligação de referências às 17 funções](../modelagem-funcional/Referencias_Funcoes_Atuais.md) documentam a versão atual.
