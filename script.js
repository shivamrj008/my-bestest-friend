/* ===========================
   BEST FRIEND SCRAPBOOK — MAIN SCRIPT
   =========================== */

// ============================================
// ===== CONFIGURATION (EASILY CUSTOMIZABLE) ==
// ============================================

const CONFIG = {
    // --- Scanned photos from usedpics folder ---
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

    // --- Identified Local Music Track ---
    music: {
        title: "Our Special Song 🎶",
        artist: "For My Best Friend 💗",
        src: "assets/music/%F0%9F%8E%B6.mp3",
        fallbackSrc: "assets/music/🎶.mp3"
    },

    // --- Memory Captions (Page 6) ---
    memoryCaptions: [
        "A moment I'll never forget 💕",
        "This one always makes me smile 🌸",
        "Pure happiness right here ✨",
        "One of my favorite memories 💗",
        "We really had the best time 🎀",
        "Can't help but smile at this 😊"
    ],

    // --- Photo Wall Captions (Page 5) ---
    photoWallCaptions: [
        "us 💕", "good times 🌸", "always fun ✨", "the best 💗",
        "cute moment 🎀", "forever this 😊", "my fav 🌷", "iconic 💖",
        "memories 🦋", "so us 💐", "love this 🌸", "the vibes ✨",
        "perfect 💕", "golden days 🌻", "just us 💗", "adorable 🧸",
        "blessed 🌈", "the duo 💖"
    ],

    // --- Letter Message (Page 10) ---
    letterMessage: `Dear Best Friend,

I just wanted to take a moment to tell you how truly grateful I am to have you in my life.

You're the kind of friend who makes everything better — the one I can be completely myself around, the one who turns ordinary days into the best memories.

Thank you for all the laughter, the crazy inside jokes, the late-night talks, and all the times you were there when I needed someone.

You make my world so much brighter, and I genuinely mean that. 💗

Here's to all the unforgettable memories we've shared, and to the countless more adventures still waiting for us!`,

    // --- Surprise Message (Page 19) ---
    surpriseMessage: "You are genuinely one of the most incredible people I know. Never change who you are, because the world needs exactly your kind of magic. I'm so lucky to call you my best friend. 💗",

    // --- Appreciation Cards (Page 7) ---
    appreciations: [
        { emoji: "😊", text: "Your beautiful smile that lights up every room" },
        { emoji: "⚡", text: "Your crazy energy that makes everything an adventure" },
        { emoji: "💗", text: "Your kindness that makes the world a warmer place" },
        { emoji: "🌟", text: "Your unique personality that's truly one of a kind" },
        { emoji: "🎉", text: "The way you make ordinary moments feel like a party" },
        { emoji: "😂", text: "Your hilarious sense of humour" },
        { emoji: "🤝", text: "Your unwavering friendship that means the world to me" },
        { emoji: "🦋", text: "Your ability to instantly cheer me up on tough days" },
        { emoji: "✨", text: "The way you inspire everyone around you to be real" },
        { emoji: "🌸", text: "Your warmth that makes everyone feel loved and valued" }
    ],

    // --- Timeline Milestones (Page 8) ---
    timelineItems: [
        { title: "The Beginning ✨", desc: "When our paths first crossed and friendship instantly clicked.", emoji: "🌱" },
        { title: "The First Core Memory 💕", desc: "That moment when I knew you'd be a friend for life.", emoji: "💫" },
        { title: "The Funniest Moment 😂", desc: "That uncontrollable laughter until our stomachs hurt.", emoji: "🤣" },
        { title: "Deep Conversations 💭", desc: "Talking about life, dreams, and everything under the stars.", emoji: "🌙" },
        { title: "Unforgettable Adventures 🌈", desc: "Every adventure is ten times better with you.", emoji: "🗺️" },
        { title: "Today & Always 💗", desc: "Still making memories, still the undisputed dream duo.", emoji: "🌸" }
    ],

    // --- Inside Jokes (Page 9) ---
    insideJokes: [
        { text: "That thing we always say... you know the one 😂", emoji: "🤫" },
        { text: "Remember when... yeah, THAT actually happened 💀", emoji: "😭" },
        { text: "Our secret code word that literally no one else gets", emoji: "🔐" },
        { text: "That one look we give each other across the room 👀", emoji: "😏" },
        { text: "The inside joke that started from a typo 🎬", emoji: "💬" },
        { text: "That song that always reminds us of THAT chaotic day", emoji: "🎵" }
    ],

    // --- Mood Responses (Page 13) ---
    moods: [
        { emoji: "🌸", label: "Happy", message: "Yayyy! Happy looks absolutely radiant on you! Keep shining like the superstar you are! ✨🌸" },
        { emoji: "🧸", label: "Sleepy", message: "Go get cozy and rest, cutie! You deserve all the soft blankets, hot cocoa, and sweet dreams! 😴💗" },
        { emoji: "🤪", label: "Crazy", message: "YESSS that's the spirit! Let's be totally chaotic together! Nobody does fun better than you! 🎉" },
        { emoji: "🎀", label: "Dramatic", message: "Main character energy activated! Your dramatic era is 100% iconic and I'm living for it! 👑" },
        { emoji: "🍓", label: "Hungry", message: "Go treat yourself to something delicious right now! You deserve the tastiest snacks! 🍰🍕" },
        { emoji: "🦋", label: "Confused", message: "It's okay to feel overwhelmed sometimes. Remember, I'm always just one message away! 💕" }
    ],

    // --- This or That (Page 14) ---
    thisOrThat: [
        { question: "What do you prefer?", options: ["☕ Coffee", "🍦 Ice Cream"] },
        { question: "Dream getaway?", options: ["🏖️ Beach", "🏔️ Mountains"] },
        { question: "Perfect chill evening?", options: ["🎬 Movies", "🎵 Music"] },
        { question: "Your aesthetic color?", options: ["💗 Pink", "💜 Purple"] },
        { question: "Your internal clock?", options: ["🦉 Night Owl", "🌅 Early Bird"] },
        { question: "Your core vibe?", options: ["🥰 Cute", "🌪️ Chaotic"] },
        { question: "Cozy rainy day?", options: ["📚 Reading", "🎮 Gaming / Bingeing"] },
        { question: "Dream pet companion?", options: ["🐱 Cat", "🐶 Dog"] }
    ],

    // --- Compliments (Page 15) ---
    compliments: [
        "You're the kind of friend everyone wishes they had! 💗",
        "Your smile could literally cure a bad week! 🌸",
        "You're not just special, you're genuinely one-of-a-kind! ✨",
        "The world is undeniably better because you're in it! 🌍💕",
        "You radiate the warmest, most contagious positive energy! 🌈",
        "Being your best friend is one of my greatest blessings! 💖",
        "You turn ordinary moments into unforgettable memories! 🌟",
        "Your heart is made of pure gold and everyone can see it! 💛",
        "You're stronger than you know and braver than you think! 🦋",
        "Everything about your personality is wonderfully authentic! 🌷",
        "You're the human equivalent of a warm, comforting hug! 🤗",
        "Your laugh is quite literally my favorite sound in the world! 😂💗",
        "You make everyone around you feel valued and understood! ✨",
        "You deserve all the happiness this world has to offer and more! 🌻"
    ],

    // --- Open When Messages (Page 16) ---
    openWhen: [
        { label: "Open when you're bored", icon: "😴", title: "Hey, Bored One! 😴", message: "If boredom is hitting you, just recall our funniest moments or text me immediately — we'll create a ridiculous plan or talk about nonsense for hours! 🎉" },
        { label: "Open when you need a smile", icon: "😊", title: "Smile Incoming! 😊", message: "You have the most gorgeous smile, and the world deserves to see it every single day. Here's your official reminder that you are deeply appreciated and loved! 💗" },
        { label: "Open when you're feeling low", icon: "🫂", title: "I'm Right Here For You 🫂", message: "Tough days happen to the best of us, but you never have to go through them alone. I am always in your corner, no matter what. Take a deep breath — this stormy day will pass. 💕" },
        { label: "Open when you want to laugh", icon: "😂", title: "Instant Laughs! 😂", message: "Think of our most chaotic misadventures! We've made absolute fools of ourselves and owned every single second. Go look in the mirror and make our signature silly face! 🤪" },
        { label: "Open when you miss our memories", icon: "📸", title: "Down Memory Lane 📸", message: "Every single photograph here is a core memory stamped into my heart. Remember all the smiles we shared, and know that so many more chapters are waiting for us! 🌸" }
    ],

    // --- Moodboard Notes (Page 17) ---
    moodboardNotes: [
        "forever & always 💗",
        "you're my person 🌸",
        "best memories ✨",
        "so grateful for you 💕",
        "chaos crew 🤪",
        "pink aesthetic vibes 🎀"
    ]
};


