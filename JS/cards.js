const cardData = [
  {
    nume: "Dior Sauvage",
    link: "dior.html",
    img: "/images/1Card.avif",
    descriere: "Parfum puternic și masculin.",
    pret: "450 RON",
  },
  {
    nume: "Bleu de Chanel",
    link: "chanel.html",
    img: "/images/2Card.avif",
    descriere: "Un parfum proaspăt și elegant.",
    pret: "480 RON",
  },
  {
    nume: "Acqua di Gio",
    link: "gio.html",
    img: "/images/3Card.avif",
    descriere: "Aromă revigorantă pentru bărbați.",
    pret: "390 RON",
  },
  {
    nume: "Armani Code",
    link: "armani.html",
    img: "/images/4Card.avif",
    descriere: "Note orientale și seducătoare.",
    pret: "420 RON",
  },
  {
    nume: "Dior Sauvage",
    link: "dior.html",
    img: "/images/1Card.avif",
    descriere: "Parfum puternic și masculin.",
    pret: "450 RON",
  },
  {
    nume: "Bleu de Chanel",
    link: "chanel.html",
    img: "/images/2Card.avif",
    descriere: "Un parfum proaspăt și elegant.",
    pret: "480 RON",
  },
  {
    nume: "Acqua di Gio",
    link: "gio.html",
    img: "/images/3Card.avif",
    descriere: "Aromă revigorantă pentru bărbați.",
    pret: "390 RON",
  },
  {
    nume: "Armani Code",
    link: "armani.html",
    img: "/images/4Card.avif",
    descriere: "Note orientale și seducătoare.",
    pret: "420 RON",
  },
];

const postContainer = document.querySelector(".card-container");

const postMethods = () => {
  cardData.map((parfum) => {
    const card = document.createElement("div");
    card.classList.add("card", "m-2");
    card.style.width = "18rem";

    card.innerHTML = `
      <a href="${parfum.link}" class="text-decoration-none text-dark">
        <img src="${parfum.img}" class="card-img-top" alt="${parfum.nume}">
        <div class="card-body">
          <h5 class="card-title">${parfum.nume}</h5>
          <p class="card-text">${parfum.descriere}</p>
          <p class="card-text fw-bold">${parfum.pret}</p>
        </div>
      </a>
    `;

    postContainer.appendChild(card);
  });
};

postMethods();
