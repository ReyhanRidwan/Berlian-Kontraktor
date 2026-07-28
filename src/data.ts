/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ServiceItem, ProjectItem, TestimonialItem, FaqItem, ArticleItem } from "./types";
import { IMAGES } from "./constants/images";

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "konstruksi-pembangunan",
    title: "Konstruksi & Pembangunan",
    icon: "Hammer",
    image: IMAGES.serviceNewBuild,
    description: "Pembangunan rumah tinggal, gedung komersial, gudang industri, dan fasilitas umum dari nol hingga selesai.",
    features: [
      "Pembangunan Rumah Tinggal & Villa",
      "Konstruksi Gedung Komersial & Kantor",
      "Pembangunan Gudang Industri & Fasilitas Umum",
      "Perencanaan Struktur & Fondasi Kokoh",
      "Laporan Progres Pengerjaan Tepat Waktu"
    ]
  },
  {
    id: "renovasi-remodeling",
    title: "Renovasi & Remodeling",
    icon: "Wrench",
    image: IMAGES.serviceRenovation,
    description: "Renovasi kantor, villa, gedung, dan hunian dengan hasil modern dan fungsional.",
    features: [
      "Renovasi Kantor, Villa, Ruko & Gedung",
      "Remodeling Interior & Fasad Eksterior",
      "Perbaikan & Peremajaan Struktur Bangunan",
      "Pengoptimalan Tata Ruang Modern & Fungsional",
      "Pengerjaan Rapi & Sesuai Anggaran"
    ]
  },
  {
    id: "interior-plafon",
    title: "Interior & Plafon",
    icon: "Paintbrush",
    image: IMAGES.serviceArchitecture,
    description: "Pemasangan plafon gypsum & PVC, partisi gypsum, dan pekerjaan interior lainnya.",
    features: [
      "Pemasangan Plafon Gypsum & PVC",
      "Pemasangan Partisi Gypsum & Sekat Ruang",
      "Desain & Pengerjaan Elemen Interior Modern",
      "Pengecatan & Finishing Rapi Halus",
      "Material Berkualitas Tinggi & Presisi"
    ]
  },
  {
    id: "perbaikan-maintenance",
    title: "Perbaikan & Maintenance",
    icon: "ShieldCheck",
    image: IMAGES.serviceContractor,
    description: "Perbaikan plafon bocor/jebol, perawatan bangunan, dan pekerjaan sipil ringan.",
    features: [
      "Perbaikan Plafon Bocor & Jebol",
      "Perawatan Rutin & Pemeliharaan Bangunan",
      "Pekerjaan Sipil Ringan & Retak Dinding",
      "Inspeksi Atap, Waterproofing & Sanitasi",
      "Layanan Tanggap & Hasil Berkualitas"
    ]
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "modern-minimalist-villa",
    title: "Modern Minimalist Villa - Ciomas",
    client: "Bpk. Aditya Nugraha",
    location: "Ciomas, Bogor",
    year: "2025",
    area: "180 m²",
    challenge: "Lahan berkontur miring khas lereng pegunungan Ciomas memerlukan sistem fondasi cakar ayam bertingkat ekstra dalam dan penguatan dinding penahan tanah (retaining wall) agar bebas risiko longsor atau pergeseran tanah.",
    solution: "Mengintegrasikan fondasi bored pile sedalam 6 meter dengan pile cap kokoh, disusul desain arsitektur split-level modern yang memanfaatkan kontur alami tanah guna memaksimalkan pencahayaan serta ventilasi alami tanpa merusak topografinya.",
    beforeImage: IMAGES.project1Before,
    afterImage: IMAGES.project1After,
    gallery: IMAGES.project1Gallery
  },
  {
    id: "industrial-heritage-residence",
    title: "Industrial Heritage Residence - Sentul",
    client: "Ibu Dian Lestari",
    location: "Sentul Alaya, Bogor",
    year: "2024",
    area: "240 m²",
    challenge: "Pemilik menginginkan estetika industrial modern dengan banyak elemen ekspos beton dan baja kokoh, namun tetap terasa sejuk dan bebas lembap di tengah iklim Bogor yang memiliki curah hujan tinggi.",
    solution: "Kami menerapkan teknologi waterproofing membran bakar kualitas tinggi pada seluruh dak beton eksterior, dilapisi cat pelindung cuaca premium, serta menyisipkan roster terakota dekoratif sebagai jalur sirkulasi udara silang yang efektif.",
    beforeImage: IMAGES.project2Before,
    afterImage: IMAGES.project2After,
    gallery: IMAGES.project2Gallery
  },
  {
    id: "classic-luxury-living",
    title: "Classic Luxury Living - Kota Bogor",
    client: "Keluarga Dr. Hendry",
    location: "Semplak, Bogor",
    year: "2025",
    area: "350 m²",
    challenge: "Restorasi dan peningkatan bangunan tua peninggalan tanpa merusak nilai memori interior klasik, namun struktur atap kayu lama sudah lapuk parah diserang rayap dan membahayakan keselamatan penghuni.",
    solution: "Melakukan penggantian total struktur atap menggunakan baja ringan kanal C dengan garansi anti rayap 15 tahun, diaplikasikan dengan teknik penyangga silang presisi, serta dipasangkan genteng keramik berglasur untuk kesan mewah nan abadi.",
    beforeImage: IMAGES.project3Before,
    afterImage: IMAGES.project3After,
    gallery: IMAGES.project3Gallery
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "testi-1",
    name: "Arya Wijaya",
    role: "Pemilik Rumah Tinggal (Ciomas)",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
    rating: 5,
    content: "Membangun rumah dari nol bersama Berlian Kontraktor adalah keputusan terbaik. Timnya sangat komunikatif, RAB transparan tanpa ada biaya siluman di tengah proyek. Insinyurnya rutin meninjau ke lapangan dan kualitas betonnya luar biasa presisi.",
    projectType: "Bangun Baru"
  },
  {
    id: "testi-2",
    name: "Siti Rahmawati",
    role: "Pemilik Ruko 3 Lantai (Bogor Barat)",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
    rating: 5,
    content: "Sangat puas dengan renovasi total ruko kami. Konstruksi selesai 2 minggu lebih cepat dari jadwal semula tanpa penurunan kualitas pengerjaan. Rapi, bersih, dan aplikator waterproofing-nya terbukti ampuh menahan bocor saat hujan deras Bogor.",
    projectType: "Renovasi Total"
  },
  {
    id: "testi-3",
    name: "Budi Santoso",
    role: "Pengembang Kompleks Residensial",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
    rating: 5,
    content: "Berlian Kontraktor memegang teguh komitmen 'Kokoh & Presisi'. Desain arsitekturnya modern, pengerjaan struktur beton bertulangnya rapi, serta pembuatan gambar kerja DED sangat rinci sehingga memudahkan kepengurusan izin PBG/IMB kami.",
    projectType: "Manajemen Konstruksi"
  }
];

