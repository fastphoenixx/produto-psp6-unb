// Generates the PSP6 week 03 presentation.
// *[Codex — 2026-08-23]*

const pptxgen = require('/usr/lib/open-design/node_modules/.pnpm/pptxgenjs@4.0.1/node_modules/pptxgenjs');

const pptx = new pptxgen();
pptx.layout = 'LAYOUT_WIDE';
pptx.author = 'Equipe 2 — Andréaticos';
pptx.subject = 'PSP6 — Levantamento das informações e sustentação do problema';
pptx.title = 'Louças sanitárias em trânsito';
pptx.company = 'Universidade de Brasília';
pptx.lang = 'pt-BR';
pptx.theme = {
  headFontFace: 'Aptos Display',
  bodyFontFace: 'Aptos',
  lang: 'pt-BR'
};

const C = {
  ink: '18201D',
  green: '164A41',
  mint: '9DC8B5',
  cream: 'F4F0E6',
  paper: 'FFFDF8',
  clay: 'C25B3F',
  amber: 'E9A23B',
  gray: '66716C',
  pale: 'E7ECE8',
  white: 'FFFFFF'
};

const media = '/tmp/psp6-media';
const imgSiteWare = `${media}/IMG-20260817-WA0136.jpg`;
const imgSiteRoute = `${media}/IMG-20260817-WA0137.jpg`;
const imgSiteStock = `${media}/IMG-20260817-WA0142.jpg`;
const imgWarehouse = `${media}/IMG-20260822-WA0036.jpg`;

function footer(slide, source, num, dark = false) {
  slide.addText(source, {
    x: 0.55, y: 7.12, w: 11.6, h: 0.18,
    fontFace: 'Aptos', fontSize: 8.5,
    color: dark ? 'D8E4DF' : '66716C', margin: 0
  });
  slide.addText(String(num).padStart(2, '0'), {
    x: 12.15, y: 7.06, w: 0.55, h: 0.24,
    fontFace: 'Aptos', fontSize: 10, bold: true,
    color: dark ? C.mint : C.green, align: 'right', margin: 0
  });
}

function title(slide, eyebrow, heading, dark = false) {
  slide.addText(eyebrow.toUpperCase(), {
    x: 0.58, y: 0.35, w: 4.8, h: 0.25,
    fontSize: 10, bold: true, charSpacing: 1.6,
    color: dark ? C.mint : C.clay, margin: 0
  });
  slide.addText(heading, {
    x: 0.58, y: 0.7, w: 12.05, h: 0.62,
    fontSize: 28, bold: true,
    color: dark ? C.white : C.ink, margin: 0
  });
}

function chip(slide, text, x, y, w, fill = C.pale, color = C.green) {
  slide.addShape(pptx.ShapeType.roundRect, {
    x, y, w, h: 0.33, rectRadius: 0.08,
    fill: { color: fill }, line: { color: fill }
  });
  slide.addText(text, {
    x: x + 0.08, y: y + 0.05, w: w - 0.16, h: 0.16,
    fontSize: 9, bold: true, color, align: 'center', margin: 0
  });
}

function addFlowNode(slide, x, label, state, accent) {
  slide.addShape(pptx.ShapeType.ellipse, {
    x, y: 2.35, w: 0.48, h: 0.48,
    fill: { color: accent }, line: { color: accent }
  });
  slide.addText(label, {
    x: x - 0.48, y: 2.95, w: 1.44, h: 0.58,
    fontSize: 12, bold: true, align: 'center', color: C.ink,
    margin: 0, breakLine: false, fit: 'shrink'
  });
  slide.addText(state, {
    x: x - 0.45, y: 3.55, w: 1.38, h: 0.38,
    fontSize: 9, align: 'center', color: C.gray, margin: 0,
    fit: 'shrink'
  });
}

