/* ===========================
   BEST FRIEND SCRAPBOOK — MAIN SCRIPT
   =========================== */

// ============================================
// ===== CONFIGURATION (EDIT THESE EASILY) ====
// ============================================

const CONFIG = {
    // --- Photo file names (auto-populated from usedpics folder) ---
    photos: [
        "usedpics/WhatsApp Image 2026-11-11 at 3.10.07 AM (1).jpeg",
        "usedpics/WhatsApp Image 2026-11-11 at 3.10.07 AM (2).jpeg",
        "usedpics/WhatsApp Image 2026-11-11 at 3.10.07 AM (3).jpeg",
        "usedpics/WhatsApp Image 2026-11-11 at 3.10.07 AM (4).jpeg",
        "usedpics/WhatsApp Image 2026-11-11 at 3.10.07 AM (5).jpeg",
        "usedpics/WhatsApp Image 2026-11-11 at 3.10.07 AM (6).jpeg",
        "usedpics/WhatsApp Image 2026-11-11 at 3.10.07 AM (7).jpeg",
        "usedpics/WhatsApp Image 2026-11-11 at 3.10.07 AM (8).jpeg",
        "usedpics/WhatsApp Image 2026-11-11 at 3.10.07 AM (9).jpeg",
        "usedpics/WhatsApp Image 2026-11-11 at 3.10.07 AM (10).jpeg",
        "usedpics/WhatsApp Image 2026-11-11 at 3.10.07 AM (11).jpeg",
        "usedpics/WhatsApp Image 2026-11-11 at 3.10.07 AM (12).jpeg",
        "usedpics/WhatsApp Image 2026-11-11 at 3.10.07 AM (13).jpeg",
        "usedpics/WhatsApp Image 2026-11-11 at 3.10.07 AM (14).jpeg",
        "usedpics/WhatsApp Image 2026-11-11 at 3.10.07 AM (15).jpeg",
        "usedpics/WhatsApp Image 2026-11-11 at 3.10.07 AM (16).jpeg",
        "usedpics/WhatsApp Image 2026-11-11 at 3.10.07 AM (17).jpeg",
        "usedpics/WhatsApp Image 2026-11-11 at 3.10.07 AM (18).jpeg"
    ],

    // --- Photo captions for the memory page (Page 6) ---
    memoryCaptions: [
        "A moment I'll never forget 💕",
        "This one always makes me smile 🌸",
        "Pure happiness right here ✨",
        "One of my favorite memories 💗",
        "We really had the best time 🎀",
        "Can't help but smile at this 😊"
    ],

    // --- Photo wall captions ---
    photoWallCaptions: [
        "us 💕", "good times 🌸", "always fun ✨", "the best 💗",
        "cute moment 🎀", "forever this 😊", "my fav 🌷", "iconic 💖",
        "memories 🦋", "so us 💐", "love this 🌸", "the vibes ✨",
        "perfect 💕", "golden days 🌻", "just us 💗", "adorable 🧸",
        "blessed 🌈", "the duo 💖"
    ],

    // --- Letter message (Page 10) ---
    letterMessage: `Dear Best Friend,

I just wanted to take a moment to tell you how grateful I am to have you in my life. 

You're the kind of friend who makes everything better — the one I can be completely myself around, the one who turns random moments into the best memories.

Thank you for all the laughter, all the inside jokes, all the late-night conversations, and all the times you were there when I needed someone.

You make my world a little brighter, and I truly mean that. 💗

Here's to all the amazing moments we've shared and all the ones still to come.`,

    // --- Surprise message (Page 19) ---
    surpriseMessage: "You are genuinely one of the most amazing people I know. Never change who you are, because the world needs exactly your kind of magic. I'm so lucky to call you my best friend. 💗",

    // --- Appreciation cards (Page 7) ---
    appreciations: [
        { emoji: "😊", text: "Your beautiful smile that lights up every room" },
        { emoji: "⚡", text: "Your crazy energy that makes everything fun" },
        { emoji: "💗", text: "Your kindness that makes the world better" },
        { emoji: "🌟", text: "Your unique personality that's one of a kind" },
        { emoji: "🎉", text: "The way you make ordinary moments special" },
        { emoji: "😂", text: "Your amazing sense of humour" },
        { emoji: "🤝", text: "Your friendship that means the world to me" },
        { emoji: "🦋", text: "Your ability to always cheer me up" },
        { emoji: "✨", text: "The way you inspire everyone around you" },
        { emoji: "🌸", text: "Your warmth that makes everyone feel welcome" }
    ],

    // --- Timeline items (Page 8) ---
    timelineItems: [
        { title: "The Beginning ✨", desc: "When our paths first crossed and something clicked.", emoji: "🌱" },
        { title: "The First Memory 💕", desc: "That first moment when I knew we'd be great friends.", emoji: "💫" },
        { title: "The Funniest Moment 😂", desc: "That time we couldn't stop laughing. You know exactly which one.", emoji: "🤣" },
        { title: "The Deep Conversations 💭", desc: "Late nights talking about everything and nothing.", emoji: "🌙" },
        { title: "The Unforgettable Adventures 🌈", desc: "Every adventure is better with you by my side.", emoji: "🗺️" },
        { title: "Today & Always 💗", desc: "Still making memories, still the best duo.", emoji: "🌸" }
    ],

    // --- Inside jokes (Page 9) ---
    insideJokes: [
        { text: "That thing we always say... you know the one 😂", emoji: "🤫" },
        { text: "Remember when... yeah, THAT happened 💀", emoji: "😭" },
        { text: "Our secret code word that no one else gets", emoji: "🔐" },
        { text: "That one look we give each other 👀", emoji: "😏" },
        { text: "The inside joke that started it all", emoji: "🎬" },
        { text: "That song that always reminds us of THAT moment", emoji: "🎵" }
    ],

    // --- Mood messages (Page 13) ---
    moods: [
        { emoji: "🌸", label: "Happy", message: "Yayyy! Happy looks amazing on you! Keep shining like the star you are! ✨🌸" },
        { emoji: "🧸", label: "Sleepy", message: "Go get some rest, cutie! You deserve all the cozy blankets and sweet dreams! 😴💗" },
        { emoji: "🤪", label: "Crazy", message: "YESSS that's the energy! Let's be chaotic together! Nobody does crazy better than you! 🎉" },
        { emoji: "🎀", label: "Dramatic", message: "Main character energy activated! Your dramatic era is iconic and I'm here for it! 👑" },
        { emoji: "🍓", label: "Hungry", message: "Go eat something yummy right now! You deserve the most delicious snack! 🍰🍕" },
        { emoji: "🦋", label: "Confused", message: "It's okay to feel lost sometimes. Remember, I'm always here to help you figure things out! 💕" }
    ],

    // --- This or That questions (Page 14) ---
    thisOrThat: [
        { question: "What do you prefer?", options: ["☕ Coffee", "🍦 Ice Cream"] },
        { question: "Dream destination?", options: ["🏖️ Beach", "🏔️ Mountains"] },
        { question: "Perfect evening?", options: ["🎬 Movies", "🎵 Music"] },
        { question: "Your color vibe?", options: ["💗 Pink", "💜 Purple"] },
        { question: "You are a...", options: ["🦉 Night Owl", "🌅 Early Bird"] },
        { question: "Your energy is...", options: ["🥰 Cute", "🌪️ Chaotic"] },
        { question: "Rainy day vibes?", options: ["📚 Reading", "🎮 Gaming"] },
        { question: "Dream pet?", options: ["🐱 Cat", "🐶 Dog"] }
    ],

    // --- Compliments (Page 15) ---
    compliments: [
        "You're the kind of friend everyone wishes they had! 💗",
        "Your smile could literally cure bad days! 🌸",
        "You're not just special, you're one-of-a-kind! ✨",
        "The world is genuinely better because you're in it! 🌍💕",
        "You radiate the most beautiful energy! 🌈",
        "Being your friend is one of the best things in my life! 💖",
        "You make ordinary moments absolutely extraordinary! 🌟",
        "Your heart is made of pure gold and everyone can see it! 💛",
        "You're stronger than you know and braver than you believe! 🦋",
        "Everything about you is perfectly imperfect and amazing! 🌷",
        "You're the human equivalent of a warm hug! 🤗",
        "Your laugh is literally my favorite sound! 😂💗",
        "You turn chaos into something beautiful! 🎨",
        "You have the most amazing soul and I'm so glad I know you! ✨",
        "You deserve all the happiness in this world and more! 🌻"
    ],

    // --- Open When messages (Page 16) ---
    openWhen: [
        { label: "Open when you're bored", icon: "😴", title: "Hey, Bored One! 😴", message: "If you're bored, just remember all the crazy fun we have together. Also, go watch something fun or text me and we'll make a plan! 🎉" },
        { label: "Open when you need a smile", icon: "😊", title: "Smile Incoming! 😊", message: "You have the most beautiful smile, and the world deserves to see it more often. Here's a reminder that you're amazing and so loved! 💗" },
        { label: "Open when you're feeling low", icon: "🫂", title: "I'm Here For You 🫂", message: "Bad days happen to the best of us. But remember — you're not alone. I'm always just a message away, and nothing is too small or too big to talk about. This too shall pass. 💕" },
        { label: "Open when you want to laugh", icon: "😂", title: "Laugh Break! 😂", message: "Remember our funniest moments together? Yeah, we're absolute chaos and I wouldn't have it any other way. Now go look in the mirror and make a funny face! 🤪" },
        { label: "Open when you miss our memories", icon: "📸", title: "Down Memory Lane 📸", message: "Every moment with you is a core memory. Scroll through our photos, remember the laughs, and know that there are SO many more amazing memories waiting for us! 🌸" }
    ],

    // --- Moodboard notes ---
    moodboardNotes: [
        "forever & always 💗",
        "you're my person 🌸",
        "best memories ✨",
        "so grateful for you 💕",
        "chaos crew 🤪",
        "pink aesthetic vibes 🎀"
    ],

    // --- Music files (add your music to assets/music/) ---
    musicTracks: [
        // { title: "Our Song", artist: "Artist Name", src: "assets/music/song.mp3" }
    ]
};