export const FAQS_DATA: FaqItem[] = [
  {
    id: "faq-1",
    question: "Bagaimana tahapan awal bagi saya yang ingin membangun rumah dari nol?",
    answer: "Tahapan dimulai dari Konsultasi Gratis (diskusi kebutuhan, budget, dan survei lahan oleh tim Berlian Kontraktor). Dilanjutkan pembuatan Desain Denah dan 3D Rendering. Setelah disetujui, kami menyusun Rencana Anggaran Biaya (RAB) terperinci dan Surat Perjanjian Kontrak Kerja (SPK). Konstruksi fisik baru akan dimulai setelah kesepakatan SPK ditandatangani.",
    category: "Layanan"
  },
  {
    id: "faq-2",
    question: "Bagaimana cara Berlian Kontraktor menjamin biaya pembangunan tidak membengkak di tengah proses?",
    answer: "Kami menggunakan komitmen 'RAB Transparan dan Mengikat'. Seluruh material, upah tukang, dan spesifikasi tercantum jelas di dalam SPK. Jika tidak ada perubahan desain atau spesifikasi material dari pihak konsumen selama masa pembangunan, nilai kontrak final di awal tidak akan mengalami penambahan sama sekali.",
    category: "Biaya"
  },
  {
    id: "faq-3",
    question: "Apakah ada biaya tersembunyi yang biasanya muncul di luar RAB?",
    answer: "Tidak ada biaya tersembunyi dari Berlian Kontraktor. Komponen seperti mobilisasi alat, pembersihan sisa bangunan, hingga penyediaan air/listrik kerja sudah kami masukkan dalam RAB paket awal sehingga aman bagi finansial Anda.",
    category: "Biaya"
  },
  {
    id: "faq-4",
    question: "Berapa lama waktu pengerjaan standar untuk membangun rumah tinggal?",
    answer: "Waktu pengerjaan bergantung pada luas bangunan dan tingkat kesulitan desain. Secara umum, rumah tinggal 1 lantai dengan luas di bawah 100 m² selesai dalam 3-4 bulan. Untuk rumah 2 lantai luas 150-250 m² memerlukan waktu antara 5-7 bulan pengerjaan intensif berkelanjutan.",
    category: "Waktu"
  },
  {
    id: "faq-5",
    question: "Apakah proyek konstruksi Berlian Kontraktor dilindungi oleh garansi resmi?",
    answer: "Tentu. Setiap proyek kami dilindungi oleh Garansi Pemeliharaan Fisik selama 3 hingga 12 bulan (tergantung jenis kontrak). Garansi mencakup kebocoran atap/dak, keretakan rambut pada dinding, kerusakan sistem instalasi pipa air, hingga malfungsi jalur kelistrikan utama.",
    category: "Layanan"
  },
  {
    id: "faq-6",
    question: "Apakah Berlian Kontraktor bersedia membantu pengurusan dokumen IMB / PBG?",
    answer: "Ya, kami menyediakan gambar arsitektur lengkap, perhitungan struktur sipil resmi dari ahli teknik sipil bersertifikat, serta dokumen pendukung lainnya yang mutlak diperlukan untuk memuluskan kepengurusan izin PBG (Persetujuan Bangunan Gedung) Anda di instansi pemerintah terkait.",
    category: "Layanan"
  }
];

