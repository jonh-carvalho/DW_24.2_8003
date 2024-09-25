## AP1

### Objetivo:

Desenvolver um site responsivo utilizando **HTML**, **CSS** e técnicas de layout como **Flexbox** e **CSS Grid**, seguindo boas práticas de design web. Escolha um tema(Loja de hardware, brinquedos, clubes, fâ-clube, etc.)

### Entrega:

- **Prazo:** 25/09/2024
- Enviar o projeto para o repositório em que o professor foi adicionado como colaborador em uma pasta chamada ap1 dentro da pasta docs, com  **HTML**, **CSS**, e **imagens** utilizados.

### Critérios de Avaliação:

* Uso correto das **tags HTML5** semânticas.
* Implementação de **layout responsivo** com Flexbox e/ou Grid para o nav e footer.
* **Design** e **usabilidade** do site (estética, organização visual, navegação).
* **Organização e clareza** do código.
* Implementação correta de **media queries** para diferentes dispositivos.
* Funcionalidade e layout do  **formulário de contato** .

### Requisitos:

1. **Estrutura do site:**

    * O site deverá conter, no mínimo, **4 páginas interligadas** (Home, Sobre, Serviços, Contato).
    * Utilização correta de **tags semânticas** do HTML5 (ex.: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
    * Adicione estilos globais iniciais: tamanho da fonte, família, cor de fundo, etc.

2. **Design da barra de navegação:**

    * Usando flexbox ou grid, crie uma barra de navegação que:
    * Exibe seus itens em uma linha no desktop(telas grandes.)
    * Empilha itens verticalmente para celular(tamanhos pequenos.
    * Tem um logotipo à esquerda e links de navegação à direita.

3. **Responsividade:**

    * O site deve se adaptar corretamente a **diferentes tamanhos de tela** (desktop e smartphone).
    * Utilização de **media queries** no CSS para ajustar o layout conforme a largura da tela.

4. **Layout:**

    * Deverá ser possível ver diferentes layouts de página dependendo do dispositivo (ex.: layout em uma coluna para mobile, e em duas ou mais colunas para desktop).

5. **Conteúdo:**

    * Cada página deve conter conteúdo informativo fictício (utilizar **Lorem Ipsum** quando necessário).
    * Incluir **imagens** e **vídeos** relevantes e de alta qualidade. Certifique-se de que as imagens sejam redimensionáveis e não distorçam em diferentes resoluções.
    * Uma **navegação clara** entre as páginas deve ser possível por meio de um menu no `<nav>`, que deve ser responsivo.
    * Na página inicial o conteúdo principal deve usar a estrutura abaixo. Usando o sistema de layout de sua escolha:
    * Crie um layout de três colunas.
    * Garanta preenchimento consistente e margem entre os elementos.

```html
<main>
    <article>
        <h2>Lorem ipsum dolor sit amet</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.</p>
    </article>

    <section class="flex-gallery">
        <figure>
            <img src="https://via.placeholder.com/150x150" alt="Placeholder Image 1">
            <figcaption>Image 1</figcaption>
        </figure>
        <figure>
            <img src="https://via.placeholder.com/150x150" alt="Placeholder Image 2">
            <figcaption>Image 2</figcaption>
        </figure>
        <figure>
            <img src="https://via.placeholder.com/150x150" alt="Placeholder Image 3">
            <figcaption>Image 3</figcaption>
        </figure>
    </section>

    <section class="grid-layout">
        <div>Grid Item A</div>
        <div>Grid Item B</div>
        <div>Grid Item C</div>
        <div>Grid Item D</div>
        </section>
</main>
```

6.**Formulário de Contato:**

* Incluir um formulário de contato funcional na página "Contato", com os campos: **nome**, **e-mail**, **mensagem**.
* Validação básica dos campos no **HTML5** (ex.: campos obrigatórios, e-mail válido).

7.**Design de rodapé:**

* Usando flexbox ou grid:
        * Crie um rodapé que tenha três seções: Sobre, Links e ícones de mídia social.

8.**Estilo e Design:**

* Aplicar um esquema de cores consistente e harmonioso.
* O design deve ser moderno e seguir boas práticas de **UX/UI**, com foco na legibilidade e usabilidade.
* Uso de **tipografia** apropriada, com pelo menos **duas fontes** diferentes.
* Usar **ícones** quando necessário (ex.: Font Awesome).

9.**Código organizado:**

* O código deve ser organizado, indentado e comentado adequadamente.
* O **CSS** deve ser escrito em um arquivo separado e vinculado corretamente ao HTML.
* As imagens devem ser colocadas em uma subpasta "imagens"
