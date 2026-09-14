# Nit Med

Projeto de Sistematização da disciplina de Programação e Desenvolvimento Web.

A Nit Med é uma aplicação web desenvolvida para uma clínica de saúde fictícia, composta por uma landing page responsiva e uma API para consulta de profissionais, especialidades e disponibilidade de atendimento.

O projeto integra os requisitos do Projeto 01 e do Projeto 02 da atividade de Sistematização, utilizando tecnologias modernas de desenvolvimento web, mas mantendo uma estrutura simples, organizada e fácil de executar.

---

## Objetivo

O objetivo da Nit Med é apresentar uma clínica de saúde de forma clara, moderna e responsiva, além de disponibilizar uma área interativa para consulta da equipe médica.

A aplicação permite:

- visualizar os principais serviços da clínica;
- conhecer os profissionais disponíveis;
- pesquisar profissionais pelo nome;
- filtrar profissionais por especialidade;
- visualizar informações e disponibilidade de atendimento;
- acessar um formulário estático de contato.

---

## Projetos contemplados

### Projeto 01 — Landing Page Estática

A landing page apresenta a clínica, seus serviços e sua equipe.

Os requisitos contemplados são:

- título da página;
- imagens relacionadas aos serviços;
- descrição dos serviços;
- equipe fictícia com pelo menos 3 profissionais;
- foto e cargo/especialidade dos profissionais;
- utilização de diferentes níveis de cabeçalho;
- formulário estático contendo:
  - Nome;
  - E-mail;
  - Cidade;
  - Estado;
- layout responsivo.

O formulário é apenas demonstrativo e não realiza processamento ou envio de dados.

### Projeto 02 — API de Profissionais de Saúde

A aplicação também possui uma API responsável por fornecer os dados dos profissionais da clínica.

A API contempla:

- leitura de dados de arquivo JSON local;
- listagem de profissionais;
- listagem de especialidades;
- busca por nome;
- filtro por especialidade;
- consulta da disponibilidade dos profissionais.

---

## Tecnologias utilizadas

### Frontend

- React
- TypeScript
- Tailwind CSS
- Vite

### Backend

- Node.js
- Express
- TypeScript

### Dados

- JSON

### Versionamento

- Git
- GitHub

---

## Funcionalidades

- Landing page responsiva
- Layout Mobile First
- Navegação por seções
- Apresentação dos serviços da clínica
- Equipe médica carregada dinamicamente
- Busca de profissionais por nome
- Filtro por especialidade
- Visualização da disponibilidade
- Modal com informações do profissional
- Formulário estático de contato
- Integração entre frontend e API REST

---

## Estrutura do projeto

```text
nit-med/
│
├── frontend/
│   └── src/
│       ├── components/
│       ├── api.ts
│       ├── types.ts
│       ├── App.tsx
│       └── main.tsx
│
├── backend/
│   ├── data/
│   │   └── professionals.json
│   │
│   └── src/
│       └── server.ts
│
├── docs/
│   └── eap.md
│
├── README.md
└── .gitignore