// ============================================
// ===== STATE MANAGEMENT =====================
// ============================================

let currentPage = 1;
const totalPages = 20;

let masterAudio = null;
let isAudioPlaying = false;
let isAudioMuted = false;
let currentVolume = 0.75;

let lastComplimentIndex = -1;
let totCurrentQuestion = 0;
let totAnswers = [];

let memoryGameCards = [];
let memoryFlipped = [];
let memoryMatched = [];
let memoryMoves = 0;
let memoryLocked = false;


// ============================================
// ===== INITIALIZATION ON DOM READY ==========
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initThemeManager();
    initMasterAudio();
    initGlobalSettings();
    initPhotosAndCaptions();
    initPhotoWall();
    initMemoryCards();
    initAppreciationCards();
    initTimeline();
    initJokesBoard();
    initMoodSelector();
    initThisOrThat();
    initOpenWhen();
    initMoodboard();
    initPhotoCollection();
    initFinalCollage();
    startMemoryGame();
    initFloatingDecorations();
    updatePageIndicator();
});


// ============================================
// ===== THEME MANAGER (DARK / LIGHT MODE) ====
// ============================================

function initThemeManager() {
    const savedTheme = localStorage.getItem('friendship_site_theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');

    applyTheme(initialTheme, false);

    const themeToggleBtn = document.getElementById('themeToggleBtn');
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', toggleTheme);
    }
}

