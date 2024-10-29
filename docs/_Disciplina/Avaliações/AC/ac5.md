### **AC5: Manipulando Formulários com Javascript**

** *Duração* : 70 minutos**

<div style="color:red">IMPORTANTE: Todas as questões precisam ser devidamente comentadas com explicações precisas do que ocorre.
</div>

**Objetivo:** Desenvolver um formulário que terá os seus campos validados e monitorados por javascript.

---

### Uso de javascript em formulários

Plano

- Criar um formulário HTML simples com campos de entrada.
- Adicionar um botão para enviar o formulário.
- Escrever um script JavaScript para validar os dados do formulário.
- Exibir mensagens de erro ou sucesso com base na validação.

```html

<!DOCTYPEhtml>

<htmllang="pt-BR">

<head>
    <metacharset="UTF-8">
    <metaname="viewport"content="width=device-width, initial-scale=1.0">
    <title>Formulário com JavaScript</title>
    <linkrel="stylesheet"href="styles.css"><!-- Link para o arquivo CSS -->
</head>

<body>
    <h1>Formulário de Contato</h1>

    <formid="contactForm">
        <divclass="form-group">
            <labelfor="name">Nome:</label>
            <inputtype="text"id="name"name="name"required>
        </div>

        <divclass="form-group">
            <labelfor="email">Email:</label>
            <inputtype="email"id="email"name="email"required>
        </div>


        <divclass="form-group">
            <labelfor="message">Mensagem:</label>
            <textareaid="message"name="message"required></textarea>
        </div>

        <buttontype="submit">Enviar</button>
    </form>

    <scriptsrc="script.js"></script>
</body>
</html>
```

```css
body {

    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}


h1 {
    text-align: center;
    color: #333;
}


form {
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0010px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
}


.form-group {
    margin-bottom: 15px;
}


label {
    display: block;
    margin-bottom: 5px;
    color: #333;
}


input[type="text"],
input[type="email"],
textarea,
input[type="file"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}


textarea {
    resize: vertical;
}


button[type="submit"] {
    background-color: #28a745;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    width: 100%;
}


button[type="submit"]:disabled {
    background-color: #ccc;
    cursor: not-allowed;
}


button[type="submit"]:hover:not(:disabled) {
    background-color: #218838;
}

#result {
    margin-top: 20px;
    text-align: center;
}

#spinner {
    text-align: center;
    margin-top: 20px;
}


#imagePreview {
    margin-top: 20px;
    text-align: center;
}


#imagePreviewimg {
    max-width: 100%;
    height: auto;
    border-radius: 4px;
}
```

#### Explicação

- HTML: Cria um formulário com campos para nome, email e mensagem.
- JavaScript: Adiciona um ouvinte de evento para o envio do formulário, valida os campos e exibe uma mensagem de erro ou sucesso.

## Questões

1\. Como você pode acessar os valores dos inputs do formulário?

2\. Atualizar o conteúdo de uma página web com o conteúdo do campos(escrever na página sem clicar no botão)?

3\. Validar cada entrada do formulário antes de enviar o form? [Nome obrigatório, Email no formato, Mensagem obrigatória]

4\. Redefinir as entradas do formulário após enviar o formulário?

5\. Desativar o botão enviar até que todas as entradas do formulário sejam preenchidas?

6\. Mostrar um botão giratório(spinner) de carregamento enquanto o formulário está sendo enviado?

7\. Eibir uma mensagem de sucesso após o envio do formulário e depois redirecionar para outra página?

8\. Adicionar Validação de Tamanho da Mensagem

- Objetivo: Adicionar validação para garantir que a mensagem tenha pelo menos 100 caracteres.

9\. Adicionar Feedback Visual para Campos Inválidos

- Objetivo: Adicionar feedback visual (como bordas vermelhas) aos campos que não passam na validação.

10\. Adicionar um Campo de Telefone com Máscara. [ (país) (ddd) xxxxx-xxxx ]

11\. Adicionar um Campo de Seleção de Assunto. [Elogio, Reclamação e Sugestão]

- Exiba uma mensagem de erro se nenhum assunto for selecionado.

12\. Adicionar um Campo de Arquivo ao Formulário para permitir o upload de imagens.

- Modifique o JavaScript para Exibir a Pré-visualização do Arquivo Selecionado
  
- FileReader: Usa FileReader para ler o arquivo de imagem e exibir a pré-visualização.
  
- Limpar Pré-visualização: Limpa a pré-visualização da imagem quando o formulário é enviado e redefinido.
