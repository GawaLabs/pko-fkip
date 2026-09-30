import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionHeader } from '../section-header/section-header';
import { FACILITIES } from '../../data/facilities';
import { ScrollReveal } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-facilities',
  imports: [ScrollReveal, SectionHeader],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="fasilitas" class="section bg-surface-alt">
      <div class="container">
        <app-section-header eyebrow="Sarana & Prasarana" title="Ruang untuk Belajar. Lapangan untuk Berkembang." />

        <div class="stagger stagger-alt grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          @for (facility of facilities; track facility.name; let i = $index) {
            <div appScrollReveal class="group flex flex-col gap-3" [class]="i === 0 ? 'lg:col-span-2' : ''">
              <div class="reveal-scale media-zoom">
                <div [class]="i === 0 ? 'media-placeholder aspect-[21/9]' : 'media-placeholder aspect-[4/3]'">
                  Foto: {{ facility.name }}
                </div>
              </div>
              <h3 class="reveal-up text-heading-md">{{ facility.name }}</h3>
              <p class="reveal-up text-sm text-ink-muted">{{ facility.description }}</p>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class Facilities {
  protected readonly facilities = FACILITIES;
}
