// EXERCÍCIO 5: ENCONTRAR PRODUTO MAIS CARO

const produtoMaisCaro = (arrayProdutos) => {
  // O método 'reduce' é ideal para transformar um array em um único valor,
  // neste caso, o objeto do produto mais caro.
  return arrayProdutos.reduce((produtoAnterior, produtoAtual) => {
    // Compara o preço do produto atual com o preço do produto armazenado
    // como 'o mais caro' até agora (produtoAnterior).
    if (produtoAtual.preco > produtoAnterior.preco) {
      // Se o produto atual for mais caro, ele se torna o novo 'produtoAnterior'
      return produtoAtual;
    } else {
      // Caso contrário, o 'produtoAnterior' (o mais caro até agora) é mantido.
      return produtoAnterior;
    }
  });
};

// Sua solução aqui:

const produtos = [
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
];


// Testes:
console.log("\n=== EXERCÍCIO 5 ===");
const maisCaro = produtoMaisCaro(produtos);
console.log(`Produto mais caro: ${maisCaro.nome} - R$ ${maisCaro.preco}`);
