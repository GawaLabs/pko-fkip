import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionHeader } from '../section-header/section-header';
import { ACHIEVEMENTS } from '../../data/achievements';
import { ScrollReveal } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-achievements',
  imports: [ScrollReveal, SectionHeader],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="prestasi" class="section">
      <div class="container">
        <app-section-header eyebrow="Prestasi Mahasiswa" title="Dilatih untuk Bertanding. Dibentuk untuk Berprestasi." />

        <div appScrollReveal class="reveal-up mb-8 flex flex-wrap gap-3">
          @for (filter of filters; track filter) {
            <span
              class="rounded-sm border border-border px-4 py-2 text-xs font-semibold uppercase tracking-wide text-ink-muted first:border-ink first:bg-ink first:text-white"
            >
              {{ filter }}
            </span>
          }
        </div>

        <div class="stagger grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          @for (item of achievements; track item.title) {
            <div appScrollReveal class="group flex flex-col gap-3">
              <div class="reveal-image media-zoom">
                <div class="media-placeholder aspect-[4/3]">Foto Prestasi</div>
              </div>
              <span class="reveal-up text-xs font-semibold uppercase tracking-wide text-primary">{{ item.level }}</span>
              <h3 class="reveal-up text-heading-md leading-snug">{{ item.title }}</h3>
              <p class="reveal-up text-sm text-ink-muted">{{ item.name }} &middot; {{ item.year }}</p>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class Achievements {
  protected readonly achievements = ACHIEVEMENTS;
  protected readonly filters = ['Semua', 'Regional', 'Nasional', 'Internasional'];
}
