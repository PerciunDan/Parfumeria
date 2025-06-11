// shop.js - Funcționalități de bază pentru site-ul Fleur de Rêve

const cartButtons = document.querySelectorAll(".btn.btn-primary");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

cartButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const product = {
      id: index + 1,
      name: `Parfum ${index + 1}`,
      price: 99.99,
    };
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.name} a fost adăugat în coș!`);
  });
});

// Validare formular newsletter (footer)
const newsletterInput = document.querySelector("footer input");
const signUpBtn = document.querySelector("footer button");

if (newsletterInput && signUpBtn) {
  signUpBtn.addEventListener("click", () => {
    const email = newsletterInput.value.trim();
    if (email && email.includes("@") && email.includes(".")) {
      alert("Mulțumim pentru abonare!");
      newsletterInput.value = "";
    } else {
      alert("Te rugăm să introduci un email valid.");
    }
  });
}