// ============================================
// ===== STATE =================================
// ============================================

let currentPage = 1;
const totalPages = 20;
let musicPlaying = false;
let lastComplimentIndex = -1;
let totCurrentQuestion = 0;
let totAnswers = [];
let memoryGameCards = [];
let memoryFlipped = [];
let memoryMatched = [];
let memoryMoves = 0;
let memoryLocked = false;

// ============================================
// ===== INITIALIZATION ========================
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initPhotos();
    initPhotoWall();
    initMemoryCards();
    initAppreciation();
    initTimeline();
    initJokes();
    initMoods();
    initThisOrThat();
    initOpenWhen();
    initMoodboard();
    initPhotoCollection();
    initFinalCollage();
    startMemoryGame();
    initFloatingDecorations();
    initMusicPlayer();
    updatePageIndicator();
});


// ============================================
// ===== PAGE NAVIGATION =======================
// ============================================

function goToPage(pageNum) {
    if (pageNum < 1 || pageNum > totalPages) return;

    const currentEl = document.getElementById(`page${currentPage}`);
    const nextEl = document.getElementById(`page${pageNum}`);

    if (!currentEl || !nextEl) return;

    // Fade out current
    currentEl.style.opacity = '0';

    setTimeout(() => {
        currentEl.classList.remove('active');
        currentEl.style.opacity = '';

        // Show new page
        nextEl.classList.add('active');
        nextEl.classList.add('entering');

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'instant' });

        currentPage = pageNum;
        updatePageIndicator();

        // Remove entering class after animation
        setTimeout(() => {
            nextEl.classList.remove('entering');
        }, 600);

        // Page-specific init
        if (pageNum === 14) resetTOT();
    }, 400);
}

