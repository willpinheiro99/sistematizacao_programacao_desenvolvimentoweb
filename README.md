# Nit Med

Projeto acadêmico desenvolvido para a disciplina de Programação e Desenvolvimento Web do CEUB.

O Nit Med simula o site de uma clínica de saúde fictícia, com landing page responsiva e integração com uma API REST própria para consulta de profissionais, especialidades e disponibilidade de atendimento.

Projeto desenvolvido individualmente por **William Pinheiro**, estudante de Análise e Desenvolvimento de Sistemas no CEUB.

---

## Tecnologias

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

### Dados e versionamento
- JSON local
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
│   ├── src/
│   │   └── server.ts
│   ├── package.json
│   └── tsconfig.json
│
├── frontend/
│   ├── public/
│   │   └── images/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Footer.tsx
│   │   │   ├── Header.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── ProfessionalModal.tsx
│   │   │   └── TeamSection.tsx
│   │   ├── api.ts
│   │   ├── App.tsx
│   │   ├── index.css
│   │   ├── main.tsx
│   │   └── types.ts
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
```

---

## Funcionalidades

A aplicação possui:

- landing page responsiva;
- navegação por seções;
- apresentação de serviços;
- listagem dinâmica de especialidades;
- equipe com 12 profissionais fictícios;
- busca de profissionais por nome;
- filtro por especialidade;
- combinação entre busca e filtro;
- modal com detalhes e disponibilidade;
- formulário de contato;
- botão de contato via WhatsApp;
- integração entre frontend e API REST própria.

O layout foi desenvolvido com abordagem **Mobile First** e revisado para smartphones, tablets, notebooks e monitores desktop.

---

## Especialidades

A API disponibiliza profissionais das seguintes áreas:

- Cardiologia
- Clínica Geral
- Nutrição
- Dermatologia
- Pediatria
- Ortopedia

Cada profissional possui:

- nome;
- especialidade;
- registro profissional;
- fotografia ilustrativa;
- descrição;
- datas disponíveis;
- horários de atendimento.

---

## API REST

A API foi desenvolvida com Node.js, Express e TypeScript.

Em ambiente local, ela é executada em:

```text
http://localhost:3000
```

### Endpoints

#### Listar profissionais

```http
GET /api/profissionais
```

#### Buscar por nome

```http
GET /api/profissionais?nome=Mariana
```

#### Filtrar por especialidade

```http
GET /api/profissionais?especialidade=Cardiologia
```

#### Combinar busca e filtro

```http
GET /api/profissionais?nome=Mariana&especialidade=Cardiologia
```

#### Listar especialidades

```http
GET /api/especialidades
```

Os dados são armazenados em:

```text
backend/data/professionals.json
```

---

## Integração com o frontend

O frontend consome a API utilizando a Fetch API.

A comunicação está centralizada em:

```text
frontend/src/api.ts
```

A URL da API pode ser configurada pela variável de ambiente:

```env
VITE_API_URL=
```

Quando a variável não é informada, a aplicação utiliza:

```text
http://localhost:3000
```

---

## Como executar

### Pré-requisitos

- Node.js
- npm
- Git

### 1. Clonar o repositório

```bash
git clone https://github.com/willpinheiro99/sistematizacao_programacao_desenvolvimentoweb.git
```

```bash
cd sistematizacao_programacao_desenvolvimentoweb
```

### 2. Instalar as dependências

Raiz:

```bash
npm install
```

Frontend:

```bash
npm --prefix frontend install
```

Backend:

```bash
npm --prefix backend install
```

### 3. Executar o projeto

Na raiz:

```bash
npm run dev
```

Esse comando inicia frontend e backend simultaneamente.

Por padrão:

```text
Frontend: http://localhost:5173
API:      http://localhost:3000
```

### Execução separada

Frontend:

```bash
npm --prefix frontend run dev
```

Backend:

```bash
npm --prefix backend run dev
```

---

## Build

Frontend:

```bash
npm --prefix frontend run build
```

Backend:

```bash
npm --prefix backend run build
```

Os dois builds foram testados com sucesso.

---

## Formulário e agendamento

O formulário de contato possui:

- Nome
- E-mail
- Cidade
- Estado

Ele é demonstrativo e não envia nem armazena dados.

A disponibilidade exibida nos profissionais também é fictícia.

O botão de agendamento direciona o usuário para a seção de contato e não representa um sistema real de marcação de consultas.

---

## Testes realizados

Foram verificados:

- funcionamento do frontend;
- funcionamento da API;
- build do frontend;
- build do backend;
- busca por nome;
- filtro por especialidade;
- combinação de filtros;
- abertura e fechamento do modal;
- navegação por âncoras;
- validação do formulário;
- responsividade em diferentes tamanhos de tela.

---

## EAP

A Estrutura Analítica do Projeto está disponível em:

```text
docs/eap.md
```

---

## Observação

Este projeto possui finalidade exclusivamente acadêmica.

Todos os profissionais, nomes, registros, especialidades, disponibilidades, descrições e demais informações apresentadas são fictícios.

As imagens utilizadas possuem caráter meramente ilustrativo.

O Nit Med não representa uma clínica real e não oferece atendimento médico, diagnóstico, tratamento ou agendamento real.

---

## Autor

**William Pinheiro**

Análise e Desenvolvimento de Sistemas  
CEUB

Disciplina: Programação e Desenvolvimento Web

---

## Repositório

```text
https://github.com/willpinheiro99/sistematizacao_programacao_desenvolvimentoweb
```

---

## Status

Projeto funcional, com frontend e backend concluídos, responsividade revisada e builds de produção validados.

Próxima etapa: publicação da aplicação e preparação da entrega acadêmica.
