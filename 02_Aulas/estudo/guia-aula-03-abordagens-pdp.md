# Guia de estudo — Abordagens de Desenvolvimento de Produto

> **Para o teste rápido de hoje, 17/08, 19:00–19:15** (Engenharia de Produto, Aula 03).
> Fonte: Rozenfeld et al. (2006), **Capítulo 1, seções 1.7 e 1.8** — em `04_Referencias/Livros/`.
> Este é o livro-texto dela e a Tabela 1.1 (p. 23–24) é o resumo de tudo.

---

## A ideia central em uma frase

**A forma de desenvolver produto evoluiu junto com a forma de gerir empresa** — de áreas isoladas
passando o projeto de mão em mão, para times integrados, para processo de negócio ligado à
estratégia. São **3 eras** e **9 abordagens**.

E o ponto que ela mais gosta de cobrar: **não existe a melhor abordagem.** A adequada depende do
contexto — ambiente competitivo, capacitação da empresa, complexidade do produto e se o setor é
estático ou dinâmico em inovação.

---

## As 3 eras e as 9 abordagens

### Era 1 — Desenvolvimento **Sequencial** de Produtos

| Abordagem | Foco | Contribuição |
|---|---|---|
| **1. Tradicional / Sequencial** | Divisão de tarefas, especialização, ênfase nas áreas funcionais | As únicas técnicas usadas diziam respeito ao **produto** |
| **2. Metodologia de Projeto** | Idem, mas com método | **Sistematização das atividades** por meio de metodologias (métodos sistemáticos para obter solução, avaliar, detalhar, projetar o processo de fabricação) |

**Origem:** pós-1ª Guerra, produção em massa de Ford + administração científica (divisão de tarefas,
"a maneira ótima", "as pessoas certas") → nasce a **Engenharia Tradicional**.

**Como funcionava:** a informação sobre o produto caminhava numa ordem lógica de uma área para
outra — Marketing → Design → Engenharia → Produção. Cada área recebia, fazia sua parte e passava
adiante. **Sem interação forte entre elas.**

**Características (decorar — cai muito):**
- P&D e DP isolados do resto da empresa, com cultura e linguagem próprias
- Barreiras organizacionais e de comunicação significativas
- Alta administração participa pouco das metas
- Hierarquia e linearidade no fluxo de informação
- **Fornecedores só entram nas fases finais** (empresa quer ser autossuficiente)
- Atividades vistas como de risco → resistência a controle e análise de retorno
- Profissionais **especializados**, carreira **vertical**, sem mobilidade horizontal

**Deficiências:** dificuldade de compreensão mútua, embates entre áreas, gerente de projeto surge
mas **com poder menor que o gerente funcional**, decisões tomadas de um ponto de vista restrito,
prejuízo à manufaturabilidade.

> **Número que ela pode citar:** equipe de projeto de montadora japonesa ≈ **485 pessoas** (as mais
> evoluídas, 333); norte-americana com desenvolvimento clássico ≈ **900**; alemã ≈ **1.500 engenheiros**.
> Não é que o trabalho fosse menor — é que no primeiro caso os **fornecedores participam do projeto**.

---

### Era 2 — Desenvolvimento **Integrado** de Produtos

Surge no **final dos anos 1980 até o final dos 1990**. Motivo: aumento da diversidade de produtos,
pressão de prazo e custo, regulamentação socioambiental, aceleração da inovação, cliente mais exigente.

| Abordagem | Foco | Contribuição |
|---|---|---|
| **3. Engenharia Simultânea** | Times multidisciplinares, co-localização, **paralelismo entre atividades** | Uso de equipes multidisciplinares e colocalização; conjunto integrado de metodologias (filosofias, técnicas e métodos) |
| **4. Stage-Gates** | **Foco na avaliação da transição de fases** | Procedimentos sistemáticos para a transição de fases |
| **5. Modelo de Funil** (Clark & Wheelwright) | Foco no **processo de negócio** | Importância da **gestão de portfólio**; relaciona transição de fases com a gestão do portfólio |

