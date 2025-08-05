// pages/api/course/index.ts
import { NextApiRequest, NextApiResponse } from 'next';

interface Course {
  kode_matkul: string;
  nama_matkul: string;
  sks: number;
  jenis: "Wajib" | "Peminatan";
}

interface CourseData {
  [semester: string]: Course[];
}

export default function handler(req: NextApiRequest, res: NextApiResponse<CourseData>) {
  res.status(200).json({
    "Semester 1": [
        {
            "kode_matkul": "203101-201",
            "nama_matkul": "Basic English for Academic Purposes",
            "sks": 2,
            "jenis": "Wajib"
        },
        {
            "kode_matkul": "203102-20",
            "nama_matkul": "Aplikasi Teknologi Informasi",
            "sks": 2,
            "jenis": "Wajib"
        },
        {
            "kode_matkul": "203103-20",
            "nama_matkul": "Pengembangan Kepribadian",
            "sks": 2,
            "jenis": "Wajib"
        },
        {
            "kode_matkul": "203104-20",
            "nama_matkul": "Matematika & Statistika Informatika",
            "sks": 3,
            "jenis": "Wajib"
        },
        {
            "kode_matkul": "203105-20",
            "nama_matkul": "Sistem Bilangan & Logika Informatika",
            "sks": 2,
            "jenis": "Wajib"
        },
        {
            "kode_matkul": "203106-20",
            "nama_matkul": "Pengembangan Web & Mobile",
            "sks": 2,
            "jenis": "Wajib"
        },
        {
            "kode_matkul": "203107-20",
            "nama_matkul": "Teknologi Berbasis Objek",
            "sks": 2,
            "jenis": "Wajib"
        },
        {
            "kode_matkul": "203108-20",
            "nama_matkul": "Algoritma Pemrograman",
            "sks": 3,
            "jenis": "Wajib"
        },
        {
            "kode_matkul": "203109-20",
            "nama_matkul": "Algoritma Pemrograman Praktik",
            "sks": 2,
            "jenis": "Wajib"
        }
    ],
    "Semester 2": [
        {
            "kode_matkul": "203201-205",
            "nama_matkul": "English for Daily Conversation",
            "sks": 2,
            "jenis": "Wajib"
        },
        {
            "kode_matkul": "203202-20C",
            "nama_matkul": "Japanese for Daily Conversation",
            "sks": 2,
            "jenis": "Wajib"
        },
        {
            "kode_matkul": "203203-201",
            "nama_matkul": "Chinese for Daily Conversation",
            "sks": 2,
            "jenis": "Wajib"
        },
        {
            "kode_matkul": "203211-20",
            "nama_matkul": "Kalkulus 2",
            "sks": 3,
            "jenis": "Wajib"
        },
        {
            "kode_matkul": "203212-20",
            "nama_matkul": "Arsitektur & Organisasi Komputer",
            "sks": 3,
            "jenis": "Wajib"
        },
        {
            "kode_matkul": "203213-20",
            "nama_matkul": "Statistik & Probabilitas",
            "sks": 3,
            "jenis": "Wajib"
        },
        {
            "kode_matkul": "203215-20",
            "nama_matkul": "Teori Struktur Data",
            "sks": 3,
            "jenis": "Wajib"
        },
        {
            "kode_matkul": "203214-20",
            "nama_matkul": "Struktur Data Praktik",
            "sks": 1,
            "jenis": "Wajib"
        },
        {
            "kode_matkul": "203412-20",
            "nama_matkul": "Aljabar Linier",
            "sks": 3,
            "jenis": "Wajib"
        },
        {
            "kode_matkul": "203402-20",
            "nama_matkul": "Bahasa Indonesia",
            "sks": 2,
            "jenis": "Wajib"
        }
    ],
    "Semester 3": [
        {
            "kode_matkul": "203314-20",
            "nama_matkul": "Sistem Operasi",
            "sks": 3,
            "jenis": "Wajib"
        },
        {
            "kode_matkul": "203315-20",
            "nama_matkul": "Pengantar Analisis Data",
            "sks": 3,
            "jenis": "Wajib"
        },
        {
            "kode_matkul": "203316-20",
            "nama_matkul": "Kecerdasan Buatan",
            "sks": 3,
            "jenis": "Wajib"
        },
        {
            "kode_matkul": "203317-20",
            "nama_matkul": "Basis Data",
            "sks": 3,
            "jenis": "Wajib"
        },
        {
            "kode_matkul": "203318-20",
            "nama_matkul": "Pemrograman Web Praktik",
            "sks": 2,
            "jenis": "Wajib"
        },
        {
            "kode_matkul": "203319-20",
            "nama_matkul": "Pemrograman Web",
            "sks": 2,
            "jenis": "Wajib"
        },
        {
            "kode_matkul": "203320-20",
            "nama_matkul": "Pengantar Sistem Digital",
            "sks": 3,
            "jenis": "Wajib"
        },
        {
            "kode_matkul": "203208-20",
            "nama_matkul": "Pemrograman Berorientasi Objek Praktik",
            "sks": 2,
            "jenis": "Wajib"
        }
    ],
    "Semester 4": [
        {
            "kode_matkul": "203507-20",
            "nama_matkul": "Pancasila",
            "sks": 2,
            "jenis": "Wajib"
        },
        {
            "kode_matkul": "203420-20",
            "nama_matkul": "Basis Data Praktik",
            "sks": 2,
            "jenis": "Wajib"
        },
        {
            "kode_matkul": "203414-20",
            "nama_matkul": "Jaringan Komputer & Komunikasi Data",
            "sks": 3,
            "jenis": "Wajib"
        },
        {
            "kode_matkul": "203405-20",
            "nama_matkul": "Jaringan & Keamanan Komputer Praktik",
            "sks": 2,
            "jenis": "Wajib"
        },
        {
            "kode_matkul": "203415-20",
            "nama_matkul": "Machine Learning",
            "sks": 3,
            "jenis": "Wajib"
        },
        {
            "kode_matkul": "203421-20",
            "nama_matkul": "Bahasa & Otomata",
            "sks": 3,
            "jenis": "Wajib"
        },
        {
            "kode_matkul": "203422-20",
            "nama_matkul": "Rekayasa Perangkat Lunak",
            "sks": 3,
            "jenis": "Wajib"
        },
        {
            "kode_matkul": "203416-20",
            "nama_matkul": "Matematika Diskrit",
            "sks": 3,
            "jenis": "Wajib"
        }
    ],
    "Semester 5": [
        {
            "kode_matkul": "203501-20",
            "nama_matkul": "Agama Islam",
            "sks": 2,
            "jenis": "Wajib"
        },
        {
            "kode_matkul": "203502-20",
            "nama_matkul": "Agama Kristen",
            "sks": 2,
            "jenis": "Wajib"
        },
        {
            "kode_matkul": "203503-20",
            "nama_matkul": "Agama Katolik",
            "sks": 2,
            "jenis": "Wajib"
        },
        {
            "kode_matkul": "203504-20",
            "nama_matkul": "Agama Hindu",
            "sks": 2,
            "jenis": "Wajib"
        },
        {
            "kode_matkul": "203505-20",
            "nama_matkul": "Agama Buddha",
            "sks": 2,
            "jenis": "Wajib"
        },
        {
            "kode_matkul": "203506-20",
            "nama_matkul": "Agama Konghucu",
            "sks": 2,
            "jenis": "Wajib"
        },
        {
            "kode_matkul": "203510-20",
            "nama_matkul": "Desain Front-end",
            "sks": 2,
            "jenis": "Wajib"
        },
        {
            "kode_matkul": "203518-20",
            "nama_matkul": "Metodologi Penelitian",
            "sks": 3,
            "jenis": "Wajib"
        },
        {
            "kode_matkul": "203524-20",
            "nama_matkul": "Pengantar Big Data",
            "sks": 3,
            "jenis": "Wajib"
        },
        {
            "kode_matkul": "203310-20",
            "nama_matkul": "Pengolahan Citra Digital (Sistem Cerdas)",
            "sks": 3,
            "jenis": "Peminatan"
        },
        {
            "kode_matkul": "203311-20",
            "nama_matkul": "Pengolahan Citra Digital Praktik (Sistem Cerdas)",
            "sks": 2,
            "jenis": "Peminatan"
        },
        {
            "kode_matkul": "203313-20",
            "nama_matkul": "Jaringan Syaraf Tiruan (Sistem Cerdas)",
            "sks": 3,
            "jenis": "Peminatan"
        },
        {
            "kode_matkul": "203312-20",
            "nama_matkul": "Mobile & Web Service (Web Mobile)",
            "sks": 3,
            "jenis": "Peminatan"
        },
        {
            "kode_matkul": "203313-20",
            "nama_matkul": "Mobile & Web Service Praktik (Web Mobile)",
            "sks": 2,
            "jenis": "Peminatan"
        },
        {
            "kode_matkul": "203726-20",
            "nama_matkul": "Pengembangan Aplikasi Piranti Bergerak (Web Mobile)",
            "sks": 3,
            "jenis": "Peminatan"
        }
    ],
    "Semester 6": [
        {
            "kode_matkul": "203401-20",
            "nama_matkul": "Kewarganegaraan",
            "sks": 2,
            "jenis": "Wajib"
        },
        {
            "kode_matkul": "203625-20",
            "nama_matkul": "Proyek Utama Informatika",
            "sks": 5,
            "jenis": "Wajib"
        },
        {
            "kode_matkul": "203309-20",
            "nama_matkul": "Sistem Pendukung Keputusan",
            "sks": 3,
            "jenis": "Wajib"
        },
        {
            "kode_matkul": "203627-20",
            "nama_matkul": "Logika Fuzzy (Sistem Cerdas)",
            "sks": 3,
            "jenis": "Peminatan"
        },
        {
            "kode_matkul": "203620-20",
            "nama_matkul": "Sistem Pakar (Sistem Cerdas)",
            "sks": 2,
            "jenis": "Peminatan"
        },
        {
            "kode_matkul": "203628-20",
            "nama_matkul": "Tren Teknologi Cerdas (Sistem Cerdas)",
            "sks": 2,
            "jenis": "Peminatan"
        },
        {
            "kode_matkul": "203622-20",
            "nama_matkul": "Pengembangan Aplikasi Back-end (Mobile & Web)",
            "sks": 3,
            "jenis": "Peminatan"
        },
        {
            "kode_matkul": "203516-20",
            "nama_matkul": "Tren Teknologi Mobile (Mobile & Web)",
            "sks": 2,
            "jenis": "Peminatan"
        },
        {
            "kode_matkul": "203631-20",
            "nama_matkul": "Mobile & IoT (Mobile & Web)",
            "sks": 3,
            "jenis": "Peminatan"
        }
    ],
    "Semester 7": [
        {
            "kode_matkul": "203616-20",
            "nama_matkul": "Proyek Profesional",
            "sks": 5,
            "jenis": "Wajib"
        },
        {
            "kode_matkul": "203408-20",
            "nama_matkul": "Pemrosesan Teks",
            "sks": 3,
            "jenis": "Peminatan"
        },
        {
            "kode_matkul": "203626-20",
            "nama_matkul": "Pengenalan Pola",
            "sks": 3,
            "jenis": "Peminatan"
        },
        {
            "kode_matkul": "203724-20",
            "nama_matkul": "Data Science (Sistem Cerdas)",
            "sks": 3,
            "jenis": "Peminatan"
        },
        {
            "kode_matkul": "203409-20",
            "nama_matkul": "Pemrosesan Teks Praktik (Sistem Cerdas)",
            "sks": 2,
            "jenis": "Peminatan"
        },
        {
            "kode_matkul": "203727-20",
            "nama_matkul": "Forensik Digital (Sistem Cerdas)",
            "sks": 3,
            "jenis": "Peminatan"
        },
        {
            "kode_matkul": "203623-20",
            "nama_matkul": "Komputasi Mobile (Mobile & Web)",
            "sks": 3,
            "jenis": "Peminatan"
        },
        {
            "kode_matkul": "203410-20",
            "nama_matkul": "Mobile & Augmented Reality (Mobile & Web)",
            "sks": 3,
            "jenis": "Peminatan"
        },
        {
            "kode_matkul": "203411-20",
            "nama_matkul": "Mobile & Augmented Reality Praktik (Mobile & Web)",
            "sks": 2,
            "jenis": "Peminatan"
        }
    ],
    "Semester 8": [
        {
            "kode_matkul": "203801-20",
            "nama_matkul": "Persiapan Karier",
            "sks": 2,
            "jenis": "Wajib"
        },
        {
            "kode_matkul": "203802-20",
            "nama_matkul": "Tugas Akhir",
            "sks": 6,
            "jenis": "Wajib"
        }
    ]
  });
}
