# Illustrator Shortcuts Master

Uma extensão magnífica para o Chrome que lista todos os atalhos do Adobe Illustrator de forma visual e organizada, com funcionalidade de busca avançada.

## 🎨 Características

- **Interface Visual Magnífica**: Design moderno com gradientes e animações suaves
- **Busca Inteligente**: Pesquise por nome do comando, categoria ou teclas
- **Filtros por Categoria**: Organize atalhos por Básicos, Seleção, Desenho, Edição, Visualização e Objetos
- **Detecção Automática de SO**: Mostra automaticamente atalhos para Windows ou Mac
- **Design Responsivo**: Funciona perfeitamente em diferentes tamanhos de tela
- **Animações Suaves**: Transições elegantes e feedback visual

## 📦 Instalação

### Método 1: Instalação Manual (Desenvolvedor)

1. Baixe ou clone este repositório
2. Abra o Chrome e vá para `chrome://extensions/`
3. Ative o "Modo do desenvolvedor" no canto superior direito
4. Clique em "Carregar sem compactação"
5. Selecione a pasta da extensão
6. A extensão aparecerá na barra de ferramentas do Chrome

### Método 2: Arquivo .crx (se disponível)

1. Baixe o arquivo `.crx` da extensão
2. Arraste e solte o arquivo na página `chrome://extensions/`
3. Confirme a instalação

## 🚀 Como Usar

1. **Clique no ícone da extensão** na barra de ferramentas do Chrome
2. **Pesquise atalhos** digitando no campo de busca:
   - Nome do comando (ex: "desfazer", "zoom")
   - Categoria (ex: "básicos", "seleção")
   - Teclas (ex: "ctrl", "shift")
3. **Use os filtros** para navegar por categorias específicas
4. **Visualize os atalhos** organizados de forma clara e elegante

## 🎯 Categorias de Atalhos

- **Básicos**: Desfazer, refazer, copiar, colar, etc.
- **Seleção**: Ferramentas de seleção e manipulação de objetos
- **Desenho**: Ferramentas de criação e desenho
- **Edição**: Modificação e transformação de formas
- **Visualização**: Zoom, guias, réguas e modos de visualização
- **Objetos**: Manipulação avançada de objetos e camadas

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilização avançada com gradientes e animações
- **JavaScript ES6+**: Funcionalidade interativa e busca
- **Chrome Extension API**: Integração com o navegador

## 📱 Compatibilidade

- **Chrome**: Versão 88+
- **Edge**: Versão 88+
- **Outros navegadores baseados em Chromium**

## 🎨 Design

A extensão apresenta um design moderno e elegante com:

- Gradientes vibrantes inspirados no Adobe Illustrator
- Animações suaves e transições elegantes
- Tipografia clara e legível
- Layout responsivo e intuitivo
- Feedback visual para interações

## 📊 Estatísticas

- **Total de atalhos**: 73+
- **Categorias**: 6
- **Suporte**: Windows e macOS
- **Tamanho**: ~50KB

## 🔧 Desenvolvimento

### Estrutura do Projeto

```
illustrator-shortcuts-extension/
├── manifest.json          # Configuração da extensão
├── popup.html             # Interface principal
├── styles.css             # Estilos e animações
├── popup.js               # Lógica da aplicação
├── shortcuts-data.js      # Base de dados dos atalhos
├── icons/                 # Ícones da extensão
│   ├── icon16.png
│   ├── icon32.png
│   ├── icon48.png
│   └── icon128.png
└── README.md              # Documentação
```

### Personalização

Para adicionar novos atalhos, edite o arquivo `shortcuts-data.js`:

```javascript
{
    name: "Nome do Comando",
    category: "categoria",
    windows: ["Ctrl", "Tecla"],
    mac: ["Command", "Tecla"]
}
```

## 🤝 Contribuição

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## 💜 Feito com Amor

Criado especialmente para designers e profissionais que trabalham com Adobe Illustrator. Esperamos que esta extensão torne seu fluxo de trabalho mais eficiente e produtivo!

---

**Nota**: Esta extensão não é oficialmente afiliada à Adobe Inc. Adobe Illustrator é uma marca registrada da Adobe Inc.

