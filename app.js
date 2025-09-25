const list = document.getElementById("list");
const search = document.getElementById("search");

let POSTS = [];
fetch("posts.json")
    .then(r => r.json())
    .then(json => { POSTS = json.sort((a,b)=> new Date(b.date)-new Date(a.date)); render(POSTS); });

function render(items){
  list.innerHTML = items.map(p => `
    <div class="col-12 col-md-6 col-lg-4">
      <article class="card h-100">
        <div class="card-body">
          <h2 class="h5 card-title"><a class="text-decoration-none" href="posts/${p.slug}/">${p.title}</a></h2>
          <time class="text-muted d-block mb-1" datetime="${p.date}">${new Date(p.date).toLocaleDateString('es-ES',{year:'numeric',month:'long',day:'numeric'})}</time>
          <p class="card-text">${p.excerpt}</p>
          <a class="btn btn-outline-secondary" href="posts/${p.slug}/">Leer →</a>
        </div>
      </article>
    </div>
  `).join("") || "<p class='text-muted'>No hay entradas.</p>";
}

search?.addEventListener("input", (e)=>{
  const q = e.target.value.toLowerCase().trim();
  const filtered = POSTS.filter(p => (p.title + " " + p.excerpt).toLowerCase().includes(q));
  render(filtered);
});

function estimateReadingTime(){
  return Math.floor(3 + Math.random()*3);
}
