// ═══════════════════════════════════════════════════════════════
//  MEMORY CONTENT
//  Each memory has:
//    title   → heading on the card (use ❤ for the heart symbol)
//    message → your text (\n = new line)
//    photos  → array of image filenames inside that memory's folder
//    videos  → array of mp4 filenames inside that memory's folder
//              Folder path: Images/Memories/memory1/
//              Leave as [] if no photos/videos yet
//
//  EXAMPLE with video:
//  { title: "Our First Date ❤", message: "so fun!", photos: ["1.png"], videos: ["clip.mp4"] }
// ═══════════════════════════════════════════════════════════════

const memories = [
  {
    title:   "Our First Date ❤",
    message: "A sweet, loving time. 💕",
    photos:  [
      "1.png",
      "2.png",
      "3.png",
      "4.png",
    ],
    videos:  [
      "5.mp4",
    ]
  },
  { title: "Drawing Date ❤",  message: "A fun, creative time. 💕", photos:  [    
      "1.png",
      "2.png",
      "3.png",
      "4.png"], videos: [] },
  { title: "Our Matchy",  message: "Matching together. 💕", photos: [
        "1.png",
        "2.png",
        "3.png",
  ], videos: [] },
  { title: "Our Digital Love",  message: "No matter how far away. 💕", photos: [
      "1.png",
      "2.png",
      "3.png",
      "4.png"
  ], videos: [] },
  { title: "My Two Babies",  message: "Add your message here. 💕", photos: [], videos: [] },
  { title: "Memory 6",  message: "Add your message here. 💕", photos: [], videos: [] },
  { title: "Memory 7",  message: "Add your message here. 💕", photos: [], videos: [] },
  { title: "Memory 8",  message: "Add your message here. 💕", photos: [], videos: [] },
  { title: "Memory 9",  message: "Add your message here. 💕", photos: [], videos: [] },
  { title: "Memory 10", message: "Add your message here. 💕", photos: [], videos: [] },
  { title: "Memory 11", message: "Add your message here. 💕", photos: [], videos: [] },
  { title: "Memory 12", message: "Add your message here. 💕", photos: [], videos: [] },
  { title: "Memory 13", message: "Add your message here. 💕", photos: [], videos: [] },
  { title: "Memory 14", message: "Add your message here. 💕", photos: [], videos: [] },
  { title: "Memory 15", message: "Add your message here. 💕", photos: [], videos: [] },
  { title: "Memory 16", message: "Add your message here. 💕", photos: [], videos: [] },
  { title: "Memory 17", message: "Add your message here. 💕", photos: [], videos: [] },
  { title: "Memory 18", message: "Add your message here. 💕", photos: [], videos: [] },
  { title: "Memory 19", message: "Add your message here. 💕", photos: [], videos: [] },
  { title: "Memory 20", message: "Add your message here. 💕", photos: [], videos: [] },
  { title: "Memory 21", message: "Add your message here. 💕", photos: [], videos: [] },
  { title: "Memory 22", message: "Add your message here. 💕", photos: [], videos: [] },
  { title: "Memory 23", message: "Add your message here. 💕", photos: [], videos: [] },
  { title: "Memory 24", message: "Add your message here. 💕", photos: [], videos: [] },
  { title: "Memory 25", message: "Add your message here. 💕", photos: [], videos: [] },
  { title: "Memory 26", message: "Add your message here. 💕", photos: [], videos: [] },
  { title: "Memory 27", message: "Add your message here. 💕", photos: [], videos: [] },
  { title: "Memory 28", message: "Add your message here. 💕", photos: [], videos: [] },
  { title: "Memory 29", message: "Add your message here. 💕", photos: [], videos: [] },
  { title: "Memory 30", message: "Add your message here. 💕", photos: [], videos: [] },
  { title: "Memory 31", message: "Add your message here. 💕", photos: [], videos: [] },
  { title: "Memory 32", message: "Add your message here. 💕", photos: [], videos: [] },
  { title: "Memory 33", message: "Add your message here. 💕", photos: [], videos: [] },
  { title: "Memory 34", message: "Add your message here. 💕", photos: [], videos: [] },
  { title: "Memory 35", message: "Add your message here. 💕", photos: [], videos: [] },
  { title: "Memory 36", message: "Add your message here. 💕", photos: [], videos: [] },
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

  // Memory 2 decorative images
  const memory2DecoHTML = (n === 2) ? `
    <!-- Bottom right: earrings side by side -->
    <div class="m2-deco-group m2-earrings">
      <img src="Images/earringEula.png" class="m2-deco m2-earring-eula" alt="Earring Eula"/>
      <img src="Images/earringIan.png"  class="m2-deco m2-earring-ian"  alt="Earring Ian"/>
    </div>
    <!-- Bottom left: popsicle and icecream side by side -->
    <div class="m2-deco-group m2-treats">
      <div class="treat-wrap">
        <div class="treat-bubble" id="bubblePopsicle">STRAWBERRY CRISP</div>
        <img src="Images/popsicle.png" class="m2-deco m2-popsicle" alt="Popsicle"
             onclick="showTreatBubble('bubblePopsicle')"/>
      </div>
      <div class="treat-wrap">
        <div class="treat-bubble" id="bubbleIcecream">I THINK THIS IS APPLE CRUMBLE</div>
        <img src="Images/icecream.png" class="m2-deco m2-icecream" alt="Ice Cream"
             onclick="showTreatBubble('bubbleIcecream')"/>
      </div>
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
    ${memory2DecoHTML}
  `;

  document.body.appendChild(page);
}

