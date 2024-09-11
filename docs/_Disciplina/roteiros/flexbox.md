### Flexbox CSS

#### Objetivo

Esse roteiro utiliza o modelo de layout Flexbox para organizar e alinhar elementos dentro de uma página HTML de maneira eficiente e flexível.

---

### 1. **Introdução ao Flexbox**

O Flexbox é um módulo de layout que permite distribuir o espaço de forma mais dinâmica e alinhar os itens dentro de um contêiner, mesmo que o tamanho dos itens seja desconhecido ou dinâmico.

### 2. **Elementos principais do Flexbox**

- **Contêiner Flex**: O elemento pai que utiliza o `display: flex;`. Ele define o contexto flexível para os filhos (itens flex).
- **Itens Flex**: Elementos filhos dentro do contêiner flexível que são organizados de acordo com as regras do Flexbox.

```html
<div class="container">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
</div>
```

```css
.container {
  display: flex;
}
.item {
  background-color: lightblue;
  padding: 10px;
  margin: 5px;
  border: 1px solid #000;
}
```

### 3. **Propriedades do Contêiner Flex**

Essas propriedades afetam o comportamento de seus itens filhos.

#### 3.1 `flex-direction`

Define a direção dos itens no contêiner.

- `row` (padrão): Alinha os itens horizontalmente.
- `row-reverse`: Alinha os itens horizontalmente na direção inversa.
- `column`: Alinha os itens verticalmente.
- `column-reverse`: Alinha os itens verticalmente na direção inversa.

```css
.container {
  display: flex;
  flex-direction: row;
}
```

#### 3.2 `justify-content`

Alinha os itens no eixo principal (horizontal por padrão).

- `flex-start`: Alinha os itens ao início do contêiner.
- `flex-end`: Alinha os itens ao final do contêiner.
- `center`: Centraliza os itens.
- `space-between`: Deixa espaço igual entre os itens.
- `space-around`: Deixa espaço ao redor dos itens.

```css
.container {
  display: flex;
  justify-content: center;
}
```

#### 3.3 `align-items`

Alinha os itens no eixo cruzado (vertical por padrão).

- `flex-start`: Alinha os itens no início do eixo cruzado.
- `flex-end`: Alinha os itens no final do eixo cruzado.
- `center`: Centraliza os itens no eixo cruzado.
- `stretch`: Os itens se estendem para preencher o contêiner.
- `baseline`: Alinha os itens de acordo com suas linhas de base.

```css
.container {
  display: flex;
  align-items: center;
}
```

#### 3.4 `flex-wrap`

Permite que os itens do contêiner "quebrem" linha se não couberem.

- `nowrap` (padrão): Todos os itens permanecem em uma única linha.
- `wrap`: Itens quebram em múltiplas linhas, se necessário.
- `wrap-reverse`: Itens quebram em múltiplas linhas na direção inversa.

```css
.container {
  display: flex;
  flex-wrap: wrap;
}
```

### 4. **Propriedades dos Itens Flex**

#### 4.1 `flex-grow`

Define como um item pode crescer dentro do contêiner flex. Um valor maior permite que o item cresça mais em relação aos outros.

```css
.item {
  flex-grow: 1; /* Todos os itens terão o mesmo crescimento */
}
```

#### 4.2 `flex-shrink`

Controla como um item encolhe se não houver espaço suficiente no contêiner.

```css
.item {
  flex-shrink: 1; /* Todos os itens podem encolher igualmente */
}
```

#### 4.3 `flex-basis`

Define o tamanho inicial de um item antes que o espaço seja distribuído entre os itens.

```css
.item {
  flex-basis: 200px; /* Todos os itens terão inicialmente 200px */
}
```

#### 4.4 `align-self`

Permite que um item individual tenha um comportamento de alinhamento diferente dos outros.

```css
.item {
  align-self: flex-end;
}
```

### 5. **Exemplo Prático Completo**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Flexbox Example</title>
  <style>
    .container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      height: 300px;
      border: 2px solid black;
    }
    .item {
      background-color: lightblue;
      padding: 20px;
      margin: 10px;
      flex-grow: 1;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
  </div>
</body>
</html>
```

### 6. **Atividade Proposta**

Recrie um layout flexível usando `flexbox`, onde os elementos devem se reorganizar de acordo com o tamanho da tela. Por exemplo, três colunas de conteúdo que se ajustam em uma linha única em telas grandes e se reorganizam verticalmente em telas menores.

### Sites 

Aqui estão alguns dos principais sites de demonstração e aprendizado do Flexbox CSS que ajudam a entender como ele funciona através de exemplos interativos e visuais:

#### **- Flexbox Froggy**

- **URL**: [Flexbox Froggy](https://flexboxfroggy.com/)
- **Descrição**: Um jogo interativo que ensina as propriedades do Flexbox através de desafios. Nele, você precisa alinhar rãs em suas folhas de vitória-régia usando as propriedades de flexbox.

##### **- CSS Tricks: A Complete Guide to Flexbox**

- **URL**: [CSS Tricks - Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- **Descrição**: Um guia completo com explicações detalhadas sobre todas as propriedades de flexbox. Inclui diagramas visuais e exemplos práticos de código.

#### **- Flexbox Defense**

- **URL**: [Flexbox Defense](http://flexboxdefense.com/)
- **Descrição**: Um jogo onde você defende uma base posicionando torres com flexbox. Cada torre é posicionada corretamente ao utilizar as propriedades do flexbox.

#### **- Flexbox Playground**

- **URL**: [Flexbox Playground](https://codepen.io/enxaneta/full/adLPwv)
- **Descrição**: Uma sandbox interativa onde você pode experimentar e visualizar as propriedades do Flexbox em tempo real. É um ótimo ambiente para testar diferentes combinações de propriedades.

#### **- Flexy Boxes**

- **URL**: [Flexy Boxes](https://the-echoplex.net/flexyboxes/)
- **Descrição**: Um gerador visual de layouts flexíveis. Ele permite ajustar várias opções de Flexbox e gerar o código CSS correspondente para copiar e colar.

#### **- What The Flexbox?!**

- **URL**: [What The Flexbox?!](https://flexbox.io/)
- **Descrição**: Um curso em vídeo gratuito que cobre o Flexbox desde o básico até usos avançados. O curso é ideal para quem prefere aprender com vídeos e exemplos passo a passo.

Esses recursos são ótimos para entender o Flexbox de forma prática, com interatividade e exemplos aplicados.

### 7. **Conclusão**

O Flexbox é uma ferramenta poderosa para criar layouts dinâmicos e responsivos de maneira eficiente. Ele é especialmente útil para alinhar, distribuir e organizar itens dentro de um contêiner, adaptando-se automaticamente a diferentes tamanhos de tela.
