// Lingua & formattazione
const fmtEuro = (v) => Number(v).toFixed(2).replace('.', ',');
let lang = 'it'; // italiano di default

// Bandiere tonde (SVG inline)
function flagIT(){
  return `<svg viewBox="0 0 24 24" role="img" aria-label="Italiano">
    <defs><clipPath id="c"><circle cx="12" cy="12" r="12"/></clipPath></defs>
    <g clip-path="url(#c)">
      <rect width="24" height="24" fill="#fff"/>
      <rect x="0" width="8" height="24" fill="#008C45"/>
      <rect x="16" width="8" height="24" fill="#CD212A"/>
    </g>
  </svg>`;
}
function flagEN(){
  return `
<svg viewBox="0 0 60 30" preserveAspectRatio="xMidYMid slice" role="img" aria-label="English">
  <defs>
    <!-- clip rotondo -->
    <clipPath id="ukCircle"><circle cx="30" cy="15" r="15"/></clipPath>
    <!-- clip per tenere le diagonali rosse “sotto” alla croce centrale -->
    <clipPath id="ukDiagCut"><path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 z"/></clipPath>
  </defs>
  <g clip-path="url(#ukCircle)">
    <!-- fondo blu -->
    <rect width="60" height="30" fill="#012169"/>
    <!-- diagonali bianche -->
    <path d="M0,0 L60,30 M60,0 L0,30" stroke="#FFFFFF" stroke-width="6"/>
    <!-- diagonali rosse (clippate per non invadere la croce centrale) -->
    <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" stroke-width="4" clip-path="url(#ukDiagCut)"/>
    <!-- croce centrale bianca -->
    <path d="M30,0 V30 M0,15 H60" stroke="#FFFFFF" stroke-width="10"/>
    <!-- croce centrale rossa -->
    <path d="M30,0 V30 M0,15 H60" stroke="#C8102E" stroke-width="6"/>
  </g>
</svg>`;
}

function renderFlag(){
  const el = document.getElementById('flag');
  if(el) el.innerHTML = (lang==='it') ? flagIT() : flagEN();
  const lbl = document.getElementById('langLabel');
  if(lbl) lbl.textContent = lang.toUpperCase();

  // aggiorna placeholder della search in base alla lingua
  const input = document.getElementById('q');
  if(input){
    input.placeholder = (lang==='it') ? 'Cerca' : 'Search';
    input.setAttribute('aria-label', input.placeholder);
  }
}

// Utilità
function money(v){
  if(typeof v === 'number') return '€ ' + fmtEuro(v);
  if(typeof v === 'string' && v.includes('/')) {
    return '€ ' + v.split('/').map(s => s.trim()).join(' / € ');
  }
  return v || '';
}

// Riferimenti DOM
const cats = document.getElementById('cats');
const content = document.getElementById('content');
const q = document.getElementById('q');
const langBtn = document.getElementById('lang');
const langLabel = document.getElementById('langLabel');

// NAV (emoji)
function renderCats(){
  cats.innerHTML = '';
  MENU.forEach((c, i) => {
    const b = document.createElement('button');
    b.innerHTML = (c.emoji ? `<span class="emoji">${c.emoji}</span>` : '') + (lang === 'it' ? c.it : c.en);
    b.className = i===0 ? 'active' : '';
    b.addEventListener('click', () => {
      [...cats.querySelectorAll('button')].forEach(x=>x.classList.remove('active'));
      b.classList.add('active');
      if (q.value.trim()) {
        renderAllSections();   // con ricerca attiva: vista globale
      } else {
        renderSection(c.key);  // altrimenti sezione scelta
      }
    });
    cats.appendChild(b);
  });
}

// Card categoria
function buildCategoryCard(cat, items){
  const card = document.createElement('div'); card.className='card';
  const h2 = document.createElement('h2');
  h2.textContent = (cat.emoji ? cat.emoji + ' ' : '') + (lang==='it'?cat.it:cat.en);
  card.appendChild(h2);

  const grid = document.createElement('div'); grid.className='grid';
  items.forEach(it => {
    const name = lang==='it'? it.it : it.en;
    const desc = lang==='it'? (it.desc_it||'') : (it.desc_en||'');

    const nameEl = document.createElement('div'); nameEl.className='item-name'; nameEl.textContent = name;
    grid.appendChild(nameEl);

    const priceEl = document.createElement('div'); priceEl.className='price'; priceEl.textContent = money(it.price);
    grid.appendChild(priceEl);

    if(desc){
      const d = document.createElement('div'); d.className='desc'; d.textContent = desc; grid.appendChild(d);
      grid.appendChild(document.createElement('div'));
    }
  });
  card.appendChild(grid);

  if(cat.notes && (cat.notes.it || cat.notes.en)){
    const note = document.createElement('div'); note.className='note';
    note.textContent = lang==='it' ? (cat.notes.it || '') : (cat.notes.en || '');
    card.appendChild(note);
  }
  return card;
}

// Vista sezione singola
function renderSection(key){
  const cat = MENU.find(x => x.key===key) || MENU[0];
  content.innerHTML = '';
  content.appendChild(buildCategoryCard(cat, cat.items));
}

// Vista ricerca globale
function renderAllSections(){
  const term = (q.value || '').trim().toLowerCase();
  content.innerHTML = '';
  MENU.forEach(cat => {
    const matched = cat.items.filter(it => {
      const name = lang === 'it' ? it.it : it.en;
      const desc = lang === 'it' ? (it.desc_it || '') : (it.desc_en || '');
      return (name + ' ' + desc).toLowerCase().includes(term);
    });
    if (!term || matched.length > 0) {
      if (!term) return; // vista standard gestita da renderSection
      content.appendChild(buildCategoryCard(cat, matched));
    }
  });

  if (term && content.children.length === 0) {
    const empty = document.createElement('div'); empty.className = 'card';
    empty.innerHTML = `<h2>🔎 Nessun risultato</h2><div class="desc">Prova con un'altra parola.</div>`;
    content.appendChild(empty);
  }
}

// Avvio + wiring
function renderAll(){
  renderCats();
  renderSection(MENU[0].key);
  if (langLabel) langLabel.textContent = lang.toUpperCase();
  renderFlag();
}

langBtn.addEventListener('click', () => {
  lang = (lang==='it') ? 'en' : 'it';
  renderFlag();
  if (q.value.trim()) {
    renderCats();
    renderAllSections();
  } else {
    renderAll();
  }
});

q.addEventListener('input', () => {
  if (q.value.trim()) {
    renderAllSections();
  } else {
    const current = document.querySelector('#cats button.active');
    const idx = [...cats.children].indexOf(current);
    const key = MENU[idx >= 0 ? idx : 0].key;
    renderSection(key);
  }
});

// Ready
renderAll();