function applyTheme(theme, save = true) {
    document.documentElement.setAttribute('data-theme', theme);
    if (save) {
        try {
            localStorage.setItem('friendship_site_theme', theme);
        } catch (e) {}
    }

    const themeIcon = document.getElementById('themeIcon');
    if (themeIcon) {
        // In dark mode, show sun to switch to light; in light mode, show moon to switch to dark
        themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
}

function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    const nextTheme = current === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme, true);
}


// ============================================
// ===== MASTER AUDIO & PERSISTENT MUSIC ======
// ============================================

function initMasterAudio() {
    masterAudio = document.getElementById('globalAudio');
    if (!masterAudio) return;

    // Load saved volume
    try {
        const savedVol = localStorage.getItem('friendship_site_vol');
        if (savedVol !== null) {
            currentVolume = parseFloat(savedVol);
        }
        const savedMute = localStorage.getItem('friendship_site_mute');
        if (savedMute === 'true') {
            isAudioMuted = true;
        }
    } catch (e) {}

    masterAudio.volume = currentVolume;
    masterAudio.muted = isAudioMuted;

    // Sync volume sliders
    const miniVolSlider = document.getElementById('miniVolumeSlider');
    const pageVolSlider = document.getElementById('volumeSlider');
    if (miniVolSlider) miniVolSlider.value = Math.round(currentVolume * 100);
    if (pageVolSlider) pageVolSlider.value = Math.round(currentVolume * 100);

    updateMuteIcons();

    // Volume Slider Event Listeners
    if (miniVolSlider) {
        miniVolSlider.addEventListener('input', (e) => {
            setMasterVolume(e.target.value / 100);
        });
    }
    if (pageVolSlider) {
        pageVolSlider.addEventListener('input', (e) => {
            setMasterVolume(e.target.value / 100);
        });
    }

    // Progress Bar Seeking - Mini Player
    const miniProgressContainer = document.getElementById('miniProgressContainer');
    if (miniProgressContainer) {
        miniProgressContainer.addEventListener('click', seekAudio);
    }

    // Progress Bar Seeking - Page 12 Player
    const pageProgressContainer = document.getElementById('progressContainer');
    if (pageProgressContainer) {
        pageProgressContainer.addEventListener('click', seekAudio);
    }

    // Audio State Event Listeners
    masterAudio.addEventListener('timeupdate', updateAudioProgress);
    masterAudio.addEventListener('play', () => setAudioPlayState(true));
    masterAudio.addEventListener('pause', () => setAudioPlayState(false));
    masterAudio.addEventListener('ended', () => {
        masterAudio.currentTime = 0;
        masterAudio.play().catch(() => {});
    });

    // Populate song titles
    const titleEl = document.getElementById('songTitle');
    const miniTitleEl = document.getElementById('miniTrackTitle');
    if (titleEl) titleEl.textContent = CONFIG.music.title;
    if (miniTitleEl) miniTitleEl.textContent = CONFIG.music.title;

    // Mini Player Popup Toggle
    const miniToggleBtn = document.getElementById('miniPlayerToggleBtn');
    const miniPopup = document.getElementById('miniPlayerPopup');
    if (miniToggleBtn && miniPopup) {
        miniToggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            miniPopup.classList.toggle('active');
        });
        document.addEventListener('click', (e) => {
            if (!miniPopup.contains(e.target) && e.target !== miniToggleBtn) {
                miniPopup.classList.remove('active');
            }
        });
    }

    // Play/Pause button in Global Settings
    const globalPlayBtn = document.getElementById('globalMusicPlayBtn');
    if (globalPlayBtn) {
        globalPlayBtn.addEventListener('click', toggleAudioPlay);
    }

    // Mute/Unmute button in Global Settings
    const globalMuteBtn = document.getElementById('globalMusicMuteBtn');
    if (globalMuteBtn) {
        globalMuteBtn.addEventListener('click', toggleAudioMute);
    }
}

function setMasterVolume(val) {
    currentVolume = Math.max(0, Math.min(1, val));
    if (masterAudio) {
        masterAudio.volume = currentVolume;
        if (currentVolume > 0 && masterAudio.muted) {
            masterAudio.muted = false;
            isAudioMuted = false;
        }
    }

    // Sync sliders
    const miniVolSlider = document.getElementById('miniVolumeSlider');
    const pageVolSlider = document.getElementById('volumeSlider');
    const valPercent = Math.round(currentVolume * 100);
    if (miniVolSlider) miniVolSlider.value = valPercent;
    if (pageVolSlider) pageVolSlider.value = valPercent;

    updateMuteIcons();

    try {
        localStorage.setItem('friendship_site_vol', currentVolume);
    } catch (e) {}
}

