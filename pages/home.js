pages.home = [
    // 1. HERO
    {
        section: 'hero',
        title: 'Open Courseware Computer Vision',
        tagline: 'Dari Piksel hingga Presensi Wajah Berbasis Browser — Satu Semester, Satu Vision Lab.',
        description: 'Platform belajar terbuka untuk mata kuliah Computer Vision. 16 modul terstruktur memandu mahasiswa membangun Vision Lab — sistem benchmark deteksi dan pengenalan wajah yang berjalan sepenuhnya di browser dengan JavaScript dan OpenCV.js.',
        badges: [
            'JavaScript + OpenCV.js',
            'In-Browser Inference',
            'MediaPipe + face-api',
            '16 Modul',
            'Vision Lab',
            'License: MIT'
        ],
        cta: {
            text: 'Mulai Belajar',
            link: 'learn'
        },
        imgClass: 'di-donat'
    },

    // 2. KEY FEATURES — diambil dari 4 bagian kurikulum learn.js
    {
        section: 'features',
        items: [
            {
                icon: 'di-code',
                title: 'Fondasi & Praproses Citra',
                content: 'Piksel, warna, canvas, histogram, filter, threshold, deteksi tepi, dan morfologi. 4 pertemuan untuk membangun pipeline praproses yang siap dipakai detektor mana pun.',
                linkText: 'Mulai Bagian 1 &raquo;',
                linkTarget: 'learn/modul01'
            },
            {
                icon: 'di-web',
                title: 'Deteksi & Segmentasi',
                content: 'Threshold dan kontur, Haar cascade, detektor CNN (BlazeFace), landmark MediaPipe, normalisasi IOD, dan metrik IoU, precision, recall, F1. Diuji di UTS dengan pipeline lengkap.',
                linkText: 'Mulai Bagian 2 &raquo;',
                linkTarget: 'learn/modul05'
            },
            {
                icon: 'di-setting',
                title: 'Deskripsi, Pola & Pelacakan',
                content: 'Deskriptor bentuk dan momen Hu, fitur lokal HOG dan ORB, klasifikasi k-NN, confusion matrix, FAR/FRR, ROC, serta tracking-by-detection dengan Kalman filter.',
                linkText: 'Mulai Bagian 3 &raquo;',
                linkTarget: 'learn/modul09'
            }
        ]
    },

    // 3. KURIKULUM + CARA SITASI
    {
        section: 'article',
        leftCol: {
            subtitle: 'Kurikulum 16 Modul',
            lines: [
                '### Bagian 1: Fondasi & Praproses Citra',
                '**P1** — Kontrak Kuliah & Gambaran Computer Vision',
                '**P2** — Pengantar Computer Vision',
                '**P3** — Praproses Citra',
                '**P4** — Praproses Citra Lanjut',
                '---',
                '### Bagian 2: Deteksi, Segmentasi & UTS',
                '**P5** — Deteksi & Segmentasi Objek',
                '**P6** — Deteksi & Segmentasi Objek Lanjut',
                '**P7** — Review & Integrasi P2–P6',
                '**P8** — UTS: Evaluasi Tengah Semester',
                '---',
                '### Bagian 3: Deskripsi, Pola & Pelacakan',
                '**P9** — Deskripsi & Representasi Objek',
                '**P10** — Deskripsi & Representasi Objek Lanjut',
                '**P11** — Pengenalan Pola',
                '**P12** — Pelacakan Objek',
                '---',
                '### Bagian 4: Aplikasi & Evaluasi Akhir',
                '**P13** — Aplikasi Computer Vision',
                '**P14** — Aplikasi Computer Vision Lanjut',
                '**P15** — Final Review & Demo P9–P14',
                '**P16/UAS** — Demo Terpadu Vision Lab'
            ]
        },
        rightCol: {
            subtitle: 'Target Proyek & Cara Sitasi',
            lines: [
                '### Target Proyek Akhir Semester',
                'Mahasiswa membangun **Vision Lab** — sistem benchmark deteksi dan pengenalan wajah berbasis browser:',
                '```javascript',
                '// Fitur yang wajib berfungsi di UAS:\n// ✅ Tangkap webcam ke canvas + praproses\n// ✅ Deteksi wajah: Haar cascade & BlazeFace\n// ✅ Landmark MediaPipe 468 titik + normalisasi IOD\n// ✅ Verifikasi dengan NCC + ambang FAR/FRR\n// ✅ Metrik evaluasi: IoU, precision, recall, F1\n// ✅ Benchmark latensi & FPS lintas pustaka\n// ✅ Tracking-by-detection dengan Kalman filter\n// ✅ Etika data biometrik (UU PDP No. 27/2022)',
                '```',
                '---',
                '### Bobot Penilaian UAS',
                'skill:25%:Pipeline deteksi & segmentasi berjalan:Utama',
                'skill:25%:Kualitas data & analisis benchmark:Teknis',
                'skill:20%:Inovasi & kedalaman (landmark, tracking):Inovasi',
                'skill:15%:Dokumentasi & repo (README, API):Profesional',
                'skill:15%:Presentasi & demo pipeline:Presentasi',
                '---',
                '### How to Cite This Courseware',
                '**Yogi Kristiyanto.** (2026). *OCW-CV: Open Courseware Computer Vision*. Figshare.'
            ]
        }
    }
];