**Engenharia Simultânea — o que ela trouxe:**
- **Times multifuncionais** de projeto
- **Gerente de projeto "peso pesado"** — com poderes **superiores** aos dos gerentes funcionais
- Descoberta da **estrutura matricial forte**
- Participação de **clientes e fornecedores desde o início**
- Vantagem da **simultaneidade** de atividades → menos tempo, menos custo, mais qualidade
- Sistematizou e classificou as técnicas: **QFD, matriz de Pugh, FMEA e Análise de Valor**
  ⚠️ *É daqui que sai tudo que vocês vão usar em PSP6 — e ela vai fazer essa ligação.*

**Modelo de Funil:** parte do **portfólio** de projetos; por um processo disciplinado, com fases e
avaliações, **só os produtos com maior probabilidade de sucesso chegam ao mercado**. Alinha o PDP ao
**planejamento estratégico** (mercadológico, de produto e tecnológico).

**Características da era do Desenvolvimento Integrado (bloco de bullets — alto risco de cair):**
- Desenvolvimento **visto como processo**
- P&D e DP inseridos na estratégia e na cultura da empresa
- **Projetos plataforma e modularizados** para gerar variedade com baixo investimento
- Desenvolvimento é **preocupação da alta administração**
- **Simultaneidade e superposição** de informações e atividades
- Times multifuncionais
- **Fornecedores desde o início**, alianças estratégicas
- Revisão e avaliação constantes (técnica, custo, alinhamento estratégico)
- Profissionais mais **generalistas**, promoção vertical **e horizontal**, mobilidade
- Consenso no **início** do projeto evita divergência depois

---

### Era 3 — **Novas abordagens** para o Desenvolvimento Integrado

| Abordagem | Foco | Contribuição |
|---|---|---|
| **6. Lean** (Desenvolvimento Enxuto) | Trabalho em equipe, **simplificação e padronização**, ênfase nas fases iniciais, busca de novas soluções | Valorização do **front-end**; menos atividade rotineira, mais teste e busca de solução |
| **7. Design for Six Sigma (DFSS)** | **Otimização** das soluções com ferramentas estatísticas | Liga requisitos → especificações → tolerâncias por técnicas estatísticas; robustez |
| **8. Modelos de Maturidade** | Melhoria **incremental e radical** do processo por níveis | Propõe o conceito de nível de maturidade; indicadores para avaliar a evolução |
| **9. Gerenciamento do Ciclo de Vida (PLM)** | Integração de **todas as etapas do ciclo de vida**, inclusive produção e interprojetos | Gerenciamento integrado usando recursos de TI |

**Lean — os dois pontos que o livro destaca:**
1. **Visão mais orgânica**: máxima simplificação e **menos formalização** (formalizar não agrega valor);
   valorização do time; foco em **prototipagem e testes** → experimentação e aprendizagem.
   O gerente de projeto vira também **tutor** da aprendizagem dos engenheiros.
2. **Retardar ao máximo as decisões de detalhe** (ex.: tolerâncias). O tempo poupado vai para
   **buscar alternativas de solução e entender o problema**.

**Características comuns às novas abordagens:**
- Simplificar a formalização, com equipe mais disciplinada + ferramentas computacionais
- Ênfase na **aprendizagem** e busca de solução inovadora (mais tempo avaliando e propondo soluções;
  uso intenso de estatística e modelos computacionais; **gestão do conhecimento**)
- Adoção de **níveis de maturidade**
- **Gerenciamento do ciclo de vida** do produto, ampliando o escopo e integrando projetos

---

## 1.8 — Arranjos organizacionais (as 4 estruturas)

