const carrinho = {
  // O array de produtos é incluído aqui para que os métodos possam acessá-lo
  produtos: [
    { id: 1, nome: "Notebook Dell", preco: 3500, categoria: "eletrônicos", estoque: 5, desconto: 0 },
    { id: 2, nome: "Mouse Logitech", preco: 80, categoria: "eletrônicos", estoque: 15, desconto: 10 },
    { id: 3, nome: "Teclado Mecânico", preco: 350, categoria: "eletrônicos", estoque: 0, desconto: 0 },
    { id: 4, nome: "Cadeira Gamer", preco: 1200, categoria: "móveis", estoque: 8, desconto: 15 },
    { id: 5, nome: "Mesa para Computador", preco: 650, categoria: "móveis", estoque: 3, desconto: 0 },
    { id: 6, nome: "Monitor LG 24\"", preco: 800, categoria: "eletrônicos", estoque: 10, desconto: 5 },
    { id: 7, nome: "Webcam Full HD", preco: 250, categoria: "eletrônicos", estoque: 0, desconto: 0 },
    { id: 8, nome: "Headset Gamer", preco: 180, categoria: "eletrônicos", estoque: 12, desconto: 20 },
    { id: 9, nome: "SSD 480GB", preco: 280, categoria: "eletrônicos", estoque: 20, desconto: 0 },
    { id: 10, nome: "Estante para Livros", preco: 420, categoria: "móveis", estoque: 5, desconto: 10 }
  ],
  
  // O array 'itens' armazena o que o usuário realmente colocou no carrinho
  itens: [], 
  
  adicionar(produtoId, quantidade) {
    // 1. Encontra o produto na lista principal
    const produtoEncontrado = this.produtos.find(p => p.id === produtoId);
    
    if (!produtoEncontrado) {
      console.log(`[ERRO] Produto com ID ${produtoId} não encontrado.`);
      return;
    }

    // 2. Verifica se o item já está no carrinho
    const itemNoCarrinho = this.itens.find(item => item.id === produtoId);

    if (itemNoCarrinho) {
      // Se já existe, apenas atualiza a quantidade
      itemNoCarrinho.quantidade += quantidade;
      console.log(`Produto "${produtoEncontrado.nome}" (x${quantidade}) adicionado. Total: x${itemNoCarrinho.quantidade}.`);
    } else {
      // Se não existe, adiciona um novo item
      this.itens.push({
        ...produtoEncontrado, // Copia todas as propriedades do produto
        quantidade: quantidade // Adiciona a quantidade comprada
      });
      console.log(`Produto "${produtoEncontrado.nome}" (x${quantidade}) adicionado.`);
    }
  },
  
  remover(produtoId) {
    const indice = this.itens.findIndex(item => item.id === produtoId);
    
    if (indice !== -1) {
      const nomeProduto = this.itens[indice].nome;
      // Remove o item do array 'itens' usando splice
      this.itens.splice(indice, 1); 
      console.log(`Produto "${nomeProduto}" removido do carrinho.`);
    } else {
      console.log(`[ERRO] Produto com ID ${produtoId} não está no carrinho.`);
    }
  },
  
  calcularTotal() {
    // Usa 'reduce' para somar o valor de todos os itens
    const total = this.itens.reduce((totalAcumulado, item) => {
      // 1. Calcula o valor do desconto (em R$)
      const valorDesconto = item.preco * (item.desconto / 100);
      
      // 2. Calcula o preço final do produto (já com desconto)
      const precoComDesconto = item.preco - valorDesconto;
      
      // 3. Soma o preço total daquele item (preço * quantidade)
      const subtotalItem = precoComDesconto * item.quantidade;
      
      return totalAcumulado + subtotalItem;
    }, 0); // O valor inicial do acumulador é 0
    
    return total;
  },
  
  listarItens() {
    console.log("\n--- ITENS NO CARRINHO ---");
    if (this.itens.length === 0) {
      console.log("O carrinho está vazio.");
      return;
    }
    
    this.itens.forEach(item => {
      const valorDesconto = item.preco * (item.desconto / 100);
      const precoFinal = item.preco - valorDesconto;
      const subtotal = precoFinal * item.quantidade;
      
      console.log(`
        Produto: ${item.nome}
        Preço: R$ ${item.preco.toFixed(2)} (Desconto: ${item.desconto}%)
        Preço Final: R$ ${precoFinal.toFixed(2)}
        Quantidade: x${item.quantidade}
        Subtotal: R$ ${subtotal.toFixed(2)}
      `);
    });
  },
  
  limpar() {
    this.itens = []; // Redefine o array de itens para um array vazio
    console.log("\nO carrinho foi esvaziado.");
  }
};