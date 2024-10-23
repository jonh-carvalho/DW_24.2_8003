// ... (classes Produto, Carrinho, Cliente como definidas anteriormente)
class Produto {
    constructor(nome, preco, descricao, estoque) {
      this.nome = nome;
      this.preco = preco;
      this.descricao = descricao;
      this.estoque = estoque;
    }
  
    adicionarAoCarrinho(carrinho) {
      if (this.estoque > 0) {
        carrinho.adicionarProduto(this);
        this.estoque--;
        console.log(`${this.nome} adicionado ao carrinho.`);
      } else {
        console.log("Produto indisponível em estoque.");
      }
    }
  }
  
  
  class Carrinho {
    constructor() {
      this.produtos = [];
    }
  
    adicionarProduto(produto) {
      this.produtos.push(produto);
    }
  
    removerProduto(produto) {
      const index = this.produtos.indexOf(produto);
      if (index !== -1) {
        this.produtos.splice(index, 1);
        produto.estoque++; // Devolve o produto ao estoque
        console.log(`${produto.nome} removido do carrinho.`);
      } else {
        console.log("Produto não encontrado no carrinho.");
      }
    }
  
    calcularTotal() {
      let total = 0;
      this.produtos.forEach(produto => {
        total += produto.preco;
      });
      return total;
    }
  }
  
  
  
  
  class Cliente {
    constructor(nome, email) {
      this.nome = nome;
      this.email = email;
      this.carrinho = new Carrinho();
    }
  
    fazerPedido() {
      console.log(`Pedido realizado por ${this.nome}.`);
      console.log(`Total a pagar: R$ ${this.carrinho.calcularTotal()}`);
      // Aqui você implementaria a lógica para finalizar o pedido, enviar email, etc.
    }
  }
  
  
  
  // Criando produtos
  const camiseta = new Produto('Camiseta', 29.99, 'Camiseta algodão', 10);
  const tenis = new Produto('Tênis', 99.99, 'Tênis esportivo', 5);
  
  // Criando um cliente
  const cliente1 = new Cliente('João Silva', 'joao@email.com');
  
  // Adicionando produtos ao carrinho
  camiseta.adicionarAoCarrinho(cliente1.carrinho);
  tenis.adicionarAoCarrinho(cliente1.carrinho);
  
  // Fazendo um pedido
  cliente1.fazerPedido();
  
  // Função para exibir os produtos na página
  function exibirProdutos() {
      const produtosDiv = document.getElementById('produtos');
      produtosDiv.innerHTML = '';
  
      produtos.forEach(produto => {
          const produtoDiv = document.createElement('div');
          produtoDiv.classList.add('produto');
          produtoDiv.innerHTML = `
              <h3>${produto.nome}</h3>
              <p>Preço: R$ ${produto.preco.toFixed(2)}</p>
              <button onclick="adicionarAoCarrinho(${produto})">Adicionar ao Carrinho</button>
          `;
          produtosDiv.appendChild(produtoDiv);
      });
  }
  
  // Função para exibir os produtos no carrinho
  function exibirCarrinho() {
      const listaProdutos = document.getElementById('lista-produtos');
      const totalSpan = document.getElementById('total');
      listaProdutos.innerHTML = '';
  
      let total = 0;
      cliente1.carrinho.produtos.forEach(produto => {
          const item = document.createElement('li');
          item.innerHTML = `${produto.nome} - R$ ${produto.preco.toFixed(2)} <button onclick="removerDoCarrinho(${produto})">Remover</button>`;
          listaProdutos.appendChild(item);
          total += produto.preco;
      });
  
      totalSpan.textContent = total.toFixed(2);
  }
  
  // Função para adicionar um produto ao carrinho
  function adicionarAoCarrinho(produto) {
      produto.adicionarAoCarrinho(cliente1.carrinho);
      exibirCarrinho();
  }
  
  // Função para remover um produto do carrinho
  function removerDoCarrinho(produto) {
      cliente1.carrinho.removerProduto(produto);
      exibirCarrinho();
  }
  
  // ... (resto do código)
  
  // Chamar as funções para exibir os produtos e o carrinho inicialmente
  exibirProdutos();
  exibirCarrinho();