# **CSS responsivo**

### **Atividade: Criando um layout de página da Web responsivo com CSS Flexbox/Grid**

**Objetivo** : Os alunos criarão um layout de página da Web responsivo usando CSS flexbox ou grade, garantindo que ele se adapte a vários tamanhos de tela.

 **Instruções** :

1. **Configuração inicial (10 minutos):**

   * Baixe o modelo HTML fornecido, que inclui uma barra de navegação, conteúdo principal com barra lateral e um rodapé.
   * Adicione estilos globais iniciais: tamanho da fonte, família, cor de fundo, etc.
2. **Design da barra de navegação (10 minutos):**

   * Usando flexbox ou grid, crie uma barra de navegação que:
     * Exibe seus itens em uma linha em telas grandes.
     * Empilha itens verticalmente para tamanhos móveis.
     * Tem um logotipo à esquerda e links de navegação à direita.
3. **Conteúdo principal e design da barra lateral (20 minutos):**

   * Usando o sistema de layout de sua escolha:
     * Crie um layout de duas colunas com conteúdo principal e uma barra lateral.
     * Para telas maiores, a barra lateral deve estar à direita do conteúdo principal. Para telas menores, a barra lateral deve ser empilhada abaixo do conteúdo principal.
     * Garanta preenchimento consistente e margem entre os elementos.
4. **Design de rodapé (10 minutos):**

   * Usando flexbox ou grid:
     * Crie um rodapé que tenha três seções: Sobre, Links e ícones de mídia social.
     * Em telas mais largas, eles devem estar lado a lado. No celular, eles devem se acumular.
5. **Consultas e testes de mídia (15 minutos):**

   * Implemente [consultas de mídia](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries) para garantir que os designs alternem nos pontos de interrupção apropriados.
   * Teste a capacidade de resposta do seu design redimensionando a janela do navegador ou usando ferramentas de desenvolvedor para exibir em vários tamanhos de dispositivo.

---

Essas atividades são estruturadas para garantir que os alunos não apenas pratiquem os aspectos técnicos do CSS, mas também pensem nas decisões de design. No final, eles devem ter uma boa compreensão de como projetar e fazer o layout de uma página da Web usando CSS.

#### Arquivo HTML

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Web Design Activity</title>
    <!-- 
    <style>
        Put your CSS here. For now, it's commented out.
    </style>
    -->
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </header>
```

<pre><pre>     <aside>
         <h3>Sidebar Content</h3>
         <ul>
             <li><a href="#">Item 1</a></li>
             <li><a href="#">Item 2</a></li>
             <li><a href="#">Item 3</a></li>
         </ul>
     </aside></pre>    <main>

    &lt;article&gt;
            &lt;h2&gt;Blog Post Title&lt;/h2&gt;
            &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.&lt;/p&gt;
        &lt;/article&gt;

    &lt;section class=&#34;flex-gallery&#34;&gt;
            &lt;figure&gt;
                &lt;img src=&#34;https://via.placeholder.com/150x150&#34; alt=&#34;Placeholder Image 1&#34;&gt;
                &lt;figcaption&gt;Image 1&lt;/figcaption&gt;
            &lt;/figure&gt;
            &lt;figure&gt;
                &lt;img src=&#34;https://via.placeholder.com/150x150&#34; alt=&#34;Placeholder Image 2&#34;&gt;
                &lt;figcaption&gt;Image 2&lt;/figcaption&gt;
            &lt;/figure&gt;
            &lt;figure&gt;
                &lt;img src=&#34;https://via.placeholder.com/150x150&#34; alt=&#34;Placeholder Image 3&#34;&gt;
                &lt;figcaption&gt;Image 3&lt;/figcaption&gt;
            &lt;/figure&gt;
        &lt;/section&gt;

    &lt;section class=&#34;grid-layout&#34;&gt;
            &lt;div&gt;Grid Item A&lt;/div&gt;
            &lt;div&gt;Grid Item B&lt;/div&gt;
            &lt;div&gt;Grid Item C&lt;/div&gt;
            &lt;div&gt;Grid Item D&lt;/div&gt;
        &lt;/section&gt;
    &lt;/main&gt;

    &lt;footer&gt;
        &lt;p&gt;&amp;copy; 2023. All Rights Reserved.&lt;/p&gt;
    &lt;/footer&gt;
&lt;/body&gt;
&lt;/html&gt;
`</pre>`

**Notas de atividade:**

1. **Barra de navegação** : use o Flexbox para estilizar a barra de navegação. Certifique-se de que os itens estejam espaçados uniformemente e empilhados verticalmente quando visualizados em telas menores.
2. **Galeria Flex** : Esta seção contém três figuras. A tarefa é usar o Flexbox para alinhá-los lado a lado em uma linha e encapsulá-los em uma nova linha se não houver espaço suficiente.
3. **Barra lateral** : deve ser estilizado para aparecer à direita do conteúdo principal em telas maiores e abaixo do conteúdo principal em telas menores.
4. **Seção de layout de grade** : Os alunos devem usar a grade CSS para estilizar esta seção, garantindo que os itens sejam exibidos em uma grade 2x2 em telas maiores. Em telas menores, os itens devem ser empilhados verticalmente.
5. **Capacidade de resposta** : use consultas de mídia para tornar o layout responsivo. Ajuste o layout e o design para pelo menos dois tamanhos de tela: móvel (até 600 px) e desktop (acima de 600 px).

O principal desafio dos alunos será utilizar CSS Flexbox e Grid para criar esses layouts, garantindo que eles sejam responsivos em diferentes dispositivos.