function toggleAudioPlay() {
    if (!masterAudio) return;

    if (masterAudio.paused) {
        masterAudio.play().then(() => {
            setAudioPlayState(true);
        }).catch((err) => {
            console.log('Audio playback prevented or awaiting interaction:', err);
        });
    } else {
        masterAudio.pause();
        setAudioPlayState(false);
    }
}

function toggleAudioMute() {
    if (!masterAudio) return;
    isAudioMuted = !masterAudio.muted;
    masterAudio.muted = isAudioMuted;
    updateMuteIcons();

    try {
        localStorage.setItem('friendship_site_mute', isAudioMuted);
    } catch (e) {}
}

function updateMuteIcons() {
    const globalMuteIcon = document.getElementById('globalMuteIcon');
    const miniVolIcon = document.getElementById('miniVolIcon');
    const pageVolIcon = document.getElementById('volIconPage');

    const isMutedOrZero = (masterAudio && masterAudio.muted) || currentVolume === 0;
    const icon = isMutedOrZero ? '🔇' : (currentVolume < 0.4 ? '🔈' : '🔊');

    if (globalMuteIcon) globalMuteIcon.textContent = icon;
    if (miniVolIcon) miniVolIcon.textContent = isMutedOrZero ? '🔇' : '🔈';
    if (pageVolIcon) pageVolIcon.textContent = isMutedOrZero ? '🔇' : '🔈';
}

function setAudioPlayState(isPlaying) {
    isAudioPlaying = isPlaying;

    const globalPlayBtn = document.getElementById('globalMusicPlayBtn');
    const globalPlayIcon = document.getElementById('globalMusicPlayIcon');
    const pagePlayBtn = document.getElementById('playPauseBtn');
    const pageVinyl = document.getElementById('pageVinyl');
    const miniVinyl = document.getElementById('miniVinyl');

    if (globalPlayBtn) {
        if (isPlaying) {
            globalPlayBtn.classList.add('playing');
            if (globalPlayIcon) globalPlayIcon.textContent = '⏸';
        } else {
            globalPlayBtn.classList.remove('playing');
            if (globalPlayIcon) globalPlayIcon.textContent = '▶';
        }
    }

    if (pagePlayBtn) pagePlayBtn.textContent = isPlaying ? '⏸' : '▶';
    if (pageVinyl) {
        if (isPlaying) pageVinyl.classList.add('spinning');
        else pageVinyl.classList.remove('spinning');
    }
    if (miniVinyl) {
        if (isPlaying) miniVinyl.classList.add('spinning');
        else miniVinyl.classList.remove('spinning');
    }
}

function seekAudio(e) {
    if (!masterAudio || !masterAudio.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    masterAudio.currentTime = Math.max(0, Math.min(masterAudio.duration, pos * masterAudio.duration));
}

function updateAudioProgress() {
    if (!masterAudio || !masterAudio.duration) return;
    const pct = (masterAudio.currentTime / masterAudio.duration) * 100;

    const pageBar = document.getElementById('progressBar');
    const miniBar = document.getElementById('miniProgressBar');
    if (pageBar) pageBar.style.width = pct + '%';
    if (miniBar) miniBar.style.width = pct + '%';

    const curFormatted = formatTime(masterAudio.currentTime);
    const durFormatted = formatTime(masterAudio.duration);

    const pageCurTime = document.getElementById('currentTime');
    const pageTotTime = document.getElementById('totalTime');
    const miniCurTime = document.getElementById('miniCurrentTime');
    const miniTotTime = document.getElementById('miniTotalTime');

    if (pageCurTime) pageCurTime.textContent = curFormatted;
    if (pageTotTime) pageTotTime.textContent = durFormatted;
    if (miniCurTime) miniCurTime.textContent = curFormatted;
    if (miniTotTime) miniTotTime.textContent = durFormatted;
}

function formatTime(seconds) {
    if (isNaN(seconds) || seconds < 0) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// Global music controls exposed to window for Page 12 inline onclicks
window.togglePlay = toggleAudioPlay;
window.nextTrack = function() {
    if (masterAudio) {
        masterAudio.currentTime = 0;
        masterAudio.play().catch(() => {});
    }
};
window.prevTrack = function() {
    if (masterAudio) {
        masterAudio.currentTime = 0;
        masterAudio.play().catch(() => {});
    }
};

// Start music when user clicks welcome button
window.startExperienceAndGoTo = function(pageNumber) {
    if (masterAudio && masterAudio.paused) {
        masterAudio.play().then(() => {
            setAudioPlayState(true);
        }).catch((err) => {
            console.log('Audio autoplay prevented:', err);
        });
    }
    goToPage(pageNumber);
};

function initGlobalSettings() {
    // Placeholder for additional settings features
}


// ============================================
// ===== PAGE NAVIGATION SYSTEM ===============
// ============================================

function goToPage(pageNum) {
    if (pageNum < 1 || pageNum > totalPages) return;

    const currentEl = document.getElementById(`page${currentPage}`);
    const nextEl = document.getElementById(`page${pageNum}`);

    if (!currentEl || !nextEl) return;

    // Smooth fade out
    currentEl.style.opacity = '0';

    setTimeout(() => {
        currentEl.classList.remove('active');
        currentEl.style.opacity = '';

        nextEl.classList.add('active');
        nextEl.classList.add('entering');

        window.scrollTo({ top: 0, behavior: 'instant' });

        currentPage = pageNum;
        updatePageIndicator();

        setTimeout(() => {
            nextEl.classList.remove('entering');
        }, 500);

        // Page specific resets
        if (pageNum === 14) resetTOT();
    }, 350);
}

window.goToPage = goToPage;

function updatePageIndicator() {
    const numEl = document.getElementById('currentPageNum');
    if (numEl) {
        numEl.textContent = String(currentPage).padStart(2, '0');
    }
}


// ============================================
// ===== PHOTO UTILITIES & LIGHTBOX ===========
// ============================================

function getPhoto(index) {
    if (!CONFIG.photos || CONFIG.photos.length === 0) return '';
    return CONFIG.photos[index % CONFIG.photos.length];
}

function getShuffledPhotos() {
    const list = [...CONFIG.photos];
    for (let i = list.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [list[i], list[j]] = [list[j], list[i]];
    }
    return list;
}

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

window.openLightbox = openLightbox;
window.closeLightbox = closeLightbox;

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeLightbox();
        closeOpenWhen();
    }
});


