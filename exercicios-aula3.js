// EXERCÍCIO 8: MÉDIA DE PREÇOS POR CATEGORIA

const mediaPrecoPorCategoria = (arrayProdutos) => {
  // 1. Agrupar e somar os preços por categoria usando 'reduce'
  const agrupado = arrayProdutos.reduce((acumulador, produto) => {
    const categoria = produto.categoria;

    // Inicializa a categoria no acumulador se for a primeira vez
    if (!acumulador[categoria]) {
      acumulador[categoria] = {
        somaPrecos: 0,
        contagem: 0
      };
    }

    // Adiciona o preço e incrementa a contagem para a categoria
    acumulador[categoria].somaPrecos += produto.preco;
    acumulador[categoria].contagem++;

    return acumulador;
  }, {}); // O acumulador começa como um objeto vazio

  // 2. Calcular a média final para cada categoria
  const mediasFinais = {};

  for (const categoria in agrupado) {
    const dados = agrupado[categoria];
    // A média é a soma dos preços dividida pela contagem de produtos
    mediasFinais[categoria] = dados.somaPrecos / dados.contagem;
  }

  return mediasFinais;
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
console.log("\n=== EXERCÍCIO 8 ===");
const medias = mediaPrecoPorCategoria(produtos);
Object.entries(medias).forEach(([categoria, media]) => {
  console.log(`Preço médio - ${categoria}: R$ ${media.toFixed(2)}`);
});