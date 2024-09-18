# Responsividade 
Para criar um site responsivo utilizando **media queries** e **unidades de dimensionamento relativas**, você pode seguir este exemplo básico:

### Estrutura do HTML:

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Site Responsivo</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>Bem-vindo ao site responsivo</h1>
    </header>

    <nav>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#contato">Contato</a></li>
        </ul>
    </nav>

    <main>
        <section id="home">
            <h2>Home</h2>
            <p>Esta é a página principal do nosso site.</p>
        </section>

        <section id="sobre">
            <h2>Sobre</h2>
            <p>Saiba mais sobre o propósito deste site.</p>
        </section>

        <section id="contato">
            <h2>Contato</h2>
            <p>Entre em contato conosco para mais informações.</p>
        </section>
    </main>

    <footer>
        <p>&copy; 2024 Site Responsivo. Todos os direitos reservados.</p>
    </footer>
</body>
</html>
```

### Estilos CSS:

```css
/* Reset básico */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Layout básico para mobile */
body {
    font-family: Arial, sans-serif;
    font-size: 16px; /* Unidades relativas, usando 'em' */
    line-height: 1.6;
    padding: 10px;
}

header {
    text-align: center;
    background-color: #333;
    color: white;
    padding: 1em;
}

nav ul {
    list-style: none;
    padding: 0;
    text-align: center;
    background-color: #444;
}

nav ul li {
    display: inline;
    margin-right: 10px;
}

nav ul li a {
    color: white;
    text-decoration: none;
    padding: 10px;
    display: inline-block;
}

main {
    margin-top: 20px;
}

section {
    margin-bottom: 20px;
}

footer {
    text-align: center;
    padding: 10px;
    background-color: #333;
    color: white;
}

/* Media Queries para telas maiores */
@media (min-width: 600px) {
    body {
        font-size: 1.2em; /* Aumenta a fonte em telas maiores */
    }

    nav ul li {
        margin-right: 20px;
    }

    main {
        max-width: 900px;
        margin: 0 auto;
    }
}

@media (min-width: 1024px) {
    body {
        font-size: 1.5em; /* Aumenta mais a fonte para grandes telas */
    }

    header, footer {
        text-align: left;
        padding: 20px;
    }

    nav ul {
        text-align: left;
    }

    nav ul li {
        display: inline-block;
    }
}
```

### Explicação:
1. **Unidades relativas**:
   - O uso de `em` e `rem` permite que o layout seja mais flexível e responsivo. Por exemplo, a `font-size: 1.2em` significa que o tamanho da fonte será 1,2 vezes o tamanho da fonte padrão do elemento pai.
  
2. **Media Queries**:
   - **`@media (min-width: 600px)`**: Altera o layout para telas com largura maior que 600px. Neste caso, o tamanho da fonte e o espaçamento são aumentados.
   - **`@media (min-width: 1024px)`**: Para telas grandes, como desktops, a fonte e o layout são ajustados para dar uma melhor experiência visual, com mais espaçamento e uma disposição diferente.

### Como testar:
- Abra o código no navegador e redimensione a janela para ver como o layout se adapta a diferentes larguras de tela.

# Imagem Responsiva

Para adicionar uma **imagem responsiva** ao seu site, você pode usar a propriedade CSS `max-width` para garantir que a imagem se ajuste ao tamanho da tela, sem exceder a largura do container.

### Atualização no HTML:

No código HTML, você pode adicionar uma imagem dentro de uma seção, como no exemplo abaixo:

```html
<main>
    <section id="home">
        <h2>Home</h2>
        <p>Esta é a página principal do nosso site.</p>
        <img src="imagem-exemplo.jpg" alt="Exemplo de imagem responsiva">
    </section>

    <section id="sobre">
        <h2>Sobre</h2>
        <p>Saiba mais sobre o propósito deste site.</p>
    </section>

    <section id="contato">
        <h2>Contato</h2>
        <p>Entre em contato conosco para mais informações.</p>
    </section>