function updatePageIndicator() {
    const numEl = document.getElementById('currentPageNum');
    if (numEl) {
        numEl.textContent = String(currentPage).padStart(2, '0');
    }
}


// ============================================
// ===== PHOTO DISTRIBUTION ====================
// ============================================

function getPhoto(index) {
    if (CONFIG.photos.length === 0) return '';
    return CONFIG.photos[index % CONFIG.photos.length];
}

function getShuffledPhotos() {
    const shuffled = [...CONFIG.photos];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}


// ============================================
// ===== PAGE 3: QUESTION PHOTO ================
// ============================================

function initPhotos() {
    const questionPhoto = document.getElementById('questionPhoto');
    if (questionPhoto && CONFIG.photos.length > 0) {
        questionPhoto.src = getPhoto(0);
    }

    const surprisePhoto = document.getElementById('surprisePhoto');
    if (surprisePhoto && CONFIG.photos.length > 1) {
        surprisePhoto.src = getPhoto(CONFIG.photos.length - 1);
    }

    // Letter message
    const letterText = document.getElementById('letterText');
    if (letterText) {
        letterText.textContent = CONFIG.letterMessage;
    }

    // Surprise message
    const surpriseMsg = document.getElementById('surpriseMessage');
    if (surpriseMsg) {
        surpriseMsg.textContent = CONFIG.surpriseMessage;
    }
}


// ============================================
// ===== PAGE 2: NO BUTTON =====================
// ============================================

let noMoveCount = 0;
function moveNoButton(btn) {
    noMoveCount++;
    // Let it escape a few times, then stay
    if (noMoveCount > 4) return;

    const maxX = window.innerWidth < 500 ? 80 : 150;
    const maxY = 60;
    const x = (Math.random() - 0.5) * maxX;
    const y = (Math.random() - 0.5) * maxY;
    btn.style.transform = `translate(${x}px, ${y}px)`;

    setTimeout(() => {
        btn.style.transform = '';
    }, 2000);
}


// ============================================
// ===== PAGE 3: FUNNY MESSAGE =================
// ============================================

function showFunnyMsg() {
    const msg = document.getElementById('funnyMsg');
    if (msg) {
        msg.style.display = 'block';
        setTimeout(() => {
            goToPage(4);
        }, 2000);
    }
}


// ============================================
// ===== PAGE 4: WORLD COLLAGE =================
// ============================================

function initWorldCollage() {
    // Already called inside initPhotos chain — separate function for clarity
}

// Build the collage for page 4
(function buildWorldCollage() {
    document.addEventListener('DOMContentLoaded', () => {
        const container = document.getElementById('worldCollage');
        if (!container) return;

        const photos = CONFIG.photos.slice(0, 4);
        const captions = ["our world 🌎", "memories 💕", "always us ✨", "forever 💗"];

        photos.forEach((photo, i) => {
            const polaroid = document.createElement('div');
            polaroid.className = 'polaroid-frame';
            polaroid.innerHTML = `
                <img src="${photo}" alt="Memory ${i + 1}" loading="lazy">
                <div class="polaroid-caption handwritten">${captions[i] || '💕'}</div>
            `;
            container.appendChild(polaroid);
        });
    });
})();


// ============================================
// ===== PAGE 5: PHOTO WALL ====================
// ============================================

