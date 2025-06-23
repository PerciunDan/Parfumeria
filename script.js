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