// ============================================
// ===== PAGE 1, 3, 10, 19: CONTENT INIT ======
// ============================================

function initPhotosAndCaptions() {
    // Page 3: Question photo
    const questionPhoto = document.getElementById('questionPhoto');
    const questionFrame = document.getElementById('questionPhotoFrame');
    if (questionPhoto && CONFIG.photos.length > 0) {
        questionPhoto.src = getPhoto(0);
        if (questionFrame) {
            questionFrame.addEventListener('click', () => openLightbox(getPhoto(0)));
        }
    }

    // Page 19: Surprise photo
    const surprisePhoto = document.getElementById('surprisePhoto');
    const surpriseFrame = document.getElementById('surprisePhotoFrame');
    if (surprisePhoto && CONFIG.photos.length > 1) {
        const surprisePhotoSrc = getPhoto(CONFIG.photos.length - 1);
        surprisePhoto.src = surprisePhotoSrc;
        if (surpriseFrame) {
            surpriseFrame.addEventListener('click', () => openLightbox(surprisePhotoSrc));
        }
    }

    // Page 10: Letter
    const letterText = document.getElementById('letterText');
    if (letterText) {
        letterText.textContent = CONFIG.letterMessage;
    }

    // Page 19: Surprise Message
    const surpriseMsg = document.getElementById('surpriseMessage');
    if (surpriseMsg) {
        surpriseMsg.textContent = CONFIG.surpriseMessage;
    }

    // Build Page 4 collage safely
    const worldCollage = document.getElementById('worldCollage');
    if (worldCollage) {
        worldCollage.innerHTML = '';
        const collagePhotos = CONFIG.photos.slice(0, 4);
        const captions = ["our world 🌎", "memories 💕", "always us ✨", "forever 💗"];

        collagePhotos.forEach((photo, i) => {
            const frame = document.createElement('div');
            frame.className = 'polaroid-frame';
            frame.innerHTML = `
                <img src="${photo}" alt="Memory ${i + 1}" loading="lazy">
                <div class="polaroid-caption handwritten">${captions[i] || '💕'}</div>
            `;
            frame.addEventListener('click', () => openLightbox(photo));
            worldCollage.appendChild(frame);
        });
    }
}


// ============================================
// ===== PAGE 2: PLAYFUL NO BUTTON ============
// ============================================

let noMoveCount = 0;
function moveNoButton(btn) {
    noMoveCount++;
    if (noMoveCount > 5) return; // Allow user to tap after 5 playful escapes

    const isMobile = window.innerWidth < 500;
    const maxX = isMobile ? 60 : 120;
    const maxY = 45;
    const x = (Math.random() - 0.5) * maxX;
    const y = (Math.random() - 0.5) * maxY;
    btn.style.transform = `translate(${x}px, ${y}px)`;

    setTimeout(() => {
        btn.style.transform = '';
    }, 1800);
}
window.moveNoButton = moveNoButton;


// ============================================
// ===== PAGE 3: FUNNY MESSAGE ===============
// ============================================

function showFunnyMsg() {
    const msg = document.getElementById('funnyMsg');
    if (msg) {
        msg.style.display = 'block';
        setTimeout(() => {
            goToPage(4);
        }, 1600);
    }
}
window.showFunnyMsg = showFunnyMsg;


// ============================================
// ===== PAGE 5: THE PHOTO WALL ===============
// ============================================