// ── Gallery overlay ──
function openGallery(memoryNumber) {
  const mem    = memories[memoryNumber - 1];
  const photos = mem.photos  || [];
  const videos = mem.videos  || [];
  const folder = `Images/Memories/memory${memoryNumber}/`;

  let tilesHTML = '';

  // ── Photo tiles ──
  tilesHTML += photos.map(filename => {
    const src = folder + filename;
    return `
      <div class="gallery-tile">
        <img src="${src}" alt="${filename}" onclick="openLightbox('${src}')"/>
      </div>`;
  }).join('');

  // ── Video tiles — click to open popup player ──
  tilesHTML += videos.map(filename => {
    const src = folder + filename;
    return `
      <div class="gallery-tile gallery-tile--video" onclick="openVideoPopup('${src}', '${filename}')">
        <div class="video-thumb-wrap">
          <video src="${src}" preload="metadata" muted class="video-thumb"></video>
          <div class="video-play-overlay">
            <div class="video-play-circle">▶</div>
          </div>
          <p class="video-filename">${filename}</p>
        </div>
      </div>`;
  }).join('');

  if (tilesHTML === '') {
    tilesHTML = `<p class="gallery-empty">No photos or videos yet 💕<br/>Add files to:<br/><code>Images/Memories/memory${memoryNumber}/</code><br/>then list them in journey.js</p>`;
  }

  document.getElementById('galleryTitle').innerHTML = mem.title;
  document.getElementById('galleryGrid').innerHTML  = tilesHTML;
  document.getElementById('galleryOverlay').classList.add('open');


}

// ── Video popup player ──
function openVideoPopup(src, filename) {
  const popup = document.getElementById('videoPopup');
  const vid   = document.getElementById('popupVideo');
  const title = document.getElementById('popupVideoTitle');

  title.textContent = filename;
  vid.src = src;
  popup.classList.add('open');
  vid.play();
}

function closeVideoPopup() {
  const popup = document.getElementById('videoPopup');
  const vid   = document.getElementById('popupVideo');
  vid.pause();
  vid.src = '';
  popup.classList.remove('open');
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
  const lbVid = document.getElementById('lightboxVid');
  if (lbVid) { lbVid.pause(); lbVid.src = ''; }
  document.getElementById('lightboxImg').style.display = '';
}

// ── Treat speech bubble (Memory 2) ──
let bubbleTimer = null;
function showTreatBubble(id) {
  // Hide any open bubble first
  document.querySelectorAll('.treat-bubble').forEach(b => b.classList.remove('visible'));
  clearTimeout(bubbleTimer);

  const bubble = document.getElementById(id);
  if (!bubble) return;
  bubble.classList.add('visible');

  // Auto-hide after 2.5s
  bubbleTimer = setTimeout(() => bubble.classList.remove('visible'), 2500);
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

// Close video popup when clicking the dark backdrop
function handleVideoPopupClick(e) {
  if (e.target === document.getElementById('videoPopup')) closeVideoPopup();
}
