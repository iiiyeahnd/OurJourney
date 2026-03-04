// ═══════════════════════════════════════════════════════════════
//  MEMORY CONTENT
//  Each memory has:
//    title   → heading on the card (use ❤ for the heart symbol)
//    message → your text (\n = new line)
//    photos  → array of image filenames inside that memory's folder
//              Folder path: Memories/memory1/photo.jpg
//              Leave as [] if no photos yet
//
//  FOLDER STRUCTURE TO CREATE YOURSELF:
//    OurJourney/
//    └── Memories/
//        ├── memory1/   ← put Memory 1 photos here
//        ├── memory2/
//        ├── memory3/
//        ... up to memory36/
// ═══════════════════════════════════════════════════════════════

const memories = [
  {
    title:   "Our First Date ❤",
    message: "Add your message here. 💕",
    photos:  [
"1.png", "2.png", "3.png"
    ]
  },
  { title: "Memory 2",  message: "Add your message here. 💕", photos: [] },
  { title: "Memory 3",  message: "Add your message here. 💕", photos: [] },
  { title: "Memory 4",  message: "Add your message here. 💕", photos: [] },
  { title: "Memory 5",  message: "Add your message here. 💕", photos: [] },
  { title: "Memory 6",  message: "Add your message here. 💕", photos: [] },
  { title: "Memory 7",  message: "Add your message here. 💕", photos: [] },
  { title: "Memory 8",  message: "Add your message here. 💕", photos: [] },
  { title: "Memory 9",  message: "Add your message here. 💕", photos: [] },
  { title: "Memory 10", message: "Add your message here. 💕", photos: [] },
  { title: "Memory 11", message: "Add your message here. 💕", photos: [] },
  { title: "Memory 12", message: "Add your message here. 💕", photos: [] },
  { title: "Memory 13", message: "Add your message here. 💕", photos: [] },
  { title: "Memory 14", message: "Add your message here. 💕", photos: [] },
  { title: "Memory 15", message: "Add your message here. 💕", photos: [] },
  { title: "Memory 16", message: "Add your message here. 💕", photos: [] },
  { title: "Memory 17", message: "Add your message here. 💕", photos: [] },
  { title: "Memory 18", message: "Add your message here. 💕", photos: [] },
  { title: "Memory 19", message: "Add your message here. 💕", photos: [] },
  { title: "Memory 20", message: "Add your message here. 💕", photos: [] },
  { title: "Memory 21", message: "Add your message here. 💕", photos: [] },
  { title: "Memory 22", message: "Add your message here. 💕", photos: [] },
  { title: "Memory 23", message: "Add your message here. 💕", photos: [] },
  { title: "Memory 24", message: "Add your message here. 💕", photos: [] },
  { title: "Memory 25", message: "Add your message here. 💕", photos: [] },
  { title: "Memory 26", message: "Add your message here. 💕", photos: [] },
  { title: "Memory 27", message: "Add your message here. 💕", photos: [] },
  { title: "Memory 28", message: "Add your message here. 💕", photos: [] },
  { title: "Memory 29", message: "Add your message here. 💕", photos: [] },
  { title: "Memory 30", message: "Add your message here. 💕", photos: [] },
  { title: "Memory 31", message: "Add your message here. 💕", photos: [] },
  { title: "Memory 32", message: "Add your message here. 💕", photos: [] },
  { title: "Memory 33", message: "Add your message here. 💕", photos: [] },
  { title: "Memory 34", message: "Add your message here. 💕", photos: [] },
  { title: "Memory 35", message: "Add your message here. 💕", photos: [] },
  { title: "Memory 36", message: "Add your message here. 💕", photos: [] },
];

// Fortune cookie paper text
const fortuneText = "Set your sights high\nI LOVE YOU";

// ── Build the grid hearts ──
const grid = document.getElementById('heartGrid');
for (let i = 0; i < 36; i++) {
  const cell = document.createElement('div');
  cell.className = 'heart-cell';
  cell.innerHTML = `<img src="Images/calendarheart.png" alt="Memory ${i + 1}"/>`;
  cell.addEventListener('click', () => navigateTo(`page-heart-${i + 1}`));
  grid.appendChild(cell);
}

