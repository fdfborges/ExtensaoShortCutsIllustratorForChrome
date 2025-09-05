// Estado da aplicação
let currentFilter = 'all';
let currentSearchTerm = '';
let filteredShortcuts = [...shortcutsData];

// Elementos DOM
const searchInput = document.getElementById('searchInput');
const shortcutsContainer = document.getElementById('shortcutsContainer');
const filterButtons = document.querySelectorAll('.filter-btn');

// Detectar sistema operacional
const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;

// Inicializar aplicação
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupEventListeners();
    renderShortcuts();
}

function setupEventListeners() {
    // Busca em tempo real
    searchInput.addEventListener('input', handleSearch);
    
    // Filtros de categoria
    filterButtons.forEach(button => {
        button.addEventListener('click', handleFilterClick);
    });
    
    // Limpar busca com Escape
    searchInput.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            clearSearch();
        }
    });
}

function handleSearch(e) {
    currentSearchTerm = e.target.value.toLowerCase().trim();
    filterAndRenderShortcuts();
}

function handleFilterClick(e) {
    const category = e.target.dataset.category;
    
    // Atualizar botões ativos
    filterButtons.forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    
    currentFilter = category;
    filterAndRenderShortcuts();
}

function clearSearch() {
    searchInput.value = '';
    currentSearchTerm = '';
    filterAndRenderShortcuts();
}

function filterAndRenderShortcuts() {
    // Filtrar por categoria
    let filtered = currentFilter === 'all' 
        ? [...shortcutsData] 
        : shortcutsData.filter(shortcut => shortcut.category === currentFilter);
    
    // Filtrar por termo de busca
    if (currentSearchTerm) {
        filtered = filtered.filter(shortcut => {
            const searchableText = [
                shortcut.name,
                shortcut.category,
                categories[shortcut.category],
                ...shortcut.windows,
                ...shortcut.mac
            ].join(' ').toLowerCase();
            
            return searchableText.includes(currentSearchTerm);
        });
    }
    
    filteredShortcuts = filtered;
    renderShortcuts();
}

function renderShortcuts() {
    if (filteredShortcuts.length === 0) {
        renderNoResults();
        return;
    }
    
    const shortcutsHTML = filteredShortcuts.map((shortcut, index) => {
        return createShortcutHTML(shortcut, index);
    }).join('');
    
    shortcutsContainer.innerHTML = shortcutsHTML;
    
    // Adicionar animação escalonada
    const items = shortcutsContainer.querySelectorAll('.shortcut-item');
    items.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.05}s`;
    });
}

function createShortcutHTML(shortcut, index) {
    const keys = isMac ? shortcut.mac : shortcut.windows;
    const keysHTML = createKeysHTML(keys);
    const categoryName = categories[shortcut.category];
    
    return `
        <div class="shortcut-item" style="animation-delay: ${index * 0.05}s">
            <div class="shortcut-header">
                <div class="shortcut-name">${shortcut.name}</div>
                <div class="shortcut-category">${categoryName}</div>
            </div>
            <div class="shortcut-keys">
                ${keysHTML}
            </div>
        </div>
    `;
}

function createKeysHTML(keys) {
    if (Array.isArray(keys[0])) {
        // Múltiplas combinações de teclas
        return keys.map(keyGroup => {
            return `<div class="key-group">${createSingleKeyGroupHTML(keyGroup)}</div>`;
        }).join('');
    } else {
        // Uma única combinação de teclas
        return `<div class="key-group">${createSingleKeyGroupHTML(keys)}</div>`;
    }
}

function createSingleKeyGroupHTML(keys) {
    return keys.map((key, index) => {
        const isLastKey = index === keys.length - 1;
        const keyHTML = `<span class="key">${formatKey(key)}</span>`;
        
        if (isLastKey) {
            return keyHTML;
        } else {
            return keyHTML + '<span class="plus">+</span>';
        }
    }).join('');
}

function formatKey(key) {
    // Mapear teclas para símbolos mais legíveis
    const keyMap = {
        'Command': '⌘',
        'Option': '⌥',
        'Shift': '⇧',
        'Ctrl': 'Ctrl',
        'Alt': 'Alt',
        'Space': '␣',
        'Tab': '⇥',
        'Enter': '↵',
        'Backspace': '⌫',
        'Delete': '⌦',
        'ArrowUp': '↑',
        'ArrowDown': '↓',
        'ArrowLeft': '←',
        'ArrowRight': '→',
        'arrastar': 'arrastar'
    };
    
    return keyMap[key] || key;
}

function renderNoResults() {
    const noResultsHTML = `
        <div class="no-results">
            <div class="no-results-icon">🔍</div>
            <div class="no-results-text">Nenhum atalho encontrado</div>
            <div class="no-results-subtitle">
                ${currentSearchTerm 
                    ? `Tente buscar por "${currentSearchTerm}" com outros termos` 
                    : 'Tente usar filtros diferentes'}
            </div>
        </div>
    `;
    
    shortcutsContainer.innerHTML = noResultsHTML;
}

// Função para destacar texto da busca (opcional)
function highlightSearchTerm(text, searchTerm) {
    if (!searchTerm) return text;
    
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
}

// Função para copiar atalho para clipboard (funcionalidade extra)
function copyShortcutToClipboard(shortcut) {
    const keys = isMac ? shortcut.mac : shortcut.windows;
    const keysText = Array.isArray(keys[0]) 
        ? keys.map(group => group.join(' + ')).join(' ou ')
        : keys.join(' + ');
    
    const text = `${shortcut.name}: ${keysText}`;
    
    navigator.clipboard.writeText(text).then(() => {
        // Mostrar feedback visual (opcional)
        showCopyFeedback();
    }).catch(err => {
        console.error('Erro ao copiar:', err);
    });
}

function showCopyFeedback() {
    // Criar elemento de feedback temporário
    const feedback = document.createElement('div');
    feedback.textContent = 'Atalho copiado!';
    feedback.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #4CAF50;
        color: white;
        padding: 10px 15px;
        border-radius: 5px;
        font-size: 12px;
        z-index: 1000;
        animation: fadeInOut 2s ease-in-out;
    `;
    
    document.body.appendChild(feedback);
    
    setTimeout(() => {
        document.body.removeChild(feedback);
    }, 2000);
}

// Adicionar CSS para animação de feedback
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInOut {
        0% { opacity: 0; transform: translateY(-10px); }
        20%, 80% { opacity: 1; transform: translateY(0); }
        100% { opacity: 0; transform: translateY(-10px); }
    }
`;
document.head.appendChild(style);

// Função para estatísticas (opcional)
function getShortcutStats() {
    const stats = {
        total: shortcutsData.length,
        byCategory: {}
    };
    
    Object.keys(categories).forEach(category => {
        if (category !== 'all') {
            stats.byCategory[category] = shortcutsData.filter(
                shortcut => shortcut.category === category
            ).length;
        }
    });
    
    return stats;
}

// Log das estatísticas no console (para debug)
console.log('Estatísticas dos atalhos:', getShortcutStats());