</main>
```

### Atualização no CSS:

No CSS, você pode usar `max-width: 100%` para que a imagem não ultrapasse a largura do container:

```css
img {
    max-width: 100%;
    height: auto; /* Mantém a proporção da imagem */
    display: block; /* Remove espaços brancos ao redor da imagem */
    margin: 20px auto; /* Centraliza a imagem e adiciona margem */
}
```

### Explicação:
1. **`max-width: 100%`**: Garante que a imagem ocupe no máximo 100% da largura do container (por exemplo, a largura da seção ou da página), mas nunca mais do que isso. Se a imagem for menor que o container, ela manterá seu tamanho original.
   
2. **`height: auto`**: Mantém a proporção da imagem enquanto ela é redimensionada.

3. **`display: block`**: Remove o comportamento padrão da imagem como um elemento inline e permite que margens funcionem corretamente para centralizá-la.

4. **`margin: 20px auto`**: Adiciona espaço em volta da imagem e a centraliza horizontalmente (`auto` no eixo horizontal).

### Testando:

Quando você abrir o site no navegador, redimensione a janela para observar como a imagem se ajusta automaticamente, sem distorções, conforme o tamanho da tela muda.

# Fontes 

A melhor forma de declarar fontes em um site envolve combinar boas práticas de legibilidade, flexibilidade e otimização de performance. Aqui estão alguns pontos importantes e um exemplo prático usando a **fonte padrão do sistema**, fontes alternativas, e uma fonte personalizada do Google Fonts.

### 1. **Usar Fontes Seguras para a Web (Web Safe Fonts)**:
   - Definir uma pilha de fontes que inclua fontes padrão, como `Arial`, `Verdana`, `Times New Roman`, entre outras, garante que o texto seja exibido mesmo se a fonte personalizada não for carregada.
   
   Exemplo:
   ```css
   font-family: "Arial", "Helvetica", sans-serif;
   ```

### 2. **Fonte Personalizada com Google Fonts**:
   - Google Fonts é uma opção amplamente usada e gratuita para incluir fontes personalizadas. Usar fontes personalizadas melhora a estética do site, mas também deve-se garantir o uso de fontes alternativas, caso a personalizada não carregue.

   Exemplo de importação de uma fonte do Google:
   ```html
   <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
   ```

### 3. **Pilha de Fontes com Fontes Genéricas**:
   - Sempre é importante fornecer fontes de fallback (alternativas) no caso de a fonte principal não estar disponível. Isso ajuda a manter a consistência e a acessibilidade do design.

   Exemplo com uma pilha de fontes:
   ```css
   body {
       font-family: "Roboto", "Arial", sans-serif;
   }
   ```

   Aqui, se a fonte `Roboto` não for carregada, o navegador utilizará `Arial`. Se nenhuma estiver disponível, ele usará qualquer fonte **sans-serif** disponível no sistema do usuário.

### 4. **Uso de Fontes Padrão do Sistema**:
   - As fontes padrão de sistema, como `-apple-system` no macOS e iOS, `Segoe UI` no Windows, são rápidas de carregar, garantindo que o site tenha uma boa performance.

   Exemplo:
   ```css
   body {
       font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
   }
   ```

### 5. **Declarar Fontes com Diferentes Pesos e Estilos**:
   - Quando você importa uma fonte de serviços como Google Fonts, é possível especificar diferentes pesos e estilos. Isso garante flexibilidade no design, como o uso de negrito ou itálico.

   Exemplo de importação:
   ```html
   <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">
   ```

   Aqui, são carregados os pesos `300`, `400`, `500`, e `700` da fonte `Roboto`.

### 6. **Melhorar Performance com `font-display: swap`**:
   - O atributo `display=swap` ao importar fontes personalizadas no Google Fonts instrui o navegador a usar uma fonte de fallback até que a fonte personalizada seja carregada, evitando que o texto fique invisível enquanto a fonte carrega.

   Exemplo:
   ```html
   <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
   ```

### Exemplo Completo:

Aqui está um exemplo de como configurar uma pilha de fontes de maneira eficiente:

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exemplo de Fontes</title>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            font-size: 1rem;
            line-height: 1.5;
            margin: 20px;
        }

        h1 {
            font-weight: 700; /* Negrito */
        }

        p {
            font-weight: 400; /* Normal */
        }
    </style>
</head>
<body>
    <h1>Exemplo de uso de fontes</h1>
    <p>Este é um exemplo de como declarar fontes de forma eficiente e responsiva para garantir a melhor performance e legibilidade.</p>
</body>
</html>
```

### Resumo das Melhores Práticas:
- Use **fontes padrão do sistema** para melhorar a performance.
- Inclua uma **pilha de fontes** com alternativas em caso de falha no carregamento.
- Use **Google Fonts** ou outra fonte personalizada com `font-display: swap` para melhorar a experiência de carregamento.
- Adicione diferentes pesos de fonte, mas somente os necessários, para evitar sobrecarga de downloads.
