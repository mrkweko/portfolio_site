// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Contact form (demo only)
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you for reaching out! I'll get back to you soon.");
  this.reset();
});
