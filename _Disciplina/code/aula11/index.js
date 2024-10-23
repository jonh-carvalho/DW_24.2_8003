const temperaturas = [18, 22, 25, 20, 19, 23, 24];
const labels = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
const ctx = document.getElementById('myChart').getContext('2d');

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