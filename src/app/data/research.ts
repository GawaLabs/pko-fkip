export type ResearchCategory = 'Penelitian' | 'Publikasi' | 'Pengabdian';

export interface ResearchItem {
  category: ResearchCategory;
  title: string;
  description: string;
}

export const RESEARCH_ITEMS: ResearchItem[] = [
  {
    category: 'Penelitian',
    title: 'Riset Performa Atlet',
    description: 'Kajian seputar performa atlet dan metode kepelatihan.',
  },
  {
    category: 'Penelitian',
    title: 'Teknologi Olahraga',
    description: 'Eksplorasi penerapan teknologi dalam pengembangan olahraga.',
  },
  {
    category: 'Publikasi',
    title: 'Publikasi Jurnal',
    description: 'Artikel ilmiah pada jurnal bidang kepelatihan dan keolahragaan.',
  },
  {
    category: 'Publikasi',
    title: 'Publikasi Konferensi',
    description: 'Hasil penelitian yang dipresentasikan pada forum ilmiah.',
  },
  {
    category: 'Pengabdian',
    title: 'Pengembangan Olahraga Komunitas',
    description: 'Kegiatan pendampingan olahraga bagi masyarakat.',
  },
  {
    category: 'Pengabdian',
    title: 'Edukasi Kepelatihan',
    description: 'Pelatihan dan edukasi kepelatihan untuk pelatih dan pendidik olahraga.',
  },
];
