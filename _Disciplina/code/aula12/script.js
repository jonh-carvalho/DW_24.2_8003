// Exemplo 1: Lendo dados de um objeto JavaScript
const jsonDataObject = {
    "nome": "Maria",
    "idade": 30,
    "endereco": {
      "cidade": "São Paulo",
      "estado": "SP"
    }
  };

  // Exemplo 4: Lendo dados de uma lista de objetos JSON
const jsonArray = [
    {
      "nome": "Lucas",
      "idade": 22,
      "cidade": "Brasília"
    },
    {
      "nome": "Ana",
      "idade": 29,
      "cidade": "Salvador"
    },
    {
      "nome": "Pedro",
      "idade": 35,
      "cidade": "Recife"
    }
  ];

  // Exibindo dados no HTML
document.getElementById("fromObject").textContent =
 JSON.stringify(jsonDataObject, null, 2);

 // Exemplo 2: Lendo dados de uma string JSON
const jsonString = '{"nome": "Carlos", "idade": 25, "cidade": "Rio de Janeiro"}';
const jsonDataFromString = JSON.parse(jsonString);

// Exibindo dados no HTML
document.getElementById("fromString").textContent =
 JSON.stringify(jsonDataFromString, null, 2);

 // Exemplo 3: Lendo dados de um arquivo JSON usando fetch
fetch('data.json')
.then(response => {
  if (!response.ok) {
    throw new Error('Erro ao carregar o arquivo JSON');
  }
  return response.json();
})
.then(data => {
  // Exibindo dados no HTML
  document.getElementById("fromFile").textContent = JSON.stringify(data, null, 2);
})
.catch(error => {
  console.error(error);
  document.getElementById("fromFile").textContent = "Erro ao carregar os dados do arquivo JSON";
});


  
  // Exibindo dados no HTML
  document.getElementById("fromArray").textContent = JSON.stringify(jsonArray, null, 2);

 