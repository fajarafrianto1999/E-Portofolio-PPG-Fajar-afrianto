// ============================================================
// PDF Preview Modal - Global Functions (called from inline onclick)
// ============================================================

// Default Analysis Data
const defaultAnalysisData = {
    'analysis-rpp-siklus-1-(bubut)': `Konteks
Siklus 1 dilaksanakan pada semester genap selama 3 pertemuan. Pembelajaran ditujukan untuk siswa yang sudah memiliki pengetahuan dasar mesin bubut, tetapi kemampuan praktiknya masih berbeda-beda. Pada awal pembelajaran, siswa dikenalkan tentang bagian-bagian mesin bubut, ruang lingkup pekerjaan, dan keselamatan kerja (K3) di kelas. Setelah itu siswa mulai praktik membuat poros eksentrik dan flywheel puller di bengkel.

Tujuan
- Siswa memahami bagian mesin bubut, parameter pemotongan, dan aturan K3.
- Siswa mampu membuat langkah kerja atau Work Preparation Sheet (WPS).
- Siswa mampu melakukan praktik pembubutan eksentrik dan pembubutan rata dengan baik.

Kelebihan
- Pembelajaran dilakukan bertahap, mulai dari teori dan K3 sebelum praktik langsung.
- Siswa dilatih disiplin dan bertanggung jawab seperti budaya kerja di industri.

Kekurangan
- Waktu praktik masih terasa terbatas, terutama bagi siswa yang membutuhkan waktu belajar lebih lama.
- Siswa yang belum terbiasa praktik bisa kesulitan mencapai hasil yang presisi tepat waktu.

Kajian Teori
- Deep Learning: Pembelajaran dimulai dengan mengecek kesiapan siswa, menghubungkan materi dengan dunia kerja, dan membuat kegiatan belajar lebih menarik melalui proyek praktik.
- Sistem Among Ki Hadjar Dewantara: Guru memberi contoh, mendampingi saat praktik, lalu memberi kesempatan siswa bekerja dan mengevaluasi hasilnya sendiri.
- Model Pembelajaran: Menggunakan Problem Based Learning (PBL) dan Project Based Learning (PjBL).`,

    'analysis-rpp-siklus-2-(bubut)': `Konteks
Siklus 2 merupakan lanjutan dari siklus 1. Pada tahap ini siswa belajar membuat bagian flywheel puller yang lebih detail, seperti pembubutan ulir luar dan proses kartel. Pembelajaran dilakukan selama 3 pertemuan.

Tujuan
- Siswa mampu menentukan parameter pemotongan untuk membuat ulir luar.
- Siswa mampu menyetel mesin sesuai ukuran ulir pada gambar kerja.
- Siswa mampu mengenali dan mengatasi masalah saat praktik, seperti ulir rusak atau pahat tumpul.

Kelebihan
- Produk yang dibuat sesuai dengan kebutuhan dunia bengkel otomotif sehingga lebih bermanfaat.
- Penilaian teori sudah menggunakan Google Forms sehingga lebih cepat dan praktis.

Kekurangan
- Praktik membuat ulir dan kartel cukup sulit sehingga risiko kesalahan masih tinggi.
- Jika guru kurang memantau, hasil kerja siswa bisa banyak yang gagal.

Kajian Teori
- Teori Konstruktivisme: Siswa belajar melalui pengalaman langsung saat praktik di mesin bubut.
- Teori Vygotsky (Tutor Sebaya): Siswa bekerja berpasangan agar dapat saling membantu dan belajar bersama.`,

    'analysis-rpp-siklus-3-(bubut)': `Konteks
Siklus 3 merupakan tahap akhir pembelajaran. Siswa mengerjakan proyek rakitan yang lebih kompleks, seperti Arbor Shaft, dengan menggabungkan semua keterampilan yang sudah dipelajari sebelumnya. Pembelajaran dilakukan dalam 2 pertemuan.

Tujuan
- Siswa mampu membaca gambar kerja dengan ukuran yang presisi.
- Siswa mampu membuat komponen menggunakan alat ukur dengan tepat.
- Siswa mampu menguji hasil pemasangan komponen secara mandiri.

Kelebihan
- Siswa lebih mandiri dalam mengambil keputusan saat praktik.
- Standar hasil kerja sudah mendekati standar industri sebenarnya.

Kekurangan
- Waktu pengerjaan cukup singkat sehingga siswa bisa merasa tertekan.
- Siswa yang belum menguasai materi sebelumnya akan lebih mudah merasa kesulitan.

Kajian Teori
- Teori Belajar Robert Gagne: Siswa menggabungkan semua keterampilan yang sudah dipelajari untuk menyelesaikan proyek yang lebih kompleks.
- Sistem Among (Tut Wuri Handayani): Guru memberi kepercayaan lebih kepada siswa untuk bekerja mandiri, sementara guru tetap mengawasi dan membimbing jika diperlukan.`,

    'analysis-bahan-ajar-teknik-pemesinan-bubut': `1. Konteks
Dokumen ini adalah panduan pembelajaran untuk mata pelajaran Teknik Pemesinan Bubut 1 kelas XI SMK semester 2. Buku ini dibuat untuk membantu guru dan siswa dalam proses belajar pemesinan bubut.
Materi disusun secara urut dan mudah dipahami, mulai dari pengenalan mesin bubut, alat potong atau pahat bubut, parameter pemotongan, hingga teknik praktik pembubutan seperti facing dan pembuatan ulir. Selain itu, terdapat soal latihan dan daftar istilah teknik untuk membantu pemahaman siswa.

2. Tujuan
Bagi Guru
Sebagai panduan utama untuk membantu guru merencanakan pembelajaran, menyampaikan materi, dan menilai hasil belajar siswa dengan lebih terarah.

Bagi Siswa
Membantu siswa memahami dasar-dasar pemesinan bubut, baik teori maupun praktik, sehingga siswa mampu mengoperasikan mesin bubut dan membuat benda kerja sesuai standar industri.

3. Kelebihan
- Materi lengkap dan tersusun rapi: Materi dimulai dari pengenalan dasar hingga praktik kerja, sehingga siswa lebih mudah memahami pembelajaran secara bertahap.
- Sesuai dengan kebutuhan industri: Terdapat istilah teknik dalam bahasa Indonesia dan Inggris sehingga siswa terbiasa dengan istilah yang digunakan di dunia kerja.
- Penilaian lebih jelas: Dilengkapi dengan soal latihan dan evaluasi pada setiap bab untuk mengukur pemahaman teori dan keterampilan praktik siswa.

4. Kekurangan
- Kurang visual dan animasi: Karena berbentuk modul teks, beberapa materi seperti sudut pahat dan proses pembuatan ulir cukup sulit dipahami tanpa bantuan video atau simulasi.
- Belum menyesuaikan perbedaan kemampuan siswa: Materi dibuat dengan urutan yang sama untuk semua siswa, sehingga siswa yang belajar lebih lambat mungkin membutuhkan pendampingan tambahan.`
};