function initPhotoWall() {
    const container = document.getElementById('photoWall');
    if (!container) return;

    const stickers = ['🌸', '💕', '✨', '🎀', '🦋', '💗', '⭐', '🌷', '💖', '🧸', '🌻', '💐', '🌈', '🎵', '💫', '🌺', '🍓', '🐱'];

    CONFIG.photos.forEach((photo, i) => {
        const item = document.createElement('div');
        item.className = 'photo-wall-item';
        item.onclick = () => openLightbox(photo);

        const caption = CONFIG.photoWallCaptions[i] || '💕';
        const sticker = stickers[i % stickers.length];

        item.innerHTML = `
            <div class="polaroid-frame">
                <img src="${photo}" alt="Photo ${i + 1}" loading="lazy">
                <div class="polaroid-caption handwritten">${caption}</div>
            </div>
            <span class="photo-sticker" style="top:-8px;right:-5px">${sticker}</span>
        `;
        container.appendChild(item);
    });
}


// ============================================
// ===== LIGHTBOX ===============================
// ============================================

function openLightbox(src) {
    const lb = document.getElementById('lightbox');
    const img = document.getElementById('lightboxImg');
    if (lb && img) {
        img.src = src;
        lb.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeLightbox() {
    const lb = document.getElementById('lightbox');
    if (lb) {
        lb.classList.remove('active');
        document.body.style.overflow = '';
    }
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
});


// ============================================
// ===== PAGE 6: MEMORY CARDS ==================
// ============================================

function initMemoryCards() {
    const container = document.getElementById('memoryCards');
    if (!container) return;

    const photos = CONFIG.photos.slice(4, 10);
    const captions = CONFIG.memoryCaptions;

    photos.forEach((photo, i) => {
        const card = document.createElement('div');
        card.className = 'memory-card';
        card.innerHTML = `
            <img src="${photo}" alt="Memory ${i + 1}" loading="lazy" onclick="openLightbox('${photo}')">
            <div class="memory-card-content">
                <p>${captions[i % captions.length]}</p>
            </div>
            <div class="memory-card-deco">🌸 💕</div>
        `;
        container.appendChild(card);
    });
}


// ============================================
// ===== PAGE 7: APPRECIATION ==================
// ============================================

function initAppreciation() {
    const container = document.getElementById('appreciationGrid');
    if (!container) return;

    CONFIG.appreciations.forEach((item, i) => {
        const card = document.createElement('div');
        card.className = 'appreciation-card';
        card.onclick = () => {
            card.classList.add('card-clicked');
            setTimeout(() => card.classList.remove('card-clicked'), 400);
        };
        card.innerHTML = `
            <span class="card-emoji">${item.emoji}</span>
            <p class="card-text">${item.text}</p>
        `;
        card.style.animationDelay = `${i * 0.1}s`;
        container.appendChild(card);
    });
}


// ============================================
// ===== PAGE 8: TIMELINE ======================
// ============================================

function initTimeline() {
    const container = document.getElementById('timeline');
    if (!container) return;

    const photos = CONFIG.photos.slice(10, 16);

    CONFIG.timelineItems.forEach((item, i) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';

        const hasPhoto = photos[i] ? `<img src="${photos[i]}" alt="Timeline" loading="lazy" onclick="openLightbox('${photos[i]}')">` : '';

        timelineItem.innerHTML = `
            <div class="timeline-dot">${item.emoji}</div>
            <div class="timeline-content">
                <h3>${item.title}</h3>
                <p>${item.desc}</p>
                ${hasPhoto}
            </div>
        `;
        container.appendChild(timelineItem);
    });
}


// ============================================
// ===== PAGE 9: INSIDE JOKES ==================
// ============================================

function initJokes() {
    const container = document.getElementById('jokesBoard');
    if (!container) return;

    CONFIG.insideJokes.forEach((joke) => {
        const sticky = document.createElement('div');
        sticky.className = 'joke-sticky';
        sticky.onclick = () => {
            sticky.classList.add('card-clicked');
            setTimeout(() => sticky.classList.remove('card-clicked'), 400);
        };
        sticky.innerHTML = `
            <span class="joke-pin">📌</span>
            <span class="joke-emoji">${joke.emoji}</span>
            <span>${joke.text}</span>
        `;
        container.appendChild(sticky);
    });
}


// ============================================
// ===== PAGE 10: ENVELOPE =====================
// ============================================

function openEnvelope() {
    const envelope = document.getElementById('envelope');
    const btn = document.getElementById('openLetterBtn');
    const content = document.getElementById('letterContent');
    const container = document.getElementById('envelopeContainer');

    if (envelope) envelope.classList.add('opened');
    if (btn) btn.style.display = 'none';

    setTimeout(() => {
        if (container) container.style.display = 'none';
        if (content) content.style.display = 'block';
    }, 800);
}


// ============================================
// ===== PAGE 11: PHOTO COLLECTION =============
// ============================================

