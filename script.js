// ======================= 1. Date locale parfumuri ============================
const parfumuriLocale = [
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
  {
    nume: "Tom Ford Noir",
    link: "tomford.html",
    img: "img/tomford.jpg",
    descriere: "Misterios și sofisticat.",
    pret: "600 RON",
  },
  {
    nume: "Calvin Klein Eternity",
    link: "ck_eternity.html",
    img: "img/ck_eternity.jpg",
    descriere: "Clasic și atemporal.",
    pret: "390 RON",
  },
  {
    nume: "Gucci Guilty",
    link: "gucci_guilty.html",
    img: "img/gucci_guilty.jpg",
    descriere: "Îndrăzneț și seducător.",
    pret: "470 RON",
  },
];

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

// ========================= 4. Navbar dinamic ================================
const navItems = [
  { name: "Home", href: "/index.html" },
  { name: "About Us", href: "/about.html" },
  { name: "Best Products", href: "/bestproduct.html" },
  { name: "Blog", href: "/blog.html" },
  { name: "Contact Us", href: "/contact.html" },
];

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

// ====================== 5. Scroll lin la contact ============================
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

// ======================= 7. Căutare API externă ============================

// =================== 8. Afișare parfumuri din JSON (opțional) ==============
