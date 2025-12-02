// EXERCÍCIO 10: ESTATÍSTICAS DO ESTOQUE (DESAFIO)

const estatisticasEstoque = (arrayProdutos) => {
  // 1. Usar 'reduce' para calcular todas as somas e encontrar os extremos
  const resultadosIniciais = arrayProdutos.reduce((acumulador, produto) => {
    // a. Contagem de produtos (simplesmente o tamanho do array no final, mas útil para verificar)
    acumulador.totalProdutos++;

    // b. Contagem de produtos em estoque/falta
    if (produto.estoque > 0) {
      acumulador.totalEmEstoque++;
    } else {
      acumulador.totalEmFalta++;
    }

    // c. Cálculo do Valor Total do Estoque
    // O valor a ser somado é o preço total por item (preço * estoque)
    const precoComEstoque = produto.preco * produto.estoque;
    acumulador.somaTotalValor += precoComEstoque;

    // d. Acumulador para o Preço Médio (soma de preços de todos os itens)
    acumulador.somaTotalPrecos += produto.preco;
    
    // e. Encontrar o Mais Caro
    // Inicializa ou atualiza o produto mais caro
    if (!acumulador.produtoMaisCaro || produto.preco > acumulador.produtoMaisCaro.preco) {
      acumulador.produtoMaisCaro = produto;
    }

    // f. Encontrar o Mais Barato
    // Inicializa ou atualiza o produto mais barato
    if (!acumulador.produtoMaisBarato || produto.preco < acumulador.produtoMaisBarato.preco) {
      acumulador.produtoMaisBarato = produto;
    }

    // g. Coletar categorias únicas
    acumulador.categorias.add(produto.categoria);

    return acumulador;
  }, { // Valor inicial do acumulador
    totalProdutos: 0,
    totalEmEstoque: 0,
    totalEmFalta: 0,
    somaTotalValor: 0, // Soma de (preco * estoque)
    somaTotalPrecos: 0, // Soma de (preco)
    produtoMaisCaro: null,
    produtoMaisBarato: null,
    categorias: new Set(), // Usamos Set para garantir categorias únicas
  });

  // 2. Calcular a Média e formatar o objeto final
  const precoMedio = resultadosIniciais.somaTotalPrecos / resultadosIniciais.totalProdutos;
  
  return {
    totalProdutos: resultadosIniciais.totalProdutos,
    totalEmEstoque: resultadosIniciais.totalEmEstoque,
    totalEmFalta: resultadosIniciais.totalEmFalta,
    valorTotal: resultadosIniciais.somaTotalValor,
    precoMedio: precoMedio,
    produtoMaisCaro: resultadosIniciais.produtoMaisCaro,
    produtoMaisBarato: resultadosIniciais.produtoMaisBarato,
    categorias: Array.from(resultadosIniciais.categorias), // Converte o Set para Array
  };
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
console.log("\n=== EXERCÍCIO 10 (DESAFIO) ===");
const stats = estatisticasEstoque(produtos);
console.log("Estatísticas do Estoque:");
console.log(`Total de produtos: ${stats.totalProdutos}`);
console.log(`Produtos em estoque: ${stats.totalEmEstoque}`);
console.log(`Produtos em falta: ${stats.totalEmFalta}`);
console.log(`Valor total: R$ ${stats.valorTotal.toFixed(2)}`);
console.log(`Preço médio: R$ ${stats.precoMedio.toFixed(2)}`);
console.log(`Mais caro: ${stats.produtoMaisCaro.nome} (R$ ${stats.produtoMaisCaro.preco})`);
console.log(`Mais barato: ${stats.produtoMaisBarato.nome} (R$ ${stats.produtoMaisBarato.preco})`);
console.log(`Categorias: ${stats.categorias.join(", ")}`);