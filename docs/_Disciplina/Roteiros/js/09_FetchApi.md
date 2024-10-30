Um exemplo simples de como consumir uma API usando `fetch` em JavaScript. Vou usar a [API pública JSONPlaceholder](https://jsonplaceholder.typicode.com/), que simula dados típicos (como posts, comentários, etc.) para desenvolvimento e testes.

O exemplo abaixo faz uma requisição para a rota `/posts` dessa API, que retorna uma lista de posts fictícios. Vamos exibir os títulos desses posts em uma lista no HTML.

### Estrutura do projeto

Crie uma pasta com os seguintes arquivos:
1. `index.html`: o arquivo HTML principal.
2. `script.js`: o arquivo JavaScript com o código de consumo da API.

### Passo 1: Criando o HTML (`index.html`)

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Consumo de API com Fetch</title>
</head>
<body>
    <h1>Posts da API JSONPlaceholder</h1>
    <ul id="postsList"></ul>

    <script src="script.js"></script>
</body>
</html>
```

### Passo 2: Criando o JavaScript (`script.js`)

Aqui está o código JavaScript que faz a requisição à API e exibe os dados no HTML.

```javascript
// URL da API
const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

// Função para buscar e exibir os posts
function fetchPosts() {
  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro ao obter dados da API');
      }
      return response.json(); // Converte a resposta em JSON
    })
    .then(data => {
      const postsList = document.getElementById('postsList');
      // Itera pelos posts e cria itens de lista
      data.forEach(post => {
        const listItem = document.createElement('li');
        listItem.textContent = post.title;
        postsList.appendChild(listItem);
      });
    })
    .catch(error => {
      console.error(error);
      document.getElementById('postsList').textContent = 'Erro ao carregar os posts';
    });
}

// Chama a função ao carregar a página
fetchPosts();
```

### Explicação do Código

1. **URL da API**: A constante `apiUrl` contém o endpoint da API para obter os posts.
2. **Função `fetchPosts()`**: Esta função faz a requisição usando `fetch`:
   - Verifica se a resposta está `ok` (código de status 200–299). Em caso de erro, lança uma mensagem de erro.
   - Converte a resposta JSON em um objeto JavaScript com `response.json()`.
   - Itera pela lista de posts (`data`) e adiciona cada título como um item (`<li>`) na lista HTML (`<ul id="postsList">`).
3. **Tratamento de Erros**: Qualquer erro na requisição ou na conversão para JSON é capturado e exibido no console e na página.

### Resultado

Ao abrir o `index.html` no navegador, a página exibirá uma lista com os títulos dos posts. Este é um exemplo de como consumir dados de uma API com `fetch` e exibi-los dinamicamente em HTML.