function initPhotoWall() {
    const container = document.getElementById('photoWall');
    if (!container) return;
    container.innerHTML = '';

    const stickers = ['🌸', '💕', '✨', '🎀', '🦋', '💗', '⭐', '🌷', '💖', '🧸', '🌻', '💐', '🌈', '🎵', '💫', '🌺', '🍓', '🐱'];

    CONFIG.photos.forEach((photo, i) => {
        const item = document.createElement('div');
        item.className = 'photo-wall-item';

        const caption = CONFIG.photoWallCaptions[i] || '💕';
        const sticker = stickers[i % stickers.length];

        item.innerHTML = `
            <div class="polaroid-frame">
                <img src="${photo}" alt="Photo ${i + 1}" loading="lazy">
                <div class="polaroid-caption handwritten">${caption}</div>
            </div>
            <span class="photo-sticker" style="top:-8px;right:-5px" aria-hidden="true">${sticker}</span>
        `;
        item.addEventListener('click', () => openLightbox(photo));
        container.appendChild(item);
    });
}


// ============================================
// ===== PAGE 6: MEMORIES =====================
// ============================================

function initMemoryCards() {
    const container = document.getElementById('memoryCards');
    if (!container) return;
    container.innerHTML = '';

    const photos = CONFIG.photos.slice(4, 10);
    const captions = CONFIG.memoryCaptions;

    photos.forEach((photo, i) => {
        const card = document.createElement('div');
        card.className = 'memory-card';
        card.innerHTML = `
            <img src="${photo}" alt="Memory ${i + 1}" loading="lazy">
            <div class="memory-card-content">
                <p>${captions[i % captions.length]}</p>
            </div>
            <div class="memory-card-deco">🌸 💕</div>
        `;
        card.addEventListener('click', () => openLightbox(photo));
        container.appendChild(card);
    });
}


// ============================================
// ===== PAGE 7: APPRECIATIONS ================
// ============================================

function initAppreciationCards() {
    const container = document.getElementById('appreciationGrid');
    if (!container) return;
    container.innerHTML = '';

    CONFIG.appreciations.forEach((item) => {
        const card = document.createElement('div');
        card.className = 'appreciation-card';
        card.addEventListener('click', () => {
            card.style.transform = 'scale(0.96)';
            setTimeout(() => { card.style.transform = ''; }, 200);
            createSparkles(4);
        });
        card.innerHTML = `
            <span class="card-emoji">${item.emoji}</span>
            <p class="card-text">${item.text}</p>
        `;
        container.appendChild(card);
    });
}


// ============================================
// ===== PAGE 8: TIMELINE =====================
// ============================================

function initTimeline() {
    const container = document.getElementById('timeline');
    if (!container) return;
    container.innerHTML = '';

    const photos = CONFIG.photos.slice(10, 16);

    CONFIG.timelineItems.forEach((item, i) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';

        const photo = photos[i] || '';
        const imgHtml = photo ? `<img src="${photo}" alt="${item.title}" loading="lazy">` : '';

        timelineItem.innerHTML = `
            <div class="timeline-dot" aria-hidden="true">${item.emoji}</div>
            <div class="timeline-content">
                <h3>${item.title}</h3>
                <p>${item.desc}</p>
                ${imgHtml}
            </div>
        `;

        if (photo) {
            const img = timelineItem.querySelector('img');
            if (img) {
                img.addEventListener('click', (e) => {
                    e.stopPropagation();
                    openLightbox(photo);
                });
            }
        }
        container.appendChild(timelineItem);
    });
}


// ============================================
// ===== PAGE 9: INSIDE JOKES =================
// ============================================

function initJokesBoard() {
    const container = document.getElementById('jokesBoard');
    if (!container) return;
    container.innerHTML = '';

    CONFIG.insideJokes.forEach((joke) => {
        const sticky = document.createElement('div');
        sticky.className = 'joke-sticky';
        sticky.innerHTML = `
            <span class="joke-pin" aria-hidden="true">📌</span>
            <span class="joke-emoji">${joke.emoji}</span>
            <span>${joke.text}</span>
        `;
        sticky.addEventListener('click', () => {
            sticky.style.transform = 'scale(1.1) rotate(0deg)';
            setTimeout(() => { sticky.style.transform = ''; }, 300);
        });
        container.appendChild(sticky);
    });
}


// ============================================
// ===== PAGE 10: ENVELOPE ====================
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
        createConfetti();
    }, 700);
}
window.openEnvelope = openEnvelope;


// ============================================
// ===== PAGE 11: PHOTO COLLECTION ============
// ============================================

