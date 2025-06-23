// ===================== 3. Căutare locală și sugestii =========================
function genereazaSugestii() {
  const input = document.getElementById("search");
  const sugestii = document.getElementById("suggestions");
  const valoare = input.value.toLowerCase();

  sugestii.innerHTML = "";

  if (!valoare) return;

  const rezultate = parfumuriLocale.filter((p) =>
    p.nume.toLowerCase().includes(valoare)
  );

  rezultate.forEach((parfum) => {
    const div = document.createElement("div");
    div.textContent = parfum.nume;
    div.classList.add("dropdown-item");
    div.onclick = () => {
      window.location.href = parfum.link;
    };
    sugestii.appendChild(div);
  });
}
