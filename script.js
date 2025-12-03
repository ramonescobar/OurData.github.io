/* ============================================================
   Background Canvas Animation (Seguro + Optimizado)
============================================================ */
(function () {
  const canvas = document.getElementById("bgCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let w, h, particles = [];

  function resizeCanvas() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }

  function initParticles() {
    particles = [];
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 2 + 1,
        dx: Math.random() * 0.6 - 0.3,
        dy: Math.random() * 0.6 - 0.3
      });
    }
  }

  function animate() {
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = "rgba(90,150,255,0.7)";

    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();

      p.x += p.dx;
      p.y += p.dy;

      if (p.x < 0 || p.x > w) p.dx *= -1;
      if (p.y < 0 || p.y > h) p.dy *= -1;
    });

    requestAnimationFrame(animate);
  }

  window.addEventListener("resize", () => {
    resizeCanvas();
    initParticles();
  });

  resizeCanvas();
  initParticles();
  animate();
})();


/* ============================================================
   Mobile Navigation
============================================================ */
(function () {
  const burger = document.getElementById("burger");
  const navMenu = document.getElementById("nav-menu");
  const overlay = document.getElementById("overlay");
  const closeBtn = document.getElementById("close-menu");

  if (!burger || !navMenu || !overlay || !closeBtn) return;

  function openMenu() {
    navMenu.classList.add("open");
    overlay.classList.add("show");
  }

  function closeMenu() {
    navMenu.classList.remove("open");
    overlay.classList.remove("show");
  }

  burger.addEventListener("click", openMenu);
  closeBtn.addEventListener("click", closeMenu);
  overlay.addEventListener("click", closeMenu);
})();


/* ============================================================
   Scroll Reveal
============================================================ */
(function () {
  const elements = document.querySelectorAll(".reveal");
  if (!elements.length) return;

  function revealOnScroll() {
    const trigger = window.innerHeight * 0.85;

    elements.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < trigger) el.classList.add("visible");
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  window.addEventListener("load", revealOnScroll);
})();


/* ============================================================
   Theme Toggle (Dark / Light)
============================================================ */
(function () {
  const toggle = document.getElementById("themeToggle");
  if (!toggle) return;

  toggle.addEventListener("click", () => {
    const html = document.documentElement;
    const newTheme = html.dataset.theme === "dark" ? "light" : "dark";
    html.dataset.theme = newTheme;
    toggle.textContent = newTheme === "dark" ? "🌙" : "☀️";
  });
})();
 
