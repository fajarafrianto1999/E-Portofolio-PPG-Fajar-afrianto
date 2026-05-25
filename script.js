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
- Belum menyesuaikan perbedaan kemampuan siswa: Materi dibuat dengan urutan yang sama untuk semua siswa, sehingga siswa yang belajar lebih lambat mungkin membutuhkan pendampingan tambahan.`,

    'analysis-lkm-1': `Konteks
LKM ini digunakan pada awal pembelajaran teori sebelum siswa masuk ke bengkel praktik. Isi LKM berupa kasus tentang pelanggaran keselamatan kerja (K3), seperti benda kerja yang longgar pada chuck dan serpihan logam yang berserakan di area bengkel.

Tujuan
- Membantu siswa mengenali pelanggaran K3 di bengkel.
- Melatih siswa memahami penyebab dan dampak kecelakaan kerja.
- Membimbing siswa mencari solusi agar keselamatan kerja lebih terjaga.

Kelebihan
- Kasus yang digunakan sesuai dengan kondisi nyata di bengkel.
- Membuat siswa lebih sadar pentingnya keselamatan kerja sebelum praktik langsung.

Kekurangan
- Penilaian masih berfokus pada hasil diskusi kelompok sehingga keaktifan setiap siswa belum terlihat jelas.`,

    'analysis-lkm-2': `Konteks
LKM ini berupa gambar kerja untuk membuat poros eksentrik pada praktik pembubutan.

Tujuan
- Membantu siswa membaca gambar teknik.
- Melatih siswa menentukan titik eksentrik dan melakukan pembubutan dengan tepat.
- Membimbing siswa menghasilkan benda kerja yang presisi.

Kelebihan
- Gambar kerja sudah sesuai standar industri.
- Ukuran dan toleransi ditulis dengan jelas sehingga siswa lebih mudah mengikuti langkah kerja.

Kekurangan
- Gambar masih berbentuk 2 dimensi sehingga beberapa siswa sulit membayangkan bentuk aslinya.`,

    'analysis-lkm-3': `Konteks
LKM ini digunakan untuk membuat komponen Flywheel Puller pada praktik pembubutan.

Tujuan
- Membimbing siswa membuat pembubutan bertingkat dan ulir.
- Melatih siswa menghasilkan ukuran benda kerja yang sesuai gambar teknik.

Kelebihan
- Produk yang dibuat memiliki fungsi nyata di bengkel otomotif.
- Siswa belajar membuat alat yang berguna untuk dunia kerja.

Kekurangan
- Tingkat kesulitan cukup tinggi karena menggabungkan beberapa teknik pembubutan sekaligus.
- Risiko kesalahan kerja masih cukup besar jika siswa kurang teliti.`,

    'analysis-lkm-4': `Konteks
LKM ini digunakan untuk diskusi kelompok tentang masalah hasil bubut yang kasar, pahat cepat aus, dan kesalahan pemilihan alat bantu.

Tujuan
- Membantu siswa memahami jenis pahat bubut dan alat bantu mesin.
- Melatih siswa mencari solusi dari masalah yang terjadi saat proses pembubutan.

Kelebihan
- Melatih kemampuan berpikir kritis siswa.
- Siswa belajar menganalisis penyebab masalah dan menentukan solusi yang tepat.

Kekurangan
- Tidak ada gambar kerusakan pahat sehingga siswa hanya memahami dari teori saja.`,

    'analysis-lkm-5': `Konteks
LKM ini berupa gambar kerja untuk membuat baut atau batang penekan pada proyek Flywheel Puller.

Tujuan
- Membimbing siswa melakukan pembubutan rata, tirus, radius, dan ulir luar.
- Melatih siswa menghasilkan benda kerja dengan ukuran yang presisi.

Kelebihan
- Ukuran kerja dibuat sangat detail sehingga melatih ketelitian siswa.
- Membantu siswa meningkatkan keterampilan saat mengoperasikan mesin bubut.

Kekurangan
- Tidak ada batas waktu pengerjaan sehingga siswa kurang terlatih dalam manajemen waktu kerja.`,

    'analysis-lkm-6': `Konteks
LKM ini berupa studi kasus tentang kegagalan proses pembubutan pada produksi poros baja di industri.

