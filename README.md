# 📊 Formato Livre | Gestão de Projetos (Mini-CRM Pro Max)

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![JavaScript ES6+](https://img.shields.io/badge/JavaScript_ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)](https://firebase.google.com/)
[![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white)](https://www.chartjs.org/)

Bem-vindo ao **Formato Livre - Gestão de Projetos (CRM Pro Max)**, uma solução moderna e otimizada de Single-Page Application (SPA) para gerenciamento ágil de clientes, orçamentos, etapas de pipelines e prazos para profissionais autônomos, freelancers e agências.

O sistema opera sob uma arquitetura premium **Glassmorphism**, com persistência em nuvem em tempo real e isolamento multi-tenant robusto por usuário.

---

## 🛠️ Tecnologias e Dependências

A aplicação foi planejada de forma a eliminar a necessidade de servidores pesados de backend, executando **100% no lado do cliente (Client-Side)** com alta performance:

*   **Estrutura Semântica:** HTML5 com inputs de datas modernos (`color-scheme: dark`) e modais dinâmicos nativos.
*   **Estilização & Responsividade:** Tailwind CSS (via CDN) com design dark mode padrão e CSS customizado em [index.css](file:///c:/Users/Nome/Desktop/Gest%C3%A3o%20de%20Projetos%20-%20app%27s%20Firebase%20configuration/index.css) para efeitos de desfoque, micro-interações de clique/hover e animações suaves de transição.
*   **Banco de Dados & Auth (BaaS):**
    *   **Firebase Authentication:** Login e criação de contas com e-mail/senha criptografados.
    *   **Cloud Firestore:** Banco NoSQL para sincronização dos projetos em tempo real com regras de isolamento total de dados.
*   **Visualização Analítica:** **Chart.js** para renderização de gráficos responsivos em tempo de execução.
*   **Geração de Relatórios:** **jsPDF** para compilação assíncrona de relatórios analíticos formatados para exportação física.
*   **Iconografia:** **Phosphor Icons** para recursos visuais limpos e consistentes.

---

## 📁 Organização de Arquivos

O projeto adota uma estrutura limpa e de fácil manutenção:

```text
📁 Formato Livre Gestão de Projetos/
├── 📄 index.html      -> Marcação de interface (Lock Screen de Auth, Painel de Projetos, Dashboard e Modais).
├── 📄 index.css       -> Estilos customizados (Efeitos de vidro fosco, skeletons, custom scrollbars).
├── 📄 index.js        -> Motor da aplicação (Inicialização do Firebase, controle de estados, gráficos e utilitários).
└── 📄 README.md       -> Esta documentação.
```

---

## 🚀 Como Executar e Hospedar o Projeto

Por ser uma aplicação baseada em arquitetura estática estrita (*Client-Side Static App*), ela não requer build, transpilação ou ambiente Node.js complexo para desenvolvimento local:

### Execução Local:
1.  **Duplo clique:** Você pode simplesmente abrir o arquivo [index.html](file:///c:/Users/Nome/Desktop/Gest%C3%A3o%20de%20Projetos%20-%20app%27s%20Firebase%20configuration/index.html) diretamente em qualquer navegador moderno.
2.  **Servidor de Desenvolvimento Local (Recomendado):**
    *   Utilize a extensão **Live Server** do VS Code, ou
    *   Execute o comando em seu terminal de preferência na pasta raiz do projeto:
        ```bash
        # Utilizando Python 3
        python -m http.server 8000
        
        # Ou utilizando Node.js (se instalado globalmente)
        npx http-server -p 8000
        ```
    *   Acesse `http://localhost:8000` no seu navegador.

### Publicação em Produção:
O projeto está pronto para deploy gratuito em serviços de hospedagem estática como **Firebase Hosting**, **Vercel**, **Netlify** ou **GitHub Pages**, bastando subir os arquivos estáticos diretamente.

---

## 🎯 Regras de Negócio & Cálculos Lógicos

Para auxiliar na manutenção e evolução do sistema, entenda como as principais regras de negócios foram escritas no código de [index.js](file:///c:/Users/Nome/Desktop/Gest%C3%A3o%20de%20Projetos%20-%20app%27s%20Firebase%20configuration/index.js):

### 1. Cálculo do Progresso Geral
A barra de progresso horizontal em cada card de cliente não é baseada em qual das 8 etapas o projeto se encontra, mas sim na conclusão real das sub-tarefas daquela etapa.
*   **Fórmula:** 
    $$\text{Progresso (\%)} = \left( \frac{\text{Quantidade de Sub-tarefas Concluídas}}{\text{Total de Sub-tarefas Cadastradas em Todas as Etapas}} \right) \times 100$$
*   Isso garante uma evolução contínua da barra conforme o profissional marca tarefas do checklist, em vez de saltos bruscos somente ao mudar a etapa geral do projeto.

### 2. Status de Prazo Urgente/Atrasado
A função `getDeadlineStatus(dueDate)` analisa dinamicamente as datas de entrega:
*   **Atrasado (`overdue`):** Se a data de previsão já passou (`diferença de dias < 0`). Aplica classe visual vermelha de alerta.
*   **Urgente (`urgent`):** Se faltam 3 dias ou menos para a entrega. Aplica classe visual amarela e dispara uma notificação do sistema operacional no primeiro carregamento.
*   **Dentro do Prazo:** Se faltam mais de 3 dias para a entrega.

### 3. Agrupamento de Projeção Financeira
O gráfico de **Projeção Financeira** analisa a propriedade `dueDate` (ou fallback para `startDate`) de cada projeto, isola o Mês/Ano (formato `AAAA-MM`), agrupa e soma todos os faturamentos previstos e renderiza uma linha do tempo ordenada cronologicamente, automatizando a previsão de ganhos.

---

## 🛡️ Medidas de Segurança Implementadas

O projeto foi construído sob fortes princípios de segurança em aplicações web modernas:

### 1. Prevenção de Cross-Site Scripting (XSS)
Toda a entrada de texto fornecida pelo usuário no formulário de cadastro ou na importação de arquivos é sanitizada de forma ativa por meio da função `sanitizeInput()` antes de ser exibida ou guardada na nuvem:

```javascript
function sanitizeInput(str) {
  if (!str) return '';
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}
```
*Este método transforma tags HTML perigosas (como `<script>`) em entidades seguras de texto puro, impedindo ataques de injeção.*

### 2. Isolamento de Banco de Dados Multi-tenant
A persistência do banco de dados Cloud Firestore armazena todos os clientes sob uma chave única baseada no `uid` gerado pelo Firebase Authentication para o usuário conectado:
`const docRef = db.collection('users').doc(user.uid);`

> [!IMPORTANT]
> Para garantir que este isolamento seja à prova de falhas em nível de servidor, você **deve** publicar as seguintes **Regras de Segurança (Firestore Security Rules)** no console administrativo do seu Firebase:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

---

## ✨ Funcionalidades em Destaque

1.  **Login Seguro Real:** Processamento total de criação de conta e logins por e-mail/senha.
2.  **Notificações Desktop Nativas:** Sistema integrado de notificações do navegador para mudanças de estágio e prazos críticos.
3.  **Exportação e Importação Portáteis:** Botões de baixar backup físico em JSON e importador inteligente de dados com integridade estrutural verificada na hora.
4.  **Relatório PDF Dinâmico:** Exportação de planilha financeira formatada em PDF direto no navegador.
5.  **Dashboard Completo:** 4 KPIs estratégicos e 2 gráficos avançados integrados (Chart.js).
6.  **Anexos Práticos:** Acesso direto a pastas do Drive, GitHub e Figma direto de cada card.
7.  **UX Premium:** Rolagem customizada, skeletons shimmer de carregamento, alertas animados temporários (Toasts) e fechamento inteligente de janelas/modais clicando fora deles (backdrop click).

---

## 💡 Sugestões de Evolução Futura

1.  **Quadro Kanban Interativo:** Implementar suporte a arrastar-e-soltar (Drag and Drop) usando bibliotecas leves como `SortableJS` para alteração de etapas arrastando os cards.
2.  **Hospedagem de Briefings (Firebase Storage):** Adicionar upload real de arquivos de imagem, PDFs ou contratos anexados a cada cliente.
3.  **Logs de Histórico (Activity Feed):** Criação de uma sub-coleção para registrar a data e hora exata em que cada sub-tarefa foi marcada ou etapa foi alterada.
4.  **PWA (Progressive Web App):** Configuração de um arquivo `manifest.json` e Service Worker para habilitar o modo offline e a instalação do CRM como app no celular ou desktop.

---

*Desenvolvido sob padrões de alta fidelidade visual e rigor de engenharia de software para alavancar carreiras de desenvolvimento autônomo.*
