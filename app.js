const list = document.getElementById("list");
const search = document.getElementById("search");
const themeBtn = document.getElementById("themeToggle");

// Tema (dark/light) con localStorage
const THEME_KEY = "theme";
function applyTheme(t) { document.documentElement.dataset.theme = t; themeBtn.textContent = t === "dark" ? "☀️" : "🌙"; themeBtn.setAttribute("aria-pressed", t==="dark"); }
const saved = localStorage.getItem(THEME_KEY) || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
applyTheme(saved);
themeBtn.addEventListener("click", () => {
  const next = (document.documentElement.dataset.theme === "dark") ? "light" : "dark";
  localStorage.setItem(THEME_KEY, next); applyTheme(next);
});

// Carga de posts y render
let POSTS = [];
fetch("posts.json")
    .then(r => r.json())
    .then(json => { POSTS = json.sort((a,b)=> new Date(b.date)-new Date(a.date)); render(POSTS); });

function render(items){
  list.innerHTML = items.map(p => `
    <article class="card">
      <h2><a href="posts/${p.slug}/">${p.title}</a></h2>
      <time datetime="${p.date}">${new Date(p.date).toLocaleDateString('es-ES',{year:'numeric',month:'long',day:'numeric'})}</time>
      <p>${p.excerpt}</p>
      <p class="muted">~${estimateReadingTime(p.slug)} min de lectura</p>
      <p><a class="btn" href="posts/${p.slug}/">Leer →</a></p>
    </article>
  `).join("") || "<p>No hay entradas.</p>";
}

// Búsqueda en vivo
search?.addEventListener("input", (e)=>{
  const q = e.target.value.toLowerCase().trim();
  const filtered = POSTS.filter(p => (p.title + " " + p.excerpt).toLowerCase().includes(q));
  render(filtered);
});

// Estimación simple de tiempo de lectura leyendo un txt opcional (fallback)
function estimateReadingTime(slug){
  // Opcional: si pones posts/<slug>/content.txt con solo texto
  // aquí podrías hacer un fetch y calcular. Para no bloquear, devolvemos 3–5 min fake:
  return Math.floor(3 + Math.random()*3);
}
