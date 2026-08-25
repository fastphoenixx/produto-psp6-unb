# Apresentação em LaTeX — Primeira Entrega

Beamer 16:9, cores institucionais da UnB.

## Compilar

```bash
latexmk -pdf apresentacao-entrega-1.tex
latexmk -c                                # limpa auxiliares
```

Precisa de `beamer`, `tikz`, `booktabs`, `tabularx`, `ragged2e` — todos já instalados nesta máquina.

## Preencher antes de subir

No topo do `.tex`, linhas 11–12:

```latex
\newcommand{\numeroequipe}{[preencher]}
\newcommand{\integrantes}{Larissa [sobrenome] \textbullet{} [nome] ...}
```

## Paleta

| Cor | Hex | Uso |
|---|---|---|
| `unbazul` | `#003366` | títulos, capa, texto de destaque |
| `unbverde` | `#006633` | filete dos títulos, números, ênfase |
| `unbazulclaro` | `#E8EDF3` | cartões de apoio |
| `unbverdeclaro` | `#E6F0EA` | cartões de conclusão |
| `grafite` / `cinza` / `cinzaclaro` | `#2B2F33` / `#6B7176` / `#F4F5F6` | corpo, legenda, fundo neutro |

Azul e verde foram extraídos do próprio arquivo `simbolo-unb.png`
(`~/Projects/UnB/Símbolo_da_UnB_(para_fundo_branco).png`) — são as duas únicas cores do símbolo.

## Estrutura (12 slides)

1. Capa
2. Contexto do projeto
3. O problema — cadeia causal
4. **Onde acontece** — as 4 etapas do manuseio *(novo)*
5. Por que importa: acidentes + a costura do dado de 2023
6. O custo do outro lado: perdas de material
7. **Usuários e clientes** — perguntas da p. 31 do DI Handbook *(novo)*
8. Matriz Influência × Interesse *(corrigida)*
9. O que cada stakeholder espera *(preenchido)*
10. **Proposta de valor e delimitação do escopo** *(novo)*
11. Próximos passos
12. Fechamento

Para os 5 minutos da apresentação de 31/08, o núcleo é **1, 3, 4, 5, 8, 12**.

*[Claude — 2026-08-17]*
