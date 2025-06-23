const footerContainer = document.getElementById("footerContainer");

footerContainer.innerHTML = `
  <footer class="bg-dark py-5 mt-5">
    <div class="container d-flex justify-content-around gap-5">
      <div class="d-flex flex-column align-items-center">
        <div>
          <h3 class="text-light">ABOUT US</h3>
        </div>
        <a href="#" class="nav-link">Home</a>
        <a href="#" class="nav-link">About Us</a>
        <a href="#" class="nav-link">Blog</a>
      </div>
      <div class="d-flex flex-column align-items-center">
        <div>
          <h3 class="text-light">QUICK LINKS</h3>
        </div>
        <a href="#" class="nav-link">Home</a>
        <a href="#" class="nav-link">About Us</a>
        <a href="#" class="nav-link">Products</a>
        <a href="#" class="nav-link">Blog</a>
        <a href="#" class="nav-link">Contact Us</a>
      </div>
      <div class="d-flex flex-column align-items-center">
        <div>
          <h3 class="text-light">FIND US ON</h3>
        </div>
        <a href="#" class="nav-link">FACEBOOK</a>
        <a href="#" class="nav-link">INSTAGRAM</a>
        <a href="#" class="nav-link">TIKTOK</a>
        <a href="#" class="nav-link">TWITTER</a>
      </div>
    </div>
  </footer>
`;
