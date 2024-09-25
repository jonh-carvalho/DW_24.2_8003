# Unidades Relativas

As **unidades relativas** são essenciais no design responsivo, pois se adaptam a diferentes tamanhos de tela, oferecendo flexibilidade e escalabilidade no layout. Vamos explorar as principais unidades relativas utilizadas no CSS:

#### 1. **`em`** (relativo ao tamanho da fonte)
A unidade `em` é relativa ao tamanho da fonte do elemento pai. Se o tamanho da fonte do elemento pai for `16px`, por exemplo, `1em` será equivalente a `16px`. 

- Exemplo:
    ```css
    body {
        font-size: 16px;
    }

    h1 {
        font-size: 2em; /* 32px */
    }

    p {
        font-size: 1em; /* 16px */
    }
    ```

#### 2. **`rem`** (relativo ao tamanho da fonte raiz)
A unidade `rem` é relativa ao tamanho da fonte da raiz do documento, geralmente o elemento `html`. É útil para manter a consistência no design, pois sempre se refere ao tamanho de fonte definido no `html`.

- Exemplo:
    ```css
    html {
        font-size: 16px; /* 1rem = 16px */
    }

    h1 {
        font-size: 2rem; /* 32px */
    }

    p {
        font-size: 1rem; /* 16px */
    }
    ```

#### 3. **`%`** (porcentagem)
As porcentagens são usadas para definir tamanhos relativos ao elemento pai. Elas podem ser aplicadas a margens, larguras, alturas, etc.

- Exemplo:
    ```css
    div {
        width: 50%; /* 50% da largura do elemento pai */
        height: 100%; /* 100% da altura do elemento pai */
    }
    ```

#### 4. **`vh` e `vw`** (viewport height e viewport width)
As unidades `vh` e `vw` são relativas à altura e largura da **viewport** (janela visível). `1vh` equivale a 1% da altura da viewport, e `1vw` equivale a 1% da largura da viewport.

- Exemplo:
    ```css
    section {
        width: 100vw; /* 100% da largura da viewport */
        height: 50vh; /* 50% da altura da viewport */
    }
    ```

#### 5. **`min-width`, `max-width`, `min-height`, `max-height`**
Essas propriedades controlam o tamanho mínimo e máximo dos elementos, tornando-os mais responsivos em diferentes telas.

- Exemplo:
    ```css
    div {
        max-width: 100%; /* Não excede 100% da largura da tela */
        min-height: 300px; /* Altura mínima de 300px */
    }
    ```

#### Exemplo Prático de Site Responsivo

Aqui está um exemplo prático aplicando algumas dessas unidades para criar um site responsivo:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exemplo Responsivo</title>
    <style>
        body {
            font-size: 16px;
            margin: 0;
            padding: 0;
        }

        header {
            background-color: #333;
            color: white;
            text-align: center;
            padding: 2rem;
        }

        .container {
            width: 90%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 1rem;
        }

        .box {
            background-color: #f4f4f4;
            margin: 1rem 0;
            padding: 2em;
            border-radius: 5px;
        }

        footer {
            background-color: #333;
            color: white;
            text-align: center;
            padding: 1rem;
            position: relative;
            bottom: 0;
            width: 100vw;
        }
    </style>
</head>
<body>
    <header>
        <h1>Site Responsivo</h1>
    </header>
    
    <div class="container">
        <div class="box">
            <p>Esta é uma caixa que usa unidades relativas para se adaptar a diferentes tamanhos de tela.</p>
        </div>
        <div class="box">
            <p>A largura da página está definida em porcentagens, e o espaçamento em `rem` e `em`.</p>
        </div>
    </div>

    <footer>
        <p>Rodapé do site</p>
    </footer>
</body>
</html>
```

#### Considerações Finais
Ao combinar essas unidades relativas, você pode criar layouts que se adaptam a diferentes tamanhos de tela, tornando seu site mais responsivo e acessível em dispositivos móveis. É importante testar os tamanhos e espaçamentos em várias resoluções para garantir uma boa experiência de usuário.

Se precisar de mais detalhes ou exemplos específicos, posso ajudar a refinar o conteúdo!