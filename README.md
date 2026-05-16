# Formato Livre | Gestão de Projetos (Mini-CRM)

Bem-vindo à documentação do **Formato Livre - Gestão Pro Max**, um mini-CRM construído sob medida para gerenciamento ágil de clientes, orçamentos, etapas de projeto e prazos.

---

## 💻 Tecnologias Utilizadas
Este projeto foi desenvolvido com uma arquitetura **100% Client-Side** para ser leve, rápido e rodar direto no navegador sem necessidade de servidores complexos.

- **HTML5:** Estrutura semântica e formulários.
- **Tailwind CSS (via CDN):** Utilizado para estilização rápida, responsividade e layout (Dark Mode default).
- **Vanilla JavaScript (ES6+):** Controle de DOM, lógica de negócios, cálculos financeiros e manipulação de arrays.
- **Chart.js (via CDN):** Biblioteca utilizada para a renderização gráfica da aba de relatórios/dashboard.
- **Phosphor Icons (via CDN):** Biblioteca elegante para ícones visuais (relógios, links, ações).
- **LocalStorage & SessionStorage API:** Banco de dados integrado no navegador que salva informações offline e garante estado de sessão para autenticação.
- **Web Crypto API:** Hash de senhas com SHA-256 e salt para segurança.

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

### 2. Manipulando o LocalStorage & Senha Mestre
- **Clientes:** Todos os clientes são salvos com a chave `formato-livre-clients`.
- **Backup:** Backup automático disponível em `formato-livre-backup` (recuperado automaticamente se dados principais estiverem corrompidos).
- **Autenticação:** A senha de bloqueio (hasheada com SHA-256 + salt) fica na chave `fl_auth_hash`. Para "esquecer a senha", abra o Console (F12) e digite `localStorage.removeItem('fl_auth_hash')`.
- **Sincronização / Backup:** Como os dados ficam apenas no navegador, **sempre exporte o JSON**clicando no botão de download (gera o arquivo `gestao-de-projetos.json`) antes de limpar o cache.

### 3. Configurações de Paginação
- A paginação padrão mostra 10 projetos por página.
- Para alterar, modifique a constante `ITEMS_PER_PAGE` no arquivo `index.js`.

---

## ✨ Principais Funcionalidades

1. **Sistema de Login Seguro:** O painel possui tela de bloqueio com hash SHA-256 + salt. No primeiro acesso, o usuário define uma senha mestre.
2. **Paginação e Busca Otimizada:** Busca com debounce (300ms) e paginação de 10 itens por página para melhor performance.
3. **Aba de Dashboard (Gráficos):** Uma aba analítica que utiliza Chart.js para mostrar:
   - *Projeção Financeira:* Soma dos valores de projetos faturados agrupados por mês (baseado nas datas de entrega/início).
   - *Conversão de Projetos:* Um gráfico em funil que quantifica quantos projetos estão parados em cada etapa da jornada do cliente.
4. **Checklist Dinâmico de Projetos:** A barra de progresso de cada card é baseada no volume de sub-tarefas (*tasks*) marcadas, e não apenas na mudança de etapa, sendo possível ver visualmente a aproximação dos 100%.
5. **Gerenciamento Completo de Cliente:**
   - *Links Rápidos:* Integração para abrir WhatsApp Web ou E-mail instantaneamente a partir do painel.
   - *Anexos de Ferramentas:* Campos estruturados para URLs do Figma, Google Drive e GitHub.
   - *Tags & Anotações:* Sistema de tags visuais customizadas e área de notas livres.
6. **Import/Export com Validação:** Importação com validação e sanitização de dados. Exportação inclui informações de etapa.
7. **Backup Automático:** Backup automático a cada 60 segundos e recuperação automática em caso de dados corrompidos.
8. **UX Melhorada:** Fechar modais ao clicar no backdrop, validação de formulários, animações e transições suaves.

---

## 🛡️ Medidas de Segurança Implementadas

- **Hash de Senhas:** Utiliza Web Crypto API com SHA-256 e salt fixo para proteger a senha mestras.
- **Sanitização de Inputs:** Todos os dados inseridos pelo usuário são sanitizados para prevenir XSS.
- **Validação de Import:** Dados importados são validados e sanitizados antes de serem salvos.
- **Session Storage:** Autenticação usa sessionStorage (limpo ao fechar navegador) com opção "lembrar" via localStorage.

---

## 💡 Próximos Passos (Sugestões para o Futuro)

1. **Banco de Dados em Nuvem (Firebase / Supabase):**
   * *Por que?* Ao conectar um Backend-as-a-Service, você passa a poder acessar o painel do celular ou notebook sincronizando os dados em tempo real.
2. *(IMPLEMENTADO)* Sistema de Alertas de Prazos - Alerta visual para projetos com entrega nos próximos 3 dias ou atrasados.
3. *(IMPLEMENTADO)* Exportação de Relatórios PDF - Botão para exportar relatório completo com todos os projetos.
4. *(IMPLEMENTADO)* Notificações Browser - Notificações ao avançar etapas e quando prazos estão próximos.

---

**Desenvolvido como uma ferramenta ágil para alavancar a gestão de projetos freelancers.**
