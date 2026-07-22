# Alura Books 📚

Uma plataforma moderna para busca, visualização e recomendações de livros, desenvolvida em **React** utilizando **Vite** e estilizada com **Styled Components**.

---

## 🚀 Novas Funcionalidades & Melhorias

A aplicação foi migrada de uma estrutura básica de templates para uma arquitetura modular moderna. As principais funcionalidades adicionadas incluem:

### 1. 🔍 Pesquisa Dinâmica de Livros (`Pesquisa`)
*   **Busca em Tempo Real:** Permite ao usuário filtrar livros disponíveis diretamente no catálogo (`dadosPesquisa.jsx`).
*   **Apresentação Interativa:** Resultados de busca dinâmicos com efeitos de hover que destacam o item selecionado.

### 2. ✨ Últimos Lançamentos (`UltimosLancamentos`)
*   **Carrossel de Novidades:** Exibição destacada dos livros mais recentes do acervo.
*   **Micro-animações de Hover:** Os livros possuem um efeito visual sutil ao passar o cursor, realizando uma transição de elevação (`translateY`) e projeção de sombra (`box-shadow`).

### 3. 💳 Card de Recomendação Avançado (`CardRecomeda`)
*   **Efeito Uiverse Expandível:** Um card interativo contendo recomendações personalizadas (como o livro *Angular 11*).
*   **Painel Deslizante Dinâmico:** Ao passar o mouse sobre o card, o fundo altera a cor para um amarelo vibrante e um painel traseiro expande-se para baixo para revelar o botão "Saiba mais", gerando um feedback visual premium.

### 4. 🎨 Estilização Moderna com Styled Components
*   **Zero CSS Clássico:** Todo o código CSS foi substituído por Styled Components, garantindo escopo local, modularidade e melhor manutenção do design system.
*   **Estilos Globais:** Configuração de tipografia moderna (`system-ui`), remoção de estilos de listas (`list-style: none`) e fundos gradientes lineares.

---

## 🛠️ Tecnologias Utilizadas

*   [React](https://react.dev/) (v19) - Biblioteca principal para construção de componentes declarativos.
*   [Vite](https://vite.dev/) (v8) - Ferramenta rápida para empacotamento e servidor de desenvolvimento.
*   [Styled Components](https://styled-components.com/) (v6) - Estilização dinâmica por meio de CSS-in-JS.
*   [Oxlint](https://oxc.rs/) - Linter ultrarrápido para garantia de melhores práticas de código JavaScript.

---

## 🏃 Como Rodar o Projeto

1.  **Instale as dependências:**
    ```bash
    npm install
    ```

2.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

3.  **Acesse no navegador:**
    Abra `http://localhost:5173` (ou a porta exibida no terminal).

