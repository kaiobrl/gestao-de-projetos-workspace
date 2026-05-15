// --- Sistema de Login / Auth ---
const authContainer = document.getElementById('authContainer');
const appContainer = document.getElementById('appContainer');
const authForm = document.getElementById('authForm');
const authPassword = document.getElementById('authPassword');
const authTitle = document.getElementById('authTitle');
const authSubtitle = document.getElementById('authSubtitle');
const authBtn = document.getElementById('authBtn');
const authError = document.getElementById('authError');

let isSetupMode = !localStorage.getItem('fl_auth_hash');

if (isSetupMode) {
  authTitle.innerText = 'Bem-vindo ao Formato Livre';
  authSubtitle.innerText = 'Crie uma senha mestre para proteger seus dados';
  authBtn.innerHTML = 'Definir Senha <i class="ph ph-check-circle"></i>';
}

function showApp() {
  authContainer.classList.add('hidden');
  appContainer.classList.remove('hidden');
  authPassword.value = '';
}

if (sessionStorage.getItem('fl_authenticated') === 'true') {
  showApp();
}

authForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const pwd = authPassword.value;
  if (!pwd) return;

  // Obfuscação simples para evitar texto limpo no localStorage
  const hash = btoa(pwd.split('').reverse().join(''));

  if (isSetupMode) {
    localStorage.setItem('fl_auth_hash', hash);
    sessionStorage.setItem('fl_authenticated', 'true');
    showApp();
    setTimeout(() => {
        if(typeof showToast === 'function') showToast('Senha configurada com sucesso!', 'success');
    }, 500);
    isSetupMode = false; // Updates for potential future checks
  } else {
    const storedHash = localStorage.getItem('fl_auth_hash');
    if (hash === storedHash) {
      sessionStorage.setItem('fl_authenticated', 'true');
      showApp();
      setTimeout(() => {
        if(typeof showToast === 'function') showToast('Login realizado com sucesso!', 'success');
      }, 500);
    } else {
      authError.classList.remove('opacity-0');
      authPassword.classList.add('border-red-500', 'focus:border-red-500', 'focus:ring-red-500');
      authPassword.classList.remove('focus:border-blue-500', 'focus:ring-blue-500', 'border-gray-700');
      setTimeout(() => {
        authError.classList.add('opacity-0');
        authPassword.classList.remove('border-red-500', 'focus:border-red-500', 'focus:ring-red-500');
        authPassword.classList.add('focus:border-blue-500', 'focus:ring-blue-500', 'border-gray-700');
      }, 3000);
    }
  }
});
// ---------------------------------