function initPhotoCollection() {
    const container = document.getElementById('photoCollection');
    if (!container) return;

    const shuffled = getShuffledPhotos();
    const magPhotos = shuffled.slice(0, 5);
    const filmPhotos = shuffled.slice(5, 12);
    const polaroidPhotos = shuffled.slice(12, 18);

    // Magazine grid
    const magSection = document.createElement('div');
    magSection.className = 'collection-section';
    magSection.innerHTML = `<h3>Magazine Style 📰</h3>`;
    const magGrid = document.createElement('div');
    magGrid.className = 'magazine-grid';
    magPhotos.forEach((photo) => {
        const item = document.createElement('div');
        item.className = 'mag-item';
        item.innerHTML = `<img src="${photo}" alt="Photo" loading="lazy" onclick="openLightbox('${photo}')">`;
        magGrid.appendChild(item);
    });
    magSection.appendChild(magGrid);
    container.appendChild(magSection);

    // Film strip
    const filmSection = document.createElement('div');
    filmSection.className = 'collection-section';
    filmSection.innerHTML = `<h3>Film Reel 🎞️</h3>`;
    const filmStrip = document.createElement('div');
    filmStrip.className = 'film-strip';
    const filmCaptions = ["scene 1", "scene 2", "scene 3", "scene 4", "scene 5", "scene 6", "scene 7"];
    filmPhotos.forEach((photo, i) => {
        const frame = document.createElement('div');
        frame.className = 'film-frame';
        frame.innerHTML = `
            <img src="${photo}" alt="Film ${i + 1}" loading="lazy" onclick="openLightbox('${photo}')">
            <div class="film-caption">${filmCaptions[i] || '🎬'}</div>
        `;
        filmStrip.appendChild(frame);
    });
    filmSection.appendChild(filmStrip);
    container.appendChild(filmSection);

    // Polaroid row
    if (polaroidPhotos.length > 0) {
        const polSection = document.createElement('div');
        polSection.className = 'collection-section';
        polSection.innerHTML = `<h3>Polaroids 📸</h3>`;
        const polRow = document.createElement('div');
        polRow.className = 'polaroid-row';
        const polCaptions = ["fav 💕", "cute 🌸", "iconic ✨", "best 💗", "us 🎀", "forever 🌷"];
        polaroidPhotos.forEach((photo, i) => {
            const polaroid = document.createElement('div');
            polaroid.className = 'polaroid-frame';
            polaroid.innerHTML = `
                <img src="${photo}" alt="Polaroid ${i + 1}" loading="lazy" onclick="openLightbox('${photo}')">
                <div class="polaroid-caption handwritten">${polCaptions[i] || '💕'}</div>
            `;
            polRow.appendChild(polaroid);
        });
        polSection.appendChild(polRow);
        container.appendChild(polSection);
    }
}


// ============================================
// ===== PAGE 12: MUSIC PLAYER =================
// ============================================

let audioPlayer = null;
let currentTrack = 0;

function initMusicPlayer() {
    audioPlayer = document.getElementById('pageAudio');
    const volumeSlider = document.getElementById('volumeSlider');
    const progressContainer = document.getElementById('progressContainer');

    if (volumeSlider) {
        volumeSlider.addEventListener('input', (e) => {
            if (audioPlayer) audioPlayer.volume = e.target.value / 100;
        });
    }

    if (progressContainer) {
        progressContainer.addEventListener('click', (e) => {
            if (!audioPlayer || !audioPlayer.duration) return;
            const rect = progressContainer.getBoundingClientRect();
            const pos = (e.clientX - rect.left) / rect.width;
            audioPlayer.currentTime = pos * audioPlayer.duration;
        });
    }

    if (audioPlayer) {
        audioPlayer.addEventListener('timeupdate', updateProgress);
        audioPlayer.addEventListener('ended', nextTrack);
    }

    loadTrack(0);

    // Global music button
    const globalBtn = document.getElementById('globalMusicBtn');
    if (globalBtn) {
        globalBtn.addEventListener('click', toggleGlobalMusic);
    }
}

function loadTrack(index) {
    if (CONFIG.musicTracks.length === 0) return;
    currentTrack = index % CONFIG.musicTracks.length;
    const track = CONFIG.musicTracks[currentTrack];

    const titleEl = document.getElementById('songTitle');
    const artistEl = document.getElementById('songArtist');

    if (titleEl) titleEl.textContent = track.title;
    if (artistEl) artistEl.textContent = track.artist;
    if (audioPlayer) {
        audioPlayer.src = track.src;
    }
}

function togglePlay() {
    if (!audioPlayer || CONFIG.musicTracks.length === 0) return;

    const btn = document.getElementById('playPauseBtn');
    const vinyl = document.querySelector('.vinyl-record');

    if (audioPlayer.paused) {
        audioPlayer.play();
        if (btn) btn.textContent = '⏸';
        if (vinyl) vinyl.classList.add('spinning');
    } else {
        audioPlayer.pause();
        if (btn) btn.textContent = '▶';
        if (vinyl) vinyl.classList.remove('spinning');
    }
}

function nextTrack() {
    if (CONFIG.musicTracks.length === 0) return;
    loadTrack(currentTrack + 1);
    audioPlayer.play();
    document.getElementById('playPauseBtn').textContent = '⏸';
    document.querySelector('.vinyl-record')?.classList.add('spinning');
}

