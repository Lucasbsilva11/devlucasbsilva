const sr = ScrollReveal({
  origin: "bottom",
  distance: "40px",
  duration: 600,
  delay: 100,
  reset: true, // não repete animação caso seja false
});

// HERO
sr.reveal(".hero-text");
sr.reveal(".hero-image", { origin: "bottom" });

// ABOUT
sr.reveal(".about-image", { origin: "left" });
sr.reveal(".about-content");

// CARDS
sr.reveal(".card", { interval: 200 });

// Education
sr.reveal(".education-wrapper", { interval: 200 });

// PROCESS
sr.reveal(".step", { interval: 150 });

// TESTIMONIALS
sr.reveal(".test-card", { interval: 200 });

// LOGOS
sr.reveal(".logo-item", { interval: 100 });

// ScrollReveal - projects
sr.reveal(".page-hero-inner", { interval: 200 });

sr.reveal("#projects-grid article", { interval: 200 });