// Definição das 8 Etapas
const stages = [{
    id: 1,
    title: "Primeiro Contato",
    phase: "Início",
    time: "1-2 dias",
    desc: "Você entra em contato via formulário, WhatsApp ou redes sociais. Nessa etapa, preciso entender a ideia geral do projeto, objetivos e necessidades.",
    tasks: [
      { id: 's1_1', label: 'Responder contato inicial' },
      { id: 's1_2', label: 'Agendar reunião de alinhamento' }
    ]
  },
  {
    id: 2,
    title: "Análise do Projeto",
    phase: "Briefing",
    time: "2-3 dias",
    desc: "Realizo um briefing detalhado para entender sua audiência, funcionalidades necessárias, referências visuais e requisitos técnicos do projeto.",
    tasks: [
      { id: 's2_1', label: 'Realizar reunião de briefing' },
      { id: 's2_2', label: 'Definir escopo técnico inicial' },
      { id: 's2_3', label: 'Coletar referências visuais' }
    ]
  },
  {
    id: 3,
    title: "Proposta Comercial",
    phase: "Planejamento",
    time: "1-2 dias",
    desc: "Elaboro uma proposta clara com escopo do projeto, cronograma detalhado, tecnologias utilizadas e investimento necessário.",
    tasks: [
      { id: 's3_1', label: 'Calcular orçamento e prazos' },
      { id: 's3_2', label: 'Montar documento de proposta' },
      { id: 's3_3', label: 'Apresentar proposta ao cliente' }
    ]
  },
  {
    id: 4,
    title: "Aprovação",
    phase: "Contrato",
    time: "1-5 dias",
    desc: "Você analisa a proposta, ajusta se necessário e assinamos o contrato. Com tudo alinhado, inicio o desenvolvimento com total clareza.",
    tasks: [
      { id: 's4_1', label: 'Aprovação da proposta' },
      { id: 's4_2', label: 'Assinatura do contrato' },
      { id: 's4_3', label: 'Pagamento do sinal' }
    ]
  },
  {
    id: 5,
    title: "Desenvolvimento",
    phase: "Build",
    time: "7-30 dias",
    desc: "Código limpo, moderno e responsivo. Utilizo as melhores práticas de desenvolvimento com Git, testes e versionamento.",
    tasks: [
      { id: 's5_1', label: 'Configurar ambiente do projeto' },
      { id: 's5_2', label: 'Desenvolver UI/UX e Frontend' },
      { id: 's5_3', label: 'Implementar lógica e Backend' }
    ]
  },
  {
    id: 6,
    title: "Revisão",
    phase: "QA",
    time: "3-7 dias",
    desc: "Apresento o projeto para testes. Você verifica funcionalidades, design e faz ajustes necessários até a aprovação final.",
    tasks: [
      { id: 's6_1', label: 'Apresentação da versão Beta' },
      { id: 's6_2', label: 'Ajustes de feedback' },
      { id: 's6_3', label: 'Aprovação final do cliente' }
    ]
  },
  {
    id: 7,
    title: "Entrega",
    phase: "Launch",
    time: "1-2 dias",
    desc: "Deploy do projeto, configuração de domínio, entrega de documentação completa e tutorial de uso da plataforma.",
    tasks: [
      { id: 's7_1', label: 'Configurar hospedagem e domínio' },
      { id: 's7_2', label: 'Realizar deploy em produção' },
      { id: 's7_3', label: 'Gravar tutorial de uso' }
    ]
  },
  {
    id: 8,
    title: "Suporte Pós-venda",
    phase: "Manutenção",
    time: "30+ dias",
    desc: "Período de suporte para ajustes finos, dúvidas e manutenção. Garantia de 30 dias inclusa para correções.",
    tasks: [
      { id: 's8_1', label: 'Entregar documentação e credenciais' },
      { id: 's8_2', label: 'Coletar depoimento/feedback' },
      { id: 's8_3', label: 'Acompanhar primeiros 30 dias' }
    ]
  }
];

const totalTasks = stages.reduce((acc, stage) => acc + (stage.tasks ? stage.tasks.length : 0), 0);

// Estado da Aplicação (LocalStorage)
let clients = JSON.parse(localStorage.getItem('formato-livre-clients')) || [];

// Elementos da DOM
const form = document.getElementById('clientForm');
const clientsList = document.getElementById('clientsList');
const statsDisplay = document.getElementById('statsDisplay');
const searchInput = document.getElementById('searchInput');
const toastContainer = document.getElementById('toastContainer');

// Modal Elements
const deleteModal = document.getElementById('deleteModal');
const deleteModalContent = document.getElementById('deleteModalContent');
const confirmDeleteBtn = document.getElementById('confirmDeleteBtn');
const cancelDeleteBtn = document.getElementById('cancelDeleteBtn');
let clientIdToDelete = null;

const editModal = document.getElementById('editModal');
const editModalContent = document.getElementById('editModalContent');
const editForm = document.getElementById('editForm');
const editClientName = document.getElementById('editClientName');
const editClientPhone = document.getElementById('editClientPhone');
const editClientEmail = document.getElementById('editClientEmail');
const editClientProject = document.getElementById('editClientProject');
const editClientStartDate = document.getElementById('editClientStartDate');
const editClientDueDate = document.getElementById('editClientDueDate');
const editClientValue = document.getElementById('editClientValue');
const editPaymentStatus = document.getElementById('editPaymentStatus');
const editClientTags = document.getElementById('editClientTags');
const editLinkFigma = document.getElementById('editLinkFigma');
const editLinkDrive = document.getElementById('editLinkDrive');
const editLinkGithub = document.getElementById('editLinkGithub');
const editClientId = document.getElementById('editClientId');
const cancelEditBtn = document.getElementById('cancelEditBtn');

