Nesse roteiro apresentamos o **posicionamento em CSS**, cobrindo os conceitos principais de forma clara e prática. O foco será nos diferentes valores da propriedade `position` e suas interações com outras propriedades de layout, como `top`, `right`, `bottom`, `left`, e `z-index`.

#### 1. **Introdução ao Posicionamento no CSS**

- A propriedade `position` é importante para controlar o layout dos elementos.
- Conceitos de fluxo de documento normal (o comportamento padrão dos elementos no HTML).

#### 2. **Valores da Propriedade `position`**

##### 2.1. **`static` (Padrão)**

- **Descrição**: O valor padrão. O elemento segue o fluxo normal da página e não é afetado por `top`, `right`, `bottom`, `left`.
- **Exemplo**:

  ```html
  <div class="static-box">Eu sou estático!</div>
  ```

  ```css
  .static-box {
    width: 200px;
    height: 100px;
    background-color: lightblue;
    position: static;
  }
  ```

##### 2.2. **`relative`**

- **Descrição**: O elemento é posicionado em relação à sua posição original. As propriedades `top`, `right`, `bottom`, `left` podem movê-lo, mas ele ainda ocupa o espaço original.
- **Exemplo**:

  ```html
  <div class="relative-box">Eu sou relativo!</div>
  ```

  ```css
  .relative-box {
    width: 200px;
    height: 100px;
    background-color: lightgreen;
    position: relative;
    top: 20px; /* Movido 20px para baixo */
    left: 15px; /* Movido 15px para a direita */
  }
  ```

##### 2.3. **`absolute`**

- **Descrição**: O elemento é removido do fluxo normal do documento e posicionado em relação ao seu elemento pai mais próximo que tenha `position` diferente de `static`. Se não houver um pai posicionado, será em relação ao `body`.
- **Exemplo**:

  ```html
  <div class="parent">
    <div class="absolute-box">Eu sou absoluto!</div>
  </div>
  ```

  ```css
  .parent {
    position: relative;
    width: 300px;
    height: 200px;
    background-color: lightgray;
  }

  .absolute-box {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 100px;
    height: 50px;
    background-color: salmon;
  }
  ```

##### 2.4. **`fixed`**

- **Descrição**: O elemento é posicionado em relação à janela de visualização (viewport) e não se move quando a página é rolada.
- **Exemplo**:

  ```html
  <div class="fixed-box">Eu sou fixo!</div>
  ```

  ```css
  .fixed-box {
    position: fixed;
    bottom: 0;
    right: 0;
    width: 100px;
    height: 50px;
    background-color: yellow;
  }
  ```

##### 2.5. **`sticky`**

- **Descrição**: O elemento alterna entre o comportamento `relative` e `fixed`, dependendo da rolagem da página. Fica "preso" em uma posição quando você rola além de um certo ponto.
- **Exemplo**:

  ```html
  <div class="sticky-box">Eu sou sticky!</div>
  ```

  ```css
  .sticky-box {
    position: sticky;
    top: 0; /* Fica "preso" no topo após rolar */
    background-color: lightcoral;
    padding: 10px;
  }
  ```

#### 3. **Propriedades Auxiliares**

- **`top`, `right`, `bottom`, `left`**: Controlam a posição do elemento posicionado. São aplicáveis quando `position` não é `static`.
- **`z-index`**: Controla a ordem de sobreposição dos elementos. Elementos com valores maiores de `z-index` aparecem acima de elementos com valores menores.

#### 4. **Exercício Prático**

- Criar uma página com uma barra de navegação fixa (`fixed`), um conteúdo principal com um cabeçalho "sticky", e uma seção posicionada de forma relativa a um contêiner com `position: relative` e um botão posicionado de forma absoluta.

  **HTML**:

```html
   <nav class="fixed-nav">Navegação</nav>
   <header class="sticky-header">Cabeçalho Sticky</header>
   <section class="content">
     <div class="relative-container">
       <button class="absolute-button">Eu sou absoluto</button>
     </div>
   </section>
```

   **CSS**:

```css
   .fixed-nav {
     position: fixed;
     top: 0;
     left: 0;
     width: 100%;
     background-color: #333;
     color: white;
     padding: 10px;
   }

   .sticky-header {
     position: sticky;
     top: 50px;
     background-color: #f4f4f4;
     padding: 15px;
   }

   .relative-container {
     position: relative;
     background-color: lightblue;
     height: 300px;
     margin: 20px;
   }

   .absolute-button {
     position: absolute;
     top: 20px;
     right: 20px;
     padding: 10px;
   }
```

Isso dá uma visão abrangente do sistema de posicionamento no CSS e como ele pode ser aplicado em páginas web.
