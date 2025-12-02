// EXERCÍCIO 7: PRODUTOS CAROS EM ESTOQUE

const produtosCarosDisponiveis = (arrayProdutos) => {
  // O método 'filter' cria um novo array com todos os elementos que
  // passam no teste implementado pela função fornecida.
  return arrayProdutos.filter(produto => {
    // Retorna TRUE apenas se AMBAS as condições forem verdadeiras:
    // 1. Preço maior que 300 E
    // 2. Estoque maior que 0
    return produto.preco > 300 && produto.estoque > 0;
  });
};

// Sua solução aqui:

const produtos = [
  { id: 1, nome: "Notebook Dell", preco: 3500, categoria: "eletrônicos", estoque: 5, desconto: 0 },
  { id: 2, nome: "Mouse Logitech", preco: 80, categoria: "eletrônicos", estoque: 15, desconto: 10 },
  { id: 3, nome: "Teclado Mecânico", preco: 350, categoria: "eletrônicos", estoque: 0, desconto: 0 }, // Preço > 300, mas estoque = 0 (EXCLUÍDO)
  { id: 4, nome: "Cadeira Gamer", preco: 1200, categoria: "móveis", estoque: 8, desconto: 15 }, // INCLUÍDO
  { id: 5, nome: "Mesa para Computador", preco: 650, categoria: "móveis", estoque: 3, desconto: 0 }, // INCLUÍDO
  { id: 6, nome: "Monitor LG 24\"", preco: 800, categoria: "eletrônicos", estoque: 10, desconto: 5 }, // INCLUÍDO
  { id: 7, nome: "Webcam Full HD", preco: 250, categoria: "eletrônicos", estoque: 0, desconto: 0 }, // Preço < 300 e estoque = 0 (EXCLUÍDO)
  { id: 8, nome: "Headset Gamer", preco: 180, categoria: "eletrônicos", estoque: 12, desconto: 20 }, // Preço < 300 (EXCLUÍDO)
  { id: 9, nome: "SSD 480GB", preco: 280, categoria: "eletrônicos", estoque: 20, desconto: 0 }, // Preço < 300 (EXCLUÍDO)
  { id: 10, nome: "Estante para Livros", preco: 420, categoria: "móveis", estoque: 5, desconto: 10 } // INCLUÍDO
];

// Testes:
console.log("\n=== EXERCÍCIO 7 ===");
const carosDisponiveis = produtosCarosDisponiveis(produtos);
console.log(`Produtos acima de R$ 300 em estoque: ${carosDisponiveis.length}`);
console.log(carosDisponiveis.map(p => `${p.nome} (R$ ${p.preco})`));