const exportBtn = document.getElementById('exportBtn');
const importBtn = document.getElementById('importBtn');
const importInput = document.getElementById('importInput');
const totalValueDisplay = document.getElementById('totalValueDisplay');

// Tabs Elements
const tabProjectsBtn = document.getElementById('tabProjectsBtn');
const tabDashboardBtn = document.getElementById('tabDashboardBtn');
const projectsView = document.getElementById('projectsView');
const dashboardView = document.getElementById('dashboardView');

let finChartInstance = null;
let convChartInstance = null;

function formatCurrency(value) {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value || 0);
}

// Format Date helper
function formatDate(dateStr) {
  if (!dateStr) return '';
  const [y, m, d] = dateStr.split('-');
  return `${d}/${m}/${y}`;
}

// Toast Function
function showToast(message, type = 'success') {
  const toast = document.createElement('div');
  const bgColor = type === 'success' ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' : 
                  (type === 'error' ? 'bg-red-500/20 text-red-400 border-red-500/30' : 'bg-blue-500/20 text-blue-400 border-blue-500/30');
  const icon = type === 'success' ? 'ph-check-circle' : 
               (type === 'error' ? 'ph-warning-circle' : 'ph-info');

  toast.className = `flex items-center gap-2 px-4 py-3 rounded-xl border backdrop-blur-md shadow-lg transform transition-all duration-300 translate-y-10 opacity-0 ${bgColor}`;
  toast.innerHTML = `<i class="ph ${icon} text-lg"></i> <span class="text-sm font-medium">${message}</span>`;
  
  toastContainer.appendChild(toast);
  
  // Animate in
  setTimeout(() => {
    toast.classList.remove('translate-y-10', 'opacity-0');
  }, 10);

  // Remove after 3s
  setTimeout(() => {
    toast.classList.add('translate-y-10', 'opacity-0');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// Event Listeners Extras
searchInput.addEventListener('input', render);

// Tabs Listeners
tabProjectsBtn.addEventListener('click', () => {
  projectsView.classList.remove('hidden');
  dashboardView.classList.add('hidden');
  
  tabProjectsBtn.classList.add('border-blue-500', 'text-blue-400');
  tabProjectsBtn.classList.remove('border-transparent', 'text-gray-400');
  
  tabDashboardBtn.classList.add('border-transparent', 'text-gray-400');
  tabDashboardBtn.classList.remove('border-blue-500', 'text-blue-400');
});

tabDashboardBtn.addEventListener('click', () => {
  projectsView.classList.add('hidden');
  dashboardView.classList.remove('hidden');
  
  tabDashboardBtn.classList.add('border-blue-500', 'text-blue-400');
  tabDashboardBtn.classList.remove('border-transparent', 'text-gray-400');
  
  tabProjectsBtn.classList.add('border-transparent', 'text-gray-400');
  tabProjectsBtn.classList.remove('border-blue-500', 'text-blue-400');
  
  if (typeof updateCharts === 'function') updateCharts();
});

// Import Logic
importInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (event) => {
    try {
      const importedClients = JSON.parse(event.target.result);
      if (Array.isArray(importedClients)) {
        clients = importedClients;
        saveData();
        render();
        showToast('Dados importados com sucesso!', 'success');
      } else {
        showToast('Arquivo JSON inválido', 'error');
      }
    } catch (err) {
      showToast('Erro ao ler arquivo', 'error');
    }
    importInput.value = ''; // reset
  };
  reader.readAsText(file);
});

cancelDeleteBtn.addEventListener('click', closeDeleteModal);
confirmDeleteBtn.addEventListener('click', () => {
  if (clientIdToDelete) {
    clients = clients.filter(c => c.id !== clientIdToDelete);
    saveData();
    render();
    showToast('Projeto removido com sucesso', 'error');
    closeDeleteModal();
  }
});

function openDeleteModal(id) {
  clientIdToDelete = id;
  deleteModal.classList.remove('hidden');
  setTimeout(() => {
    deleteModalContent.classList.remove('scale-95', 'opacity-0');
    deleteModalContent.classList.add('scale-100', 'opacity-100');
  }, 10);
}

function closeDeleteModal() {
  deleteModalContent.classList.remove('scale-100', 'opacity-100');
  deleteModalContent.classList.add('scale-95', 'opacity-0');
  setTimeout(() => {
    deleteModal.classList.add('hidden');
    clientIdToDelete = null;
  }, 300);
}

// Edit Logic
cancelEditBtn.addEventListener('click', closeEditModal);
editForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const id = parseInt(editClientId.value);
  const name = editClientName.value.trim();
  const phone = editClientPhone.value.trim();
  const email = editClientEmail.value.trim();
  const project = editClientProject.value.trim();
  const startDate = editClientStartDate.value;
  const dueDate = editClientDueDate.value;
  const value = parseFloat(editClientValue.value) || 0;
  const paymentStatus = editPaymentStatus.value;
  const tags = editClientTags.value.split(',').map(t => t.trim()).filter(Boolean);
  
  if (!name || !project || !phone || !email) return;
  
  const client = clients.find(c => c.id === id);
  if (client) {
    client.name = name;
    client.phone = phone;
    client.email = email;
    client.project = project;
    client.startDate = startDate;
    client.dueDate = dueDate;
    client.value = value;
    client.paymentStatus = paymentStatus;
    client.tags = tags;
    client.links = {
      figma: editLinkFigma.value.trim(),
      drive: editLinkDrive.value.trim(),
      github: editLinkGithub.value.trim()
    };
    saveData();
    render();
    showToast('Projeto atualizado com sucesso!', 'success');
    closeEditModal();
  }
});

