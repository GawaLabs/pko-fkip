export type AchievementLevel = 'Regional' | 'Nasional' | 'Internasional';

export interface Achievement {
  level: AchievementLevel;
  title: string;
  name: string;
  year: string;
}

// Placeholder data only. Do not fabricate real achievements.
export const ACHIEVEMENTS: Achievement[] = [
  { level: 'Nasional', title: 'Juara 1 Kejuaraan Nasional', name: 'Nama Mahasiswa', year: '2026' },
  { level: 'Regional', title: 'Juara 2 Kejuaraan Regional', name: 'Nama Mahasiswa', year: '2025' },
  { level: 'Internasional', title: 'Peserta Kejuaraan Internasional', name: 'Nama Mahasiswa', year: '2025' },
  { level: 'Nasional', title: 'Juara 3 Kejuaraan Nasional', name: 'Nama Mahasiswa', year: '2024' },
];