function prevTrack() {
    if (CONFIG.musicTracks.length === 0) return;
    loadTrack(currentTrack - 1 + CONFIG.musicTracks.length);
    audioPlayer.play();
    document.getElementById('playPauseBtn').textContent = '⏸';
    document.querySelector('.vinyl-record')?.classList.add('spinning');
}

function updateProgress() {
    if (!audioPlayer || !audioPlayer.duration) return;
    const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    const bar = document.getElementById('progressBar');
    if (bar) bar.style.width = progress + '%';

    const currentTimeEl = document.getElementById('currentTime');
    const totalTimeEl = document.getElementById('totalTime');
    if (currentTimeEl) currentTimeEl.textContent = formatTime(audioPlayer.currentTime);
    if (totalTimeEl) totalTimeEl.textContent = formatTime(audioPlayer.duration);
}

function formatTime(seconds) {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}


// ============================================
// ===== GLOBAL MUSIC ==========================
// ============================================

function toggleGlobalMusic() {
    const globalAudio = document.getElementById('globalAudio');
    const btn = document.getElementById('globalMusicBtn');
    const musicIcon = btn?.querySelector('.music-icon');
    const muteIcon = btn?.querySelector('.music-mute-icon');

    if (!globalAudio) return;

    if (musicPlaying) {
        globalAudio.pause();
        musicPlaying = false;
        btn?.classList.remove('playing');
        if (musicIcon) musicIcon.style.display = 'none';
        if (muteIcon) muteIcon.style.display = 'block';
    } else {
        globalAudio.play().catch(() => {});
        musicPlaying = true;
        btn?.classList.add('playing');
        if (musicIcon) musicIcon.style.display = 'block';
        if (muteIcon) muteIcon.style.display = 'none';
    }
}


// ============================================
// ===== PAGE 13: MOOD =========================
// ============================================

function initMoods() {
    const container = document.getElementById('moodGrid');
    if (!container) return;

    CONFIG.moods.forEach((mood, i) => {
        const btn = document.createElement('div');
        btn.className = 'mood-btn';
        btn.onclick = () => selectMood(i);
        btn.innerHTML = `
            <span class="mood-emoji">${mood.emoji}</span>
            <span>${mood.label}</span>
        `;
        container.appendChild(btn);
    });
}

function selectMood(index) {
    const grid = document.getElementById('moodGrid');
    const msgContainer = document.getElementById('moodMessage');
    const result = document.getElementById('moodResult');

    if (grid) grid.style.display = 'none';
    if (msgContainer) msgContainer.style.display = 'block';
    if (result) result.textContent = CONFIG.moods[index].message;

    createSparkles(5);
}

function resetMood() {
    const grid = document.getElementById('moodGrid');
    const msgContainer = document.getElementById('moodMessage');
    if (grid) grid.style.display = 'grid';
    if (msgContainer) msgContainer.style.display = 'none';
}


// ============================================
// ===== PAGE 14: THIS OR THAT =================
// ============================================

function initThisOrThat() {
    totCurrentQuestion = 0;
    totAnswers = [];
    showTOTQuestion();
}

function showTOTQuestion() {
    if (totCurrentQuestion >= CONFIG.thisOrThat.length) {
        showTOTResults();
        return;
    }

    const q = CONFIG.thisOrThat[totCurrentQuestion];
    const questionEl = document.getElementById('totQuestion');
    const btn1 = document.getElementById('totBtn1');
    const btn2 = document.getElementById('totBtn2');
    const progressEl = document.getElementById('totProgress');
    const container = document.getElementById('totContainer');
    const resultEl = document.getElementById('totResult');

    if (container) container.style.display = 'block';
    if (resultEl) resultEl.style.display = 'none';
    if (questionEl) questionEl.textContent = q.question;
    if (btn1) btn1.textContent = q.options[0];
    if (btn2) btn2.textContent = q.options[1];
    if (progressEl) progressEl.textContent = `Question ${totCurrentQuestion + 1} of ${CONFIG.thisOrThat.length}`;
}

function chooseTOT(optionIndex) {
    const q = CONFIG.thisOrThat[totCurrentQuestion];
    totAnswers.push({
        question: q.question,
        chosen: q.options[optionIndex]
    });
    totCurrentQuestion++;
    showTOTQuestion();
}

function showTOTResults() {
    const container = document.getElementById('totContainer');
    const resultEl = document.getElementById('totResult');
    const listEl = document.getElementById('totResultList');

    if (container) container.style.display = 'none';
    if (resultEl) resultEl.style.display = 'block';

    if (listEl) {
        listEl.innerHTML = '';
        totAnswers.forEach(a => {
            const item = document.createElement('div');
            item.className = 'tot-result-item';
            item.innerHTML = `
                <span>${a.question}</span>
                <span class="chosen">${a.chosen}</span>
            `;
            listEl.appendChild(item);
        });
    }

    createConfetti();
}

function resetTOT() {
    totCurrentQuestion = 0;
    totAnswers = [];
    showTOTQuestion();
}


// ============================================
// ===== PAGE 15: COMPLIMENT ===================
// ============================================

