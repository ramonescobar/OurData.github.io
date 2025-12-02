// Background Canvas
const canvas = document.getElementById('bgCanvas');
const ctx = canvas.getContext('2d');
let w, h, particles;

function resizeCanvas() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}

function init() {
  resizeCanvas();
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
  ctx.fillStyle = 'rgba(90,150,255,0.8)';

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

window.addEventListener('load', () => {
  init();
  animate();
});

window.addEventListener('resize', () => {
  resizeCanvas();
});


// 🔥 UNIVERSAL BURGER MENU (Desktop + Móvil)
const burger = document.getElementById("burger");
const navMenu = document.getElementById("nav-menu");
const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("close-menu");

burger.addEventListener("click", () => {
  navMenu.classList.add("open");
  overlay.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  navMenu.classList.remove("open");
  overlay.classList.remove("show");
});

overlay.addEventListener("click", () => {
  navMenu.classList.remove("open");
  overlay.classList.remove("show");
});


// Scroll Reveal
const revealElements = document.querySelectorAll('.reveal');
function revealOnScroll() {
  const trigger = window.innerHeight * 0.85;
  revealElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < trigger) el.classList.add('visible');
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);


// Theme toggle
const toggle = document.getElementById("themeToggle");
toggle.onclick = () => {
  const html = document.documentElement;
  const newTheme = html.dataset.theme === "dark" ? "light" : "dark";
  html.dataset.theme = newTheme;
  toggle.textContent = newTheme === "dark" ? "🌙" : "☀️";
};
