# AP2

## Objetivo

Desenvolver um site responsivo utilizando **HTML**, **CSS** e técnicas de layout como **Flexbox** e **CSS Grid**, seguindo boas práticas de design web. Escolha um tema(Loja de hardware, brinquedos, clubes, fâ-clube, etc.).

Crie uma aplicação web interativa que utilize a API Pokémon para exibir informações detalhadas sobre Pokémons. A aplicação deve ser responsiva (mobile-first) e seguir os **padrões web**.

### Entrega

- **[Obrigatório]** - **Prazo:** 27/11/2024 até as 9:20h(**AP2 ocorrerá antes do intervalo**). Obrigatório a presença em sala de aula.
- **[Obrigatório]** - Enviar o projeto para o repositório em que o professor foi adicionado como colaborador em uma pasta chamada ap2 dentro da pasta docs, com  **HTML**, **CSS**, **JAVASCRIPT** e **imagens** utilizados.
- **[Obrigatório]** - Deve ser feita a publicação da pasta docs no github-pages, na pasta docs portanto devem estar a pasta ac, ap1 e ap2.

### Critérios de Avaliação

- Validação do HTML, CSS e Links.
- Implementação de **layout responsivo** com uso de Flexbox(Micro Layout) e Grid(Macro Layout).
- **Design** e **usabilidade** do site (estética, organização visual, navegação).
- **Organização e clareza** do código.
- Implementação correta de **media queries** para diferentes dispositivos.
- <span style="color:red">Comentários específicos detalhando funcionalidades em todos os itens da avaliação</span>

### Requisitos

1/. **Estrutura do site:**

- O site deverá privilegiar a exibição em dispositivos mobile, no máximo 600px, deve ser desenvolvido um layout para desktop.
- Utilização correta de **tags semânticas** do HTML5 (ex.: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).

2/. **Design da barra de navegação:**

- Usando flexbox ou grid, crie uma barra de navegação que:
- Exibe seus itens em uma linha no desktop(telas grandes.)
- Empilha itens verticalmente para celular(tamanhos pequenos.
- Tem um logotipo à esquerda e links de navegação à direita.

3/. **Responsividade:**

- O site deve se adaptar corretamente a **diferentes tamanhos de tela** (desktop e smartphone).
- Utilização de **media queries** no CSS para ajustar o layout conforme a largura da tela.

3.1. **Layout:**

- Deverá ser possível ver diferentes layouts de página dependendo do dispositivo (ex.: layout em uma coluna para mobile, e em duas ou mais colunas para desktop).

3.2. **Conteúdo:**

- Cada página deve conter conteúdo informativo fictício (utilizar **Lorem Ipsum** quando necessário).
- Incluir **imagens** e **vídeos** relevantes e de alta qualidade. Certifique-se de que as imagens sejam redimensionáveis e não distorçam em diferentes resoluções.
- Uma **navegação clara** entre as páginas deve ser possível por meio de um menu no `<nav>`, que deve ser responsivo.
- Na página inicial o conteúdo principal deve usar a estrutura abaixo. Usando o sistema de layout de sua escolha:
- Crie um layout de três colunas.
- Garanta preenchimento consistente e margem entre os elementos.

6/.**Formulário de Contato:**

- Deve possui um placeholder para orientação de preenchimento
- Validação básica dos campos com **JAVASCRIPT** [Não permitindo a inserção de números e caracteres especiais]

7/.**Design de rodapé:**

- Usando flexbox ou grid:
  - Crie um rodapé que tenha três seções: Sobre, Links e ícones de mídia social.

8/.**Estilo e Design:**

- Aplicar um esquema de cores consistente e harmonioso.
- O design deve ser moderno e seguir boas práticas de **UX/UI**, com foco na legibilidade e usabilidade.
- Uso de **tipografia** apropriada, com pelo menos **duas fontes** diferentes.
- Usar **ícones** quando necessário (ex.: Font Awesome).

9/.**Código organizado:**

- O código deve ser organizado, indentado e comentado adequadamente.
- O **CSS** deve ser escrito em um arquivo separado e vinculado corretamente ao HTML.
- As imagens devem ser colocadas em uma subpasta "imagens"

10/. Plano em Pseudocódigo

- Criar a estrutura de arquivos:

  - Criar uma pasta para o projeto.
  - Criar arquivos index.html, styles.css e script.js.
- Configurar o arquivo HTML:

  - Adicionar um formulário para buscar Pokémon pelo nome.
  - Adicionar uma área para exibir os dados do Pokémon.
  - Incluir referências aos arquivos CSS e JavaScript.
- Estilizar a interface com CSS:

  - Adicionar estilos básicos para o formulário e a área de exibição.
- Implementar a lógica com JavaScript:

  - Adicionar um evento de submissão ao formulário.
  - Usar fetch para fazer requisições à API do Pokémon.
  - Processar e exibir os dados recebidos na interface do usuário.
- **Passo 1:** Criar a estrutura de arquivos

```bash
mkdir pokemon-site
cd pokemon-site
touch index.html styles.css script.js
```

- **Passo 2:** Configurar o arquivo HTML

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pokémon Search</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Pokémon Search</h1>
    <form id="pokemon-form">
        <input type="text" id="pokemon-name" placeholder="Enter Pokémon name" required>
        <button type="submit">Search</button>
    </form>
    <div id="pokemon-data"></div>

    <script src="script.js"></script>
</body>
</html>
```

- **Passo 3:** Estilizar a interface com CSS

```cs
/* styles.css */
body {
    font-family: Arial, sans-serif;
    text-align: center;
    margin: 0;
    padding: 0;
    background-color: #f0f0f0;
}

h1 {
    margin-top: 20px;
}

form {
    margin: 20px auto;
}

input, button {
    padding: 10px;
    font-size: 16px;
}

#pokemon-data {
    margin-top: 20px;
}