function initPhotoCollection() {
    const container = document.getElementById('photoCollection');
    if (!container) return;
    container.innerHTML = '';

    const shuffled = getShuffledPhotos();
    const magPhotos = shuffled.slice(0, 5);
    const filmPhotos = shuffled.slice(5, 12);
    const polaroidPhotos = shuffled.slice(12, 18);

    // 1. Magazine Style Grid
    const magSection = document.createElement('div');
    magSection.className = 'collection-section';
    magSection.innerHTML = `<h3>Magazine Style 📰</h3>`;
    const magGrid = document.createElement('div');
    magGrid.className = 'magazine-grid';

    magPhotos.forEach((photo) => {
        const item = document.createElement('div');
        item.className = 'mag-item';
        item.innerHTML = `<img src="${photo}" alt="Collection" loading="lazy">`;
        item.addEventListener('click', () => openLightbox(photo));
        magGrid.appendChild(item);
    });
    magSection.appendChild(magGrid);
    container.appendChild(magSection);

    // 2. Film Strip Reel
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
            <img src="${photo}" alt="Film Frame ${i + 1}" loading="lazy">
            <div class="film-caption">${filmCaptions[i] || '🎬'}</div>
        `;
        frame.addEventListener('click', () => openLightbox(photo));
        filmStrip.appendChild(frame);
    });
    filmSection.appendChild(filmStrip);
    container.appendChild(filmSection);

    // 3. Polaroids Row
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
                <img src="${photo}" alt="Polaroid ${i + 1}" loading="lazy">
                <div class="polaroid-caption handwritten">${polCaptions[i] || '💕'}</div>
            `;
            polaroid.addEventListener('click', () => openLightbox(photo));
            polRow.appendChild(polaroid);
        });
        polSection.appendChild(polRow);
        container.appendChild(polSection);
    }
}


// ============================================
// ===== PAGE 13: CHOOSE YOUR MOOD ============
// ============================================