// ── Build the 36 memory detail pages ──
for (let i = 0; i < 36; i++) {
  const n   = i + 1;
  const mem = memories[i];

  // Gallery button (every memory)
  const galleryHTML = `
    <button class="gallery-btn" onclick="openGallery(${n})" title="View Photos">
      <img src="Images/gallery.png" alt="Gallery"/>
    </button>
  `;

  // Fortune cookie — Memory 1 only
  const cookieHTML = (n === 1) ? `
    <div class="cookie-wrapper" id="cookieWrapper" onclick="toggleCookie()">
      <img src="Images/cookie.png" class="cookie-img" id="cookieImg" alt="Fortune Cookie"/>
      <div class="fortune-paper" id="fortunePaper">
        <img src="Images/fortunepaper.png" alt="Fortune paper" style="width:100%;display:block;"/>
        <div class="fortune-text">${fortuneText.replace(/\n/g, '<br/>')}</div>
      </div>
    </div>
  ` : '';

  // Layered character — Memory 1 only
  const characterHTML = (n === 1) ? `
    <div class="character-wrap" id="characterWrap">
      <img src="Images/EulaBody.png"      class="char-layer" id="layerBody"      alt="" onclick="swingBody()"/>
      <img src="Images/EulaBackArms.png"  class="char-layer" id="layerBackArms"  alt=""/>
      <img src="Images/EulaHead.png"      class="char-layer" id="layerHead"      alt=""/>
      <img src="Images/EulaFrontArms.png" class="char-layer" id="layerFrontArms" alt=""/>
    </div>
  ` : '';

  const page = document.createElement('div');
  page.id        = `page-heart-${n}`;
  page.className = 'page';

  page.innerHTML = `
    <div class="bg-deco">
      <img src="Images/breadlock.png" class="deco-img d1" alt=""/>
      <img src="Images/breadlock.png" class="deco-img d2" alt=""/>
      <img src="Images/breadlock.png" class="deco-img d3" alt=""/>
      <img src="Images/breadlock.png" class="deco-img d4" alt=""/>
      <img src="Images/starblue.png"  class="deco-img s1" alt=""/>
      <img src="Images/stargreen.png" class="deco-img s2" alt=""/>
      <img src="Images/starblue.png"  class="deco-img s3" alt=""/>
      <img src="Images/stargreen.png" class="deco-img s4" alt=""/>
    </div>

    <button class="back-btn" onclick="navigateTo('page-main')">← Back</button>

    <div class="heart-page">
      <p class="heart-number">Memory ${n} of 36</p>
      <img src="Images/calendarheart.png" class="heart-hero" alt="Memory ${n}"/>
      <div class="heart-content">
        <strong class="memory-title">${mem.title}</strong>
        <p class="memory-message">${mem.message}</p>
      </div>
      ${galleryHTML}
    </div>

    ${cookieHTML}
    ${characterHTML}
  `;

  document.body.appendChild(page);
}

// ── Gallery overlay ──
function openGallery(memoryNumber) {
  const mem    = memories[memoryNumber - 1];
  const photos = mem.photos;
  const folder = `Memories/memory${memoryNumber}/`;

  // Build photo tiles — show placeholder if no photos added yet
  let tilesHTML = '';
  if (photos.length === 0) {
    tilesHTML = `<p class="gallery-empty">No photos yet for this memory 💕<br/>Add images to:<br/><code>Memories/memory${memoryNumber}/</code><br/>then list them in journey.js</p>`;
  } else {
    tilesHTML = photos.map(filename => `
      <div class="gallery-tile">
        <img src="${folder}${filename}" alt="${filename}" onclick="openLightbox('${folder}${filename}')"/>
      </div>
    `).join('');
  }

  document.getElementById('galleryTitle').textContent = mem.title;
  document.getElementById('galleryGrid').innerHTML = tilesHTML;
  document.getElementById('galleryOverlay').classList.add('open');
}

function closeGallery() {
  document.getElementById('galleryOverlay').classList.remove('open');
  closeLightbox();
}

function openLightbox(src) {
  const lb = document.getElementById('lightbox');
  document.getElementById('lightboxImg').src = src;
  lb.classList.add('open');
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
}

// ── Body pendulum swing ──
function swingBody() {
  const body = document.getElementById('layerBody');
  if (!body) return;
  body.classList.remove('swinging');
  void body.offsetWidth;
  body.classList.add('swinging');
  body.addEventListener('animationend', () => body.classList.remove('swinging'), { once: true });
}

// ── Fortune cookie toggle ──
function toggleCookie() {
  const wrapper = document.getElementById('cookieWrapper');
  const img     = document.getElementById('cookieImg');
  const isOpen  = wrapper.classList.contains('opened');
  wrapper.classList.toggle('opened');
  img.src = isOpen ? 'Images/cookie.png' : 'Images/happycookie.png';
}

// ── Navigation ──
function navigateTo(targetId) {
  const current = document.querySelector('.page.active');
  const target  = document.getElementById(targetId);
  if (!target || current === target) return;
  current.classList.add('fade-out');
  setTimeout(() => {
    current.classList.remove('active', 'fade-out');
    target.classList.add('active');
  }, 280);
}

// Close gallery when clicking the dark backdrop (not the modal itself)
function handleOverlayClick(e) {
  if (e.target === document.getElementById("galleryOverlay")) closeGallery();
}