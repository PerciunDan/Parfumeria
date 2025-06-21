const parfumuri = [
  { nume: "Dior Sauvage", link: "dior.html" },
  { nume: "Bleu de Chanel", link: "chanel.html" },
  { nume: "Acqua di Gio", link: "gio.html" },
  { nume: "Versace Eros", link: "eros.html" },
];

function genereazaSugestii() {
  const input = document.getElementById("search");
  const sugestii = document.getElementById("suggestions");
  const valoare = input.value.toLowerCase();

  sugestii.innerHTML = "";

  if (!valoare) return;

  const rezultate = parfumuri.filter((p) =>
    p.nume.toLowerCase().includes(valoare)
  );

  rezultate.forEach((parfum) => {
    const div = document.createElement("div");
    div.textContent = parfum.nume;
    div.onclick = () => {
      window.location.href = parfum.link; // te redirecționează
    };
    sugestii.appendChild(div);
  });
}