Tujuan
- Melatih siswa menghitung parameter pemotongan.
- Membantu siswa mencari penyebab getaran mesin dan keausan pahat.
- Membimbing siswa menentukan parameter pembubutan yang lebih tepat.

Kelebihan
- Menghubungkan perhitungan teori dengan masalah nyata di industri.
- Melatih kemampuan analisis teknik siswa.

Kekurangan
- Banyak perhitungan angka sehingga siswa yang kurang kuat dalam matematika bisa merasa kesulitan.`,

    'analysis-lkm-7': `Konteks
LKM ini digunakan untuk proyek akhir pembuatan Arbor Shaft dengan tingkat ketelitian tinggi.

Tujuan
- Membimbing siswa melakukan pembubutan presisi.
- Melatih siswa membaca toleransi dan membuat ulir luar.
- Membantu siswa melakukan pengecekan hasil pemasangan komponen.

Kelebihan
- Standar pengerjaan sudah mendekati standar industri sebenarnya.
- Melatih ketelitian dan kualitas kerja siswa.

Kekurangan
- Ada beberapa bagian langkah kerja yang perlu penjelasan tambahan dari guru agar siswa tidak bingung saat praktik.`,

    'analysis-lembar-penilaian-1': `Konteks
Digunakan untuk menilai hasil diskusi dan presentasi kelompok tentang kasus pelanggaran K3 pada Siklus 1.

Tujuan
Menilai kemampuan murid dalam memahami materi K3, cara menyampaikan hasil diskusi, kerja sama kelompok, ketepatan jawaban, rasa percaya diri, dan kedisiplinan saat presentasi.

Kelebihan
Rubrik penilaian sudah jelas dengan skala nilai 1–4, sehingga penilaian sikap dan kemampuan komunikasi kelompok lebih terarah.

Kekurangan
Penilaian masih berfokus pada hasil kelompok, sehingga guru cukup sulit mengetahui kontribusi dan pemahaman masing-masing anggota secara individu.`,

    'analysis-lembar-penilaian-2': `Konteks
Digunakan sebagai lembar penilaian praktik individu pada pengerjaan produk Poros Eksentrik di Siklus 1.

Tujuan
Menilai keterampilan praktik murid berdasarkan ketepatan ukuran, toleransi ISO, kehalusan permukaan, dan hasil finishing produk.

Kelebihan
Penilaian cukup objektif karena dibagi menjadi nilai objektif (75%) dari hasil pengukuran dan nilai subjektif (25%) dari kualitas pengerjaan. Selain itu, waktu pengerjaan juga dicatat untuk melihat efisiensi kerja murid.

Kekurangan
Belum ada kolom khusus untuk mencatat langkah perbaikan atau cara murid mengatasi kesalahan saat proses pembubutan berlangsung.`,

    'analysis-lembar-penilaian-3': `Konteks
Digunakan untuk menilai hasil praktik individu pada pengerjaan komponen Flywheel Puller 1 di akhir Siklus 1 menuju Siklus 2.

Tujuan
Menilai kemampuan murid dalam pengerjaan bubut yang lebih kompleks, seperti ketepatan sudut, diameter bertingkat, ulir, dan kualitas permukaan benda kerja.

Kelebihan
Penilaian sangat lengkap karena mencakup pemeriksaan ulir dalam dan luar secara detail. Terdapat juga kolom perbandingan hasil ukur murid dan guru untuk melatih kejujuran murid dalam evaluasi diri.

Kekurangan
Item penilaian cukup banyak sehingga guru membutuhkan waktu lebih lama saat melakukan pengecekan hasil kerja murid di bengkel.`,

    'analysis-lembar-penilaian-4': `Konteks
Digunakan untuk menilai hasil diskusi kelompok mengenai kasus pemilihan pahat dan alat bantu pada Siklus 2.

Tujuan
Menilai kemampuan kerja sama, pemahaman materi alat potong, kemampuan memberikan solusi, dan kedisiplinan murid saat presentasi.

Kelebihan
Rubrik penilaian membantu mendorong tanggung jawab kelompok karena menilai kejelasan penyampaian dan ketepatan jawaban.

Kekurangan
Format penilaiannya masih hampir sama dengan LKM 1 dan belum memiliki indikator khusus yang lebih mendalam terkait materi alat potong.`,

    'analysis-lembar-penilaian-5': `Konteks