// Slide 1
{
  const s = pptx.addSlide();
  s.background = { color: C.green };
  s.addShape(pptx.ShapeType.rect, {
    x: 8.15, y: 0, w: 5.18, h: 7.5,
    fill: { color: '0F3832' }, line: { color: '0F3832' }
  });
  s.addText('Contexto registrado: louças armazenadas em canteiro na fase de acabamento', {
    x: 8.67, y: 5.92, w: 3.85, h: 0.62,
    fontSize: 13, bold: true, color: C.white, margin: 0, fit: 'shrink'
  });
  s.addImage({ path: imgSiteWare, x: 8.42, y: 0.42, w: 4.35, h: 6.65, transparency: 8 });
  s.addShape(pptx.ShapeType.rect, {
    x: 8.42, y: 5.62, w: 4.35, h: 1.45,
    fill: { color: C.ink, transparency: 10 }, line: { color: C.ink, transparency: 100 }
  });
  s.addText('ENGENHARIA DE PRODUTO + PSP6', {
    x: 0.72, y: 0.72, w: 5.5, h: 0.28,
    fontSize: 11, bold: true, charSpacing: 1.8, color: C.mint, margin: 0
  });
  s.addText('Louças sanitárias\nem trânsito', {
    x: 0.72, y: 1.48, w: 6.7, h: 1.7,
    fontSize: 44, bold: true, color: C.white, margin: 0,
    breakLine: false
  });
  s.addText('Levantamento das informações e sustentação do problema', {
    x: 0.75, y: 3.38, w: 6.45, h: 0.7,
    fontSize: 20, color: 'DAEAE3', margin: 0
  });
  s.addText('Onde quebra? Quando quebra? Por que quebra?', {
    x: 0.75, y: 4.48, w: 6.4, h: 0.45,
    fontSize: 18, bold: true, color: 'F2C07A', margin: 0
  });
  s.addText('Equipe 2 · Andréaticos · 24 ago. 2026', {
    x: 0.75, y: 6.62, w: 6.4, h: 0.3,
    fontSize: 12, color: C.mint, margin: 0
  });
  footer(s, 'Universidade de Brasília · Fase Discover', 1, true);
  s.addNotes(`Objetivo: mostrar como o problema foi refinado e quais evidências ainda precisam ser confirmadas. Não apresentar solução.`);
}

// Slide 2
{
  const s = pptx.addSlide();
  s.background = { color: C.paper };
  title(s, 'Recorte do problema', 'Uma cadeia, quatro momentos possíveis de falha');
  s.addShape(pptx.ShapeType.line, {
    x: 1.43, y: 2.59, w: 9.95, h: 0,
    line: { color: 'A9B7B0', width: 2.2 }
  });
  const nodes = [
    [1.2, 'Fabricação e\ndistribuição', 'origem ainda não demonstrada', C.amber],
    [4.05, 'Transporte\nexterno', 'relato do distribuidor', C.clay],
    [6.9, 'Recebimento e\nabertura', 'interação crítica em hipótese', C.clay],
    [9.75, 'Movimentação e\ninstalação', 'contexto fotografado', C.amber]
  ];
  nodes.forEach(n => addFlowNode(s, ...n));
  s.addShape(pptx.ShapeType.rect, {
    x: 0.65, y: 4.45, w: 12.0, h: 1.55,
    fill: { color: C.green }, line: { color: C.green }
  });
  s.addText('Pergunta de campo', {
    x: 0.98, y: 4.76, w: 2.0, h: 0.26,
    fontSize: 11, bold: true, charSpacing: 1.2, color: C.mint, margin: 0
  });
  s.addText('Em qual etapa a avaria surge — e em qual etapa ela se transforma em risco para o trabalhador?', {
    x: 0.98, y: 5.13, w: 10.9, h: 0.5,
    fontSize: 23, bold: true, color: C.white, margin: 0, fit: 'shrink'
  });
  footer(s, 'Estrutura de investigação definida a partir do feedback da Profa. Andréa, 17 ago. 2026.', 2);
  s.addNotes(`A professora pediu separar exatamente onde, quando e por que ocorre a quebra. A cadeia completa é o mapa; ainda não é correto afirmar uma causa única.`);
}

