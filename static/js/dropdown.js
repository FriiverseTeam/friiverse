document.addEventListener("DOMContentLoaded", () => {
  const dropdown = document.querySelector(".dropdown");
  if (dropdown) {
    const toggle = dropdown.querySelector(".dropdown-toggle");

    toggle.addEventListener("click", (e) => {
      e.preventDefault();
      const isOpen = dropdown.classList.contains("open");

      document.querySelectorAll(".dropdown").forEach(d => {
        d.classList.remove("open");
        d.querySelector(".dropdown-toggle").classList.remove("dropdown-open");
      });

      if (!isOpen) {
        dropdown.classList.add("open");
        toggle.classList.add("dropdown-open");
      }
    });

    document.addEventListener("click", (e) => {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove("open");
        toggle.classList.remove("dropdown-open");
      }
    });
  }

  const tutorialCloseBtn = document.querySelector(".tutorial-close-button");
  const tutorialWindow = document.querySelector(".tutorial-window");

  if (tutorialCloseBtn && tutorialWindow) {
    tutorialCloseBtn.addEventListener("click", (e) => {
      e.preventDefault();
      tutorialWindow.style.display = "none";
    });
  }
});