#pokemon-data img {
    width: 150px;
    height: 150px;
}
```

- **Passo 4:** Implementar a lógica com JavaScript:

```js
// script.js
document.getElementById('pokemon-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const name = document.getElementById('pokemon-name').value.toLowerCase();
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await response.json();
  
    if (response.ok) {
        document.getElementById('pokemon-data').innerHTML = `
            <h2>${data.name}</h2>
            <img src="${data.sprites.front_default}" alt="${data.name}">
        `;
    } else {
        document.getElementById('pokemon-data').innerHTML = '<p>Pokémon not found</p>';
    }
});
```

Agora, você pode abrir o arquivo index.html no seu navegador e buscar informações sobre qualquer Pokémon.

### Questões

1/. Busque e exiba as informações de um Pokémon.
    - name, sprites, height, weight, abilities, types, moves, baseExperience, stats.

2/. Buscar por Tipo Pokémon e mostrar uma galeria com os 10 primeiros Pokémons

- Layout deve ser 2 colunas e 5 linhas para o Mobile
- Layout de 5 colunas e duas linhas para Desktop.

3/. Exibir todos os Pokémon de cada região.

- Layout deve ser 2 colunas e 5 linhas para o Mobile
- Layout de 5 colunas e duas linhas para Desktop.

4/. Adicionar o css de efeito flip card(virar a carta) para cada item da galeria.

- Ao passar o mouse sobre a carta, ela gira e fica mostrando a parte de trás da carta enquanto o mouse estive sobre a carta.
- A parte de trás da carta deve usar uma imagem da carta oficial pokemon.

5/. Adicionar a funcionalidade de ao clicar em cada item da galeria, abrir uma janela modal com todas as infomarções do Pokémon clicado

6/. Desenvolver o layout da janela modal de modo que ele tenha a estrutura de uma carta oficial Pokémon.

7/. Pesquise a PokeApi, e acrescente uma nova funcionalidade de busca e exibição no site, que ainda não tenho sido usada.

### Aplicativos e Sites a serem estudados e se inspirar

- Site - [Pokédex](https://www.pokemon.com/br/pokedex)
- [Datadex](https://datadex.talzz.com/)
- [PokePedia](https://play.google.com/store/apps/details?id=com.pascualgorrita.pokedex&hl=pt_BR&pli=1)
- [MasterDex](https://play.google.com/store/apps/details?id=com.lorenzogreco.pokedex_provider&hl=pt_BR)
- [Goldex](https://play.google.com/store/apps/details?id=com.goldex&hl=pt_BR)
- [Pocket Gallery](https://play.google.com/store/apps/details?id=com.eurekaffeine.pokedex.renaissance&hl=pt)