// Slide 3
{
  const s = pptx.addSlide();
  s.background = { color: C.cream };
  title(s, 'Evidências coletadas', 'O que observamos, o que foi relatado e o que falta provar');
  const cards = [
    { x: 0.58, img: imgWarehouse, tag: 'OBSERVADO', color: C.green, heading: 'Operação de distribuição', body: 'Rodrigo registrou o ambiente e relatou avarias no transporte. Faltam processo, entrevistado e frequência documentados.' },
    { x: 4.72, img: imgSiteStock, tag: 'CONTEXTO', color: C.amber, heading: 'Canteiro em acabamento', body: 'As fotos mostram estoque e ambiente da obra. Vieram por outro contato e não comprovam o momento da quebra.' },
    { x: 8.86, img: imgSiteRoute, tag: 'A VALIDAR', color: C.clay, heading: 'Interação com o operador', body: 'Falta relato primário sobre manuseio, abertura, quase-acidente, lesão e barreiras existentes.' }
  ];
  cards.forEach(c => {
    s.addShape(pptx.ShapeType.rect, { x: c.x, y: 1.48, w: 3.85, h: 4.95, fill: { color: C.white }, line: { color: 'D8DED9', width: 1 } });
    s.addImage({ path: c.img, x: c.x + 0.18, y: 1.66, w: 3.49, h: 2.15 });
    chip(s, c.tag, c.x + 0.2, 3.98, 1.35, c.color, C.white);
    s.addText(c.heading, { x: c.x + 0.2, y: 4.47, w: 3.38, h: 0.52, fontSize: 18, bold: true, color: C.ink, margin: 0, fit: 'shrink' });
    s.addText(c.body, { x: c.x + 0.2, y: 5.14, w: 3.38, h: 0.93, fontSize: 14, color: '4B5651', margin: 0, breakLine: false, fit: 'shrink' });
  });
  footer(s, 'Registros da equipe e materiais compartilhados no grupo, 17–22 ago. 2026.', 3);
  s.addNotes(`Ser transparente: temos contexto e um relato logístico, mas ainda não temos base para apresentar quatro entrevistas detalhadas ou taxa de avaria como fato confirmado.`);
}

// Slide 4
{
  const s = pptx.addSlide();
  s.background = { color: C.green };
  title(s, 'Escala de mercado', 'Um grande fluxo logístico para um produto frágil', true);
  s.addText('22', { x: 0.7, y: 1.55, w: 3.35, h: 1.55, fontSize: 82, bold: true, color: 'F2C07A', margin: 0, align: 'right' });
  s.addText('MILHÕES', { x: 4.18, y: 1.82, w: 3.1, h: 0.55, fontSize: 31, bold: true, color: C.white, margin: 0 });
  s.addText('de peças produzidas por ano no Brasil', { x: 4.2, y: 2.46, w: 4.0, h: 0.68, fontSize: 20, color: 'D7E8E0', margin: 0 });
  const stats = [
    ['26', 'unidades fabris\nde médio e grande porte'],
    ['8', 'estados com\nprodução'],
    ['TOP 5', 'entre os maiores\nprodutores mundiais'],
    ['≈7 mil', 'empregos\ndiretos']
  ];
  stats.forEach((st, i) => {
    const x = 0.75 + i * 3.03;
    s.addShape(pptx.ShapeType.rect, { x, y: 4.25, w: 2.72, h: 1.35, fill: { color: '245E53' }, line: { color: '3C766A' } });
    s.addText(st[0], { x: x + 0.18, y: 4.49, w: 1.05, h: 0.42, fontSize: 24, bold: true, color: C.white, margin: 0 });
    s.addText(st[1], { x: x + 1.13, y: 4.45, w: 1.38, h: 0.65, fontSize: 12, color: 'D7E8E0', margin: 0, fit: 'shrink' });
  });
  s.addText('O dado comprova escala — não taxa de quebra.', { x: 0.78, y: 6.08, w: 6.6, h: 0.36, fontSize: 18, bold: true, color: C.mint, margin: 0 });
  s.addText('Não estimamos peças avariadas sem denominador confiável.', { x: 0.78, y: 6.5, w: 7.5, h: 0.3, fontSize: 13, color: 'D7E8E0', margin: 0 });
  footer(s, 'Fonte: ANFACER, “Números do setor — Louças sanitárias”, acesso em 23 ago. 2026.', 4, true);
  s.addNotes(`Não extrapolar uma taxa de quebra. O número serve apenas para demonstrar a escala do fluxo de produtos frágeis.`);
}

