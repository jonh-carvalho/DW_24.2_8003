# Aula: Tags Semânticas em HTML

#### Objetivo:
Nesta aula, você aprenderá sobre as tags semânticas do HTML e como usá-las para criar uma estrutura de site básica. Utilizaremos conteúdo fictício "Lorem Ipsum" para ilustrar a aplicação dessas tags.

#### 1. Introdução às Tags Semânticas

Tags semânticas são elementos HTML que não apenas definem o layout de um site, mas também fornecem significado ao conteúdo. Isso melhora a acessibilidade, a usabilidade e o SEO (Search Engine Optimization) de um site.

Algumas das principais tags semânticas incluem:
- `<header>`: Cabeçalho do site ou de uma seção.
- `<nav>`: Menu de navegação.
- `<article>`: Conteúdo independente, como um post ou um artigo.
- `<section>`: Seção de conteúdo relacionada.
- `<aside>`: Conteúdo relacionado, como barras laterais.
- `<footer>`: Rodapé do site ou de uma seção.

#### 2. Estrutura do Site Básico

Vamos criar um site simples com as seguintes seções:
- Cabeçalho com o título do site.
- Menu de navegação.
- Um artigo principal.
- Uma seção adicional.
- Um rodapé.

#### 3. Exemplo de Código

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meu Site Básico</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
        }
        header, nav, article, section, aside, footer {
            padding: 20px;
            margin: 10px;
            border: 1px solid #ddd;
        }
        header {
            background-color: #f8f8f8;
        }
        nav {
            background-color: #e8e8e8;
        }
        footer {
            background-color: #f1f1f1;
        }
    </style>
</head>
<body>
    <header>
        <h1>Bem-vindo ao Meu Site</h1>
    </header>

    <nav>
        <ul>
            <li><a href="#">Início</a></li>
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Serviços</a></li>
            <li><a href="#">Contato</a></li>
        </ul>
    </nav>

    <article>
        <h2>Artigo Principal</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum.</p>
        <p>Maecenas sed diam eget risus varius blandit sit amet non magna. Curabitur blandit tempus porttitor. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
    </article>

    <section>
        <h2>Outra Seção</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>
        <p>Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper.</p>
    </section>

    <aside>
        <h2>Barra Lateral</h2>
        <p>Informações adicionais ou links relacionados podem ser colocados aqui.</p>
    </aside>

    <footer>
        <p>&copy; 2024 Meu Site Básico. Todos os direitos reservados.</p>
    </footer>
</body>
</html>
```

#### 4. Explicação do Exemplo

- **`<header>`**: Contém o título do site.
- **`<nav>`**: Um menu de navegação básico com links fictícios.
- **`<article>`**: O conteúdo principal do site.
- **`<section>`**: Uma seção adicional que poderia conter mais conteúdo relacionado.
- **`<aside>`**: Uma barra lateral com informações extras.
- **`<footer>`**: O rodapé com informações de direitos autorais.

#### 5. Conclusão

As tags semânticas são fundamentais para criar sites bem estruturados e acessíveis. Ao usar essas tags, o HTML fica mais claro tanto para desenvolvedores quanto para mecanismos de busca, melhorando a experiência geral do usuário.

**Tarefa:** Crie seu próprio site usando tags semânticas e substitua o conteúdo "Lorem Ipsum" por informações reais de um projeto ou interesse pessoal.