function initMoodSelector() {
    const container = document.getElementById('moodGrid');
    if (!container) return;
    container.innerHTML = '';

    CONFIG.moods.forEach((mood, i) => {
        const btn = document.createElement('div');
        btn.className = 'mood-btn';
        btn.innerHTML = `
            <span class="mood-emoji">${mood.emoji}</span>
            <span>${mood.label}</span>
        `;
        btn.addEventListener('click', () => selectMood(i));
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

    createSparkles(6);
}

function resetMood() {
    const grid = document.getElementById('moodGrid');
    const msgContainer = document.getElementById('moodMessage');
    if (grid) grid.style.display = 'grid';
    if (msgContainer) msgContainer.style.display = 'none';
}
window.resetMood = resetMood;


// ============================================
// ===== PAGE 14: THIS OR THAT? ===============
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
window.chooseTOT = chooseTOT;

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
window.resetTOT = resetTOT;


// ============================================
// ===== PAGE 15: COMPLIMENT GENERATOR ========
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

    createSparkles(12);
}
window.generateCompliment = generateCompliment;

function createSparkles(count) {
    const container = document.getElementById('sparkleContainer');
    if (!container) return;

    const sparkleEmojis = ['✨', '⭐', '💫', '🌟', '💗', '🌸', '💖'];

    for (let i = 0; i < count; i++) {
        const sparkle = document.createElement('span');
        sparkle.className = 'sparkle';
        sparkle.textContent = sparkleEmojis[Math.floor(Math.random() * sparkleEmojis.length)];
        sparkle.style.left = (Math.random() * 90 + 5) + '%';
        sparkle.style.top = (Math.random() * 80 + 10) + '%';
        sparkle.style.animationDelay = (Math.random() * 0.3) + 's';
        container.appendChild(sparkle);

        setTimeout(() => sparkle.remove(), 1600);
    }
}


// ============================================
// ===== PAGE 16: OPEN WHEN... ================
// ============================================

function initOpenWhen() {
    const container = document.getElementById('openWhenGrid');
    if (!container) return;
    container.innerHTML = '';

    CONFIG.openWhen.forEach((item, i) => {
        const envelope = document.createElement('div');
        envelope.className = 'openwhen-envelope';
        envelope.innerHTML = `
            <span class="envelope-icon" aria-hidden="true">${item.icon}</span>
            <span class="envelope-label">${item.label}</span>
        `;
        envelope.addEventListener('click', () => showOpenWhen(i));
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
window.closeOpenWhen = closeOpenWhen;


// ============================================
// ===== PAGE 17: THE SCRAPBOOK MOODBOARD =====
// ============================================

function initMoodboard() {
    const container = document.getElementById('moodboardGrid');
    if (!container) return;
    container.innerHTML = '';

    const shuffled = getShuffledPhotos();
    const decoEmojis = ['🌸', '🎀', '💕', '🦋', '✨', '🌷', '🧸', '💗'];
    const notes = CONFIG.moodboardNotes;

    const items = [];

    shuffled.slice(0, 8).forEach((photo) => {
        items.push({ type: 'photo', src: photo });
    });

    decoEmojis.slice(0, 4).forEach(emoji => {
        items.push({ type: 'deco', emoji });
    });

    notes.slice(0, 4).forEach(note => {
        items.push({ type: 'note', text: note });
    });

    // Shuffle layout
    for (let i = items.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [items[i], items[j]] = [items[j], items[i]];
    }

    items.forEach((item, i) => {
        const div = document.createElement('div');

        if (item.type === 'photo') {
            div.className = 'moodboard-item' + (i % 5 === 0 ? ' span-2' : '') + (i % 7 === 0 ? ' span-row-2' : '');
            div.innerHTML = `<img src="${item.src}" alt="Moodboard" loading="lazy">`;
            div.addEventListener('click', () => openLightbox(item.src));
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
// ===== PAGE 18: A MINI MEMORY GAME ==========
// ============================================

const gameEmojis = ['🌸', '💗', '🦋', '✨', '🎀', '🌷', '🧸', '💐'];

function startMemoryGame() {
    const board = document.getElementById('gameBoard');
    const congrats = document.getElementById('gameCongrats');
    if (!board) return;

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

    const pairs = [...gameEmojis, ...gameEmojis];
    for (let i = pairs.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pairs[i], pairs[j]] = [pairs[j], pairs[i]];
    }

    memoryGameCards = pairs;

    pairs.forEach((emoji, i) => {
        const card = document.createElement('div');
        card.className = 'game-card';
        card.setAttribute('role', 'button');
        card.setAttribute('aria-label', 'Memory card');
        card.innerHTML = `
            <div class="game-card-inner">
                <div class="game-card-front">🎀</div>
                <div class="game-card-back">${emoji}</div>
            </div>
        `;
        card.addEventListener('click', () => flipCard(i));
        board.appendChild(card);
    });
}
window.startMemoryGame = startMemoryGame;

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
        const moveEl = document.getElementById('moveCount');
        if (moveEl) moveEl.textContent = memoryMoves;

        const [i1, i2] = memoryFlipped;
        const emoji1 = memoryGameCards[i1];
        const emoji2 = memoryGameCards[i2];

        if (emoji1 === emoji2) {
            cards[i1].classList.add('matched');
            cards[i2].classList.add('matched');
            memoryMatched.push(emoji1);

            const pairEl = document.getElementById('pairCount');
            if (pairEl) pairEl.textContent = memoryMatched.length;
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
            }, 750);
        }
    }
}


// ============================================
// ===== PAGE 19: UNLOCK SURPRISE =============
// ============================================

function openGift() {
    const giftBox = document.getElementById('giftBox');
    const giftBtn = document.getElementById('giftBtn');
    const giftContainer = document.getElementById('giftContainer');
    const reveal = document.getElementById('surpriseReveal');

    if (giftBox) giftBox.classList.add('opened');
    if (giftBtn) giftBtn.style.display = 'none';

    createSurpriseHearts();

    setTimeout(() => {
        if (giftContainer) giftContainer.style.display = 'none';
        if (reveal) reveal.style.display = 'block';
        createConfetti();
    }, 1100);
}
window.openGift = openGift;

function createSurpriseHearts() {
    const container = document.getElementById('surpriseHearts');
    if (!container) return;

    const heartEmojis = ['💗', '💕', '💖', '✨', '🌸', '⭐', '💫', '🎀'];

    for (let i = 0; i < 35; i++) {
        const heart = document.createElement('span');
        heart.className = 'surprise-heart-float';
        heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
        heart.style.left = (Math.random() * 95) + '%';
        heart.style.top = (60 + Math.random() * 40) + '%';
        heart.style.animationDelay = (Math.random() * 1.5) + 's';
        heart.style.fontSize = (1.2 + Math.random() * 1.6) + 'rem';
        container.appendChild(heart);

        setTimeout(() => heart.remove(), 4500);
    }
}


// ============================================
// ===== PAGE 20: FINAL COLLAGE ===============
// ============================================

function initFinalCollage() {
    const container = document.getElementById('finalCollage');
    if (!container) return;
    container.innerHTML = '';

    const shuffled = getShuffledPhotos();
    const finalPhotos = shuffled.slice(0, Math.min(6, shuffled.length));

    finalPhotos.forEach((photo) => {
        const polaroid = document.createElement('div');
        polaroid.className = 'polaroid-frame';
        polaroid.innerHTML = `
            <img src="${photo}" alt="Final Memory" loading="lazy">
            <div class="polaroid-caption handwritten">💗</div>
        `;
        polaroid.addEventListener('click', () => openLightbox(photo));
        container.appendChild(polaroid);
    });
}


// ============================================
// ===== FLOATING DECORATIONS & CONFETTI ======
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
        deco.style.left = (Math.random() * 96) + '%';
        deco.style.animationDuration = (7 + Math.random() * 6) + 's';
        deco.style.fontSize = (0.9 + Math.random() * 0.9) + 'rem';
        container.appendChild(deco);

        setTimeout(() => deco.remove(), 13000);
    }, 2800);
}

function createConfetti() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const lightColors = ['#FCE4EC', '#F8D7E3', '#EFB6C8', '#F48FB1', '#FFB6C1', '#FFD1DC', '#FFF0F5'];
    const darkColors = ['#F2A9C4', '#D98CAB', '#C58BAF', '#E5A0BE', '#B87299', '#D2B9C8', '#FFF0F6'];
    const colors = isDark ? darkColors : lightColors;

    for (let i = 0; i < 45; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti-piece';
        confetti.style.left = (Math.random() * 100) + '%';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = (Math.random() * 1.5) + 's';
        confetti.style.animationDuration = (2.2 + Math.random() * 2) + 's';
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
        const size = (6 + Math.random() * 9);
        confetti.style.width = size + 'px';
        confetti.style.height = size + 'px';
        document.body.appendChild(confetti);

        setTimeout(() => confetti.remove(), 4500);
    }
}
window.createConfetti = createConfetti;
