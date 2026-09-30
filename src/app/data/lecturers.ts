export interface Lecturer {
  name: string;
  position: string;
  expertise: string;
}

// Placeholder data only. Do not invent real lecturer names or profiles.
export const LECTURERS: Lecturer[] = [
  { name: 'Dr. Nama Dosen 1, M.Kes.', position: 'Dosen Tetap', expertise: 'Kepelatihan Olahraga' },
  { name: 'Dr. Nama Dosen 2, M.Pd.', position: 'Dosen Tetap', expertise: 'Ilmu Keolahragaan' },
  { name: 'Nama Dosen 3, M.Or.', position: 'Dosen Tetap', expertise: 'Pengembangan Atlet' },
  { name: 'Nama Dosen 4, M.Pd.', position: 'Dosen Tetap', expertise: 'Psikologi Olahraga' },
];
