Vamos modificar o exemplo anterior para usar `<div>` e `<span>` como containers e aplicar o estilo usando classes CSS. Isso permitirá maior flexibilidade e reutilização dos estilos.

### Estrutura HTML com `<div>` e `<span>`

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meu Site Básico Estilizado</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="header">
        <h1><span class="title">Bem-vindo ao Meu Site</span></h1>
    </div>

    <div class="nav">
        <ul>
            <li><a href="#">Início</a></li>
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Serviços</a></li>
            <li><a href="#">Contato</a></li>
        </ul>
    </div>

    <div class="main-content">
        <div class="article">
            <h2><span class="subtitle">Artigo Principal</span></h2>
            <p><span class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id dolor id nibh ultricies vehicula ut id elit.</span></p>
            <p><span class="text">Maecenas sed diam eget risus varius blandit sit amet non magna. Curabitur blandit tempus porttitor.</span></p>
        </div>

        <div class="section">
            <h2><span class="subtitle">Outra Seção</span></h2>
            <p><span class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</span></p>
            <p><span class="text">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper.</span></p>
        </div>

        <div class="aside">
            <h2><span class="subtitle">Barra Lateral</span></h2>
            <p><span class="text">Informações adicionais ou links relacionados podem ser colocados aqui.</span></p>
        </div>
    </div>

    <div class="footer">
        <p><span class="footer-text">&copy; 2024 Meu Site Básico. Todos os direitos reservados.</span></p>
    </div>
</body>
</html>
```

### CSS Estilizado com Classes

```css
/* styles.css */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f9f9f9;
}

.header, .nav, .article, .section, .aside, .footer {
    margin: 10px;
    padding: 20px;
    border: 1px solid #ddd;
    background-color: #fff;
}

.header {
    background-color: #f8f8f8;
}

.nav {
    background-color: #e8e8e8;
}

.main-content {
    display: flex;
    flex-wrap: wrap;
}

.article, .section, .aside {
    flex: 1 1 100%;
    margin: 5px;
}

.article, .section {
    background-color: #fefefe;
}

.aside {
    background-color: #f4f4f4;
}

.footer {
    background-color: #f1f1f1;
    text-align: center;
}

.title {
    font-size: 24px;
    color: #333;
}

.subtitle {
    font-size: 20px;
    color: #555;
}

.text {
    font-size: 16px;
    color: #666;
}

.footer-text {
    font-size: 14px;
    color: #777;
}
```

### Explicação

- **HTML**:
  - Substituímos as tags semânticas por `<div>` e `<span>` para criar containers flexíveis.
  - As classes como `.header`, `.nav`, `.article`, etc., foram atribuídas para estilizar cada seção.

- **CSS**:
  - **Classes**: Foram usadas para aplicar estilos específicos a diferentes partes do conteúdo, como `.title`, `.subtitle`, `.text`, e `.footer-text`.
  - **Layout Flexível**: A classe `.main-content` usa flexbox para criar um layout flexível, permitindo que os artigos e seções se ajustem ao tamanho da tela.

### Conclusão

Esta abordagem com `<div>`, `<span>`, e classes CSS oferece maior controle sobre o layout e estilo do site. A estrutura do HTML fica mais genérica, enquanto o CSS define o visual e o comportamento das diferentes partes do site.