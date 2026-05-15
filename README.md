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

---

## 📁 Estrutura do Projeto

A organização dos arquivos é limpa e separada por responsabilidades:

```text
📁 Formato Livre Gestão de Projetos/
├── 📄 index.html      -> Interface visual (Lock Screen, Projetos, Dashboard e Modais).
├── 📄 index.css       -> Estilos customizados (Glassmorphism e Scrollbars).
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
- **Autenticação:** A senha de bloqueio (hasheada) fica na chave `fl_auth_hash`. Para "esquecer a senha", abra o Console (F12) e digite `localStorage.removeItem('fl_auth_hash')`.
- **Sincronização / Backup:** Como os dados ficam apenas no navegador, **sempre exporte o JSON** clicando no botão de download (gera o arquivo `gestao-de-projetos.json`) antes de limpar o cache.

---

## ✨ Principais Funcionalidades

1. **Sistema de Login (Lock Screen):** O painel possui uma tela de bloqueio inicial de segurança para proteger informações. No primeiro acesso, o usuário define uma "senha mestre" que fica ofuscada localmente.
2. **Aba de Dashboard (Gráficos):** Uma aba analítica que utiliza Chart.js para mostrar:
   - *Projeção Financeira:* Soma dos valores de projetos faturados agrupados por mês (baseado nas datas de entrega/início).
   - *Conversão de Projetos:* Um gráfico em funil que quantifica quantos projetos estão parados em cada etapa da jornada do cliente.
3. **Checklist Dinâmico de Projetos:** A barra de progresso de cada card é baseada no volume de sub-tarefas (*tasks*) marcadas, e não apenas na mudança de etapa, sendo possível ver visualmente a aproximação dos 100%.
4. **Gerenciamento Completo de Cliente:**
   - *Links Rápidos:* Integração para abrir WhatsApp Web ou E-mail instantaneamente a partir do painel.
   - *Anexos de Ferramentas:* Campos estruturados para URLs do Figma, Google Drive e GitHub.
   - *Tags & Anotações:* Sistema de tags visuais customizadas e área de notas livres.

---

## 💡 Próximos Passos (Sugestões para o Futuro)

Com as implementações recentes de Login e Dashboards Analíticos concluídas, aqui estão novas evoluções naturais sugeridas para a ferramenta:

1. **Banco de Dados em Nuvem (Firebase / Supabase):**
   * *Por que?* Ao conectar um Backend-as-a-Service, você passa a poder acessar o painel do celular ou notebook sincronizando os dados em tempo real, abandonando a dependência do `localStorage`.
2. **Sistema de Alertas de Prazos (Notifications):**
   * *Por que?* Um alerta visual (ex: vermelho) para clientes cuja `Previsão (Entrega)` vencerá nos próximos 3 dias.
3. **Exportação de Relatórios PDF:**
   * *Por que?* Gerar um snapshot do Dashboard ou um relatório de andamento de um cliente específico para enviar por e-mail formalizando o status do serviço.

---
**Desenvolvido como uma ferramenta ágil para alavancar a gestão de projetos freelancers.**