function openEditModal(id) {
  const client = clients.find(c => c.id === id);
  if (client) {
    editClientId.value = client.id;
    editClientName.value = client.name;
    editClientPhone.value = client.phone || '';
    editClientEmail.value = client.email || '';
    editClientProject.value = client.project;
    editClientStartDate.value = client.startDate || '';
    editClientDueDate.value = client.dueDate || '';
    editClientValue.value = client.value || '';
    editPaymentStatus.value = client.paymentStatus || 'Aguardando';
    editClientTags.value = (client.tags || []).join(', ');
    
    const links = client.links || {};
    editLinkFigma.value = links.figma || '';
    editLinkDrive.value = links.drive || '';
    editLinkGithub.value = links.github || '';
    
    editModal.classList.remove('hidden');
    setTimeout(() => {
      editModalContent.classList.remove('scale-95', 'opacity-0');
      editModalContent.classList.add('scale-100', 'opacity-100');
    }, 10);
  }
}

function closeEditModal() {
  editModalContent.classList.remove('scale-100', 'opacity-100');
  editModalContent.classList.add('scale-95', 'opacity-0');
  setTimeout(() => {
    editModal.classList.add('hidden');
    editForm.reset();
  }, 300);
}

// Export Logic
exportBtn.addEventListener('click', () => {
  if (clients.length === 0) {
    showToast('Nenhum dado para exportar', 'info');
    return;
  }
  
  // Enrich client data with stage details for export
  const enrichedClients = clients.map(client => {
    const currentStage = stages[client.stageIndex];
    return {
      ...client,
      stageTitle: currentStage.title,
      stageTime: currentStage.time,
      stagePhase: currentStage.phase
    };
  });

  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(enrichedClients, null, 2));
  const downloadAnchorNode = document.createElement('a');
  downloadAnchorNode.setAttribute("href", dataStr);
  downloadAnchorNode.setAttribute("download", "gestao-de-projetos.json");
  document.body.appendChild(downloadAnchorNode); // required for firefox
  downloadAnchorNode.click();
  downloadAnchorNode.remove();
  showToast('Dados exportados com sucesso!', 'success');
});

