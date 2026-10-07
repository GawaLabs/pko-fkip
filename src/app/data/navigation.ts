export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export const MAIN_NAV_LINKS: NavLink[] = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Visi Keilmuan', href: '#profil' },
  {
    label: 'Download',
    href: '#',
    children: [
      { label: 'Dokumen Kurikulum', href: 'https://drive.google.com/file/d/1seTc46mxMiDy2IVIh38YQzzNi3CmTPdN/view' },
      { label: 'Akreditasi', href: 'https://drive.google.com/file/d/17OxEXPOlbW-BcOcI3LEow1X60YbXQ7st/view' },
      { label: 'Panduan Akademik', href: 'https://drive.google.com/file/d/1SyjmGPaH3n5P0QNbpJic3gHLql6mBmP9/view' },
    ],
  },
  { label: 'Jurnal', href: 'https://jurnalfkipuntad.com/index.php/jscess/about/contact' },
];

export const FOOTER_NAV_LINKS: NavLink[] = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Visi Keilmuan', href: '#profil' },
  { label: 'Dosen', href: '#dosen' },
  { label: 'Prestasi', href: '#prestasi' },
  { label: 'Riset', href: '#riset' },
];

export const ADMISSION_NAV_LINK: NavLink = {
  label: 'Penerimaan Mahasiswa',
  href: '#admisi',
};
