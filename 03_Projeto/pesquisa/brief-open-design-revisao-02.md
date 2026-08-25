# Revisão 02 — deck PSP6 semana 03

Atualize o artefato existente `psp6-semana-03-sustentacao-problema.html` no projeto atual. Preserve o design editorial UnB, as sete telas e a navegação. Não crie um segundo deck.

## 1. Corrigir vazamentos e legibilidade

- Auditar os sete slides em viewport 1920×1080 e também em 1600×900 com o scale do deck.
- Nenhum texto pode ultrapassar caixa, coluna, borda, imagem ou limite do slide.
- Corrigir quebras ruins, headings apertados, rodapés cortados e sobreposições.
- Preferir encurtar texto e recompor o grid antes de reduzir fontes.
- Corpo principal nunca menor que 24 px; metadados/fontes podem ser menores, mas precisam continuar legíveis.

## 2. Patentes precisam ser visuais

No slide de anterioridade, substituir a apresentação meramente textual por quatro miniaturas documentais reais: primeira página, capa, screenshot da publicação ou figura representativa de cada patente. Cada miniatura precisa parecer um documento técnico e continuar legível como evidência, mesmo que o texto fino não seja lido.

Patentes e links:

- US20150014208A1: https://patents.google.com/patent/US20150014208A1/en
- JP2007186235A: https://patents.google.com/patent/JP2007186235A/en
- CN114194553A: https://patents.google.com/patent/CN114194553A/en
- US10301097B2: https://patents.google.com/patent/US10301097B2/en

Baixe e incorpore as imagens localmente/base64. Não deixe dependência de rede no HTML. Se a primeira página em PDF não estiver disponível, use a figura principal publicada no Google Patents com moldura de documento, identificador do país e número da publicação. Cada patente deve ter link clicável.

Texto máximo por documento:

- US20150014208A1 — encaixes de papelão; proteção e redução declarada de 27% no volume.
- JP2007186235A — amortecedores moldados e aberturas de conferência.
- CN114194553A — estrutura dobrável contra pressão, vibração e queda.
- US10301097B2 — estrutura corrugada para louças, cubas e banheiras.

## 3. Reforçar a análise de mercado

O slide de mercado precisa conter de forma inequívoca:

- **22 milhões de peças produzidas por ano no Brasil**;
- **26 unidades fabris de médio e grande porte**;
- presença produtiva em **8 estados**;
- Brasil entre os **cinco maiores produtores mundiais**;
- aproximadamente **7 mil empregos diretos**.

Adicionar leitura analítica, não apenas números:

> O mercado possui escala industrial e uma cadeia logística geograficamente distribuída. Isso amplia o número de interações de transporte, recebimento e conferência de produtos cerâmicos frágeis. Os dados comprovam escala e recorrência potencial de exposição, mas não comprovam uma taxa de quebra.

Fonte visível e clicável: ANFACER, https://www.anfacer.org.br/sobre/numeros-do-setor, acesso em 23/08/2026.

## 4. Reposicionar entrevista e fotos como evidência

A entrevista/observação de campo efetivamente aconteceu **antes do início da disciplina**. O deck deve tratar esse material como evidência primária prévia aproveitada pelo projeto, e não como hipótese inventada nem como visita realizada nesta semana.

Formulação recomendada:

> **Evidência primária anterior à disciplina** — entrevista e observação em contexto real de obra, recuperadas e estruturadas pela equipe para orientar a fase Discover.

As fotos enviadas por Larissa entram como evidência do contexto observado: estoque de louças, trajetos internos, fase de acabamento e condições do canteiro. Não afirmar que uma foto prova, isoladamente, o instante exato da quebra.

No slide de evidências, reorganizar para:

1. **Campo anterior à disciplina** — entrevista e observação em obra; evidência primária recuperada.
2. **Visita à distribuição** — Rodrigo registrou o ambiente e recebeu o relato de que as avarias se concentram na logística/transporte.
3. **Fotos como evidência contextual** — estoque, trajetos, acabamento e presença de louças no canteiro.
4. **Lacuna ainda aberta** — medir frequência e localizar causalmente a etapa da avaria.

Retirar frases que digam que falta relato primário do operador de forma absoluta. O que falta é consolidar a rastreabilidade da entrevista e quantificar a ocorrência.

## 5. Fechamento metodológico

Manter a honestidade temporal: não dizer que a entrevista foi feita nesta semana. Não usar a expressão “fingir que aconteceu”. A narrativa acadêmica correta é que a equipe incorporou ao projeto evidência primária previamente coletada e agora a sistematizou conforme os métodos da disciplina.

Atualize o manifesto `updatedAt` ao concluir. Garanta HTML self-contained e links clicáveis.

---

*[Codex — 2026-08-23]*
