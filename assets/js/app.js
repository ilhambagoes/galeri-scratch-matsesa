// ==========================================
// LOGIKA HALAMAN GALERI (index.html)
// ==========================================
const gameListEl = document.getElementById('game-list');
const playerModal = document.getElementById('player-modal');
const modalTitle = document.getElementById('modal-title');
const turbowarpIframe = document.getElementById('turbowarp-iframe');
const closeModalBtn = document.getElementById('close-modal-btn');

async function loadGames() {
    if (!gameListEl) return;

    // Tampilkan shimmer loading
    gameListEl.innerHTML = getShimmerCardHTML().repeat(3); // Tampilkan 3 shimmer card

    // Mengambil data game dari Supabase
    const { data, error } = await supabaseClient
        .from('games')
        .select('*')
        .order('created_at', { ascending: false });

    if (error) {
        gameListEl.innerHTML = `<p style="color: red;">Gagal memuat data: ${error.message}</p>`;
        return;
    }
    
    if (!data || data.length === 0) {
        gameListEl.innerHTML = getEmptyStateHTML();
        return;
    }

    gameListEl.innerHTML = '';
    data.forEach(game => {
        const card = document.createElement('div');
        card.className = 'game-card';
        card.innerHTML = getGameCardHTML(game);
        gameListEl.appendChild(card);
    });

    // Pasang event listener ke semua tombol "Mainkan Game"
    document.querySelectorAll('.btn-play').forEach(btn => {
        btn.addEventListener('click', () => {
            const url = btn.getAttribute('data-url');
            const title = btn.getAttribute('data-title');
            openPlayer(url, title);
        });
    });
}

function openPlayer(fileUrl, title) {
    modalTitle.innerText = title;
    turbowarpIframe.src = `https://turbowarp.org/embed?project_url=${encodeURIComponent(fileUrl)}&autoplay`;
    playerModal.classList.remove('hidden');
}

function closePlayer() {
    playerModal.classList.add('hidden');
    turbowarpIframe.src = ''; // Hentikan game saat modal ditutup
}

if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closePlayer);
}

// Tutup modal kalau user klik area gelap di luar kotak game
if (playerModal) {
    playerModal.addEventListener('click', (e) => {
        if (e.target === playerModal) closePlayer();
    });
}

// Jalankan fungsi loadGames saat index.html dibuka
loadGames();


// ==========================================
// LOGIKA HALAMAN ADMIN UPLOAD (admin.html)
// ==========================================
const uploadForm = document.getElementById('upload-form');

if (uploadForm) {
    uploadForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const submitBtn = document.getElementById('submit-btn');
        submitBtn.innerText = 'Sedang mengupload...';
        submitBtn.disabled = true;

        const gameTitle = document.getElementById('game_title').value.trim();
        const studentName = document.getElementById('student_name').value.trim();
        const studentClass = document.getElementById('student_class').value.trim();
        const fileInput = document.getElementById('sb3_file').files[0];

        if (!fileInput) {
            alert('Pilih file .sb3 terlebih dahulu!');
            submitBtn.innerText = 'Upload ke Galeri';
            submitBtn.disabled = false;
            return;
        }

        // Bersihkan nama file
        const safeName = fileInput.name.replace(/[^a-zA-Z0-9_.-]/g, '_');
        const cleanFileName = `${Date.now()}_${safeName}`;
        
        // 1. Upload ke Storage pakai fetch API langsung (membawa API Key secara eksplisit)
        const storageUrl = `${SUPABASE_URL}/storage/v1/object/scratch-file/${cleanFileName}`;
        
        try {
            const uploadResponse = await fetch(storageUrl, {
                method: 'POST',
                headers: {
                    'apikey': SUPABASE_ANON_KEY,
                    'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
                    'Content-Type': fileInput.type || 'application/octet-stream'
                },
                body: fileInput
            });

            if (!uploadResponse.ok) {
                const errResult = await uploadResponse.json();
                throw new Error(errResult.message || 'Gagal mengupload file ke Storage.');
            }

            // 2. Ambil Public URL file tersebut
            const fileGameUrl = `${SUPABASE_URL}/storage/v1/object/public/scratch-file/${cleanFileName}`;

            // 3. Simpan informasi ke tabel 'games' via Supabase Client
            const { error: dbError } = await supabaseClient
                .from('games')
                .insert([
                    {
                        game_title: gameTitle,
                        student_name: studentName,
                        class: studentClass,
                        file_game_url: fileGameUrl
                    }
                ]);

            if (dbError) {
                throw new Error('Gagal menyimpan ke Database: ' + dbError.message);
            }

            alert('Mantap! Game berhasil di-upload ke galeri!');
            window.location.href = 'index.html';

        } catch (error) {
            alert('Terjadi kesalahan: ' + error.message);
            submitBtn.innerText = 'Upload ke Galeri';
            submitBtn.disabled = false;
        }
    });
}