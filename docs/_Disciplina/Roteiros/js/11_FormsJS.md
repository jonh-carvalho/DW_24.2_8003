# 11 Manipulando html com js

## Criando uma Tabela HTML a partir de Dados JSON

Vamos transformar a lista de produtos em uma tabela mais organizada e visualmente atraente.

**HTML (index.html):**

```html
<!DOCTYPE html>
<html>
<head>
  <title>Tabela de Produtos</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <table id="tabela-produtos">
    <thead>
      <tr>
        <th>Nome</th>
        <th>Preço</th>
      </tr>
    </thead>
    <tbody>
    </tbody>
  </table>

  <script src="script.js"></script>
</body>
</html>
```

**CSS (styles.css):**

```css
/* Adicione seus estilos CSS aqui para personalizar a tabela */
table {
  border-collapse: collapse;
  width: 100%;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}
```

**JavaScript (script.js):**

```javascript
async function buscarProdutos() {
  try {
    const response = await fetch('produtos.json');
    const produtos = await response.json();

    const tabelaBody = document.querySelector('#tabela-produtos tbody');

    produtos.forEach(produto => {
      const novaLinha = document.createElement('tr');
      const nomeCelula = document.createElement('td');
      const precoCelula = document.createElement('td');

      nomeCelula.textContent = produto.nome;
      precoCelula.textContent = `R$ ${produto.preco.toFixed(2)}`;

      novaLinha.appendChild(nomeCelula);
      novaLinha.appendChild(precoCelula);
      tabelaBody.appendChild(novaLinha);
    });
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
  }
}

buscarProdutos();
```

**Explicação das Alterações:**

* **Estrutura da tabela:**
  * O HTML agora inclui uma tabela com cabeçalho (`<thead>`) e corpo (`<tbody>`).
  * O cabeçalho define as colunas "Nome" e "Preço".
* **Inserção de dados:**
  * O JavaScript cria novas linhas (`<tr>`) para cada produto.
  * Dentro de cada linha, são criadas células (`<td>`) para o nome e preço.
  * As células são preenchidas com os dados do produto e adicionadas à tabela.
* **CSS:**
  * O CSS adiciona estilos básicos à tabela, como bordas e espaçamento entre as células.
  * Você pode personalizar ainda mais a aparência da tabela conforme suas necessidades.

**Como funciona:**

1. **Busca os dados:** O JavaScript busca os dados do arquivo JSON.
2. **Cria a tabela:** A função cria uma tabela HTML com cabeçalho e corpo.
3. **Preenche a tabela:** Para cada produto, uma nova linha é criada e adicionada ao corpo da tabela.
4. **Exibe a tabela:** A tabela completa é exibida na página.

**Exercícios:**

* **Adicionar mais colunas:** Se o seu JSON tiver mais informações, você pode adicionar mais colunas à tabela.
* **Formatar números:** Use o método `.toLocaleString()` para formatar números de acordo com as configurações regionais.
* **Ordenar dados:** Implemente uma função para ordenar os dados da tabela de acordo com um critério específico.
* **Filtrar dados:** Crie um campo de busca para filtrar os produtos.
* **Estilização:** Use CSS para personalizar a aparência da tabela, como cores, fontes e layout.

**Exemplo com mais colunas e formatação:**

```javascript
// ... (código anterior)

precoCelula.textContent = produto.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
```

Isso formatará o preço como "R$ 29,99".

## Criando uma Interface HTML com JavaScript

Antes de começarmos a codificar, vamos entender a função de cada elemento HTML que você mencionou

* **header:** Geralmente contém o logo, título do site e informações de contato.
* **nav:** Contém os links de navegação principais (home, serviços, contato, etc.).
* **section:** Define uma seção independente de um documento.
* **article:** Representa um conteúdo autônomo e independente, como um post de blog ou artigo de notícia.
* **footer:** Contém informações de rodapé, como copyright, links para políticas de privacidade e informações de contato adicionais.

### Estrutura Básica HTML

```html
<!DOCTYPE html>
<html>
<head>
    <title>Meu Site</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Meu Site</h1>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Serviços</a></li>
                <li><a href="#">Contato</a></li>
            </ul>
        </nav>
    </header>

    <section>
        <article>
            <h2>Bem-vindo!</h2>
            <p>Este é o conteúdo principal da minha página.</p>
        </article>
    </section>

    <footer>
        <p>© 2023 Meu Site</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
```

### Estilizando com CSS (styles.css)

```css
/* Adicione aqui seus estilos CSS */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}

header {
    background-color: #f0f0f0;
    padding: 20px;
}

nav ul {
    list-style: none;
    padding: 0;
}

nav li {
    display: inline-block;
    margin-right: 10px;
}
```

### Adicionando Interatividade com JavaScript (script.js)

```javascript
// Adicione aqui seu código JavaScript
// Exemplo:
const botao = document.getElementById('meuBotao');

botao.addEventListener('click', () => {
    alert('Você clicou no botão!');
});
```

### Explicando o Código

* **HTML:** Define a estrutura básica da página, incluindo os elementos header, nav, section, article e footer.
* **CSS:** Estiliza a página, definindo cores, fontes, espaçamentos, etc.
* **JavaScript:** Adiciona interatividade à página, permitindo que você manipule elementos HTML e responda a eventos do usuário.

## Manipulando HTML com JavaScript: Criando uma SPA do Zero

**O que é uma SPA?**

