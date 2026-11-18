// assets/js/components.js

// 1. Komponen Header & Menu Navigasi
function getNavbarHTML(activePage) {
    return `
        <header class="navbar">
            <div class="nav-container">
                <a href="index.html" class="nav-brand">🎮 Scratch MTsN 10 Sleman</a>
                <nav class="nav-menu">
                    <a href="index.html" class="nav-link ${activePage === 'beranda' ? 'active' : ''}">Beranda</a>
                    <a href="karya.html" class="nav-link ${activePage === 'karya' ? 'active' : ''}">Karya Murid</a>
                    <a href="setor.html" class="nav-link ${activePage === 'setor' ? 'active' : ''}">Setor Karya</a>
                </nav>
            </div>
        </header>
    `;
}

// 2. Komponen Tampilan Kosong (Empty State)
function getEmptyStateHTML() {
    return `
        <div class="empty-state">
            <h2 class="empty-title">Galeri game masih kosong</h2>
            <p class="empty-subtitle">Belum ada karya game Scratch yang diunggah saat ini.</p>
            
            <div class="empty-illustration">
                <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="220" cy="135" r="85" fill="#2D2D3F"/>
                    <circle cx="220" cy="135" r="65" fill="#252536"/>
                    <ellipse cx="185" cy="255" rx="95" ry="14" fill="#2D2D3F"/>
                    <circle cx="122" cy="235" r="14" fill="#4F46E5"/>
                    <circle cx="122" cy="215" r="10" fill="#6366F1"/>
                    <circle cx="122" cy="200" r="6" fill="#818CF8"/>
                    <circle cx="255" cy="242" r="12" fill="#4F46E5"/>
                    <path d="M172 185L162 250H174L185 198L194 252H206L198 185H172Z" fill="#1E1E2C"/>
                    <path d="M165 125C165 114 174 106 185 106C196 106 203 114 205 125L210 175H160L165 125Z" fill="#CBD5E1"/>
                    <path d="M198 122L212 168L203 171L190 130L198 122Z" fill="#94A3B8"/>
                    <circle cx="184" cy="90" r="13" fill="#FCA5A5"/>
                    <path d="M171 88C171 79 178 74 186 74C193 74 198 79 197 86C193 84 186 85 182 91C179 95 174 94 171 88Z" fill="#1E1E2C"/>
                </svg>
            </div>

            <a href="setor.html" class="empty-cta-btn">+ Setor Karya Pertama</a>
        </div>
    `;
}

// 3. Komponen Kartu Game
function getGameCardHTML(game) {
    return `
        <div class="game-card">
            <h3>${game.game_title}</h3>
            <p><strong>Pembuat:</strong> ${game.student_name}</p>
            <p><strong>Kelas:</strong> ${game.class}</p>
            <div class="player-container">
                <iframe src="https://turbowarp.org/embed.html?project_url=${encodeURIComponent(game.file_game_url)}" 
                        width="100%" height="300" allowtransparency="true" frameborder="0" scrolling="no" allowfullscreen>
                </iframe>
            </div>
        </div>
    `;
}

// 4. Komponen Shimmer Loading
function getShimmerCardHTML() {
    return `
        <div class="shimmer-card">
            <div class="shimmer-line shimmer-title"></div>
            <div class="shimmer-line shimmer-text"></div>
            <div class="shimmer-line shimmer-text" style="width: 50%;"></div>
            <div class="shimmer-line shimmer-player"></div>
        </div>
    `;
}