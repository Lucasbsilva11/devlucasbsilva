export function initScrolReveal() {
  const sr = ScrollReveal({
    origin: "bottom",
    distance: "40px",
    duration: 400,
    easing: "ease",
    reset: true,
  });

  // ── HERO ──────────────────────────────────────────
  sr.reveal(".hero-title", {
    delay: 100,
  });

  sr.reveal(".hero-desc", {
    delay: 250,
  });

  sr.reveal(".hero-actions", {
    delay: 400,
  });

  sr.reveal(".hero-image", {
    delay: 300,
    origin: "right",
    distance: "60px",
  });

  // ── LOGOS / TECH STRIP ────────────────────────────
  sr.reveal(".logos-label", {
    delay: 100,
  });

  sr.reveal(".marquee-outer", {
    delay: 250,
    distance: "30px",
  });

  // ── SOBRE ─────────────────────────────────────────
  sr.reveal(".about-image", {
    delay: 100,
    origin: "left",
    distance: "60px",
  });

  sr.reveal("#about-title", {
    delay: 150,
  });

  sr.reveal(".about-bio", {
    delay: 280,
  });

  sr.reveal(".about-cta", {
    delay: 400,
  });

  // ── LOCALIDADE ────────────────────────────────────
  sr.reveal(".location-header .label", {
    delay: 100,
  });

  sr.reveal(".location-header .section-title", {
    delay: 220,
  });

  sr.reveal(".location-map-wrap", {
    delay: 380,
    distance: "60px",
  });

  sr.reveal(".location-card", {
    delay: 880,
    distance: "30px",
    duration: 900,
  });

  // ── EDUCAÇÃO ──────────────────────────────────────
  sr.reveal(".education-header .label", {
    delay: 100,
  });

  sr.reveal("#education-title", {
    delay: 220,
  });

  sr.reveal(".education-header .section-sub", {
    delay: 340,
  });

  sr.reveal(".degree-card", {
    delay: 200,
    interval: 180, // cada card entra em sequência
  });


  sr.reveal(".course-card", {
    delay: 200,
    interval: 150,
    origin: "bottom",
    distance: "40px",
  });

  sr.reveal(".education-courses .btn-outline", {
    delay: 150,
    origin: "right",
    distance: "30px",
  });

  // ── PROCESSO / STEPS ──────────────────────────────
  sr.reveal(".process-head .label", {
    delay: 100,
  });

  sr.reveal("#process-title", {
    delay: 220,
  });

  sr.reveal(".process-head p", {
    delay: 340,
  });

  sr.reveal(".step", {
    delay: 200,
    interval: 180, // cada step entra em sequência
  });
}
