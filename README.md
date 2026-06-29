# 🛰️ IFPA Orion

Sistema acadêmico inteligente desenvolvido para estudantes do IFPA.

O IFPA Orion é uma plataforma que complementa o SIGAA com uma interface moderna, organizada e orientada a dados, oferecendo dashboards, visualização acadêmica e ferramentas de produtividade.

---

## 🎯 Objetivo do Projeto

O objetivo do IFPA Orion é criar uma camada moderna sobre o sistema acadêmico SIGAA, permitindo:

- Visualização clara da vida acadêmica
- Dashboard de desempenho acadêmico
- Organização de disciplinas e horários
- Interface moderna, rápida e responsiva
- Futuramente: integração com SIGAA via sessão autenticada do usuário (sem armazenar senha)

---

## 🧠 Ideia Arquitetural

O sistema segue uma arquitetura híbrida e modular:

- Frontend principal em React + TypeScript + Vite
- Backend em Node.js com Express
- Estrutura preparada para evolução em microserviços
- Integração futura com SIGAA via automação de sessão autenticada (modelo seguro sem persistência de credenciais)

---

## ⚙️ Tecnologias Utilizadas

### Frontend
- React
- TypeScript
- Vite
- CSS puro / módulos CSS
- Componentização avançada (Dashboard, Sidebar, Layout, Cards)

### Backend
- Node.js
- Express
- API REST (estrutura inicial)

### Ferramentas
- Git + GitHub (versionamento)
- ESLint
- Vite build system

---

## 📁 Estrutura Completa do Projeto

backend/
├── backend/
│ └── server.js
├── package.json
├── package-lock.json

orion-dashboard/
├── public/
│ ├── favicon.svg
│ ├── icons.svg
├── src/
│ ├── App.jsx
│ ├── index.css
│ ├── main.jsx
│ ├── assets/
│ └── components/
├── package.json
├── vite.config.js

src/
├── components/
│ ├── dashboard/
│ │ ├── StatsCards.tsx
│ │ ├── TodaySubjects.tsx
│ │ ├── WelcomeCard.tsx
│ │ ├── *.css
│ ├── layout/
│ │ ├── Layout.tsx
│ │ ├── TopBar.tsx
│ ├── sidebar/
│ │ ├── Sidebar.tsx
│ │ ├── Sidebar.css
│ ├── login/
│ │ ├── LoginCard.tsx
│ ├── ui/
│ │ ├── Button.tsx
│
├── pages/
│ └── Dashboard.tsx
│
├── types/
│ └── disciplina.ts
│
├── assets/
│ ├── logo-ifpa.png
│ ├── hero.png
│
├── App.tsx
├── main.tsx
├── index.css


---

## 📊 Funcionalidades já implementadas

✔ Estrutura inicial completa do frontend React + TypeScript  
✔ Dashboard com componentes base (cards, sidebar, layout)  
✔ Organização de páginas e rotas iniciais  
✔ Estrutura de backend Node.js criada  
✔ Separação parcial de módulos (dashboard, layout, login)  
✔ Sistema preparado para expansão para dados dinâmicos  
✔ Projeto versionado com Git e enviado ao GitHub  

---

## 🔗 Integração com GitHub

O projeto foi:

1. Inicializado localmente com Git
2. Configurado com remote GitHub
3. Commit inicial criado
4. Enviado com sucesso para branch `main`

Repositório atual:
👉 https://github.com/devsolido/ifpa-orion

---

## 📌 Estado Atual do Projeto

🚧 **Fase atual: base estrutural concluída**

O sistema atualmente possui:

- Estrutura de frontend funcional
- Backend inicial (API base)
- Componentes visuais do dashboard
- Organização de código modular
- Integração com GitHub funcionando

Ainda NÃO possui:

- Autenticação
- Integração real com SIGAA
- API de dados acadêmicos reais
- Deploy em produção

---

## 🧭 Próximos Passos Planejados

- [ ] Refatorar estrutura para padrão profissional (frontend/backend separados completamente)
- [ ] Criar API mock de dados acadêmicos
- [ ] Implementar autenticação futura baseada em sessão SIGAA
- [ ] Tornar dashboard dinâmico (dados reais)
- [ ] Melhorar UI/UX (design mais moderno)
- [ ] Preparar deploy (Vercel / Render / Railway)
- [ ] Adicionar gráficos e estatísticas acadêmicas

---

## 🧠 Contexto para IA / Continuação do Projeto

Este projeto é um sistema chamado **IFPA Orion**.

Ele representa:

- Um dashboard acadêmico alternativo ao SIGAA
- Um sistema educacional moderno baseado em React
- Um projeto em evolução contínua de software real
- Uma base para integração futura com dados acadêmicos reais

### Estado atual:
- Estrutura inicial concluída
- Código versionado no GitHub
- Frontend funcional em desenvolvimento
- Backend básico iniciado

### Objetivo futuro:
Transformar o sistema em uma plataforma acadêmica real, com integração segura ao SIGAA e visualização avançada de dados estudantis.

---

## 👨‍💻 Autor

Igor Veras Morais  
Projeto acadêmico em desenvolvimento contínuo

---

## 📌 Observação Final

Este projeto está em evolução constante e serve como base para aprendizado prático de:

- Desenvolvimento Full Stack
- Arquitetura de sistemas
- Integração com sistemas externos
- UI moderna com React
- Controle de versão profissional com Git
