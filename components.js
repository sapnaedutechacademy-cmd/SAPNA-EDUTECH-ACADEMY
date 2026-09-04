document.addEventListener("DOMContentLoaded", () => {
  // Load Header
  fetch("header.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header-placeholder").innerHTML = data;
      initMobileMenu(); // Re-initialize header interaction logic
      setActiveNavLink(); // Highlight active page link in yellow
    });

  // Load Footer
  fetch("footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer-placeholder").innerHTML = data;
    });
});

// Mobile menu toggle & dropdown functionality
function initMobileMenu() {
  const mobileMenu = document.getElementById("mobile-menu");
  const navLinks = document.getElementById("nav-links");

  if (mobileMenu && navLinks) {
    mobileMenu.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

  const dropdowns = document.querySelectorAll(".nav-links .dropdown");
  dropdowns.forEach((dropdown) => {
    const toggle = dropdown.querySelector(".dropdown-toggle");
    if (toggle) {
      toggle.addEventListener("click", (e) => {
        if (window.innerWidth <= 992) {
          e.preventDefault();
          dropdowns.forEach((item) => {
            if (item !== dropdown) item.classList.remove("active");
          });
          dropdown.classList.toggle("active");
        }
      });
    }
  });
}

// Highlight active page in navigation bar
function setActiveNavLink() {
  // Get current HTML filename (defaults to index.html if on root URL)
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach((link) => {
    link.classList.remove("active");

    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
      link.classList.add("active");

      // Highlight parent dropdown toggle if link is inside a sub-menu
      const parentDropdown = link.closest(".dropdown");
      if (parentDropdown) {
        const parentToggle = parentDropdown.querySelector(".dropdown-toggle");
        if (parentToggle) parentToggle.classList.add("active");
      }
    }
  });
}
document.addEventListener("DOMContentLoaded", () => {
  // Load Header
  fetch("header.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header-placeholder").innerHTML = data;
      initMobileMenu(); // Re-initialize header interaction logic
      setActiveNavLink(); // Highlight active page link in yellow
    });

  // Load Footer
  fetch("footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer-placeholder").innerHTML = data;
    });
});

// Mobile menu toggle & dropdown functionality
function initMobileMenu() {
  const mobileMenu = document.getElementById("mobile-menu");
  const navLinks = document.getElementById("nav-links");

  if (mobileMenu && navLinks) {
    mobileMenu.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

  const dropdowns = document.querySelectorAll(".nav-links .dropdown");
  dropdowns.forEach((dropdown) => {
    const toggle = dropdown.querySelector(".dropdown-toggle");
    if (toggle) {
      toggle.addEventListener("click", (e) => {
        if (window.innerWidth <= 992) {
          e.preventDefault();
          dropdowns.forEach((item) => {
            if (item !== dropdown) item.classList.remove("active");
          });
          dropdown.classList.toggle("active");
        }
      });
    }
  });
}

// Highlight active page in navigation bar
function setActiveNavLink() {
  // Get current HTML filename (defaults to index.html if on root URL)
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach((link) => {
    link.classList.remove("active");

    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
      link.classList.add("active");

      // Highlight parent dropdown toggle if link is inside a sub-menu
      const parentDropdown = link.closest(".dropdown");
      if (parentDropdown) {
        const parentToggle = parentDropdown.querySelector(".dropdown-toggle");
        if (parentToggle) parentToggle.classList.add("active");
      }
    }
  });
}
