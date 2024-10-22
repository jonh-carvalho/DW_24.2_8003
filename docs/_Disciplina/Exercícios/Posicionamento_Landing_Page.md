## Posisicionamento - Landing Page

Aplique as técnicas de **posicionamento CSS** em uma **landing page** que usa tags semânticas de layout. Esse exemplo vai incorporar o uso de `header`, `nav`, `main`, `section`, `article`, `aside`, `footer`, juntamente com os tipos de posicionamento: `static`, `relative`, `absolute`, `fixed`, e `sticky`.

### Estrutura HTML com tags semânticas:

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Landing Page Semântica</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <header>
    <nav class="fixed-nav">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">Sobre</a></li>
        <li><a href="#services">Serviços</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <section id="home" class="hero-section">
      <h1>Bem-vindo à nossa Landing Page!</h1>
      <p>Oferecemos as melhores soluções para o seu negócio.</p>
    </section>

    <section id="about" class="about-section">
      <article class="about-article">
        <h2>Sobre Nós</h2>
        <p>Nossa empresa tem mais de 10 anos de experiência.</p>
      </article>
    </section>

    <section id="services" class="services-section">
      <h2>Nossos Serviços</h2>
      <aside class="relative-aside">
        <p>Conteúdo destacado.</p>
        <button class="absolute-button">Clique Aqui</button>
      </aside>
    </section>

    <section id="contact" class="contact-section">
      <h2>Fale Conosco</h2>
      <form>
        <label for="name">Nome:</label>
        <input type="text" id="name" name="name">

        <label for="email">Email:</label>
        <input type="email" id="email" name="email">

        <button type="submit">Enviar</button>
      </form>
    </section>
  </main>

  <footer>
    <p>© 2024 Nossa Empresa. Todos os direitos reservados.</p>
  </footer>

</body>
</html>
```

### Estilos CSS com posicionamento:

```css
/* Reseta margens e padding padrão */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Estilo para o header com navegação fixa */
.fixed-nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #333;
  color: white;
  padding: 15px;
  z-index: 100;
}

.fixed-nav ul {
  display: flex;
  justify-content: space-around;
  list-style: none;
}

.fixed-nav a {
  color: white;
  text-decoration: none;
  padding: 5px 10px;
}

.fixed-nav a:hover {
  background-color: #555;
  border-radius: 5px;
}

/* Espaço para compensar a barra de navegação fixa */
main {
  margin-top: 60px;
}

/* Hero section */
.hero-section {
  background: url('hero-image.jpg') no-repeat center center/cover;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
}

.hero-section h1 {
  font-size: 3em;
}

.hero-section p {
  font-size: 1.5em;
}

/* Sobre nós com posicionamento relativo */
.about-section {
  padding: 50px;
  background-color: #f4f4f4;
}

.about-article {
  position: relative;
  background-color: white;
  padding: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  top: 20px;
  left: 10px;
}

/* Serviços com aside posicionado */
.services-section {
  padding: 50px;
  background-color: #e4e4e4;
}

.relative-aside {
  position: relative;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.absolute-button {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 10px 20px;
  background-color: #333;
  color: white;
  border: none;
  cursor: pointer;
}

.absolute-button:hover {
  background-color: #555;
}

/* Contato com header sticky */
.contact-section {
  padding: 50px;
  background-color: #fff;
}

.contact-section h2 {
  position: sticky;
  top: 60px; /* Considera o tamanho da barra de navegação fixa */
  background-color: white;
  padding: 10px;
  margin-bottom: 20px;
}

.contact-section form {
  display: flex;
  flex-direction: column;
}

.contact-section label {
  margin: 10px 0 5px;
}

.contact-section input {
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.contact-section button {
  padding: 10px 20px;
  background-color: #333;
  color: white;
  border: none;
  cursor: pointer;
}

.contact-section button:hover {
  background-color: #555;
}

/* Footer */
footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 20px 0;
}
```

### Explicação das Técnicas de Posicionamento:

1. **Navegação Fixa (`fixed`)**:

   - A barra de navegação usa `position: fixed` para permanecer sempre no topo da página, independentemente do scroll.
2. **Conteúdo Relativo (`relative`)**:

   - O artigo da seção "Sobre nós" tem `position: relative`, deslocando o bloco levemente para dar ênfase, mas ainda ocupando seu espaço normal no fluxo do documento.
3. **Botão Absoluto (`absolute`)**:

   - O botão dentro da seção de serviços usa `position: absolute` para se posicionar em relação ao contêiner `aside` com `position: relative`, permitindo que ele fique fixo no canto direito.
4. **Cabeçalho Sticky (`sticky`)**:

   - O título "Fale Conosco" na seção de contato usa `position: sticky` para permanecer visível no topo da janela de visualização ao rolar a página, mas apenas depois de rolar além de um determinado ponto.

### Resultado:

Essa estrutura cria uma landing page semântica, moderna e responsiva, que utiliza de forma eficaz todas as técnicas de posicionamento CSS para melhorar a experiência do usuário.
