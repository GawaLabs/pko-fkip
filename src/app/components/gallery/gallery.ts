import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionHeader } from '../section-header/section-header';
import { GALLERY_ITEMS } from '../../data/gallery';
import { ScrollReveal } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-gallery',
  imports: [ScrollReveal, SectionHeader],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="galeri" class="section bg-surface-alt">
      <div class="container">
        <app-section-header eyebrow="Dokumentasi" title="Momen di Balik Perjalanan PKO" />

        <div appScrollReveal class="reveal-up mb-8 flex flex-wrap gap-3">
          @for (category of categories; track category) {
            <span
              class="rounded-sm border border-border px-4 py-2 text-xs font-semibold uppercase tracking-wide text-ink-muted first:border-ink first:bg-ink first:text-white"
            >
              {{ category }}
            </span>
          }
        </div>

        <div class="stagger grid grid-cols-2 gap-4 lg:grid-cols-4">
          @for (item of gallery; track item.label; let i = $index) {
            <div appScrollReveal class="reveal-scale media-zoom" [class]="i === 0 ? 'col-span-2 row-span-2' : ''">
              <div [class]="i === 0 ? 'media-placeholder aspect-square' : 'media-placeholder aspect-[4/3]'">
                {{ item.label }}
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class Gallery {
  protected readonly gallery = GALLERY_ITEMS;
  protected readonly categories = [
    'Semua',
    'Akademik',
    'Latihan',
    'Pertandingan',
    'Kegiatan Mahasiswa',
    'Event',
    'Pengabdian Masyarakat',
  ];
}