Uma Single Page Application (SPA) é um tipo de aplicação web que carrega uma única página HTML e, em vez de recarregar toda a página durante a navegação, ela atualiza dinamicamente o conteúdo com base nas interações do usuário. Isso proporciona uma experiência mais fluida e semelhante a um aplicativo desktop.

### **Criando Elementos HTML com JavaScript**

Para criar elementos HTML dinamicamente com JavaScript, utilizamos o método `createElement()`. Após criar o elemento, podemos configurá-lo com atributos, adicionar conteúdo e, finalmente, inseri-lo no DOM (Document Object Model) da página.

### **Exemplo Prático: Criando um Card de Produto**

```javascript
// Criando um novo elemento div
const card = document.createElement('div');
card.classList.add('card'); // Adicionando uma classe para estilização

// Criando elementos internos do card
const titulo = document.createElement('h2');
titulo.textContent = 'Produto X';

const descricao = document.createElement('p');
descricao.textContent = 'Descrição do produto.';

const imagem = document.createElement('img');
imagem.src = 'caminho/para/imagem.jpg';
imagem.alt = 'Imagem do produto';

// Adicionando os elementos internos ao card
card.appendChild(titulo);
card.appendChild(descricao);
card.appendChild(imagem);

// Selecionando o elemento onde o card será inserido
const container = document.getElementById('container');

// Adicionando o card ao container
container.appendChild(card);
```

**HTML:**

```html
<div id="container"></div>
```

**CSS:**

```css
.card {
    border: 1px solid #ccc;
    padding: 20px;
    margin: 10px;
}
```

### **Explicação:**

1. **Criamos os elementos:** `div`, `h2`, `p` e `img`.
2. **Configuramos os elementos:** Definimos o texto, a classe, a fonte da imagem e o texto alternativo.
3. **Adicionamos os elementos filhos:** Inserimos os elementos `h2`, `p` e `img` dentro do elemento `div`.
4. **Inserimos no DOM:** Selecionamos o elemento com o ID `container` e adicionamos o card a ele.

### **Criando uma SPA Simples**

Para criar uma SPA simples, podemos utilizar JavaScript para:

* **Manipular o conteúdo:** Alterar o conteúdo de elementos HTML com base em eventos do usuário.
* **Gerenciar rotas:** Carregar diferentes conteúdos dependendo da URL.
* **Fazer requisições AJAX:** Carregar dados de um servidor sem recarregar a página.

**Exemplo de SPA com Navegação Simples:**

```javascript
const links = document.querySelectorAll('nav a');

links.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const conteudo = document.getElementById('conteudo');
        conteudo.textContent = `Você clicou em ${link.textContent}`;
    });
});
```

## Criando uma Galeria de Cards com Três Colunas e Três Linhas em HTML, CSS e JavaScript

### **Entendendo o Desafio**

Queremos construir uma galeria de cards, onde cada card contém um título, uma imagem e possivelmente outros elementos. O objetivo é organizar esses cards em uma grade de três colunas e três linhas, utilizando HTML para a estrutura, CSS para o estilo e JavaScript para adicionar interatividade (opcional).

### **Estrutura HTML Básica**

```html
<!DOCTYPE html>
<html>
<head>
    <title>Galeria de Cards</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="gallery">
        </div>
    <script src="script.js"></script>
</body>
</html>
```

### **Estilização com CSS**

```css
.gallery {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

.card {
    border: 1px solid #ccc;
    padding: 20px;
    text-align: center;
}

.card img {
    max-width: 100%;
}
```

### **Criando os Cards com JavaScript**

```javascript
const gallery = document.querySelector('.gallery');

// Dados dos cards (pode ser obtido de uma API ou outro local)
const cardsData = [
    { title: 'Card 1', image: 'image1.jpg' },
    { title: 'Card 2', image: 'image2.jpg' },
    // ... e assim por diante
];

// Função para criar um card
function createCard(data) {
    const card = document.createElement('div');
    card.classList.add('card');

    const title = document.createElement('h2');
    title.textContent = data.title;

    const image = document.createElement('img');
    image.src = data.image;
    image.alt = data.title;

    card.appendChild(title);
    card.appendChild(image);
    return card;
}

// Criando os cards e adicionando à galeria
cardsData.forEach(data => {
    const cardElement = createCard(data);
    gallery.appendChild(cardElement);
});
```

### **Explicando o Código:**

1. **HTML:** Criamos um container com a classe `gallery` para agrupar os cards.
2. **CSS:**
   * `display: grid;` transforma o container em um grid.
   * `grid-template-columns: repeat(3, 1fr);` cria três colunas de tamanho igual.
   * `gap: 20px;` adiciona um espaço de 20px entre os cards.
3. **JavaScript:**
   * Selecionamos o container da galeria.
   * Criamos um array `cardsData` com os dados de cada card.
   * A função `createCard` cria um elemento `div` com as classes e conteúdos necessários.
   * Iteramos sobre os dados dos cards, criando um elemento `card` para cada um e adicionando-o à galeria.

### **Exercícios**

* **Estilização:** Modifique as classes CSS para personalizar a aparência dos cards e da galeria.
* **Conteúdo:** Adicione mais dados aos cards, como descrições, botões, etc.
* **Layout:** Experimente diferentes valores para `grid-template-columns` e `gap` para ajustar o layout.
* **Responsividade:** Utilize media queries para adaptar a galeria a diferentes tamanhos de tela.
* **Interatividade:** Adicione eventos aos cards, como hover, clique, etc., para criar efeitos visuais ou ações.
