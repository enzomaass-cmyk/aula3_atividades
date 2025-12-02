// EXERCÍCIO 12: AGRUPAR POR CATEGORIA (BÔNUS)

const agruparPorCategoria = (arrayProdutos) => {
  // O 'reduce' irá transformar o array de produtos em um objeto (o 'acumulador').
  return arrayProdutos.reduce((acumulador, produto) => {
    const categoria = produto.categoria;

    // 1. Verifica se a chave (categoria) já existe no objeto acumulador.
    if (!acumulador[categoria]) {
      // 2. Se não existir, inicializa essa chave com um array vazio.
      acumulador[categoria] = [];
    }

    // 3. Adiciona o produto atual ao array correspondente à sua categoria.
    acumulador[categoria].push(produto);

    return acumulador;
  }, {}); // O objeto inicial do acumulador é um objeto vazio: {}
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
console.log("\n=== EXERCÍCIO 12 (BÔNUS) ===");
const agrupados = agruparPorCategoria(produtos);
Object.entries(agrupados).forEach(([categoria, prods]) => {
  console.log(`\n${categoria.toUpperCase()} (${prods.length} produtos):`);
  prods.forEach(p => console.log(`  - ${p.nome}`));
});