// Slide 5
{
  const s = pptx.addSlide();
  s.background = { color: C.paper };
  title(s, 'Anterioridade tecnológica', 'Patentes mostram esforços para proteger louças no transporte');
  const pats = [
    ['EUA', 'US20150014208A1', 'Encaixes de papelão', 'Proteção + redução declarada de 27% no volume'],
    ['JAPÃO', 'JP2007186235A', 'Amortecedores moldados', 'Proteção interna e aberturas de conferência'],
    ['CHINA', 'CN114194553A', 'Estrutura dobrável', 'Resistência a pressão, vibração e queda'],
    ['EUA', 'US10301097B2', 'Contêiner para frágeis', 'Estrutura corrugada para louças, cubas e banheiras']
  ];
  pats.forEach((p, i) => {
    const x = 0.62 + (i % 2) * 6.15;
    const y = 1.52 + Math.floor(i / 2) * 2.18;
    s.addShape(pptx.ShapeType.rect, { x, y, w: 5.82, h: 1.88, fill: { color: C.cream }, line: { color: 'D5D9D3', width: 1 } });
    chip(s, p[0], x + 0.2, y + 0.2, 0.85, C.green, C.white);
    s.addText(p[1], { x: x + 1.2, y: y + 0.22, w: 2.5, h: 0.24, fontSize: 10, bold: true, color: C.clay, margin: 0 });
    s.addText(p[2], { x: x + 0.22, y: y + 0.72, w: 2.35, h: 0.42, fontSize: 18, bold: true, color: C.ink, margin: 0, fit: 'shrink' });
    s.addText(p[3], { x: x + 2.72, y: y + 0.7, w: 2.78, h: 0.66, fontSize: 12.5, color: C.gray, margin: 0, fit: 'shrink' });
  });
  s.addShape(pptx.ShapeType.rect, { x: 0.62, y: 6.05, w: 12.12, h: 0.63, fill: { color: C.green }, line: { color: C.green } });
  s.addText('Padrão encontrado: amortecer · imobilizar · resistir a impacto · ganhar eficiência logística', {
    x: 0.92, y: 6.24, w: 11.5, h: 0.25, fontSize: 15, bold: true, color: C.white, align: 'center', margin: 0
  });
  footer(s, 'Busca preliminar em Google Patents. Não constitui parecer de patenteabilidade ou liberdade de operação.', 5);
  s.addNotes(`As patentes comprovam que proteção no transporte é um problema técnico reconhecido. Não afirmar ausência absoluta de solução.`);
}

