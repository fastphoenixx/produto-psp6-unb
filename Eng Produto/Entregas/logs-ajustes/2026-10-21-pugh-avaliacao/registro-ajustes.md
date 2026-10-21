# Avaliação conceitual da primeira Pugh

Data: 21 de outubro de 2026.

## Solicitação e procedimento

Avaliar os itens pendentes da primeira Pugh, preservando a lógica requisitos → funções → estruturas → princípios → concepções. A base anterior tinha oito equivalências e quinze AV por alternativa. A avaliação agora explicita princípios auxiliares comuns para comparar potencial funcional, conforme Back et al. (2008), seção 7.3.4, p. 322–323. Essa seção admite imaginar ou simular princípios de solução para comparar estruturas ainda abstratas e aprofundar mais de uma alternativa se a escolha continuar incerta.

Os princípios de apoio já constam da própria morfológica: cartuchos/apoios resilientes substituíveis, guias reguláveis, interface para carrinho, portador, barreira, acesso e uniões liberáveis. Seu uso nesta avaliação é uma hipótese de referência, sem selecionar material definitivo, dimensões, concepção C1/C2/C3 ou módulos da MIM.

## Hipóteses registradas

O bloco B104:K116 da aba **Matriz Pugh das Modelagens** contém H1–H5 e sua origem:

- H1: mesmo produto, carga e condições de comparação, mantendo proteção direta e as funções comuns.
- H2: mesma tecnologia e estratégia de materiais, meio auxiliar, barreira, interfaces de acesso e separação para comparar as estruturas. Ainda não há grau, dimensões, massa ou número de módulos fixados.
- H3: no arranjo auxiliar, o cartucho interno de MF-A/MF-C acompanha o contato regulável; o cartucho externo de MF-B pode manter geometria independente da regulagem.
- H4: prever acesso ao cartucho externo de MF-B com reposição preservando a regulagem do contato. A vantagem só existe se essa interface for efetivamente viável.
- H5: no arranjo auxiliar da MF-C, o acesso interno é o da MF-A e a região externa tem verificação própria. A comparação de manutenção se refere a essa intervenção prevista, sem inferir quantidade de peças, tempo, custo ou vida somente pelo número de estágios.

H3/H4/H5 são propostas de referência para a triagem, não detalhes demonstrados pelos desenhos. Não tornam verdadeira a alegação física de melhor amortecimento ou maior uniformidade.

## Notas revistas

| Critério | MF-A datum | MF-B | MF-C | Fundamentação e limite |
| --- | ---: | ---: | ---: | --- |
| RP3 — movimentação | 0 | 0 | 0 | H1/H2: mesmo princípio de meio auxiliar, pega e apoio. Força com a massa real continua obrigatória. |
| RP7 — ajuste | 0 | +1 | 0 | H3: MF-B tem potencial de separar a geometria do cartucho da regulagem. Rever se a independência não se sustentar. Não replicar o ponto em RP1/RP2/RP12. |
| RP13 — intempéries | 0 | 0 | 0 | H2: mesma estratégia ambiental/material de F11, sem declarar igual perda de compressão nem meta atendida. |
| RP15 — manutenção | 0 | +1 | −1 | H4/H5: preservar regulagem na reposição externa pode favorecer MF-B; a região externa acrescenta intervenção ao acesso interno da MF-C no arranjo considerado. Rever ambas as notas se as interfaces mudarem. |
| RP19 — reciclagem | 0 | 0 | 0 | H2: mesmas famílias e estratégia de união liberável/separação. Confirmar composição em massa e cadeia regional. |
| RP20 — modularidade | 0 | 0 | 0 | H2: mesmo princípio de acesso e troca, sem bônus por número de estágios. A contagem e a troca independente dependem de arquitetura demonstrada. |

As oito equivalências anteriores são preservadas. Os outros nove critérios permanecem AV: RP1, RP2, RP8, RP9, RP11, RP12, RP14, RP18 e RP23. A análise por linha identifica a falta de massa sustentada, contato/folgas, áreas/espessuras, caminho de compressão, base/centro de massa, envelope, vida e custeio comparáveis.

## Resultado

| Medida | MF-A | MF-B | MF-C |
| --- | ---: | ---: | ---: |
| Vantagens | 0 | 2 | 0 |
| Desvantagens | 0 | 0 | 1 |
| Equivalências | 23 por definição | 12 | 13 |
| Avaliações pendentes | — | 9 | 9 |
| Saldo parcial | 0 | +2 | −1 |
| Saldo completo | referência | pendente | pendente |

**A seleção permanece em aberto.** MF-B é promissora para aprofundar ajuste e acesso sob H3/H4; não foi declarada vencedora. MF-A permanece referência viável. MF-C precisa demonstrar benefício dos dois níveis e uma interface de manutenção adequada. O saldo parcial não substitui a avaliação dos requisitos críticos pendentes.

Sensibilidade: retirar o +1 de RP7 reduz o parcial de MF-B para +1; retirar também o +1 de RP15 reduz para zero. Rever o −1 de RP15 de MF-C para zero elimina a desvantagem parcial. A conclusão continua aberta em todos esses casos, devido aos AV. Invalidar uma hipótese pode exigir AV em vez de zero.

## Base técnica e preservação

A análise das cargas distingue a massa da peça da massa do conjunto portador. Os dois estágios não permitem ordenar o pico sem áreas, espessuras e resposta do material. O caminho de empilhamento também precisa ser representado: um desvio rígido não pode ser presumido como solução de compressão sem verificar seu efeito no amortecimento.

O [ARPLANK EPE & EPP Design Guide](https://arplankdirect.com/wp-content/uploads/2021/02/ArplankSalesDesignDocument.pdf), p. 3 e 5–6, fundamenta a necessidade de considerar carga estática, fluência, densidade, espessura e queda na seleção do amortecimento. Nenhum valor de catálogo foi transferido como desempenho do dispositivo.

Preservados os 23 RP, as metas provisórias, os pesos de Kano/Mudge/QFD e da segunda Pugh, o catálogo de 17 funções, os diagramas, a fronteira de proteção direta e a MIM numérica. As alterações atingem a primeira Pugh, o encaminhamento em Modelagens Alternativas, a nota da morfológica e o registro de revisão. As etapas posteriores continuam em estudo. Relatório/PDF e Figma não foram sincronizados nesta rodada.

Os testes, a reabertura e os hashes estão em `verificacao.json`. A comparação anterior está em `pugh-anterior.json`. Não houve ensaio físico ou nova coleta de campo.
