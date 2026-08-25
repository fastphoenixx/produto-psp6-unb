# Briefing para Open Design — análise preliminar de mercado e patentes

Crie um artefato editorial em HTML, self-contained, em português do Brasil, com aparência de one-pager premium expandido e no máximo 3 páginas A4 em orientação retrato. O público são colegas de Engenharia de Produção da UnB na disciplina Engenharia de Produto + PSP6. O material deve ser bonito, muito escaneável, acadêmico sem ser burocrático, orientado a dados e principalmente convidar o leitor a clicar e abrir as patentes.

Use de verdade o design system ativo `user:unb` — UnB Editorial Técnico: leia DESIGN.md, tokens.css e os componentes/templates disponíveis dentro do run. Não faça um layout genérico. Use os tokens e a linguagem visual do sistema. Garanta bom resultado tanto na tela quanto na exportação PDF. Todos os links devem ser clicáveis no HTML e, se tecnicamente possível, preservados no PDF.

## Título

**Louças sanitárias em trânsito**

Subtítulo: **Análise preliminar de mercado, anterioridade tecnológica e espaço de oportunidade**

Identificação discreta: Engenharia de Produto + PSP6 · Universidade de Brasília · Agosto de 2026.

## Tom e tese

O Brasil possui um fluxo industrial relevante de produtos cerâmicos frágeis. A anterioridade tecnológica se concentra em evitar, registrar ou tornar visível a avaria. A oportunidade preliminar do projeto está na interseção entre alerta, inspeção segura e contenção de fragmentos quando a quebra permanece oculta até a abertura da caixa.

Não apresentar uma solução escolhida. É levantamento preliminar, não parecer jurídico de patenteabilidade nem liberdade de operação.

## Estrutura desejada

### Página 1 — mercado e problema

- Hero editorial com o número **22 milhões de peças/ano**.
- Dados auxiliares: 26 unidades fabris de médio e grande porte; 8 estados; Brasil entre os cinco maiores produtores mundiais; aproximadamente 7 mil empregos diretos.
- Fonte clicável: ANFACER — https://www.anfacer.org.br/sobre/numeros-do-setor
- Explicar em poucas linhas: o número comprova escala, não taxa de quebra. Não estimar peças avariadas sem denominador confiável.
- Mostrar o recorte do problema como fluxo compacto: fabricação/distribuição → transporte → recebimento → abertura/conferência → contato potencial com bordas e fragmentos.
- Destacar o enunciado: **Como permitir a conferência segura de uma louça sanitária potencialmente avariada?**

### Página 2 — atlas clicável de patentes

Criar cartões densos, elegantes e claramente clicáveis. Cada cartão deve exibir: país/órgão, número da publicação, título curto, função principal, relação com o projeto e um CTA visível como “ABRIR PATENTE ↗”. Usar o URL no cartão inteiro ou pelo menos em título e CTA.

Separar em dois grupos:

**A. Diretamente relacionadas a louças e embalagens frágeis**

1. US9221577B2 / US20150014208A1 — Packaging system for toilet components
   - Encaixes de papelão para proteger bacia, caixa e tampa; aproximadamente 27% de redução declarada no volume da embalagem.
   - https://patents.google.com/patent/US20150014208A1/en

2. JP2007186235A — Packaging material for toilet bowl
   - Amortecedores moldados integrados à caixa e furos de conferência.
   - https://patents.google.com/patent/JP2007186235A/en

3. CN114194553A / CN114194553B — Packaging structure for toilet transportation
   - Estrutura dobrável contra pressão, vibração e queda; busca substituir madeira e EPS.
   - https://patents.google.com/patent/CN114194553A/en

4. US10301097B2 — Shipping container for packaging frangible products
   - Estrutura interna de papelão para produtos grandes e frágeis, incluindo vasos, cubas e banheiras.
   - https://patents.google.com/patent/US10301097B2/en

**B. Tecnologias adjacentes que podem inspirar funções**

5. US10597214B2 — Combined shipping protection and impingement detection wrap
   - Material protetor com células que se rompem e mudam visualmente na região do impacto. Marcar como “referência mais próxima da combinação proteção + indicação”.
   - https://patents.google.com/patent/US10597214B2/en

6. EP2780725B1 / EP2780725A1 — Single-use impact indicator for fragile products
   - Indicador irreversível de impacto que muda de aparência; base consultada indica fora de vigor.
   - https://patents.google.com/patent/EP2780725A1/en

7. US6321911B1 — Fragility package
   - Embalagem transparente que permite inspeção visual sem abertura e protege o objeto contra impactos.
   - https://patents.google.com/patent/US6321911B1/en

8. US4506793A — Breakable vial
   - Manga flexível que contém fragmentos e cobre bordas afiadas após quebra; analogia funcional, não aplicação direta a louças.
   - https://patents.google.com/patent/US4506793A/en

Se não couberem oito cartões com excelente legibilidade, reduza o texto interno, mas não remova patentes nem links.

### Página 3 — leitura estratégica

- Criar uma matriz ou faixa funcional com três colunas:
  1. **Território ocupado:** amortecer, imobilizar, registrar impacto, melhorar eficiência logística.
  2. **Território adjacente:** inspeção sem abertura, mudança visual, contenção de fragmentos.
  3. **Interseção a investigar:** alertar antes do contato + inspecionar com segurança + conter fragmentos em louças sanitárias.
- Inserir a conclusão em destaque: **A oportunidade não parece estar em “mais uma embalagem que evita quebra”, mas na experiência segura de descobrir uma quebra que já aconteceu.**
- Incluir quatro implicações para a disciplina: transformar soluções existentes em funções; derivar requisitos mensuráveis; alimentar modelagem funcional/matriz morfológica/TRIZ; evitar conceitos já cobertos e orientar eventual patente própria.
- Encerrar com “próximo passo”: medir avarias por lote/período e pesquisar famílias correspondentes no INPI antes de qualquer conclusão de patenteabilidade.
- Rodapé legal: “Busca preliminar realizada em bases públicas. Status jurídicos devem ser confirmados nos escritórios competentes. O documento não constitui parecer jurídico nem análise de liberdade de operação.”

## Direção visual e de interação

- Formato editorial técnico, com grid forte, muito contraste, ritmo de revista e densidade controlada.
- Usar números, chips de país/função, linhas finas, setas e pequenos diagramas; evitar decoração gratuita.
- Não usar emojis.
- Evitar grandes blocos corridos; máximo de 2–3 frases por bloco.
- Links precisam parecer links e despertar curiosidade; usar CTA consistente `ABRIR PATENTE ↗`.
- Pode usar ícones vetoriais simples ou números de referência, mas não depender de imagens externas.
- Implementar `@page` e quebras de página previsíveis, assegurando exatamente até 3 páginas na exportação A4.
- Incluir metadados e manifesto corretos pelo fluxo normal do Open Design; exportações desejadas: HTML e PDF.

O nome sugerido do artefato é `analise-preliminar-mercado-patentes.html` e o título no Open Design é `UnB · Louças sanitárias — Mercado e patentes`.

---

*[Codex — 2026-08-23]*