function generateCompliment() {
    let index;
    do {
        index = Math.floor(Math.random() * CONFIG.compliments.length);
    } while (index === lastComplimentIndex && CONFIG.compliments.length > 1);

    lastComplimentIndex = index;
    const textEl = document.getElementById('complimentText');
    if (textEl) {
        textEl.innerHTML = `<p class="handwritten" style="animation: bounceIn 0.5s ease">${CONFIG.compliments[index]}</p>`;
    }

    createSparkles(10);
}

function createSparkles(count) {
    const container = document.getElementById('sparkleContainer');
    if (!container) return;

    const sparkleEmojis = ['✨', '⭐', '💫', '🌟', '💗', '🌸', '💖'];

    for (let i = 0; i < count; i++) {
        const sparkle = document.createElement('span');
        sparkle.className = 'sparkle';
        sparkle.textContent = sparkleEmojis[Math.floor(Math.random() * sparkleEmojis.length)];
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.animationDelay = Math.random() * 0.5 + 's';
        container.appendChild(sparkle);

        setTimeout(() => sparkle.remove(), 2000);
    }
}


// ============================================
// ===== PAGE 16: OPEN WHEN ====================
// ============================================

function initOpenWhen() {
    const container = document.getElementById('openWhenGrid');
    if (!container) return;

    CONFIG.openWhen.forEach((item, i) => {
        const envelope = document.createElement('div');
        envelope.className = 'openwhen-envelope';
        envelope.onclick = () => showOpenWhen(i);
        envelope.innerHTML = `
            <span class="envelope-icon">${item.icon}</span>
            <span class="envelope-label">${item.label}</span>
        `;
        container.appendChild(envelope);
    });
}

