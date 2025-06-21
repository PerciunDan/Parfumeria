// Datele parfumurilor (poți să le încarci și din JSON local, dacă vrei)
const parfumuri = [
  {
    nume: "Dior Sauvage",
    link: "dior.html",
    img: "img/dior.jpg",
    descriere: "Parfum puternic și masculin.",
    pret: "450 RON",
  },
  {
    nume: "Bleu de Chanel",
    link: "chanel.html",
    img: "img/chanel.jpg",
    descriere: "Elegant și rafinat.",
    pret: "500 RON",
  },
  {
    nume: "Acqua di Gio",
    link: "gio.html",
    img: "img/gio.jpg",
    descriere: "Proaspăt și revigorant.",
    pret: "420 RON",
  },
  {
    nume: "Versace Eros",
    link: "eros.html",
    img: "img/eros.jpg",
    descriere: "Seducător și intens.",
    pret: "480 RON",
  },
];

// Funcția pentru sugestii căutare parfumuri
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
      window.location.href = parfum.link;
    };
    sugestii.appendChild(div);
  });
}

// Funcția pentru afișarea parfumurilor (dacă vrei să încarci din JSON poți apela afiseazaParfumuri după fetch)
function afiseazaParfumuri(parfumuri) {
  const container = document.getElementById("lista-parfumuri");
  if (!container) return;

  container.innerHTML = "";

  parfumuri.forEach((p) => {
    const card = document.createElement("div");
    card.className = "card mb-3";
    card.innerHTML = `
      <img src="${p.img}" class="card-img-top" alt="${p.nume}">
      <div class="card-body">
        <h5 class="card-title">${p.nume}</h5>
        <p class="card-text">${p.descriere}</p>
        <p class="card-text"><strong>${p.pret}</strong></p>
      </div>
    `;
    container.appendChild(card);
  });
}

// Încarcă datele din JSON local (opțional)
fetch("./data/parfumuri.json")
  .then((res) => {
    if (!res.ok) throw new Error("Nu s-a putut încărca JSON-ul parfumurilor");
    return res.json();
  })
  .then((parfumuri) => afiseazaParfumuri(parfumuri))
  .catch((err) => console.error(err));

// Scroll lin la secțiunea contact (dacă există)
const navContact = document.getElementById("navContact");
if (navContact) {
  navContact.addEventListener("click", (event) => {
    event.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  });
}

// Generare navbar dinamic
const navItems = [
  { name: "Home", href: "/INDEX/Home.html" },
  { name: "About Us", href: "/INDEX/About.html" },
  { name: "Best Products", href: "/INDEX/Products.html" },
  { name: "Blog", href: "/INDEX/Blog.html" },
  { name: "Contact Us", href: "/INDEX/Contact Us.html" },
];

// Construim navbar dinamic în <ul id="navbar">
const navbar = document.getElementById("navbar");

if (navbar) {
  const currentPath = window.location.pathname;

  navItems.forEach((item) => {
    const li = document.createElement("li");
    li.classList.add("nav-item");

    const a = document.createElement("a");
    a.classList.add("nav-link");
    a.href = item.href;
    a.textContent = item.name;

    if (item.href === currentPath) {
      a.classList.add("active");
    }

    li.appendChild(a);
    navbar.appendChild(li);
  });
}
