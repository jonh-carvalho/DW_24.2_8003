## Criando um Gráfico de Linhas Simples com JavaScript e o Método `map()`

**Entendendo o Problema:**

Queremos transformar um conjunto de dados em um formato que possa ser utilizado para desenhar um gráfico de linhas. Para isso, vamos utilizar o método `map()` para gerar um array de coordenadas (x, y) a partir dos nossos dados.

**Bibliotecas para Visualização:**

Existem diversas bibliotecas JavaScript que facilitam a criação de gráficos, como:

  * **Chart.js:** Popular por sua facilidade de uso e customização.
  * **D3.js:** Uma biblioteca mais poderosa e flexível, ideal para gráficos complexos.
  * **Plotly.js:** Uma biblioteca interativa com diversos tipos de gráficos.

**Exemplo com Chart.js:**

Vamos supor que temos um array de dados representando a temperatura ao longo de uma semana:

```javascript
const temperaturas = [18, 22, 25, 20, 19, 23, 24];
```

Para criar um gráfico de linhas com Chart.js, precisamos de um elemento HTML `<canvas>` e um conjunto de dados no formato adequado. Utilizaremos o `map()` para transformar o array de temperaturas em um array de objetos, onde cada objeto representa um ponto no gráfico:

```javascript
const ctx = document.getElementById('myChart').getContext('2d');

const labels = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

const data = {
  labels: labels,
  datasets: [{
    label: 'Temperatura (°C)',
    data: temperaturas,
    borderColor: 'rgb(75, 192, 192)',
    fill: false
  }]
};

const myChart = new Chart(ctx, {
  type: 'line',
  data: data,
  options: {}
});
```

```html
<!DOCTYPE html>
<html>
<head>
  <title>Gráfico de Linhas com Chart.js</title>
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
<body>
  <canvas id="myChart"></canvas>

  <script>
    // JavaScript (já mostrado anteriormente)
  </script>
</body>
</html>
```


**Explicando o Código:**

  * **Criamos um canvas:** O elemento `<canvas>` é onde o gráfico será desenhado.
  * **Definimos os rótulos:** O array `labels` contém os rótulos para cada ponto do eixo x (dias da semana).
  * **Transformamos os dados:** O `map()` é usado para criar um novo array de objetos, onde cada objeto possui as propriedades `x` (índice) e `y` (temperatura). No entanto, para o Chart.js, não precisamos criar explicitamente as coordenadas x, pois os rótulos já servem como essa informação.
  * **Configuramos o gráfico:** Criamos um novo objeto Chart, definindo o tipo do gráfico (linha), os dados e as opções de configuração.

**Personalizando o Gráfico:**

O Chart.js oferece diversas opções para personalizar o gráfico, como cores, espessura das linhas, marcadores, etc. Consulte a documentação oficial para mais detalhes: [https://www.chartjs.org/docs/latest/](https://www.google.com/url?sa=E&source=gmail&q=https://www.chartjs.org/docs/latest/)

**Outros Exemplos:**

  * **Gráfico de barras:** Substitua `type: 'line'` por `type: 'bar'`.
  * **Gráfico de pizza:** Utilize `type: 'pie'`.
  * **Múltiplas séries:** Adicione mais datasets ao objeto `data` para comparar diferentes conjuntos de dados.



**Desafio:**

Adapte o exemplo acima para criar um gráfico de linhas que mostre a evolução do preço de uma ação ao longo de um mês. Você pode gerar dados aleatórios para simular os preços.

**Recursos Adicionais:**

  * **Documentação Chart.js:** [https://www.chartjs.org/docs/latest/](https://www.google.com/url?sa=E&source=gmail&q=https://www.chartjs.org/docs/latest/)


Com o `map()` e bibliotecas como Chart.js, você pode criar gráficos personalizados e informativos para visualizar seus dados de forma eficaz.
