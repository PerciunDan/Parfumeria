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
