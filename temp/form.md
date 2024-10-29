### Uso de javascript em formulários

Plano

- Criar um formulário HTML simples com campos de entrada.

- Adicionar um botão para enviar o formulário.

- Escrever um script JavaScript para validar os dados do formulário.

- Exibir mensagens de erro ou sucesso com base na validação.

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulário com JavaScript</title>
</head>
<body>
    <h1>Formulário de Contato</h1>
    <form id="contactForm">
        <label for="name">Nome:</label>
        <input type="text" id="name" name="name" required>
        <br>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
        <br>
        <label for="message">Mensagem:</label>
        <textarea id="message" name="message" required></textarea>
        <br>
        <button type="submit">Enviar</button>
    </form>
    <div id="result"></div>

    <script src="script.js"></script>
</body>
</html>
```

```js
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obter valores dos campos
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validação simples
    if (name === '' || email === '' || message === '') {
        document.getElementById('result').innerText = 'Por favor, preencha todos os campos.';
        document.getElementById('result').style.color = 'red';
    } else {
        document.getElementById('result').innerText = 'Formulário enviado com sucesso!';
        document.getElementById('result').style.color = 'green';
    }
});

#### Explicação

- HTML: Cria um formulário com campos para nome, email e mensagem.

- JavaScript: Adiciona um ouvinte de evento para o envio do formulário, valida os campos e exibe uma mensagem de erro ou sucesso.

### How can I access the values of form inputs using JavaScript?

You can access the values of form inputs using JavaScript by selecting the input elements and then using the .value property. 

````js
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from submitting

    // Accessing the values of the form inputs
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Displaying the values in the console (for demonstration purposes)
    console.log('Email:', email);
    console.log('Message:', message);

    // You can add further processing or validation here
});
```

#### Explanation

- Event Listener: Adds an event listener to the form's submit event to prevent the default form submission.
- Accessing Values: Uses document.getElementById to select the input elements by their IDs and then accesses their values using the .value property.
- Console Output: Logs the values to the console for demonstration purposes. You can replace this with further processing or validation as needed.




GitHub Copilot
Passo 1: Adicionar um Campo de Arquivo ao Formulário
Adicione um campo de arquivo ao formulário HTML para permitir o upload de imagens.

Passo 2: Modificar o JavaScript para Exibir a Pré-visualização do Arquivo Selecionado
Atualize o JavaScript para exibir uma pré-visualização da imagem selecionada.

Explicação
Campo de Arquivo: Adiciona um campo de arquivo ao formulário HTML para permitir o upload de imagens.
Pré-visualização da Imagem: Adiciona um elemento div para exibir a pré-visualização da imagem.
Event Listener para o Campo de Arquivo: Adiciona um ouvinte de evento change ao campo de arquivo para exibir a pré-visualização da imagem selecionada.
FileReader: Usa FileReader para ler o arquivo de imagem e exibir a pré-visualização.
Limpar Pré-visualização: Limpa a pré-visualização da imagem quando o formulário é enviado e redefinido.
Este exemplo demonstra como adicionar um campo de arquivo de imagem ao formulário e exibir uma pré-visualização do arquivo selecionado.