// Update Notes
function updateNotes(id, notes) {
  const client = clients.find(c => c.id === id);
  if (client) {
    client.notes = notes;
    saveData();
  }
}

// Toggle Subtask
window.toggleTask = function(clientId, taskId) {
  const client = clients.find(c => c.id === clientId);
  if (client) {
    if (!client.completedSubtasks) client.completedSubtasks = [];
    const index = client.completedSubtasks.indexOf(taskId);
    if (index > -1) {
      client.completedSubtasks.splice(index, 1);
    } else {
      client.completedSubtasks.push(taskId);
    }
    saveData();
    render();
  }
}

// Renderiza a Interface
function render() {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredClients = clients.filter(client => 
    client.name.toLowerCase().includes(searchTerm) || 
    client.project.toLowerCase().includes(searchTerm)
  );

  statsDisplay.innerHTML = `${filteredClients.length} clientes ativos`;
  totalValueDisplay.innerHTML = formatCurrency(clients.reduce((acc, c) => acc + (c.value || 0), 0));
  clientsList.innerHTML = '';

  if (filteredClients.length === 0) {
    clientsList.innerHTML = `
              <div class="glass-panel p-12 rounded-2xl text-center text-gray-500 border-dashed">
                  <i class="ph ph-folder-open text-4xl mb-3"></i>
                  <p>${searchTerm ? 'Nenhum projeto encontrado para a busca.' : 'Nenhum projeto cadastrado no momento.'}</p>
              </div>
          `;
    return;
  }

  filteredClients.forEach(client => {
    const currentStage = stages[client.stageIndex];
    const completedTasks = client.completedSubtasks ? client.completedSubtasks.length : 0;
    const progressPercentage = totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

    let displayStatus = client.paymentStatus || 'Aguardando';
    if (completedTasks === totalTasks && totalTasks > 0) {
      displayStatus = 'Entregue';
    }

    const getPaymentColor = (status) => {
      if (status === 'Entregue') return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      switch(status) {
        case 'Pago': return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
        case 'Sinal Pago': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
        case 'Parcial': return 'bg-amber-500/20 text-amber-400 border-amber-500/30';
        default: return 'bg-gray-700/50 text-gray-400 border-gray-600/50';
      }
    };

    const paymentBadge = `<span class="px-2 py-0.5 rounded text-[10px] uppercase font-bold border ${getPaymentColor(displayStatus)}">${displayStatus}</span>`;
    
    let tagsHtml = '';
    if (client.tags && client.tags.length > 0) {
      tagsHtml = '<div class="flex flex-wrap gap-1 mt-2">' + client.tags.map(t => `<span class="bg-gray-800 text-gray-300 px-2 py-0.5 rounded text-xs border border-gray-700">${t}</span>`).join('') + '</div>';
    }

    let linksHtml = '';
    if (client.links && (client.links.figma || client.links.drive || client.links.github)) {
      linksHtml = '<div class="flex items-center gap-3 mt-3 border-t border-gray-700/50 pt-3 text-gray-400">';
      if (client.links.figma) linksHtml += `<a href="${client.links.figma}" target="_blank" class="hover:text-pink-400 transition-colors" title="Figma"><i class="ph ph-figma-logo text-lg"></i></a>`;
      if (client.links.drive) linksHtml += `<a href="${client.links.drive}" target="_blank" class="hover:text-blue-400 transition-colors" title="Google Drive"><i class="ph ph-google-drive-logo text-lg"></i></a>`;
      if (client.links.github) linksHtml += `<a href="${client.links.github}" target="_blank" class="hover:text-white transition-colors" title="GitHub"><i class="ph ph-github-logo text-lg"></i></a>`;
      linksHtml += '</div>';
    }

    let checklistHtml = '';
    if (currentStage.tasks && currentStage.tasks.length > 0) {
      checklistHtml = '<div class="mt-4 space-y-2">';
      currentStage.tasks.forEach(task => {
        const isChecked = client.completedSubtasks && client.completedSubtasks.includes(task.id);
        checklistHtml += `
          <label class="flex items-center gap-2 cursor-pointer group">
            <div class="relative flex items-center justify-center w-4 h-4 rounded border ${isChecked ? 'bg-blue-500 border-blue-500' : 'bg-gray-800 border-gray-600 group-hover:border-blue-400'} transition-colors">
              <input type="checkbox" class="opacity-0 absolute inset-0 cursor-pointer" onchange="toggleTask(${client.id}, '${task.id}')" ${isChecked ? 'checked' : ''}>
              ${isChecked ? '<i class="ph ph-check text-white text-xs"></i>' : ''}
            </div>
            <span class="text-sm ${isChecked ? 'text-gray-500 line-through' : 'text-gray-300'} transition-all select-none">${task.label}</span>
          </label>
        `;
      });
      checklistHtml += '</div>';
    }

    const card = document.createElement('div');
    card.className = 'glass-panel rounded-2xl overflow-hidden transition-all';

    card.innerHTML = `
              <div class="p-6">
                  <div class="flex justify-between items-start mb-4">
                      <div class="flex-1">
                          <div class="flex items-center justify-between gap-4">
                            <h3 class="text-xl font-medium text-white flex items-center gap-2">
                              ${client.name}
                            </h3>
                            <div class="text-right">
                              <div class="text-sm font-semibold text-white">${formatCurrency(client.value)}</div>
                              ${paymentBadge}
                            </div>
                          </div>
                          
                          ${client.phone || client.email ? `
                            <div class="flex flex-wrap items-center gap-3 mt-2 mb-1 text-xs text-gray-400">
                              ${client.phone ? `<a href="https://wa.me/55${client.phone.replace(/\D/g, '')}" target="_blank" class="flex items-center gap-1 hover:text-emerald-400 transition-colors"><i class="ph ph-whatsapp-logo text-sm"></i> ${client.phone}</a>` : ''}
                              ${client.email ? `<a href="mailto:${client.email}" class="flex items-center gap-1 hover:text-blue-400 transition-colors"><i class="ph ph-envelope-simple text-sm"></i> ${client.email}</a>` : ''}
                            </div>
                          ` : ''}
                          ${tagsHtml}
                          <p class="text-gray-400 text-sm mt-3 border-t border-gray-700/50 pt-2">${client.project}</p>
                          ${linksHtml}
                      </div>
                      <div class="flex items-center gap-2 ml-4">
                          <button onclick="openEditModal(${client.id})" class="text-gray-500 hover:text-blue-400 transition-colors" title="Editar Cliente">
                              <i class="ph ph-pencil-simple text-xl"></i>
                          </button>
                          <button onclick="openDeleteModal(${client.id})" class="text-gray-500 hover:text-red-400 transition-colors" title="Remover Cliente">
                              <i class="ph ph-trash text-xl"></i>
                          </button>
                      </div>
                  </div>

                  <!-- Barra de Progresso Geral -->
                  <div class="w-full bg-gray-800 rounded-full h-1.5 mb-6 mt-4">
                      <div class="bg-blue-500 h-1.5 rounded-full transition-all duration-500" style="width: ${progressPercentage}%"></div>
                  </div>

                  <!-- Informações da Etapa Atual -->
                  <div class="bg-gray-800/40 rounded-xl p-4 border border-gray-700/50 relative overflow-hidden">
                      <div class="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
                      <div class="flex justify-between items-center mb-2">
                          <span class="text-xs font-semibold tracking-wider text-blue-400 uppercase">Etapa ${currentStage.id}: ${currentStage.phase}</span>
                          <div class="flex gap-2">
                            <span class="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded-md" title="Tempo da Etapa">
                              <i class="ph ph-clock mr-1"></i>${currentStage.time}
                            </span>
                            <span class="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded-md" title="Previsão de Entrega Total: ${formatDate(client.dueDate)}">
                              <i class="ph ph-calendar-blank mr-1"></i>${client.dueDate ? formatDate(client.dueDate) : 'Sem prazo'}
                            </span>
                          </div>
                      </div>
                      <h4 class="text-lg font-medium text-gray-100 mb-2">${currentStage.title}</h4>
                      <p class="text-sm text-gray-400 leading-relaxed">${currentStage.desc}</p>
                      
                      ${checklistHtml}
                  </div>

                  <!-- Project Notes -->
                  <div class="mt-4">
                      <label class="block text-xs font-semibold text-gray-400 mb-1 uppercase tracking-wider">Anotações do Projeto</label>
                      <textarea 
                          onchange="updateNotes(${client.id}, this.value)"
                          rows="2" 
                          placeholder="Adicione links, senhas provisórias ou lembretes..." 
                          class="w-full bg-gray-800/30 border border-gray-700/50 rounded-lg px-3 py-2 text-sm text-gray-300 focus:outline-none focus:border-blue-500/50 transition-colors resize-none">${client.notes || ''}</textarea>
                  </div>

                  <!-- Controles de Fluxo -->
                  <div class="flex justify-between items-center mt-6 pt-4 border-t border-gray-700/50">
                      <button onclick="moveStage(${client.id}, -1)" class="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors disabled:opacity-30" ${client.stageIndex === 0 ? 'disabled' : ''}>
                          <i class="ph ph-caret-left"></i> Etapa Anterior
                      </button>
                      
                      ${client.stageIndex < stages.length - 1 
                          ? `<button onclick="moveStage(${client.id}, 1)" class="flex items-center gap-2 text-sm bg-blue-600/20 text-blue-400 px-4 py-2 rounded-lg hover:bg-blue-600/30 transition-colors">
                              Avançar Etapa <i class="ph ph-caret-right"></i>
                             </button>`
                          : `<span class="text-sm text-emerald-400 flex items-center gap-1"><i class="ph ph-check-circle"></i> Projeto Concluído</span>`
                      }
                  </div>
              </div>
          `;
    clientsList.appendChild(card);
  });

  if (typeof updateCharts === 'function' && !dashboardView.classList.contains('hidden')) {
    updateCharts();
  }
}