Digunakan untuk menilai hasil praktik individu pada pengerjaan Baut Flywheel Puller di Siklus 2.

Tujuan
Menilai kemampuan murid dalam pembubutan memanjang, pembuatan alur, tirus, ulir baut, dan kepala segi enam.

Kelebihan
Penilaian sudah mencakup berbagai bentuk pengerjaan mekanis sehingga dapat menggambarkan kemampuan murid dalam membuat produk dengan bentuk yang beragam.

Kekurangan
Belum ada aturan pengurangan nilai yang jelas terkait keterlambatan waktu pengerjaan, sehingga penilaian bisa menjadi subjektif.`,

    'analysis-lembar-penilaian-6': `Konteks
Digunakan untuk menilai presentasi kelompok tentang analisis parameter pemotongan pada Siklus 3.

Tujuan
Menilai pemahaman konsep parameter pemotongan, ketepatan perhitungan, kemampuan analisis masalah, dan solusi yang diberikan murid.

Kelebihan
Rubrik penilaian lebih detail dan spesifik dibandingkan LKM sebelumnya, sehingga penilaian menjadi lebih jelas, transparan, dan sesuai dengan materi yang dipelajari.

Kekurangan
Penilaian masih berfokus pada hasil presentasi kelompok dan belum melibatkan penilaian antar teman untuk melihat keaktifan masing-masing anggota kelompok.`,

    'analysis-lembar-penilaian-7': `Konteks
Digunakan untuk menilai hasil proyek akhir individu berupa pengerjaan komponen Arbor Shaft pada Siklus 3.

Tujuan
Menguji kemampuan murid dalam menghasilkan produk dengan tingkat presisi tinggi, seperti toleransi ISO, pembubutan dalam, dan pembuatan ulir luar.

Kelebihan
Standar penilaiannya sudah mendekati standar industri karena menilai ketelitian ukuran dan kualitas permukaan produk secara detail.

Kekurangan
Proses pengerjaannya cukup rumit dan belum terdapat petunjuk khusus terkait aspek keselamatan kerja, sehingga fokus murid bisa hanya pada hasil ukuran produk saja.`,

    'analysis-lembar-penilaian-8': `Konteks
Digunakan sebagai penilaian kognitif individu berbasis digital menggunakan Google Forms pada akhir pembelajaran.

Tujuan
Mengukur pemahaman murid tentang materi pengeboran, mata bor, getaran pada bubut dalam, dan solusi pemesinan presisi.

Kelebihan
Penilaian lebih modern, praktis, dan efisien karena koreksi soal pilihan ganda dapat dilakukan otomatis. Rubrik penilaian soal uraian juga sudah jelas.

Kekurangan
Karena dikerjakan secara digital, masih ada kemungkinan murid mencari jawaban di internet atau bekerja sama dengan teman jika pengawasan kurang maksimal.`,

    'analysis-parameter-pemotongan': `Konteks
Media ini digunakan sebagai pembelajaran teori sebelum murid melakukan proses pemesinan secara langsung di bengkel. Materi membantu murid memahami perhitungan dasar dalam proses penyayatan logam dan melatih kemampuan berpikir logis serta perhitungan matematis.

Tujuan
- Membimbing murid dalam menghitung parameter pemotongan seperti kecepatan potong (Vc), putaran spindel (n), gerak makan (feed), dan kedalaman potong.
- Membantu murid memahami pengaruh kesalahan pemilihan parameter terhadap umur pahat dan kualitas hasil benda kerja.

Kelebihan
Media ini mampu menjelaskan hubungan antar parameter pemotongan dengan jelas. Selain itu, materi juga dikaitkan dengan kondisi nyata di bengkel, seperti pengaruh mesin yang sudah aus dan penggunaan coolant terhadap hasil pemesinan.

Kekurangan
Materi masih banyak berisi rumus dan perhitungan matematika. Kurangnya variasi contoh soal yang dekat dengan praktik bengkel membuat beberapa murid yang kurang kuat di perhitungan merasa kesulitan dan cepat bosan dalam memahami materi.`,

    'analysis-pengeboran-dan-bubut-dalam': `Konteks
Media ini digunakan sebagai panduan praktik lanjutan dalam proses pengeboran dan bubut dalam pada mesin bubut. Media berfungsi sebagai pedoman langkah kerja atau SOP di bengkel.

