async function buscarProdutos() {
    try {
      const response = await fetch('produtos.json');
      const produtos = await response.json();
  
      const tabelaBody = document.querySelector('#tabela-produtos tbody');
  
      produtos.forEach(produto => {
        const novaLinha = document.createElement('tr');
        const idCelula = document.createElement('td');
        const nomeCelula = document.createElement('td');
        const precoCelula = document.createElement('td');
  
        idCelula.textContent = produto.id;
        nomeCelula.textContent = produto.nome;
        precoCelula.textContent = `R$ ${produto.preco.toFixed(2)}`;
  
        novaLinha.appendChild(idCelula);
        novaLinha.appendChild(nomeCelula);
        novaLinha.appendChild(precoCelula);
        tabelaBody.appendChild(novaLinha);
      });
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
    }
  }
  
  buscarProdutos();