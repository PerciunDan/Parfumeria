// ==================== 2. Funcții pentru afișare locală ======================
function afiseazaDetalii(parfum) {
  const wrapper = document.createElement("div");
  wrapper.className = "col-md-4 mb-4"; // coloană Bootstrap

  const card = document.createElement("div");
  card.className = "card h-100 shadow";

  card.innerHTML = `
    <div class="card-body">
      <h5 class="card-title">${parfum.title || "Fără nume"}</h5>
      <p class="card-text">Brand: ${parfum.brand || "necunoscut"}</p>
      <p class="card-text">Tip: ${parfum.type || "necunoscut"}</p>
      <p class="card-text">Sex: ${parfum.sex || "necunoscut"}</p>
    </div>
  `;

  wrapper.appendChild(card);
  container.appendChild(wrapper);
}
