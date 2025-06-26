// Smooth Scroll for Navigation
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    if (link.hash !== "") {
      e.preventDefault();
      const target = document.querySelector(link.hash);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
});

// Scroll Animation for Sections
const faders = document.querySelectorAll("section");

const appearOptions = {
  threshold: 0.3,
  rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("fade-in-section");
    appearOnScroll.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// Contact Form Validation (Optional)
const form = document.querySelector("#contact form");
if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const name = form.querySelector("input[name='name']").value.trim();
    const email = form.querySelector("input[name='email']").value.trim();
    const message = form.querySelector("textarea[name='message']").value.trim();

    if (!name || !email || !message) {
      alert("❗ Please fill in all fields.");
    } else {
      alert("✅ Message sent successfully!");
      form.reset();
    }
  });
}
// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});
