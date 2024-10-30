Vou te mostrar como criar uma API simples usando o `json-server` para simular uma API RESTful, baseado nos exemplos anteriores com dados de posts e usuários.

### Passo 1: Instalar o JSON Server

Se você ainda não tem o `json-server`, pode instalá-lo globalmente com o npm:

```bash
npm install -g json-server
```

### Passo 2: Criar o Arquivo `db.json`

Esse arquivo conterá os dados que serão expostos pela API. Crie um arquivo chamado `db.json` na pasta do projeto e insira os seguintes dados:

```json
{
  "posts": [
    {
      "id": 1,
      "title": "Primeiro Post",
      "body": "Conteúdo do primeiro post."
    },
    {
      "id": 2,
      "title": "Segundo Post",
      "body": "Conteúdo do segundo post."
    },
    {
      "id": 3,
      "title": "Terceiro Post",
      "body": "Conteúdo do terceiro post."
    }
  ],
  "users": [
    {
      "id": 1,
      "nome": "Maria",
      "idade": 30,
      "cidade": "São Paulo"
    },
    {
      "id": 2,
      "nome": "Carlos",
      "idade": 25,
      "cidade": "Rio de Janeiro"
    },
    {
      "id": 3,
      "nome": "Ana",
      "idade": 28,
      "cidade": "Salvador"
    }
  ]
}
```

- **Posts**: Simula uma lista de posts com `id`, `title` e `body`.
- **Users**: Simula uma lista de usuários com `id`, `nome`, `idade` e `cidade`.

### Passo 3: Executar o JSON Server

Agora que temos o `db.json` configurado, inicie o `json-server` com o seguinte comando:

```bash
json-server --watch db.json --port 3000
```

> Aqui, o servidor será iniciado na porta 3000. Você pode mudar a porta conforme necessário.

### Endpoints Criados pelo `json-server`

Com o JSON Server, os dados em `db.json` são automaticamente transformados em endpoints RESTful. Aqui estão alguns endpoints que serão criados automaticamente:

- **GET /posts** – Retorna todos os posts.
- **GET /posts/{id}** – Retorna um post específico pelo `id`.
- **POST /posts** – Adiciona um novo post.
- **PUT /posts/{id}** – Atualiza um post pelo `id`.
- **DELETE /posts/{id}** – Deleta um post pelo `id`.
- **GET /users** – Retorna todos os usuários.
- **GET /users/{id}** – Retorna um usuário específico pelo `id`.

### Passo 4: Consumir a API com `fetch`

Com a API rodando no `json-server`, você pode consumir os dados a partir de uma página HTML. Vou mostrar um exemplo de como listar os títulos dos posts.

#### Arquivo `index.html`

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Consumindo API com JSON Server</title>
</head>
<body>
    <h1>Posts da API Local</h1>
    <ul id="postsList"></ul>

    <script src="script.js"></script>
</body>
</html>
```

#### Arquivo `script.js`

```javascript
// URL da API local do JSON Server
const apiUrl = 'http://localhost:3000/posts';

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

### Explicação do Funcionamento

1. **Servidor JSON**: Com `json-server`, a API local expõe endpoints para os dados em `db.json`.
2. **HTML e JavaScript**: O arquivo `script.js` faz uma requisição GET para `http://localhost:3000/posts` e exibe os títulos dos posts.
3. **Teste**: Abra o `index.html` em um navegador com o `json-server` rodando. Os títulos dos posts serão exibidos na lista.

### Manipulando Outros Endpoints

Para acessar os dados de usuários (`/users`), basta alterar a URL no `fetch` para `http://localhost:3000/users`.