const list = document.getElementById("list");
const search = document.getElementById("search");

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

search?.addEventListener("input", (e)=>{
  const q = e.target.value.toLowerCase().trim();
  const filtered = POSTS.filter(p => (p.title + " " + p.excerpt).toLowerCase().includes(q));
  render(filtered);
});

function estimateReadingTime(){
  return Math.floor(3 + Math.random()*3);
}
