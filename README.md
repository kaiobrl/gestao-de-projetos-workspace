# Formato Livre | Gestão de Projetos (Mini-CRM)

Bem-vindo à documentação do **Formato Livre - Gestão Pro Max**, um mini-CRM construído sob medida para gerenciamento ágil de clientes, orçamentos, etapas de projeto e prazos.

---

## 💻 Tecnologias Utilizadas
Este projeto foi desenvolvido com uma arquitetura **100% Client-Side** para ser leve, rápido e rodar direto no navegador sem necessidade de servidores complexos.

- **HTML5:** Estrutura semântica e formulários.
- **Tailwind CSS (via CDN):** Utilizado para estilização rápida, responsividade e layout (Dark Mode default).
- **Vanilla JavaScript (ES6+):** Controle de DOM, lógica de negócios, cálculos financeiros e manipulação de arrays.
- **Firebase (BaaS):**
    - **Firestore:** Banco de dados NoSQL em nuvem que permite sincronização em tempo real entre dispositivos e armazenamento persistente e escalável.
    - **Authentication:** Sistema de login seguro com e-mail e senha, garantindo que cada usuário tenha acesso apenas aos seus próprios dados.
- **Chart.js (via CDN):** Biblioteca utilizada para a renderização gráfica da aba de relatórios/dashboard.
- **Phosphor Icons (via CDN):** Biblioteca elegante para ícones visuais (relógios, links, ações).
- **jsPDF:** Geração de relatórios em PDF diretamente no navegador.

---

## 📁 Estrutura do Projeto

A organização dos arquivos é limpa e separada por responsabilidades:

```text
📁 Formato Livre Gestão de Projetos/
├── 📄 index.html      -> Interface visual (Lock Screen, Projetos, Dashboard e Modais).
├── 📄 index.css       -> Estilos customizados (Glassmorphism, Scrollbars, Animações).
├── 📄 index.js        -> Toda a lógica de negócios, gráficos, validação de login e armazenamento.
└── 📄 README.md       -> Esta documentação.
```

---

## 🚀 Como Continuar e Manter o Projeto

Para continuar desenvolvendo ou modificar a aplicação no futuro, entenda o fluxo de dados:

### 1. Manipulando Etapas Padrão
Se você precisar alterar, adicionar ou remover as **8 Etapas** da sua metodologia, abra o arquivo `index.js`. Logo após a lógica de login, você encontrará o array `stages`.
- Para criar novas sub-tarefas padrão para uma fase, basta editar a propriedade `tasks: [...]` dentro daquele objeto de etapa.

### 2. Manipulando o Banco de Dados (Firebase Firestore)
- **Sincronização:** Todos os clientes são salvos automaticamente na nuvem. Você pode acessar seus dados de qualquer dispositivo fazendo login com sua conta.
- **Segurança:** Os dados são protegidos por regras de segurança do Firebase. Cada usuário (identificado pelo seu `uid`) possui um documento exclusivo na coleção `users`, garantindo total privacidade.
- **Backup:** Embora os dados estejam na nuvem, você ainda pode utilizar o botão de **Exportar JSON** para manter uma cópia física dos seus dados ou migrar para outra conta.

### 3. Configurações de Paginação
- A paginação padrão mostra 10 projetos por página.
- Para alterar, modifique a constante `ITEMS_PER_PAGE` no arquivo `index.js`.

---

## ✨ Principais Funcionalidades

1. **Sistema de Autenticação Real:** Login e criação de conta seguros via Firebase Auth (E-mail/Senha).
2. **Sincronização em Nuvem:** Dados salvos em tempo real no Firestore, permitindo acesso multi-dispositivo.
3. **Isolamento de Dados:** Cada usuário possui seu próprio banco de dados privado.
4. **Paginação e Busca Otimizada:** Busca com debounce (300ms) e paginação para melhor performance.
3. **Aba de Dashboard (Gráficos):** Uma aba analítica que utiliza Chart.js para mostrar:
   - *Projeção Financeira:* Soma dos valores de projetos faturados agrupados por mês (baseado nas datas de entrega/início).
   - *Conversão de Projetos:* Um gráfico em funil que quantifica quantos projetos estão parados em cada etapa da jornada do cliente.
4. **Checklist Dinâmico de Projetos:** A barra de progresso de cada card é baseada no volume de sub-tarefas (*tasks*) marcadas, e não apenas na mudança de etapa, sendo possível ver visualmente a aproximação dos 100%.
5. **Gerenciamento Completo de Cliente:**
   - *Links Rápidos:* Integração para abrir WhatsApp Web ou E-mail instantaneamente a partir do painel.
   - *Anexos de Ferramentas:* Campos estruturados para URLs do Figma, Google Drive e GitHub.
   - *Tags & Anotações:* Sistema de tags visuais customizadas e área de notas livres.
6. **Import/Export:** Funcionalidade para migrar dados via JSON com validação de integridade.
7. **UX Melhorada:** Fechar modais ao clicar no backdrop, validação de formulários, animações e transições suaves.
8. **Logoff Acessível:** Botão de "Sair" estrategicamente posicionado no cabeçalho, visível em todos os tamanhos de tela (desktop e mobile) para encerramento rápido e seguro da sessão.

---

## 🛡️ Medidas de Segurança Implementadas

- **Firebase Auth:** Autenticação robusta gerenciada pelo Google, com suporte a sessões persistentes e recuperação de conta.
- **Firestore Security Rules:** Proteção em nível de servidor para garantir que um usuário nunca acesse os dados de outro.
- **Sanitização de Inputs:** Todos os dados inseridos pelo usuário são sanitizados para prevenir XSS.
- **Validação de Import:** Dados importados são validados e sanitizados antes de serem salvos no banco.

---

## 💡 Próximos Passos (Sugestões para o Futuro)

1. *(IMPLEMENTADO)* Banco de Dados em Nuvem (Firebase) - Autenticação e Firestore integrados para sincronização multi-dispositivo.
2. *(IMPLEMENTADO)* Sistema de Alertas de Prazos - Alerta visual para projetos com entrega nos próximos 3 dias ou atrasados.
3. *(IMPLEMENTADO)* Exportação de Relatórios PDF - Botão para exportar relatório completo com todos os projetos.
4. *(IMPLEMENTADO)* Notificações Browser - Notificações ao avançar etapas e quando prazos estão próximos.

---

**Desenvolvido como uma ferramenta ágil para alavancar a gestão de projetos freelancers.**
