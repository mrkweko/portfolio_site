// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});


// Scroll reveal animation
document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.scroll-reveal-element');

  const observerOptions = {
    root: null, // relative to the viewport
    rootMargin: '0px',
    threshold: 0.2 // Trigger when 20% of the element is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // Stop observing once visible
      }
    });
  }, observerOptions);

  elements.forEach(element => {
    observer.observe(element);
  });
});