function showOpenWhen(index) {
    const item = CONFIG.openWhen[index];
    const modal = document.getElementById('openWhenModal');
    const title = document.getElementById('openWhenTitle');
    const message = document.getElementById('openWhenMessage');

    if (title) title.textContent = item.title;
    if (message) message.textContent = item.message;
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

function closeOpenWhen() {
    const modal = document.getElementById('openWhenModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
}


// ============================================
// ===== PAGE 17: MOODBOARD ====================
// ============================================

function initMoodboard() {
    const container = document.getElementById('moodboardGrid');
    if (!container) return;

    const shuffled = getShuffledPhotos();
    const decoEmojis = ['🌸', '🎀', '💕', '🦋', '✨', '🌷', '🧸', '💗'];
    const notes = CONFIG.moodboardNotes;
    let photoIndex = 0;
    let noteIndex = 0;

    // Create a Pinterest-like grid
    const items = [];

    // Add photos
    shuffled.slice(0, 8).forEach((photo) => {
        items.push({ type: 'photo', src: photo });
    });

    // Add decorative items
    decoEmojis.slice(0, 4).forEach(emoji => {
        items.push({ type: 'deco', emoji });
    });

    // Add notes
    notes.slice(0, 4).forEach(note => {
        items.push({ type: 'note', text: note });
    });

    // Shuffle
    for (let i = items.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [items[i], items[j]] = [items[j], items[i]];
    }

    items.forEach((item, i) => {
        const div = document.createElement('div');

        if (item.type === 'photo') {
            div.className = 'moodboard-item' + (i % 5 === 0 ? ' span-2' : '') + (i % 7 === 0 ? ' span-row-2' : '');
            div.innerHTML = `<img src="${item.src}" alt="Moodboard" loading="lazy" onclick="openLightbox('${item.src}')">`;
        } else if (item.type === 'deco') {
            div.className = 'moodboard-item moodboard-deco';
            div.textContent = item.emoji;
        } else {
            div.className = 'moodboard-item moodboard-note';
            div.innerHTML = `<p>${item.text}</p>`;
        }

        container.appendChild(div);
    });
}


// ============================================
// ===== PAGE 18: MEMORY GAME ==================
// ============================================

const gameEmojis = ['🌸', '💗', '🦋', '✨', '🎀', '🌷', '🧸', '💐'];

function startMemoryGame() {
    const board = document.getElementById('gameBoard');
    const congrats = document.getElementById('gameCongrats');
    if (!board) return;

    // Reset
    board.innerHTML = '';
    memoryMoves = 0;
    memoryFlipped = [];
    memoryMatched = [];
    memoryLocked = false;
    if (congrats) congrats.style.display = 'none';

    const moveCountEl = document.getElementById('moveCount');
    const pairCountEl = document.getElementById('pairCount');
    if (moveCountEl) moveCountEl.textContent = '0';
    if (pairCountEl) pairCountEl.textContent = '0';

    // Create pairs
    const pairs = [...gameEmojis, ...gameEmojis];
    // Shuffle
    for (let i = pairs.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pairs[i], pairs[j]] = [pairs[j], pairs[i]];
    }

    memoryGameCards = pairs;

    pairs.forEach((emoji, i) => {
        const card = document.createElement('div');
        card.className = 'game-card';
        card.dataset.index = i;
        card.dataset.emoji = emoji;
        card.onclick = () => flipCard(i);
        card.innerHTML = `
            <div class="game-card-inner">
                <div class="game-card-front">🎀</div>
                <div class="game-card-back">${emoji}</div>
            </div>
        `;
        board.appendChild(card);
    });
}

function flipCard(index) {
    if (memoryLocked) return;
    const cards = document.querySelectorAll('.game-card');
    const card = cards[index];

    if (!card || card.classList.contains('flipped') || card.classList.contains('matched')) return;
    if (memoryFlipped.length >= 2) return;

    card.classList.add('flipped');
    memoryFlipped.push(index);

    if (memoryFlipped.length === 2) {
        memoryMoves++;
        document.getElementById('moveCount').textContent = memoryMoves;

        const [i1, i2] = memoryFlipped;
        const emoji1 = memoryGameCards[i1];
        const emoji2 = memoryGameCards[i2];

        if (emoji1 === emoji2) {
            // Match!
            cards[i1].classList.add('matched');
            cards[i2].classList.add('matched');
            memoryMatched.push(emoji1);
            document.getElementById('pairCount').textContent = memoryMatched.length;
            memoryFlipped = [];

            if (memoryMatched.length === gameEmojis.length) {
                setTimeout(() => {
                    const congrats = document.getElementById('gameCongrats');
                    const finalMoves = document.getElementById('finalMoves');
                    if (congrats) congrats.style.display = 'block';
                    if (finalMoves) finalMoves.textContent = memoryMoves;
                    createConfetti();
                }, 500);
            }
        } else {
            memoryLocked = true;
            setTimeout(() => {
                cards[i1].classList.remove('flipped');
                cards[i2].classList.remove('flipped');
                memoryFlipped = [];
                memoryLocked = false;
            }, 800);
        }
    }
}


// ============================================
// ===== PAGE 19: GIFT =========================
// ============================================

function openGift() {
    const giftBox = document.getElementById('giftBox');
    const giftBtn = document.getElementById('giftBtn');
    const giftContainer = document.getElementById('giftContainer');
    const reveal = document.getElementById('surpriseReveal');

    if (giftBox) giftBox.classList.add('opened');
    if (giftBtn) giftBtn.style.display = 'none';

    // Create floating hearts
    createSurpriseHearts();

    setTimeout(() => {
        if (giftContainer) giftContainer.style.display = 'none';
        if (reveal) reveal.style.display = 'block';
        createConfetti();
    }, 1200);
}

function createSurpriseHearts() {
    const container = document.getElementById('surpriseHearts');
    if (!container) return;

    const heartEmojis = ['💗', '💕', '💖', '✨', '🌸', '⭐', '💫', '🎀'];

    for (let i = 0; i < 30; i++) {
        const heart = document.createElement('span');
        heart.className = 'surprise-heart-float';
        heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = 50 + Math.random() * 50 + '%';
        heart.style.animationDelay = Math.random() * 2 + 's';
        heart.style.fontSize = (1 + Math.random() * 1.5) + 'rem';
        container.appendChild(heart);

        setTimeout(() => heart.remove(), 5000);
    }
}


// ============================================
// ===== PAGE 20: FINAL COLLAGE ================
// ============================================

function initFinalCollage() {
    const container = document.getElementById('finalCollage');
    if (!container) return;

    const shuffled = getShuffledPhotos();
    const finalPhotos = shuffled.slice(0, Math.min(6, shuffled.length));

    finalPhotos.forEach((photo, i) => {
        const polaroid = document.createElement('div');
        polaroid.className = 'polaroid-frame';
        polaroid.innerHTML = `
            <img src="${photo}" alt="Final ${i + 1}" loading="lazy" onclick="openLightbox('${photo}')">
            <div class="polaroid-caption handwritten">💗</div>
        `;
        container.appendChild(polaroid);
    });
}


// ============================================
// ===== FLOATING DECORATIONS ==================
// ============================================

function initFloatingDecorations() {
    const container = document.getElementById('floatingDecorations');
    if (!container) return;

    const decos = ['🌸', '💕', '✨', '🦋', '⭐', '💗', '🎀', '🌷'];

    setInterval(() => {
        if (document.hidden) return;

        const deco = document.createElement('span');
        deco.className = 'floating-deco';
        deco.textContent = decos[Math.floor(Math.random() * decos.length)];
        deco.style.left = Math.random() * 100 + '%';
        deco.style.animationDuration = (6 + Math.random() * 6) + 's';
        deco.style.fontSize = (0.8 + Math.random() * 0.8) + 'rem';
        container.appendChild(deco);

        setTimeout(() => deco.remove(), 12000);
    }, 3000);
}


// ============================================
// ===== CONFETTI ==============================
// ============================================

function createConfetti() {
    const colors = ['#FCE4EC', '#F8D7E3', '#EFB6C8', '#F48FB1', '#FFB6C1', '#FFD1DC', '#FFF0F5'];

    for (let i = 0; i < 40; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti-piece';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 2 + 's';
        confetti.style.animationDuration = (2 + Math.random() * 2) + 's';
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
        confetti.style.width = (6 + Math.random() * 8) + 'px';
        confetti.style.height = (6 + Math.random() * 8) + 'px';
        document.body.appendChild(confetti);

        setTimeout(() => confetti.remove(), 5000);
    }
}