Tujuan
- Memberikan panduan langkah kerja pengeboran dan bubut dalam secara runtut mulai dari persiapan hingga pengecekan hasil ukuran.
- Membantu murid memahami perbedaan proses pengeboran (drilling) dan bubut dalam (boring).

Kelebihan
Penyajian materi dibuat seperti panduan kerja industri sehingga lebih mudah diterapkan saat praktik. Adanya petunjuk penggunaan alat dan instruksi penting membuat murid lebih disiplin dan teliti saat bekerja di bengkel.

Kekurangan
Walaupun langkah kerja sudah dijelaskan secara urut, media belum dilengkapi gambar atau ilustrasi arah gerakan pahat bubut dalam. Hal ini dapat membuat murid kesulitan membayangkan posisi gerakan pahat dan eretan saat praktik berlangsung.`,

    'analysis-pengenalan-mesin-bubut-&-k3': `Konteks
Media ini digunakan sebagai materi awal pembelajaran pemesinan bubut konvensional untuk kelas XI SMK. Materi diberikan sebelum murid masuk dan praktik langsung di bengkel.

Tujuan
- Mengenalkan cara kerja dasar mesin bubut dan bagian-bagian utamanya seperti headstock, tailstock, carriage, dan bed.
- Menanamkan budaya keselamatan kerja melalui pemahaman K3 dan penggunaan APD di bengkel.

Kelebihan
Materi disusun dengan rapi dan menggunakan bahasa yang mudah dipahami. Penjelasan tentang aturan keselamatan kerja juga cukup jelas, seperti larangan memakai aksesori saat praktik, sehingga penting untuk mencegah kecelakaan kerja pada murid pemula.

Kekurangan
Penjelasan bagian mesin masih banyak berbentuk teks. Media ini akan lebih menarik dan mudah dipahami jika ditambahkan gambar atau diagram mesin bubut lengkap beserta penunjuk nama komponennya.`,

    'analysis-jenis-jenis-pahat-bubut-dan-alat-bantu': `Konteks
Media ini digunakan setelah murid memahami bagian-bagian mesin bubut. Materi berfokus pada pengenalan jenis pahat dan alat bantu yang digunakan dalam proses pembubutan.

Tujuan
- Membantu murid memahami fungsi berbagai jenis pahat seperti pahat rata, pahat muka, pahat ulir, pahat alur, dan pahat potong.
- Menjelaskan perbedaan bahan pahat HSS dan karbida serta bentuk sudut mata potongnya.

Kelebihan
Penyajian materi cukup menarik dan runtut karena dibagi berdasarkan tahapan kerja. Adanya tabel perbandingan HSS dan karbida juga membantu murid memahami penggunaan pahat dalam dunia industri.

Kekurangan
Penjelasan bentuk insert karbida seperti rhombic, triangular, square, dan round masih berupa teks. Akan lebih baik jika ditambahkan gambar bentuk insert agar murid lebih mudah mengenali bentuk aslinya saat praktik di bengkel.`,

    'analysis-lampiran-7:-penilaian-perangkat': `Konteks
Instrumen penilaian perangkat pembelajaran ini digunakan untuk mengevaluasi kelengkapan, kesesuaian tujuan, serta kualitas media ajar yang telah disusun untuk kegiatan PPL Terbimbing di SMK Muhammadiyah 3 Yogyakarta.

Tujuan
- Mengevaluasi kesesuaian antara rencana pelaksanaan pembelajaran (RPP) dengan pelaksanaan di lapangan.
- Memastikan media ajar, LKM, dan rubrik penilaian telah memenuhi standar kompetensi yang ditetapkan.

Kelebihan
- Aspek penilaian sangat komprehensif, mencakup kelengkapan administrasi hingga kesesuaian media pembelajaran.
- Membantu memberikan umpan balik terstruktur demi perbaikan kualitas perangkat ajar berikutnya.

Kekurangan
- Proses evaluasi perangkat membutuhkan waktu koordinasi yang cukup intensif antara mahasiswa dengan guru pamong/dosen pembimbing.`,

    'analysis-lampiran-8:-praktik-mengajar': `Konteks
