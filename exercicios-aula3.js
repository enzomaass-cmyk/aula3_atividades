// EXERCÍCIO 1: FILTRAR PRODUTOS POR CATEGORIA

function filtrarPorCategoria(lista, categoria) {
  return lista.filter(produto => produto.categoria === categoria);
}

// Testes:
console.log("=== EXERCÍCIO 1 ===");

const produtos = [
  { nome: "Celular", categoria: "eletrônicos", preco: 1200 },
  { nome: "Notebook", categoria: "eletrônicos", preco: 3500 },
  { nome: "Camiseta", categoria: "vestuário", preco: 50 },
  { nome: "Tênis", categoria: "vestuário", preco: 200 }
];

const eletronicos = filtrarPorCategoria(produtos, "eletrônicos");
console.log(`Eletrônicos encontrados: ${eletronicos.length}`);
console.log(eletronicos.map(p => p.nome));
