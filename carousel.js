const slides = [
  {
    img: "/images/elegant-vegan-alcohol-arrangement.jpg",
    alt: "Flori",
    title: "Colectia noastră premium",
    caption: "Descoperă arta parfumurilor naturale",
  },
  {
    img: "/images/perfume-bottle-nestles-lush-tapestry-vibrant-fresh-flowers.jpg",
    alt: "Parfum",
    title: "Esente de exceptie",
    caption: "Creat special pentru tine",
  },
  {
    img: "/images/high-angle-aromatic-body-products.jpg",
    alt: "Parfume",
    title: "Gama completa",
    caption: "Pentru îngrijirea corpului",
  },
];

const container = document.getElementById("carouselContainer");

let carouselHTML = `
  <div id="mainCarousel" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
`;

slides.forEach((slide, index) => {
  carouselHTML += `
    <div class="carousel-item ${index === 0 ? "active" : ""}">
      <img src="${slide.img}" class="d-block w-100" alt="${slide.alt}">
      <div class="carousel-caption d-none d-md-block">
        <h5>${slide.title}</h5>
        <p>${slide.caption}</p>
      </div>
    </div>
  `;
});

carouselHTML += `
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#mainCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon"></span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#mainCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon"></span>
    </button>
  </div>
`;

container.innerHTML = carouselHTML;

// Inițializează carouselul
const carouselElement = document.querySelector("#mainCarousel");
const carousel = new bootstrap.Carousel(carouselElement);