// Seed default data if not present
Object.keys(defaultAnalysisData).forEach(key => {
    if (!localStorage.getItem(key)) {
        localStorage.setItem(key, defaultAnalysisData[key]);
    }
});
let analysisPanelOpen = false;

function openPdfPreview(url, title) {
    const modal = document.getElementById('pdf-preview-modal');
    const iframe = document.getElementById('pdf-iframe');
    const titleEl = document.getElementById('pdf-modal-title').querySelector('span');
    const titleIcon = document.getElementById('pdf-modal-title').querySelector('i');
    const analysisText = document.getElementById('pdf-analysis-text');
    const panel = document.getElementById('analysis-panel');
    const chevron = document.getElementById('analysis-chevron');
    const openBtn = document.getElementById('pdf-open-btn');
    const downloadBtn = document.getElementById('pdf-download-btn');

    // Set title
    titleEl.textContent = title;

    // Detect file type
    const isPdf = url.toLowerCase().endsWith('.pdf');
    const isPptx = url.toLowerCase().endsWith('.pptx');

    // Update icon based on file type
    titleIcon.className = isPptx ? 'ph ph-presentation-chart' : 'ph ph-file-pdf';

    // Safe encoding of space and special characters in URL
    const safeUrl = encodeURI(decodeURI(url));

    // Update action buttons
    if (openBtn) openBtn.href = safeUrl;
    if (downloadBtn) downloadBtn.href = safeUrl;

    if (isPdf) {
        // Embed PDF directly
        iframe.src = safeUrl;
        iframe.style.display = 'block';
    } else {
        // For PPTX and other non-embeddable files, show a styled fallback
        iframe.style.display = 'none';
        // We'll create a fallback overlay inside the iframe container
        let fallback = modal.querySelector('.pdf-fallback');
        if (!fallback) {
            fallback = document.createElement('div');
            fallback.className = 'pdf-fallback';
            fallback.style.cssText = 'display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; text-align:center; padding:3rem; gap:1.5rem;';
            iframe.parentNode.appendChild(fallback);
        }
        fallback.style.display = 'flex';
        fallback.innerHTML = `
            <i class="ph ph-presentation-chart" style="font-size:5rem; color:var(--secondary); opacity:0.7;"></i>
            <h3 style="margin:0; color:var(--text-main); font-size:1.3rem;">File Presentasi (PPTX)</h3>
            <p style="margin:0; color:var(--text-muted); max-width:400px; line-height:1.6;">File presentasi tidak dapat di-preview langsung di browser. Silakan unduh untuk melihat isi dokumen.</p>
            <a href="${safeUrl}" download class="btn btn-primary" style="display:inline-flex; align-items:center; gap:0.5rem; margin-top:0.5rem;">
                <i class="ph ph-download-simple"></i> Unduh File
            </a>
        `;
    }

    // Generate storage key
    const storageKey = 'analysis-' + title.replace(/\s+/g, '-').toLowerCase();
    modal.dataset.currentKey = storageKey;

    // Load saved analysis text
    analysisText.value = localStorage.getItem(storageKey) || '';

    // Reset analysis panel to collapsed
    analysisPanelOpen = false;
    panel.style.maxHeight = '0';
    chevron.style.transform = 'rotate(0deg)';

    // Show modal using flex
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closePdfPreview() {
    const modal = document.getElementById('pdf-preview-modal');
    const iframe = document.getElementById('pdf-iframe');

    modal.style.display = 'none';
    iframe.src = ''; // Stop loading PDF
    iframe.style.display = 'block'; // Restore iframe visibility
    document.body.style.overflow = ''; // Restore scroll

    // Hide fallback if present
    const fallback = modal.querySelector('.pdf-fallback');
    if (fallback) {
        fallback.style.display = 'none';
    }
}

function toggleAnalysisPanel() {
    const panel = document.getElementById('analysis-panel');
    const chevron = document.getElementById('analysis-chevron');

    analysisPanelOpen = !analysisPanelOpen;

    if (analysisPanelOpen) {
        panel.style.maxHeight = '300px';
        chevron.style.transform = 'rotate(180deg)';
    } else {
        panel.style.maxHeight = '0';
        chevron.style.transform = 'rotate(0deg)';
    }
}

// ============================================================
// Main DOMContentLoaded
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');
    const mobileMenuIcon = mobileMenuBtn.querySelector('i');

    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        if (navLinks.classList.contains('active')) {
            mobileMenuIcon.classList.replace('ph-list', 'ph-x');
        } else {
            mobileMenuIcon.classList.replace('ph-x', 'ph-list');
        }
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileMenuIcon.classList.replace('ph-x', 'ph-list');
        });
    });

    // 2. Navbar Background on Scroll
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 3. Typewriter Effect
    const words = ["Guru Teknik Mesin", "Instruktur Pengelasan", "Pendidik Profesional", "Inovator Welding"];
    let i = 0;
    let timer;
    const typewriterElement = document.getElementById('typewriter');

    function typingEffect() {
        if(!typewriterElement) return;
        let word = words[i].split("");
        var loopTyping = function() {
            if (word.length > 0) {
                typewriterElement.innerHTML += word.shift();
            } else {
                setTimeout(deletingEffect, 2000);
                return false;
            }
            timer = setTimeout(loopTyping, 100);
        };
        loopTyping();
    }

    function deletingEffect() {
        let word = words[i].split("");
        var loopDeleting = function() {
            if (word.length > 0) {
                word.pop();
                typewriterElement.innerHTML = word.join("");
            } else {
                if (words.length > (i + 1)) {
                    i++;
                } else {
                    i = 0;
                }
                setTimeout(typingEffect, 500);
                return false;
            }
            timer = setTimeout(loopDeleting, 50);
        };
        loopDeleting();
    }

    // Start typing effect
    setTimeout(typingEffect, 1000);

    // 4. Update Copyright Year
    document.getElementById('year').textContent = new Date().getFullYear();

    // 5. Active Link Switching on Scroll
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').includes(current)) {
                item.classList.add('active');
            }
        });
    });

    // 6. Form Submission (Prevent default for demo)
    const contactForm = document.getElementById('contactForm');
    if(contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerHTML;
            
            btn.innerHTML = '<i class="ph ph-spinner ph-spin"></i> Sending...';
            
            setTimeout(() => {
                btn.innerHTML = '<i class="ph ph-check"></i> Sent Successfully!';
                btn.style.background = '#10b981';
                contactForm.reset();
                
                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.style.background = '';
                }, 3000);
            }, 1500);
        });
    }

    // 7. Spark Particle Generator
    const sparkContainer = document.getElementById('spark-container');
    if (sparkContainer) {
        const createSpark = () => {
            const spark = document.createElement('div');
            spark.classList.add('spark');
            
            const size = Math.random() * 3 + 2;
            const left = Math.random() * 100;
            const duration = Math.random() * 4 + 3;
            const delay = Math.random() * 2;
            const drift = (Math.random() * 120) - 60;
            
            spark.style.width = `${size}px`;
            spark.style.height = `${size}px`;
            spark.style.left = `${left}%`;
            spark.style.animationDuration = `${duration}s`;
            spark.style.animationDelay = `${delay}s`;
            spark.style.setProperty('--drift', `${drift}px`);
            
            const hue = Math.floor(Math.random() * 25) + 10;
            spark.style.backgroundColor = `hsl(${hue}, 100%, 60%)`;
            spark.style.boxShadow = `0 0 ${size * 2}px hsl(${hue}, 100%, 50%)`;

            sparkContainer.appendChild(spark);
            
            setTimeout(() => {
                spark.remove();
            }, (duration + delay) * 1000);
        };

        for (let idx = 0; idx < 30; idx++) {
            createSpark();
        }

        setInterval(createSpark, 150);
    }

    // ============================================================
    // 8. PDF Preview Modal - Event Listeners
    // ============================================================

    const pdfModal = document.getElementById('pdf-preview-modal');
    const pdfCloseBtn = document.getElementById('pdf-modal-close');
    const savePdfAnalysis = document.getElementById('save-pdf-analysis');

    // Close button
    if (pdfCloseBtn) {
        pdfCloseBtn.addEventListener('click', closePdfPreview);
    }

    // Click outside modal content to close
    if (pdfModal) {
        pdfModal.addEventListener('click', (e) => {
            if (e.target === pdfModal) {
                closePdfPreview();
            }
        });
    }

    // Save analysis
    if (savePdfAnalysis) {
        savePdfAnalysis.addEventListener('click', () => {
            const key = pdfModal.dataset.currentKey;
            const text = document.getElementById('pdf-analysis-text').value;
            if (key) {
                localStorage.setItem(key, text);
            }
            // Show saved feedback
            const originalHTML = savePdfAnalysis.innerHTML;
            savePdfAnalysis.innerHTML = '<i class="ph ph-check-circle"></i> Tersimpan!';
            savePdfAnalysis.style.background = '#10b981';
            setTimeout(() => {
                savePdfAnalysis.innerHTML = originalHTML;
                savePdfAnalysis.style.background = '';
            }, 2000);
        });
    }

    // Close with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (pdfModal && pdfModal.style.display !== 'none') {
                closePdfPreview();
            }
            const analysisModal = document.getElementById('analysis-modal');
            if (analysisModal && analysisModal.style.display === 'flex') {
                analysisModal.style.display = 'none';
            }
        }
    });

    // ============================================================
    // 9. Analysis-Only Modal (for non-PDF artefact buttons)
    // ============================================================

    const analysisModal = document.getElementById('analysis-modal');
    const analysisTitle = document.getElementById('modal-title');
    const analysisText = document.getElementById('analysis-text');
    const closeModalBtn = document.getElementById('close-modal');
    const saveAnalysisBtn = document.getElementById('save-analysis');

    function openAnalysisModal(artefact, file) {
        let key = `analysis-${artefact}`;
        let title = `Analisis ${artefact}`;
        if (file) {
            key += `-${file}`;
            title += ` - ${file}`;
        }
        analysisTitle.textContent = title;
        analysisText.value = localStorage.getItem(key) || '';
        analysisModal.dataset.currentKey = key;
        analysisModal.style.display = 'flex';
    }

    // Close and Save handlers for analysis-only modal
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', () => {
            analysisModal.style.display = 'none';
        });
    }

    if (saveAnalysisBtn) {
        saveAnalysisBtn.addEventListener('click', () => {
            const key = analysisModal.dataset.currentKey;
            if (key) {
                localStorage.setItem(key, analysisText.value);
            }
            analysisModal.style.display = 'none';
        });
    }

    // Attach listener for pre-existing analysis buttons
    document.querySelectorAll('.analysis-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const artefact = btn.dataset.artefact;
            const file = btn.dataset.file;
            openAnalysisModal(artefact, file);
        });
    });
});
