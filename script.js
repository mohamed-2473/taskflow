document.addEventListener("DOMContentLoaded", function () {
  // First make all sections visible by default
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    section.style.opacity = 1;
    section.style.visibility = "visible";
  });

  // Then set up scroll animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  const hiddenElements = document.querySelectorAll(".animate-on-scroll");
  hiddenElements.forEach((el) => {
    el.classList.add("hidden");
    observer.observe(el);
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });
});
