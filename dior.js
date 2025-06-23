// Simulăm datele produselor
const products = [
  {
    id: 1,
    name: "Parfum A",
    description: "Parfum elegant și fresh.",
    price: "120 RON",
  },
  {
    id: 2,
    name: "Parfum B",
    description: "Note lemnoase și florale.",
    price: "150 RON",
  },
  {
    id: 3,
    name: "Parfum C",
    description: "Aromă intensă, pentru seară.",
    price: "130 RON",
  },
];

// Funcție pentru a afișa detalii produs
function showProductDetails(productId) {
  const product = products.find((p) => p.id === productId);
  const detailsDiv = document.getElementById("productDetails");

  if (!product) return;

  detailsDiv.innerHTML = `
    <h2>${product.name}</h2>
    <p>${product.description}</p>
    <p><strong>Preț:</strong> ${product.price}</p>
    <button onclick="alert('Produs adăugat în coș!')">Adaugă în coș</button>
  `;
  detailsDiv.style.display = "block";
}

// Exemplu: atasam evenimente pe carduri dupa ce ele exista in DOM
document.querySelectorAll(".product-card").forEach((card) => {
  card.addEventListener("click", () => {
    const id = parseInt(card.dataset.productId);
    showProductDetails(id);
  });
});
