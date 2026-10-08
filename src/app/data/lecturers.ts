export interface Lecturer {
  name: string;
  degree: string;
  position: string;
  expertise: string;
  /** Portrait photo, 3:4 (recommended source 1200 × 1600 px). */
  photo: string;
  googleScholarUrl?: string;
  orcidUrl?: string;
  sintaUrl?: string;
}

// Profile links are left empty until official URLs are available. Do not invent them.
export const LECTURERS: Lecturer[] = [
  {
    name: 'Jumain',
    degree: 'S.Pd., M.Pd.',
    position: 'Dosen Tetap',
    expertise: 'Kepelatihan Olahraga',
    photo: 'img/dosen/jumain.webp',
  },
  {
    name: 'Muhammad Ismail',
    degree: 'S.Pd., M.Pd.',
    position: 'Dosen Tetap',
    expertise: 'Pengembangan Atlet',
    photo: 'img/dosen/ismail.webp',
  },
  {
    name: 'M. Khairil Fajri',
    degree: 'S.Pd., M.Pd.',
    position: 'Dosen Tetap',
    expertise: 'Ilmu Keolahragaan',
    photo: 'img/dosen/khairil.webp',
  },
  {
    name: 'Rivalwan',
    degree: 'S.Si., M.Pd.',
    position: 'Dosen Tetap',
    expertise: 'Psikologi Olahraga',
    photo: 'img/dosen/rivalwan.webp',
  },
  {
    name: 'Moh. Tris Maulana Daipaha',
    degree: 'S.Pd., M.Pd.',
    position: 'Dosen Tetap',
    expertise: 'Psikologi Olahraga',
    photo: 'img/dosen/tris.webp',
  },
];
