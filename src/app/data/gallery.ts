export interface GalleryItem {
  category: string;
  label: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  { category: 'Latihan', label: 'Sesi latihan lapangan' },
  { category: 'Pertandingan', label: 'Momen pertandingan' },
  { category: 'Akademik', label: 'Kegiatan perkuliahan' },
  { category: 'Kegiatan Mahasiswa', label: 'Aktivitas organisasi mahasiswa' },
  { category: 'Event', label: 'Penyelenggaraan event olahraga' },
  { category: 'Pengabdian Masyarakat', label: 'Kegiatan pengabdian masyarakat' },
  { category: 'Latihan', label: 'Latihan fisik dan kondisi' },
  { category: 'Pertandingan', label: 'Selebrasi prestasi mahasiswa' },
];