| Estrutura | Quem manda | Exemplo típico | Questão principal |
|---|---|---|---|
| **Funcional** | Gerente funcional | Customização; inovação incremental; empresa pequena | Como garantir a **integração entre funções**? |
| **Matricial peso leve** | Funcional forte; o "gerente" é **coordenador/administrador**, sem autoridade sobre pessoas nem orçamento | Automóveis tradicionais; eletrônicos; incrementais complexos | Como equilibrar ligação funcional × projeto? |
| **Matricial peso pesado** | **Gerente peso pesado** — autonomia total sobre orçamento e avaliação da equipe | Projetos recentes de sucesso na automobilística; alta inovação em eletrônica; projetos plataforma | idem |
| **Por projeto / autônoma** | Gerente de projeto; equipe dedicada (**Tiger Team**) | Empresas que competem por inovação; mudança tecnológica radical; aeroespacial | Como **compartilhar o aprendizado** de um projeto para outro? |

**Regra prática que ela pode pedir:** projeto mais estratégico → peso pesado. Projeto com alta
inovação/P&D → por projeto puro. Projeto de atualização/ajuste do produto → funcional já basta.

**Definições que caem:**
- **Função** = área de responsabilidade com alto grau de especialização. As clássicas no PDP:
  **Marketing, Engenharia e Manufatura**.
- Na **funcional**, a ligação forte é pela função (hierarquia + espaço físico + orçamento próprios).
- Na **por projeto**, o indivíduo **reporta ao gerente de projeto**, não ao funcional, e
  compartilha espaço físico do projeto.
- Na **matricial**, o indivíduo tem **dois superiores** — um funcional e um de projeto.
- **Toyota**: reestruturou para manter a força do peso pesado **e** coordenar vários projetos ao
  mesmo tempo, via **equipes de coordenadores de projetos**.

---

## As 6 pegadinhas mais prováveis

1. **Peso pesado × peso leve** — quem tem autoridade sobre orçamento e avaliação de pessoal.
   Peso pesado tem; peso leve **não** (é coordenador).
2. **Engenharia Simultânea × Stage-Gates × Funil** — todas são da era do Desenvolvimento Integrado,
   mas o foco é diferente: ES = **paralelismo/times**; Stage-Gates = **avaliação da transição de
   fases**; Funil = **processo de negócio + portfólio + estratégia**.
3. **Fornecedor**: no sequencial entra **no fim**; no integrado entra **desde o início**.
4. **Profissional**: sequencial = especialista, carreira vertical. Integrado = generalista, carreira
   vertical **e** horizontal.
5. **Lean ≠ só "enxugar"** — o ponto é **menos formalização + mais experimentação** e **retardar a
   decisão de detalhe**.
6. **"Qual a melhor abordagem?"** — a resposta certa é **nenhuma; depende do contexto** (ambiente
   competitivo, capacitação, desempenho do PDP, complexidade do produto, setor estático/dinâmico).

---

## Se o teste for de PSP6 (20:50)

O plano diz que o teste de PSP6 é sobre **o andamento do projeto e o conteúdo da entrega da semana**.
A entrega desta semana é **Local/Atividade · Usuários/Clientes**. Saiba responder de cabeça:

- **Qual é o problema?** Quebra de louça sanitária em canteiro gera fragmento cortante que fere o trabalhador.
- **Em que fase estamos?** Descoberta (*Discover*) do Diamante Duplo.
- **Que método usamos?** Stakeholder Mapping (8 perguntas) + perguntas da fase de Descoberta (p. 31) +
  pesquisa documental + plano de visita de campo.
- **Quem são os stakeholders?** Trabalhador, mestre de obras, SESMT, empregador/construtora, fornecedor de louças.
- **Quem tem alta influência?** Empregador, SESMT e mestre de obras (gerenciar de perto).
- **Qual o próximo passo?** Visita de campo → sustentação empírica do problema (é a entrega da Aula 03, 24/08).
- **Por que não propomos solução?** Porque a fase de Descoberta é de compreensão do problema; solução é convergência, vem depois.

*[Claude — 2026-08-17]*