Instrumen penilaian praktik mengajar ini digunakan untuk mengevaluasi penampilan dan performa mengajar mahasiswa saat melaksanakan PPL Terbimbing di SMK Muhammadiyah 3 Yogyakarta.

Tujuan
- Mengukur kompetensi pedagogik, kepribadian, sosial, dan profesional mahasiswa secara langsung saat mengajar di kelas maupun bengkel.
- Memastikan penyampaian materi dan pengelolaan kelas berjalan efektif serta efisien.

Kelebihan
- Rubrik penilaian dirancang objektif dengan indikator performa yang jelas selama proses pembelajaran berlangsung.
- Memberikan gambaran nyata kompetensi mengajar riil di hadapan siswa.

Kekurangan
- Penilaian dapat dipengaruhi oleh subjektivitas pengamat jika tidak diselaraskan dengan persepsi awal sebelum observasi.`
};

// Seed default data (we overwrite to ensure the latest analysis is always set)
Object.keys(defaultAnalysisData).forEach(key => {
    localStorage.setItem(key, defaultAnalysisData[key]);
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

    // 10. Dokumentasi Button Navigation Slide (Click left/right buttons to slide)
    const docGallery = document.querySelector('.doc-gallery');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    if (docGallery && prevBtn && nextBtn) {
        const updateButtons = () => {
            const scrollLeft = docGallery.scrollLeft;
            const maxScrollLeft = docGallery.scrollWidth - docGallery.clientWidth;
            
            // Fade out prev button if scrolled to the beginning
            if (scrollLeft <= 5) {
                prevBtn.style.opacity = '0';
                prevBtn.style.pointerEvents = 'none';
            } else {
                prevBtn.style.opacity = '1';
                prevBtn.style.pointerEvents = 'auto';
            }
            
            // Fade out next button if scrolled to the end
            if (scrollLeft >= maxScrollLeft - 5) {
                nextBtn.style.opacity = '0';
                nextBtn.style.pointerEvents = 'none';
            } else {
                nextBtn.style.opacity = '1';
                nextBtn.style.pointerEvents = 'auto';
            }
        };
        
        prevBtn.addEventListener('click', () => {
            docGallery.scrollBy({ left: -344, behavior: 'smooth' }); // card width 320 + gap 24
        });
        nextBtn.addEventListener('click', () => {
            docGallery.scrollBy({ left: 344, behavior: 'smooth' });
        });
        
        docGallery.addEventListener('scroll', updateButtons);
        window.addEventListener('resize', updateButtons);
        
        // Run initial check
        setTimeout(updateButtons, 100);
    }
});

// ============================================================
// Global functions for Analisis Artefak cards
// ============================================================
function openAnalisisModal(type) {
    const modal = document.getElementById('analisis-modal');
    const icon = document.getElementById('analisis-modal-icon');
    const title = document.getElementById('analisis-modal-title');
    const body = document.getElementById('analisis-modal-body');
    
    if (!modal || !icon || !title || !body) return;

    let content = '';
    let titleText = '';
    let iconClass = '';
    let iconColor = '';

    if (type === 'kendala') {
        titleText = 'Kendala Penyusunan';
        iconClass = 'ph ph-warning-circle';
        iconColor = '#f59e0b';
        content = `
            <div class="modal-section-title"><i class="ph ph-shield-warning"></i> Tantangan &amp; Hambatan Riil</div>
            <p style="margin-bottom: 1.25rem;">Sebagai mahasiswa PPG yang melaksanakan praktik lapangan (PPL), kendala utama yang saya hadapi adalah menyelaraskan rancangan Modul Ajar/RPP dengan <strong>kemampuan awal peserta didik yang sangat heterogen</strong>. Beberapa siswa sudah terbiasa dengan alat mekanik, sementara yang lain membutuhkan pendampingan ekstra (<em>scaffolding</em>) bahkan untuk langkah awal penyusunan benda kerja.</p>
            
            <div class="modal-section-title"><i class="ph ph-wrench"></i> Faktor Teknis &amp; Alokasi Waktu</div>
            <p>Selain perbedaan kesiapan belajar (<em>readiness</em>), alokasi waktu praktik di bengkel pemesinan bubut sering kali terasa sangat padat. Hal ini menuntut saya untuk pandai menyiasati waktu agar proses penyayatan poros bertingkat maupun eksentrik dapat selesai dengan presisi dan tetap mengutamakan aspek keselamatan kerja (K3).</p>
        `;
    } else if (type === 'teori') {
        titleText = 'Teori/Konsep Pedagogi';
        iconClass = 'ph ph-gear';
        iconColor = 'var(--primary-neon)';
        content = `
            <div class="modal-section-title"><i class="ph ph-books"></i> Filosofi &amp; Landasan Teoretis</div>
            <p style="margin-bottom: 1.25rem;">Penyusunan perangkat pembelajaran ini didasarkan pada <strong>Filosofi Pendidikan Ki Hadjar Dewantara</strong>, khususnya pemikiran tentang 'Sistem Among' yang berpusat pada menuntun kodrat alami peserta didik. Sebagai calon guru profesional, saya berusaha memfasilitasi kebutuhan belajar siswa melalui integrasi <strong>TPACK</strong> (<em>Technological Pedagogical Content Knowledge</em>) dalam penyajian materi.</p>
            
            <div class="modal-section-title"><i class="ph ph-lightning"></i> Model Pembelajaran Kejuruan</div>
            <p>Saya menerapkan sintaks model pembelajaran <em>Problem-Based Learning</em> (PBL) untuk membekali siswa dengan pemecahan masalah teoritis K3, serta <em>Project-Based Learning</em> (PjBL) untuk melatih keterampilan psikomotorik di bengkel. Pendekatan konstruktivistik ini sangat efektif dalam memicu kemandirian belajar (<em>active learning</em>) siswa.</p>
        `;
    } else if (type === 'faktor') {
        titleText = 'Faktor Keberhasilan';
        iconClass = 'ph ph-target';
        iconColor = '#10b981';
        content = `
            <div class="modal-section-title"><i class="ph ph-crown"></i> Kunci Sukses Implementasi</div>
            <p style="margin-bottom: 1.25rem;">Faktor penentu keberhasilan praktik ini adalah tingginya motivasi peserta didik karena mereka diajak membuat produk yang memiliki fungsi nyata di industri (seperti alat penarik/<em>flywheel puller</em>). Selain itu, penerapan strategi <strong>tutor sebaya</strong> (<em>peer tutoring</em>) terbukti efektif mempercepat proses pemahaman praktis siswa saat bekerja berkelompok.</p>
            
            <div class="modal-section-title"><i class="ph ph-users-three"></i> Pendampingan Dosen &amp; Guru Pamong</div>
            <p>Umpan balik yang reflektif serta bimbingan intensif dari Dosen Pembimbing Lapangan dan Guru Pamong selama siklus pembelajaran (PPL Terbimbing) berkontribusi besar dalam penyempurnaan rancangan asesmen dan modul ajar yang berorientasi pada pencapaian tujuan pembelajaran secara optimal.</p>
        `;
    } else if (type === 'adaptasi') {
        titleText = 'Adaptasi Situasi Kelas';
        iconClass = 'ph ph-arrows-clockwise';
        iconColor = 'var(--secondary-neon)';
        content = `
            <div class="modal-section-title"><i class="ph ph-intersect"></i> Fleksibilitas &amp; Manajemen Kelas</div>
            <p style="margin-bottom: 1.25rem;">Kondisi riil di sekolah sering kali dihadapkan pada keterbatasan jumlah mesin bubut yang aktif dibandingkan rasio siswa yang ada. Menghadapi situasi ini, saya mengadaptasi manajemen bengkel dengan menggunakan <strong>sistem rotasi kelompok kerja (station)</strong> yang dinamis.</p>
            
            <div class="modal-section-title"><i class="ph ph-arrows-merge"></i> Skenario Alternatif yang Edukatif</div>
            <p>Kelompok siswa yang sedang mengantre atau menunggu giliran praktik tidak dibiarkan pasif. Mereka diarahkan untuk melakukan aktivitas bermakna lain yang saling terintegrasi, seperti berlatih melakukan pengukuran presisi menggunakan jangka sorong/mikrometer sekrup, menganalisis lembar kerja murid (LKM), atau melakukan evaluasi teoritis K3.</p>
        `;
    }

    icon.className = iconClass;
    icon.style.color = iconColor;
    title.textContent = titleText;
    body.innerHTML = content;

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeAnalisisModal() {
    const modal = document.getElementById('analisis-modal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
}
