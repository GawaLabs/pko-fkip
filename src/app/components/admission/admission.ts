import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-admission',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="admisi" class="section bg-ink text-white">
      <div class="reveal container flex flex-col items-start gap-6 lg:max-w-3xl">
        <span class="text-eyebrow uppercase text-accent">Penerimaan Mahasiswa Baru</span>
        <h2 class="text-display-2 text-white">Siap Memulai Perjalanan di Dunia Kepelatihan Olahraga?</h2>
        <p class="max-w-xl text-lg text-white/80">
          Temukan pengalaman belajar, berlatih, dan berkembang bersama Program Studi Pendidikan Kepelatihan Olahraga
          FKIP Universitas Tadulako.
        </p>

        <div class="flex flex-wrap gap-4 pt-2">
          <a href="https://admission.untad.ac.id/" class="btn-primary" target="_blank" rel="noopener noreferrer">Informasi Penerimaan</a>
          <a
            href="#footer"
            class="inline-flex items-center justify-center gap-2 rounded-sm border border-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors duration-200 hover:bg-white hover:text-ink"
          >
            Hubungi Program Studi
          </a>
        </div>
      </div>
    </section>
  `,
})
export class Admission {}