// Adicionar Cliente
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const nameInput = document.getElementById('clientName');
  const phoneInput = document.getElementById('clientPhone');
  const emailInput = document.getElementById('clientEmail');
  const projectInput = document.getElementById('clientProject');
  const startDateInput = document.getElementById('clientStartDate');
  const dueDateInput = document.getElementById('clientDueDate');
  const valueInput = document.getElementById('clientValue');
  
  const name = nameInput.value.trim();
  const phone = phoneInput.value.trim();
  const email = emailInput.value.trim();
  const project = projectInput.value.trim();

  if (!name || !project || !phone || !email) return;

  const newClient = {
    id: Date.now(),
    name,
    phone,
    email,
    project,
    notes: '',
    stageIndex: 0, // Inicia no índice 0 (Primeiro Contato)
    startDate: startDateInput.value,
    dueDate: dueDateInput.value,
    value: parseFloat(valueInput.value) || 0,
    paymentStatus: 'Aguardando',
    tags: [],
    links: { figma: '', drive: '', github: '' },
    completedSubtasks: [],
    history: [{ stageIndex: 0, date: new Date().toISOString() }]
  };

  clients.push(newClient);
  saveData();
  form.reset();
  render();
  showToast('Projeto cadastrado com sucesso!');
});

// Mover Cliente entre as etapas
function moveStage(clientId, direction) {
  const client = clients.find(c => c.id === clientId);
  if (client) {
    const newIndex = client.stageIndex + direction;
    if (newIndex >= 0 && newIndex < stages.length) {
      client.stageIndex = newIndex;
      saveData();
      render();
      if (direction > 0) {
        showToast(`Avançou para: ${stages[newIndex].title}`, 'info');
      }
    }
  }
}