// Slide 6
{
  const s = pptx.addSlide();
  s.background = { color: C.cream };
  title(s, 'Leitura preliminar', 'A busca desloca a pergunta para o momento da abertura');
  const cols = [
    { x: 0.65, num: '01', h: 'Território ocupado', body: 'Amortecer\nImobilizar\nReduzir impacto\nOtimizar volume', color: C.gray },
    { x: 4.47, num: '02', h: 'O que ainda não sabemos', body: 'Quando surge a trinca\nComo ela fica oculta\nQuem primeiro detecta\nComo ocorre o contato', color: C.amber },
    { x: 8.29, num: '03', h: 'Interação a investigar', body: 'Embalagem aparentemente intacta\nPeça possivelmente avariada\nAbertura e conferência manual', color: C.clay }
  ];
  cols.forEach(c => {
    s.addShape(pptx.ShapeType.rect, { x: c.x, y: 1.48, w: 3.5, h: 3.45, fill: { color: C.white }, line: { color: 'D8DDD8' } });
    s.addText(c.num, { x: c.x + 0.2, y: 1.72, w: 0.65, h: 0.42, fontSize: 24, bold: true, color: c.color, margin: 0 });
    s.addText(c.h, { x: c.x + 0.95, y: 1.72, w: 2.25, h: 0.5, fontSize: 18, bold: true, color: C.ink, margin: 0, fit: 'shrink' });
    s.addText(c.body, { x: c.x + 0.28, y: 2.55, w: 2.95, h: 1.82, fontSize: 17, color: C.gray, margin: 0, breakLine: false, fit: 'shrink' });
  });
  s.addShape(pptx.ShapeType.rect, { x: 0.65, y: 5.35, w: 11.14, h: 1.18, fill: { color: C.green }, line: { color: C.green } });
  s.addText('PERGUNTA DE INVESTIGAÇÃO', { x: 0.95, y: 5.63, w: 2.1, h: 0.22, fontSize: 10, bold: true, charSpacing: 1.1, color: C.mint, margin: 0 });
  s.addText('O que acontece quando a avaria permanece oculta até a abertura da embalagem?', {
    x: 3.05, y: 5.58, w: 8.25, h: 0.5, fontSize: 22, bold: true, color: C.white, margin: 0, fit: 'shrink'
  });
  footer(s, 'Inferência preliminar da busca de patentes; depende de validação primária com operadores e dados de avaria.', 6);
  s.addNotes(`Apresentar como pergunta de investigação, não como problema fechado. O recorte de recebimento/abertura ainda precisa ser validado.`);
}

// Slide 7
{
  const s = pptx.addSlide();
  s.background = { color: C.green };
  title(s, 'Próximos passos', 'O que falta para fechar o problema com rigor', true);
  const steps = [
    ['1', 'Escolher o cenário', 'Definir porte, tipo de obra e cadeia de decisão.'],
    ['2', 'Localizar a falha', 'Separar fabricação, transporte, descarga, abertura, movimentação e instalação.'],
    ['3', 'Ouvir o operador', 'Registrar entrevista atribuível e observar a atividade real.'],
    ['4', 'Medir a ocorrência', 'Avarias / total recebido, por lote, período e etapa logística.']
  ];
  steps.forEach((st, i) => {
    const y = 1.55 + i * 1.23;
    s.addShape(pptx.ShapeType.ellipse, { x: 0.78, y, w: 0.64, h: 0.64, fill: { color: C.amber }, line: { color: C.amber } });
    s.addText(st[0], { x: 0.78, y: y + 0.15, w: 0.64, h: 0.25, fontSize: 14, bold: true, align: 'center', color: C.ink, margin: 0 });
    s.addText(st[1], { x: 1.72, y: y - 0.01, w: 3.25, h: 0.32, fontSize: 20, bold: true, color: C.white, margin: 0 });
    s.addText(st[2], { x: 5.05, y: y + 0.01, w: 6.75, h: 0.45, fontSize: 14, color: 'D7E8E0', margin: 0, fit: 'shrink' });
  });
  s.addShape(pptx.ShapeType.rect, { x: 0.72, y: 6.35, w: 11.95, h: 0.5, fill: { color: '245E53' }, line: { color: '245E53' } });
  s.addText('Saída esperada: um enunciado causal, delimitado e sustentado — ainda sem escolher a solução.', {
    x: 1.0, y: 6.49, w: 11.4, h: 0.22, fontSize: 15, bold: true, color: C.white, align: 'center', margin: 0
  });
  footer(s, 'Equipe 2 · Engenharia de Produto + PSP6 · UnB', 7, true);
  s.addNotes(`Encerrar pedindo validação da professora sobre o recorte e mostrando que o grupo entendeu as pendências metodológicas.`);
}

pptx.writeFile({ fileName: '03_Projeto/entregas/semana 03 - sustentacao do problema.pptx' });
