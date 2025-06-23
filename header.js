document.addEventListener("DOMContentLoaded", () => {
  const headerHTML = `
    <header>
      <section class="container-fluid d-flex justify-content-around align-items-center bg-success">
        <div>Sună-ne: +40 31 6310384 | info@perfume.ro</div>
        <div>
          <p class="m-0">Parfumeria noastră – esențe alese, povești în sticlă.</p>
        </div>
      </section>

      <!-- Navbar Start -->
      <div class="container-fluid px-0">
        <div class="d-flex justify-content-between align-items-center container py-3">
          <a href="index.html" class="text-decoration-none">
            <h1 class="m-0" id="logo">Fleur de Rêve</h1>
          </a>
          <ul id="navbar" class="list-unstyled d-flex gap-4 mb-0"></ul>
        </div>
      </div>
    </header>
  `;

  const headerContainer = document.getElementById("main-header");
  if (headerContainer) {
    headerContainer.innerHTML = headerHTML;
  }

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
});
