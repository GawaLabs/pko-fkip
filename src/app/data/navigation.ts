export interface NavLink {
  label: string;
  href: string;
}

export const MAIN_NAV_LINKS: NavLink[] = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Profil', href: '#profil' },
  { label: 'Akademik', href: '#akademik' },
  { label: 'Dosen', href: '#dosen' },
  { label: 'Prestasi', href: '#prestasi' },
  { label: 'Riset', href: '#riset' },
  { label: 'Galeri', href: '#galeri' },
];

export const ADMISSION_NAV_LINK: NavLink = {
  label: 'Penerimaan Mahasiswa',
  href: '#admisi',
};
