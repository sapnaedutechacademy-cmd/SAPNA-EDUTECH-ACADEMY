// Function to initialize navigation features (Mobile Menu & Dropdowns)
function initNavigation() {
  const mobileMenu = document.getElementById("mobile-menu");
  const navLinks = document.getElementById("nav-links");

  // Setup Mobile Menu Toggle
  if (mobileMenu && navLinks) {
    mobileMenu.addEventListener("click", () => {
      navLinks.classList.toggle("active");

      // Change icon between 'bars' and 'X'
      const icon = mobileMenu.querySelector("i");
      if (icon) {
        if (navLinks.classList.contains("active")) {
          icon.classList.remove("fa-bars");
          icon.classList.add("fa-xmark");
        } else {
          icon.classList.remove("fa-xmark");
          icon.classList.add("fa-bars");
        }
      }
    });
  }

  // Setup Mobile Dropdown Toggles
  const dropdowns = document.querySelectorAll(".nav-links .dropdown");
  dropdowns.forEach((dropdown) => {
    const toggle = dropdown.querySelector(".dropdown-toggle");
    if (toggle) {
      toggle.addEventListener("click", function (e) {
        if (window.innerWidth <= 992) {
          e.preventDefault();

          // Close other open dropdowns
          dropdowns.forEach((item) => {
            if (item !== dropdown) item.classList.remove("active");
          });

          // Toggle current dropdown
          dropdown.classList.toggle("active");
        }
      });
    }
  });
}

// Global listener for page-specific scripts
document.addEventListener("DOMContentLoaded", () => {
  // --- 1. Form Submission Handler (Null Checked) ---
  const contactForm = document.querySelector(".contact-form-card form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thank you! Your inquiry has been submitted successfully.");
      contactForm.reset();
    });
  }

  // --- 2. Smooth Scrolling (Null Checked) ---
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId !== "#" && targetId.length > 1) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });
});