export const ARTICLES_DATA: ArticleItem[] = [
  {
    id: "artikel-1",
    title: "5 Tips Memilih Fondasi Rumah yang Tepat untuk Daerah Bogor & Sekitarnya",
    category: "Struktur & Fondasi",
    date: "14 Juni 2026",
    author: "Ir. Hendra Wijaya",
    readTime: "5 menit membaca",
    summary: "Tanah di Bogor memiliki karakteristik curah hujan tinggi yang membuat kestabilan tanah rawan bergeser. Pelajari jenis fondasi terbaik agar konstruksi rumah Anda aman selamanya.",
    content: `Membangun rumah di wilayah Bogor dan sekitarnya menyuguhkan tantangan geografis yang cukup unik. Dengan julukan 'Kota Hujan', intensitas air yang membasahi tanah Bogor sepanjang tahun sangatlah tinggi. Hal ini menyebabkan kadar kejenuhan air tanah melimpah, yang berpotensi merusak kestabilan tanah di bawah bangunan jika tidak direncanakan dengan saksama.

Sebagai praktisi konstruksi sipil, kami merangkum 5 hal utama dalam mempersiapkan fondasi rumah Anda:

1. **Pahami Jenis Tanah Lahan Anda**
Tanah bogor berkisar dari lempung ekspansif hingga tanah berbatu vulkanik. Sebelum meletakkan batu pertama, lakukan pengujian tanah sederhana atau minta bantuan kontraktor ahli untuk menganalisis kepadatan tanah.

2. **Fondasi Batu Kali untuk Rumah 1 Lantai**
Untuk beban bangunan ringan (1 lantai) dengan kondisi tanah keras yang relatif dangkal, struktur fondasi menerus dari pasangan batu kali masih merupakan opsi yang sangat aman, ekonomis, dan kokoh.

3. **Fondasi Tiang Pancang atau Mini Pile untuk Area Lereng**
Jika lahan Anda berada di kontur berbukit seperti Ciomas atau Sentul, fondasi dangkal tidaklah cukup. Anda memerlukan fondasi dalam seperti Mini Pile atau Bored Pile untuk mentransfer beban bangunan langsung ke lapisan tanah keras terdalam yang stabil.

4. **Wajib Memasang Sloof Beton Bertulang**
Sloof beton bertulang berfungsi mengikat fondasi batu kali atau pile cap secara horizontal. Ini mencegah pergeseran kolom rumah jika terjadi gempa ringan atau penurunan tanah searah.

5. **Sistem Drainase di Sekitar Fondasi**
Buat saluran air pembuangan yang tertata baik di sekeliling dinding fondasi luar. Tujuannya adalah mencegah genangan air meresap langsung secara berlebihan ke bawah telapak fondasi, yang dapat mengurangi daya dukung mekanis tanah secara dramatis.

Hubungi tim ahli teknik sipil Berlian Kontraktor di Bogor untuk mendapatkan kalkulasi kekuatan beban struktur yang aman serta presisi bagi rencana hunian Anda.`,
    image: IMAGES.serviceNewBuild
  },
  {
    id: "artikel-2",
    title: "Panduan Lengkap Menghitung RAB Bangun Rumah dari Nol Secara Realistis",
    category: "Manajemen Biaya",
    date: "10 April 2026",
    author: "Tim Estimator Berlian Kontraktor",
    readTime: "7 menit membaca",
    summary: "Jangan sampai proyek rumah impian terhenti di tengah jalan karena salah hitung anggaran. Simak panduan menyusun Rencana Anggaran Biaya (RAB) yang transparan.",
    content: `Banyak calon pemilik rumah yang terjebak dalam masalah klasik: proyek terpaksa mandek di tengah jalan karena kehabisan dana. Sering kali hal ini bukan karena dana awal mereka kurang, melainkan karena estimasi awal yang tidak akurat alias mengabaikan banyak variabel biaya tak terduga.

Bagaimana menyusun Rencana Anggaran Biaya (RAB) konstruksi yang sehat dan realistis? Ikuti panduan estimator profesional kami berikut ini:

1. **Hitung Luas Bangunan Riil per Lantai**
Luas bangunan (panjang x lebar) dikalikan jumlah lantai akan menentukan volume pekerjaan fisik Anda secara keseluruhan. Biaya per meter persegi biasanya berkisar antara Rp 4,5 juta hingga Rp 7,5 juta tergantung wilayah dan kelas material.

2. **Klasifikasikan Kelas Spesifikasi Material**
- **Standar**: Keramik lokal, cat dinding menengah, atap baja ringan, sanitasi standar kualitas baik.
- **Medium**: Granit tile, cat dinding premium anti noda, cat waterproofing premium, kloset duduk bermerek, pintu kayu solid.
- **Premium**: Lantai marmer impat, kusen aluminium premium, sistem smart-home, kaca temper, saniter mewah impor bergaransi tinggi.

3. **Alokasikan Biaya Pekerjaan Infrastruktur Dasar**
Sering kali dilupakan, biaya untuk instalasi listrik PLN baru, sumur bor/PDAM, gerbang utama, pagar perimeter, hingga pemasangan tangki septik biotank ramah lingkungan harus dihitung sejak awal.

4. **Siapkan Dana Darurat Proyek (Contingency Fund)**
Selalu siapkan dana siaga sebesar 5% hingga 10% dari total anggaran proyek. Dana ini sangat berguna jika sewaktu-waktu terjadi lonjakan kenaikan harga bahan bangunan di pasar global atau jika Anda menginginkan sedikit perubahan detail desain di lapangan.

Di Berlian Kontraktor, kami selalu berkomitmen menyodorkan RAB transparan dengan rincian material bermerek yang mengikat, menghindarkan Anda dari stress akibat pembengkakan biaya tak terencana.`,
    image: IMAGES.serviceRenovation
  },
  {
    id: "artikel-3",
    title: "Mengatasi Dinding Lembap dan Rembes akibat Curah Hujan Tinggi Kota Bogor",
    category: "Perawatan Rumah",
    date: "25 Mei 2026",
    author: "Ir. Hendra Wijaya",
    readTime: "4 menit membaca",
    summary: "Dinding rumah Anda sering mengelupas, berjamur, atau rembes? Temukan solusi teknis permanen mengatasi kelembapan berlebih tanpa tambal sulam berkali-kali.",
    content: `Sebagai kota dengan tingkat intensitas hujan nomor satu di Indonesia, masalah dinding rembes dan berjamur adalah problem komunal yang paling sering dikeluhkan oleh warga Bogor. Kerusakan cat dinding hingga keroposnya plesteran semen tidak hanya merusak visual rumah, namun juga memicu gangguan pernapasan akibat tumbuhnya spora jamur berbahaya.

Metode tambal sulam murah dengan mengecat ulang dinding rembes hanya akan bertahan 1-2 bulan sebelum cat kembali bergelembung dan rontok. Solusi permanen membutuhkan tindakan korektif secara struktural:

1. **Identifikasi Sumber Air Rembesan**
Periksa apakah rembesan berasal dari talang air atap yang tersumbat, retakan rambut di dinding luar, atau naiknya air tanah akibat slab beton bawah lantai tidak dilapisi membran plastik pelindung kelembapan.

2. **Gunakan Semen Kedap Air (Semen Waterproofing Dua Komponen)**
Untuk sela dinding eksterior pembatas tetangga, kupas seluruh plesteran lama hingga menyentuh batu bata asli. Aplikasikan semen slurry anti air dua komponen berbahan dasar akrilik-semen yang fleksibel, lalu plester kembali menggunakan campuran aditif penguat semen.

3. **Buat Sistem Talang yang Tepat**
Pastikan talang air beton di atap memiliki kemiringan minimal 1-2% searah corong pembuangan air, serta dilapisi waterproofing polyurethane elastic berkualitas yang tahan paparan ultraviolet matahari ekstrim.

4. **Sirkulasi Udara Ruangan yang Cukup**
Ruangan yang lembap mempercepat pertumbuhan jamur. Gunakan blower exhaust di sudut-sudut ruangan minim jendela (seperti kamar mandi atau dapur) agar sirkulasi udara luar terjamin.

Perlu penanganan profesional untuk rumah Anda yang telanjur rembes parah? Hubungi tim restorasi/renovasi Berlian Kontraktor Bogor untuk survei thermal scanning lokasi kebocoran secara akurat.`,
    image: IMAGES.serviceArchitecture
  },
  {
    id: "artikel-4",
    title: "Tren Desain Rumah Tropis Modern: Sejuk Serta Estetis Tanpa Banyak AC",
    category: "Desain Arsitektur",
    date: "02 Maret 2026",
    author: "Tim Arsitek Berlian Kontraktor",
    readTime: "6 menit membaca",
    summary: "Konsep desain tropis modern kini kian digandrungi. Cari tahu cara arsitek kami merekayasa tata ruang agar hunian tetap adem di siang hari yang terik.",
    content: `Indonesia beriklim tropis basah dengan kelembapan tinggi dan paparan cahaya matahari sepanjang tahun. Arsitektur Tropis Modern hadir menjembatani keinginan hunian berpenampilan mewah, bersih, nan modern, namun memiliki pertahanan alami prima terhadap hawa panas dan basahnya lingkungan tropis.

Arsitek Berlian Kontraktor menerapkan prinsip rekayasa lingkungan pasif sebagai berikut:

1. **Atap dengan Overstek Lebar (Lebar Teritisan)**
Overstek atau perpanjangan bidang atap sejauh 1 hingga 1.5 meter di luar dinding utama sangat krusial. Ini melindungi permukaan kaca besar dan kuadran dinding dari rintikan air hujan miring sekaligus menghalau panas matahari langsung menyengat dinding bata secara tegak lurus.

2. **Ventilasi Silang (Cross Ventilation)**
Dengan meletakkan bukaan jendela/pintu yang berhadapan atau berseberangan secara tak sejajar, angin didorong untuk terus masuk dan berputar menyapu hawa panas di dalam ruangan sebelum dialirkan keluar.

3. **Langit-Langit Tinggi (High Ceiling)**
Mengatur tinggi ruangan minimal 3.2 meter hingga 4 meter dari permukaan lantai akan menumpuk akumulasi udara panas di bagian atas ruangan jauh di atas tinggi kepala manusia, membuat ruangan di bawahnya terasa sejuk secara instan.

4. **Konsep Open Space dengan Taman Dalam Rumah (Inner Courtyard)**
Menyisipkan taman mini terbuka di tengah bangunan merupakan kunci estetika tropis modern yang menyegarkan mata, menjaga sirkulasi ventilasi tegak lurus, dan mendistribusikan cahaya alami lembut ke seluruh penjuru ruangan.`,
    image: IMAGES.serviceContractor
  },
  {
    id: "artikel-5",
    title: "Mengenal Perbedaan IMB dan PBG: Aturan Perizinan Konstruksi Terbaru 2026",
    category: "Regulasi & Hukum",
    date: "12 Februari 2026",
    author: "Tim Legalitas Berlian Kontraktor",
    readTime: "5 menit membaca",
    summary: "Sejak berlakunya UU Cipta Kerja, istilah IMB resmi digantikan oleh PBG. Simak penjelasan perbedaan mendasar serta cara mudah mengurus perizinannya.",
    content: `Melakukan pembangunan fisik rumah tinggal tanpa memiliki dokumen perizinan resmi dari pemerintah daerah adalah tindakan ilegal yang berisiko didenda berat hingga pembongkaran paksa bangunan oleh Satpol PP. 

Sejak dua tahun terakhir, Izin Mendirikan Bangunan (IMB) telah sepenuhnya digantikan oleh Persetujuan Bangunan Gedung (PBG). Apa perbedaan mendasarnya dan bagaimana cara legal mengurusnya di tahun 2026?

Berikut rangkuman singkat dari divisi legal Berlian Kontraktor:

1. **Perubahan Filosofi Perizinan**
IMB adalah izin yang harus diajukan di awal *sebelum* mendirikan fisik bangunan. Sedangkan PBG merupakan bentuk standarisasi teknis yang mengatur kelayakan fungsi bangunan, menjamin keselamatan struktur, kesehatan lingkungan, sirkulasi kenyamanan, dan instalasi kebakaran yang harus dipertahankan sepanjang bangunan berdiri.

2. **Kewajiban Mengajukan SLF**
Setelah konstruksi bangunan selesai sesuai dengan gambar PBG, pemilik bangunan wajib mengurus Sertifikat Laik Fungsi (SLF) agar bangunan tersebut sah dihuni secara hukum dan dapat dijadikan agunan bank atau kelengkapan transaksi jual beli properti di masa depan.

3. **Cara Pengurusan Lewat Portal SIMBG**
Seluruh berkas administrasi (KTP, sertifikat tanah bebas sengketa) sertat cetak dokumen teknis (Gambar Arsitektur, Struktur, Utilitas MEP) kini diunggah langsung ke portal nasional SIMBG milik kementerian PUPR.

4. **Keterlibatan Tenaga Ahli Bersertifikat**
Salah satu syarat lolos verifikasi PBG adalah lampiran tanda tangan penanggung jawab teknis gambar berlisensi SKA/SKK Sipil/Arsitek.

Di Berlian Kontraktor, kami memberikan kemudahan ekstra dengan menyediakan seluruh dokumen rancangan terverifikasi, perhitungan struktur sipil resmi, serta pendampingan maksimal dalam proses SIMBG agar perizinan Anda terbit tanpa hambatan birokrasi.`,
    image: IMAGES.serviceContractor
  }
];
