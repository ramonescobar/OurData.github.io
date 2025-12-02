// ----------------------------
// Background Canvas Animación
// ----------------------------
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

// ----------------------------
// Burger Menu
// ----------------------------
const burger = document.getElementById('burger');
const nav = document.getElementById('nav-menu');

burger.addEventListener('click', () => {
  const visible = nav.style.display === 'flex';
  nav.style.display = visible ? 'none' : 'flex';
});

// ----------------------------
// Theme toggle
// ----------------------------
const toggle = document.getElementById('themeToggle');

toggle.onclick = () => {
  const html = document.documentElement;
  const newTheme = html.dataset.theme === 'dark' ? 'light' : 'dark';
  html.dataset.theme = newTheme;
  toggle.textContent = newTheme === 'dark' ? '🌙' : '☀️';
};
