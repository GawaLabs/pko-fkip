export interface JourneyStep {
  number: string;
  title: string;
  description: string;
}

export const ACADEMIC_JOURNEY: JourneyStep[] = [
  {
    number: '01',
    title: 'Belajar',
    description: 'Membangun dasar teori kepelatihan dan ilmu keolahragaan.',
  },
  {
    number: '02',
    title: 'Praktik',
    description: 'Mengasah kemampuan teknis melalui sesi latihan dan praktik lapangan.',
  },
  {
    number: '03',
    title: 'Melatih',
    description: 'Menerapkan metode kepelatihan pada atlet dan kelompok latihan.',
  },
  {
    number: '04',
    title: 'Mengevaluasi',
    description: 'Menilai perkembangan performa berdasarkan data dan observasi.',
  },
  {
    number: '05',
    title: 'Meningkatkan',
    description: 'Menyempurnakan strategi latihan dan pendekatan kepelatihan.',
  },
  {
    number: '06',
    title: 'Berprestasi',
    description: 'Meraih pencapaian dalam kompetisi dan karier di bidang olahraga.',
  },
];
