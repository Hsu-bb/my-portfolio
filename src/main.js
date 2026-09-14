import "./input.css";

const menuButton = document.querySelector("#menu-button");
const mobileMenu = document.querySelector("#mobile-menu");

if (menuButton && mobileMenu) {
  menuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
}

// Smooth scrolling
const sectionLinks = document.querySelectorAll('a[href^="/#"], a[href^="#"]');

sectionLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const href = link.getAttribute("href");

    if (!href) return;

    const targetId = href.includes("#") ? href.split("#")[1] : "";

    const target = document.getElementById(targetId);

    if (!target) return;

    event.preventDefault();

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // Close mobile menu after clicking a link
    if (mobileMenu) {
      mobileMenu.classList.add("hidden");
    }

    // Update URL without jumping
    history.pushState(null, "", href);
  });
});
