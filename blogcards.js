// Datele pentru carduri
const cardDatas = [
  {
    img: "/images/4Card.avif",
    title: "Card title",
    text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    updated: "Last updated 3 mins ago",
  },
  {
    img: "/images/1Card.avif",
    title: "Card title",
    text: "This card has supporting text below as a natural lead-in to additional content.",
    updated: "Last updated 3 mins ago",
  },
  {
    img: "/images/3Card.avif",
    title: "Card title",
    text: "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.",
    updated: "Last updated 3 mins ago",
  },
];

// Selectăm containerul din HTML
const blogSection = document.getElementById("blogPosts");

// Creăm titlul
const titleDiv = document.createElement("div");
titleDiv.className = "d-flex justify-content-center my-4";
titleDiv.innerHTML = "<h2>BLOG POSTS</h2>";
blogSection.appendChild(titleDiv);

// Creăm grupul de carduri
const cardGroup = document.createElement("div");
cardGroup.className = "card-group container d-flex gap-5";

// Creăm fiecare card din array
cardData.forEach(({ img, title, text, updated }) => {
  const card = document.createElement("div");
  card.className = "card rounded";

  card.innerHTML = `
    <img src="${img}" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">${title}</h5>
      <p class="card-text">${text}</p>
    </div>
    <div class="card-footer">
      <small class="text-body-secondary">${updated}</small>
    </div>
  `;

  cardGroup.appendChild(card);
});

// Adăugăm grupul în secțiune
blogSection.appendChild(cardGroup);
