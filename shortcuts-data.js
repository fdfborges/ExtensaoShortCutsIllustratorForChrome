const shortcutsData = [
    // Atalhos Básicos
    {
        name: "Desfazer",
        category: "basic",
        windows: ["Ctrl", "Z"],
        mac: ["Command", "Z"]
    },
    {
        name: "Refazer",
        category: "basic",
        windows: ["Shift", "Ctrl", "Z"],
        mac: ["Shift", "Command", "Z"]
    },
    {
        name: "Cortar",
        category: "basic",
        windows: ["Ctrl", "X"],
        mac: ["Command", "X"]
    },
    {
        name: "Copiar",
        category: "basic",
        windows: ["Ctrl", "C"],
        mac: ["Command", "C"]
    },
    {
        name: "Colar",
        category: "basic",
        windows: ["Ctrl", "V"],
        mac: ["Command", "V"]
    },
    {
        name: "Colar na frente",
        category: "basic",
        windows: ["Ctrl", "F"],
        mac: ["Command", "F"]
    },
    {
        name: "Colar atrás",
        category: "basic",
        windows: ["Ctrl", "B"],
        mac: ["Command", "B"]
    },
    {
        name: "Colar no lugar",
        category: "basic",
        windows: ["Shift", "Ctrl", "V"],
        mac: ["Shift", "Command", "V"]
    },
    {
        name: "Verificar ortografia",
        category: "basic",
        windows: ["Ctrl", "I"],
        mac: ["Command", "I"]
    },
    {
        name: "Abrir configurações de cor",
        category: "basic",
        windows: ["Shift", "Ctrl", "K"],
        mac: ["Shift", "Command", "K"]
    },
    {
        name: "Abrir atalhos de teclado",
        category: "basic",
        windows: ["Alt", "Shift", "Ctrl", "K"],
        mac: ["Option", "Shift", "Command", "K"]
    },
    {
        name: "Abrir preferências",
        category: "basic",
        windows: ["Ctrl", "K"],
        mac: ["Command", "K"]
    },

    // Ferramentas de Seleção
    {
        name: "Alternar para última ferramenta de seleção",
        category: "selection",
        windows: ["Ctrl", "`"],
        mac: ["Command", "`"]
    },
    {
        name: "Alternar entre Seleção Direta e Seleção de Grupo",
        category: "selection",
        windows: ["Alt"],
        mac: ["Option"]
    },
    {
        name: "Selecionar tudo",
        category: "selection",
        windows: ["Ctrl", "A"],
        mac: ["Command", "A"]
    },
    {
        name: "Desselecionar",
        category: "selection",
        windows: ["Shift", "Ctrl", "A"],
        mac: ["Shift", "Command", "A"]
    },
    {
        name: "Reselecionar",
        category: "selection",
        windows: ["Ctrl", "6"],
        mac: ["Command", "6"]
    },
    {
        name: "Selecionar objeto acima",
        category: "selection",
        windows: ["Alt", "Ctrl", "]"],
        mac: ["Option", "Command", "]"]
    },
    {
        name: "Selecionar objeto abaixo",
        category: "selection",
        windows: ["Alt", "Ctrl", "["],
        mac: ["Option", "Command", "["]
    },
    {
        name: "Agrupar seleção",
        category: "selection",
        windows: ["Ctrl", "G"],
        mac: ["Command", "G"]
    },
    {
        name: "Desagrupar seleção",
        category: "selection",
        windows: ["Shift", "Ctrl", "G"],
        mac: ["Shift", "Command", "G"]
    },
    {
        name: "Bloquear seleção",
        category: "selection",
        windows: ["Ctrl", "2"],
        mac: ["Command", "2"]
    },
    {
        name: "Desbloquear seleção",
        category: "selection",
        windows: ["Alt", "Ctrl", "2"],
        mac: ["Option", "Command", "2"]
    },
    {
        name: "Ocultar seleção",
        category: "selection",
        windows: ["Ctrl", "3"],
        mac: ["Command", "3"]
    },
    {
        name: "Mostrar todas as seleções",
        category: "selection",
        windows: ["Alt", "Ctrl", "3"],
        mac: ["Option", "Command", "3"]
    },

    // Ferramentas de Desenho
    {
        name: "Ferramenta Caneta",
        category: "draw",
        windows: ["P"],
        mac: ["P"]
    },
    {
        name: "Ferramenta Seleção",
        category: "draw",
        windows: ["V"],
        mac: ["V"]
    },
    {
        name: "Ferramenta Seleção Direta",
        category: "draw",
        windows: ["A"],
        mac: ["A"]
    },
    {
        name: "Ferramenta Texto",
        category: "draw",
        windows: ["T"],
        mac: ["T"]
    },
    {
        name: "Ferramenta Retângulo",
        category: "draw",
        windows: ["M"],
        mac: ["M"]
    },
    {
        name: "Ferramenta Elipse",
        category: "draw",
        windows: ["L"],
        mac: ["L"]
    },
    {
        name: "Ferramenta Pincel",
        category: "draw",
        windows: ["B"],
        mac: ["B"]
    },
    {
        name: "Ferramenta Lápis",
        category: "draw",
        windows: ["N"],
        mac: ["N"]
    },
    {
        name: "Ferramenta Linha",
        category: "draw",
        windows: ["\\"],
        mac: ["\\"]
    },
    {
        name: "Ferramenta Zoom",
        category: "draw",
        windows: ["Z"],
        mac: ["Z"]
    },
    {
        name: "Ferramenta Mão",
        category: "draw",
        windows: ["H"],
        mac: ["H"]
    },
    {
        name: "Ferramenta Rotação",
        category: "draw",
        windows: ["R"],
        mac: ["R"]
    },
    {
        name: "Ferramenta Escala",
        category: "draw",
        windows: ["S"],
        mac: ["S"]
    },
    {
        name: "Aumentar tamanho do pincel Blob",
        category: "draw",
        windows: ["]"],
        mac: ["]"]
    },
    {
        name: "Diminuir tamanho do pincel Blob",
        category: "draw",
        windows: ["["],
        mac: ["["]
    },

    // Edição de Formas
    {
        name: "Alternar Caneta para Converter Ponto de Ancoragem",
        category: "edit",
        windows: ["Alt"],
        mac: ["Option"]
    },
    {
        name: "Alternar entre Adicionar e Deletar Ponto de Ancoragem",
        category: "edit",
        windows: ["Alt"],
        mac: ["Option"]
    },
    {
        name: "Juntar dois ou mais caminhos",
        category: "edit",
        windows: ["Ctrl", "J"],
        mac: ["Command", "J"]
    },
    {
        name: "Média de dois ou mais caminhos",
        category: "edit",
        windows: ["Alt", "Ctrl", "J"],
        mac: ["Option", "Command", "J"]
    },
    {
        name: "Criar caminho composto",
        category: "edit",
        windows: ["Ctrl", "8"],
        mac: ["Command", "8"]
    },
    {
        name: "Liberar caminho composto",
        category: "edit",
        windows: ["Alt", "Shift", "Ctrl", "8"],
        mac: ["Option", "Shift", "Command", "8"]
    },
    {
        name: "Misturar objetos",
        category: "edit",
        windows: ["Alt", "Ctrl", "B"],
        mac: ["Option", "Command", "B"]
    },
    {
        name: "Finalizar adição de objetos à mistura",
        category: "edit",
        windows: ["Alt", "Shift", "Ctrl", "B"],
        mac: ["Option", "Shift", "Command", "B"]
    },
    {
        name: "Distorcer objetos usando envelope em forma de onda",
        category: "edit",
        windows: ["Alt", "Ctrl", "Shift", "W"],
        mac: ["Option", "Command", "Shift", "W"]
    },
    {
        name: "Distorcer objetos usando malha",
        category: "edit",
        windows: ["Alt", "Ctrl", "M"],
        mac: ["Option", "Command", "M"]
    },
    {
        name: "Distorcer objetos usando outro objeto",
        category: "edit",
        windows: ["Alt", "Ctrl", "C"],
        mac: ["Option", "Command", "C"]
    },

    // Trabalhar com Objetos
    {
        name: "Duplicar e transformar seleção",
        category: "objects",
        windows: ["Alt", "arrastar"],
        mac: ["Option", "arrastar"]
    },
    {
        name: "Reaplicar transformação",
        category: "objects",
        windows: ["Ctrl", "D"],
        mac: ["Command", "D"]
    },
    {
        name: "Aplicar último efeito pathfinder",
        category: "objects",
        windows: ["Ctrl", "4"],
        mac: ["Command", "4"]
    },
    {
        name: "Mover objeto",
        category: "objects",
        windows: ["Shift", "Ctrl", "M"],
        mac: ["Shift", "Command", "M"]
    },
    {
        name: "Abrir diálogo Transformar Cada",
        category: "objects",
        windows: ["Alt", "Shift", "Ctrl", "D"],
        mac: ["Option", "Shift", "Command", "D"]
    },
    {
        name: "Criar máscara de recorte",
        category: "objects",
        windows: ["Ctrl", "7"],
        mac: ["Command", "7"]
    },
    {
        name: "Liberar máscara de recorte",
        category: "objects",
        windows: ["Alt", "Ctrl", "7"],
        mac: ["Option", "Command", "7"]
    },
    {
        name: "Alternar entre preenchimento e contorno",
        category: "objects",
        windows: ["X"],
        mac: ["X"]
    },
    {
        name: "Definir preenchimento e contorno padrão",
        category: "objects",
        windows: ["D"],
        mac: ["D"]
    },
    {
        name: "Trocar preenchimento e contorno",
        category: "objects",
        windows: ["Shift", "X"],
        mac: ["Shift", "X"]
    },
    {
        name: "Selecionar modo de preenchimento gradiente",
        category: "objects",
        windows: [">"],
        mac: [">"]
    },
    {
        name: "Selecionar modo de preenchimento de cor",
        category: "objects",
        windows: ["<"],
        mac: ["<"]
    },
    {
        name: "Selecionar modo sem contorno/preenchimento",
        category: "objects",
        windows: ["/"],
        mac: ["/"]
    },
    {
        name: "Trazer seleção para frente",
        category: "objects",
        windows: ["Ctrl", "]"],
        mac: ["Command", "]"]
    },
    {
        name: "Mover seleção para frente",
        category: "objects",
        windows: ["Shift", "Ctrl", "]"],
        mac: ["Shift", "Command", "]"]
    },
    {
        name: "Enviar seleção para trás",
        category: "objects",
        windows: ["Ctrl", "["],
        mac: ["Command", "["]
    },
    {
        name: "Mover seleção para trás",
        category: "objects",
        windows: ["Shift", "Ctrl", "["],
        mac: ["Shift", "Command", "["]
    },

    // Visualização
    {
        name: "Zoom para ajustar na janela",
        category: "view",
        windows: ["Ctrl", "0"],
        mac: ["Command", "0"]
    },
    {
        name: "Zoom para 100%",
        category: "view",
        windows: ["Ctrl", "1"],
        mac: ["Command", "1"]
    },
    {
        name: "Zoom in",
        category: "view",
        windows: ["Ctrl", "+"],
        mac: ["Command", "+"]
    },
    {
        name: "Zoom out",
        category: "view",
        windows: ["Ctrl", "-"],
        mac: ["Command", "-"]
    },
    {
        name: "Mostrar/ocultar guias",
        category: "view",
        windows: ["Ctrl", ";"],
        mac: ["Command", ";"]
    },
    {
        name: "Bloquear/desbloquear guias",
        category: "view",
        windows: ["Alt", "Ctrl", ";"],
        mac: ["Option", "Command", ";"]
    },
    {
        name: "Mostrar/ocultar grade",
        category: "view",
        windows: ["Ctrl", "'"],
        mac: ["Command", "'"]
    },
    {
        name: "Ajustar à grade",
        category: "view",
        windows: ["Shift", "Ctrl", "'"],
        mac: ["Shift", "Command", "'"]
    },
    {
        name: "Mostrar/ocultar réguas",
        category: "view",
        windows: ["Ctrl", "R"],
        mac: ["Command", "R"]
    },
    {
        name: "Mostrar/ocultar caixa delimitadora",
        category: "view",
        windows: ["Shift", "Ctrl", "B"],
        mac: ["Shift", "Command", "B"]
    },
    {
        name: "Visualização de contorno",
        category: "view",
        windows: ["Ctrl", "Y"],
        mac: ["Command", "Y"]
    },
    {
        name: "Visualização de sobreposição",
        category: "view",
        windows: ["Alt", "Shift", "Ctrl", "Y"],
        mac: ["Option", "Shift", "Command", "Y"]
    },
    {
        name: "Visualização de pixel",
        category: "view",
        windows: ["Alt", "Ctrl", "Y"],
        mac: ["Option", "Command", "Y"]
    }
];

// Categorias para filtros
const categories = {
    all: "Todos",
    basic: "Básicos",
    selection: "Seleção",
    draw: "Desenho",
    edit: "Edição",
    view: "Visualização",
    objects: "Objetos"
};

