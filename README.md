# Nit Med

Projeto desenvolvido para a disciplina de Programação e Desenvolvimento Web do CEUB.

A proposta consiste em uma landing page responsiva para uma clínica de saúde fictícia, integrada a uma API REST própria para consulta de profissionais, especialidades e disponibilidade de atendimento.

O projeto foi desenvolvido com foco em organização, responsividade, boa experiência visual e integração entre frontend e backend.

---

## Desenvolvimento

Projeto desenvolvido individualmente por **William Pinheiro**, estudante de Análise e Desenvolvimento de Sistemas no CEUB, como parte da disciplina de Programação e Desenvolvimento Web.

---

## Objetivo do projeto

O Nit Med foi desenvolvido para atender aos requisitos da sistematização da disciplina, contemplando:

- landing page responsiva;
- apresentação de serviços;
- apresentação de profissionais;
- formulário de contato;
- API REST própria;
- busca de profissionais por nome;
- filtro por especialidade;
- consulta de disponibilidade;
- integração entre frontend e backend;
- publicação do código no GitHub.

---

## Tecnologias utilizadas

### Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- Fetch API

### Backend

- Node.js
- Express
- TypeScript

### Dados

- JSON local

### Versionamento

- Git
- GitHub

---

## Estrutura do projeto

```text
sistematizacao_programacao_desenvolvimentoweb/
│
├── backend/
│   ├── data/
│   │   └── professionals.json
│   │
│   ├── src/
│   │   └── server.ts
│   │
│   ├── package.json
│   └── tsconfig.json
│
├── frontend/
│   ├── public/
│   │   └── images/
│   │       ├── brand/
│   │       ├── hero/
│   │       ├── professionals/
│   │       └── sections/
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── Footer.tsx
│   │   │   ├── Header.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── ProfessionalModal.tsx
│   │   │   └── TeamSection.tsx
│   │   │
│   │   ├── api.ts
│   │   ├── App.tsx
│   │   ├── index.css
│   │   ├── main.tsx
│   │   └── types.ts
│   │
│   ├── index.html
│   ├── package.json
│   └── vite.config.ts
│
├── docs/
│   └── eap.md
│
├── .gitignore
├── package.json
└── README.md