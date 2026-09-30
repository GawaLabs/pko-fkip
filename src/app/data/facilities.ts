export interface Facility {
  name: string;
  description: string;
}

export const FACILITIES: Facility[] = [
  { name: 'Lapangan Olahraga', description: 'Ruang terbuka untuk latihan dan praktik cabang olahraga.' },
  { name: 'Fasilitas Latihan', description: 'Sarana pendukung sesi latihan fisik dan teknik.' },
  { name: 'Ruang Kelas', description: 'Ruang pembelajaran teori kepelatihan dan ilmu keolahragaan.' },
  { name: 'Laboratorium', description: 'Ruang praktik dan pengukuran keolahragaan.' },
  { name: 'Fitness Center', description: 'Area latihan kekuatan dan kondisi fisik.' },
  { name: 'Peralatan Olahraga', description: 'Perlengkapan penunjang latihan dan pertandingan.' },
];
