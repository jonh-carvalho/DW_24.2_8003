### O Comando Map em JavaScript

### Introdução

O método `map()` é uma ferramenta poderosa em JavaScript que permite transformar cada elemento de um array em um novo elemento, criando um novo array com os resultados. É uma forma eficiente de aplicar uma função a cada item de um array, sem modificar o array original.

### Objetivos da Aula

* Compreender o conceito de `map()`;
* Aprender a sintaxe e a utilização do `map()`;
* Realizar operações comuns com `map()`;
* Diferenciar `map()` de outros métodos como `forEach()`;
* Aplicar `map()` em exemplos práticos.

### Conteúdo da Aula

#### 1. O que é o `map()`?

* Definição e propósito do método.
* Como o `map()` funciona internamente.
* Comparação com outros métodos como `forEach()`.

#### 2. Sintaxe do `map()`

* Estrutura básica do método.
* Parâmetros da função de callback: elemento atual, índice, array original.
* Retorno da função de callback.

#### 3. Exemplos Básicos

* Dobrar todos os números de um array.
* Transformar um array de nomes em letras maiúsculas.
* Criar um novo array com os quadrados dos números.

#### 4. Usos Comuns

* Criar novos arrays a partir de dados existentes.
* Aplicar formatações a elementos de um array.
* Extrair informações específicas de um array de objetos.

#### 5. `map()` com Arrow Functions

* Como utilizar arrow functions para simplificar o código.
* Exemplos práticos.

### Atividades Práticas

* **Exercícios:**
  * Crie um array de números e utilize `map()` para obter um novo array com os números multiplicados por 2.
  * Transforme um array de objetos (pessoas) em um novo array contendo apenas os nomes.
  * Crie um array de strings e utilize `map()` para converter cada string em um elemento HTML (e.g., `<li>`).
* **Projeto:**
  * Crie uma aplicação simples que permita ao usuário adicionar itens a uma lista de compras. Utilize `map()` para exibir a lista formatada em HTML.

### Recursos Adicionais

* **Documentação MDN:** A documentação oficial do JavaScript oferece exemplos e explicações detalhadas sobre o método `map()`.
* **Exercícios interativos:** Sites como Exercism e Codewars oferecem desafios para praticar os conceitos aprendidos.

### Exemplos Práticos

```javascript
// Dobrar todos os números de um array
const numeros = [1, 2, 3, 4, 5];
const numerosDobrados = numeros.map(numero => numero * 2);

// Transformar um array de nomes em letras maiúsculas
const nomes = ['ana', 'joão', 'maria'];
const nomesMaiusculos = nomes.map(nome => nome.toUpperCase());

// Criar um novo array com os quadrados dos números
const quadrados = numeros.map(numero => numero * numero);
```

## Exemplos Práticos e Relevantes para o Método `map()` em JavaScript

### Cenários e Exemplos

#### 1. **Manipulação de Dados de Usuários**

* **Exemplo:** Transformar um array de objetos representando usuários em um novo array contendo apenas os nomes.

```javascript
const usuarios = [
    { nome: 'Ana', idade: 30 },
    { nome: 'João', idade: 25 },
    { nome: 'Maria', idade: 35 }
];

const nomes = usuarios.map(usuario => usuario.nome);
console.log(nomes); // Output: ['Ana', 'João', 'Maria']
```

#### 2. **Formatação de Dados para Exibição**

* **Exemplo:** Formatar um array de preços para exibir com o símbolo de real e duas casas decimais.

```javascript
const precos = [10.99, 25.49, 15.99];
const precosFormatados = precos.map(preco => `R$ ${preco.toFixed(2)}`);
console.log(precosFormatados); // Output: ['R$ 10.99', 'R$ 25.49', 'R$ 15.99']
```

#### 3. **Criação de Elementos HTML**

* **Exemplo:** Criar uma lista não ordenada (ul) com os itens de um array.

```javascript
const itens = ['maçã', 'banana', 'laranja'];
const listaHtml = itens.map(item => `<li>${item}</li>`).join('');
console.log(listaHtml);
```

#### 4. **Processamento de Dados de Formulários**

* **Exemplo:** Extrair os valores de um formulário e criar um objeto com os dados.

```javascript
const formulario = document.querySelector('form');
const dadosFormulario = new FormData(formulario);
const dadosObjeto = [...dadosFormulario.entries()].map(([chave, valor]) => ({ [chave]: valor }));
console.log(dadosObjeto);
```

#### 5. **Transformação de Unidades de Medida**

* **Exemplo:** Converter uma lista de temperaturas em Celsius para Fahrenheit.

```javascript
const temperaturasCelsius = [0, 10, 20, 30];
const temperaturasFahrenheit = temperaturasCelsius.map(celsius => (celsius * 9/5) + 32);
```

#### 6. **Criação de Novos Objetos a Partir de Arrays**

* **Exemplo:** Criar um array de objetos com propriedades chave-valor a partir de dois arrays.

```javascript
const nomes = ['Ana', 'João', 'Maria'];
const idades = [30, 25, 35];
const pessoas = nomes.map((nome, index) => ({ nome, idade: idades[index] }));
```

### Atividades Práticas

* **Criar um catálogo de produtos:** Dado um array de objetos representando produtos (nome, preço, categoria), criar um novo array com os produtos de uma categoria específica.
* **Transformar uma lista de datas em um novo formato:** Converter um array de strings representando datas no formato "YYYY-MM-DD" para o formato "DD/MM/YYYY".
* **Validar um formulário:** Utilizar `map()` para verificar se todos os campos obrigatórios de um formulário foram preenchidos.
* **Criar um gráfico simples:** Gerar um array de coordenadas a partir de um conjunto de dados e utilizá-lo para criar um gráfico de linhas básico.

**Dicas Adicionais:**

* **Enfatize a imutabilidade:** O `map()` cria um novo array, não modificando o original.
* **Explore diferentes cenários:** Apresente exemplos que envolvam diferentes tipos de dados e estruturas.
* **Incentive a experimentação:** Deixe os alunos explorarem diferentes formas de utilizar o `map()`.
* **Relacione com outros métodos:** Mostre como o `map()` pode ser combinado com outros métodos como `filter` e `reduce` para realizar operações mais complexas.

Com esses exemplos e atividades, seus alunos terão uma base sólida para utilizar o `map()` em seus projetos JavaScript.
