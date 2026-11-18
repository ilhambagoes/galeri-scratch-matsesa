// components.js
function getEmptyStateHTML() {
    return `
            <div class="empty-state">
                <h2 class="empty-title">Galeri Scratch masih kosong</h2>
                <p class="empty-subtitle">Belum ada karya Scratch yang diunggah saat ini.</p>
                
                <!-- Ilustrasi Vektor SVG Modern -->
                <div class="empty-illustration">
                    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <!-- Lingkaran Besar Latar Belakang (Portal/Void) -->
                        <circle cx="220" cy="135" r="85" fill="#2D2D3F"/>
                        <circle cx="220" cy="135" r="65" fill="#252536"/>
                        
                        <!-- Alas/Bayangan Lantai -->
                        <ellipse cx="185" cy="255" rx="95" ry="14" fill="#2D2D3F"/>
                        
                        <!-- Elemen Dekoratif Abstrak Biru/Ungu -->
                        <circle cx="122" cy="235" r="14" fill="#4F46E5"/>
                        <circle cx="122" cy="215" r="10" fill="#6366F1"/>
                        <circle cx="122" cy="200" r="6" fill="#818CF8"/>
                        <circle cx="255" cy="242" r="12" fill="#4F46E5"/>

                        <!-- Karakter Minimalis Melihat ke Arah Portal -->
                        <!-- Kaki -->
                        <path d="M172 185L162 250H174L185 198L194 252H206L198 185H172Z" fill="#1E1E2C"/>
                        <!-- Badan / Baju -->
                        <path d="M165 125C165 114 174 106 185 106C196 106 203 114 205 125L210 175H160L165 125Z" fill="#CBD5E1"/>
                        <!-- Lengan -->
                        <path d="M198 122L212 168L203 171L190 130L198 122Z" fill="#94A3B8"/>
                        <!-- Kepala & Rambut -->
                        <circle cx="184" cy="90" r="13" fill="#FCA5A5"/>
                        <path d="M171 88C171 79 178 74 186 74C193 74 198 79 197 86C193 84 186 85 182 91C179 95 174 94 171 88Z" fill="#1E1E2C"/>
                    </svg>
                </div>

                <a href="admin.html" class="empty-cta-btn">+ Upload Game Pertama</a>
            </div>
        `;
}