// A função deleteClient não é mais necessária pois a lógica foi para o event listener do confirmDeleteBtn
// A chamada inline no HTML foi trocada para openDeleteModal()

// Salvar no LocalStorage
function saveData() {
  localStorage.setItem('formato-livre-clients', JSON.stringify(clients));
}

// Dashboard Charts
function updateCharts() {
  if (typeof Chart === 'undefined') return;

  // 1. Projeção Financeira
  const monthData = {};
  clients.forEach(client => {
    const dateStr = client.dueDate || client.startDate || new Date().toISOString().split('T')[0];
    const d = new Date(dateStr);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const key = `${year}-${month}`;
    
    if (!monthData[key]) {
      monthData[key] = 0;
    }
    monthData[key] += (client.value || 0);
  });

  const sortedKeys = Object.keys(monthData).sort();
  const finLabels = sortedKeys.map(key => {
    const [y, m] = key.split('-');
    const date = new Date(y, m - 1);
    let monthStr = date.toLocaleString('pt-BR', { month: 'short' });
    // Handle 'mai.' vs 'maio' inconsistencies in browsers
    monthStr = monthStr.replace('.', '');
    return `${monthStr.charAt(0).toUpperCase() + monthStr.slice(1)}/${y}`;
  });
  const finValues = sortedKeys.map(k => monthData[k]);

  const ctxFin = document.getElementById('financialChart');
  if (ctxFin) {
    if (finChartInstance) finChartInstance.destroy();
    Chart.defaults.color = '#9ca3af';
    Chart.defaults.font.family = "'Inter', 'Segoe UI', sans-serif";
    
    finChartInstance = new Chart(ctxFin, {
      type: 'line',
      data: {
        labels: finLabels,
        datasets: [{
          label: 'Valor Projetado',
          data: finValues,
          borderColor: '#34d399',
          backgroundColor: 'rgba(52, 211, 153, 0.1)',
          borderWidth: 2,
          fill: true,
          tension: 0.4,
          pointBackgroundColor: '#1f2937',
          pointBorderColor: '#34d399',
          pointBorderWidth: 2,
          pointRadius: 4,
          pointHoverRadius: 6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: '#1f2937',
            titleColor: '#f3f4f6',
            bodyColor: '#d1d5db',
            borderColor: '#374151',
            borderWidth: 1,
            padding: 10,
            displayColors: false,
            callbacks: {
              label: function(context) {
                let value = context.parsed.y;
                return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
              }
            }
          }
        },
        scales: {
          y: { 
            beginAtZero: true,
            grid: { color: 'rgba(255, 255, 255, 0.05)', drawBorder: false },
            ticks: {
              callback: function(value) {
                return 'R$ ' + value.toLocaleString('pt-BR');
              }
            }
          },
          x: {
            grid: { display: false, drawBorder: false }
          }
        }
      }
    });
  }

  // 2. Conversão de Projetos (Funil/Bar)
  const stageCounts = Array(stages.length).fill(0);
  clients.forEach(client => {
    if (client.stageIndex >= 0 && client.stageIndex < stages.length) {
      stageCounts[client.stageIndex]++;
    }
  });

  const convLabels = stages.map(s => s.title);
  const convValues = stageCounts;

  const ctxConv = document.getElementById('conversionChart');
  if (ctxConv) {
    if (convChartInstance) convChartInstance.destroy();
    
    // Create a gradient for the bars
    const ctx = ctxConv.getContext('2d');
    const gradient = ctx.createLinearGradient(0, 0, 400, 0);
    gradient.addColorStop(0, '#3b82f6'); // blue-500
    gradient.addColorStop(1, '#60a5fa'); // blue-400

    convChartInstance = new Chart(ctxConv, {
      type: 'bar',
      data: {
        labels: convLabels,
        datasets: [{
          label: 'Qtd de Projetos',
          data: convValues,
          backgroundColor: gradient,
          borderRadius: 4,
          barPercentage: 0.7
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: 'y',
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: '#1f2937',
            titleColor: '#f3f4f6',
            bodyColor: '#d1d5db',
            borderColor: '#374151',
            borderWidth: 1,
            padding: 10,
            displayColors: false
          }
        },
        scales: {
          x: { 
            beginAtZero: true,
            ticks: { stepSize: 1, precision: 0 },
            grid: { color: 'rgba(255, 255, 255, 0.05)', drawBorder: false }
          },
          y: {
            grid: { display: false, drawBorder: false }
          }
        }
      }
    });
  }
}

// Inicialização
render();
