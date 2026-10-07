import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionHeader } from '../section-header/section-header';
import { LECTURERS } from '../../data/lecturers';
import { ScrollReveal } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-lecturers',
  imports: [ScrollReveal, SectionHeader],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="dosen" class="section">
      <div class="container">
        <app-section-header eyebrow="Tenaga Pengajar" title="Belajar Bersama Para Pengajar dan Praktisi Olahraga" />

        <div class="stagger grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          @for (lecturer of lecturers; track lecturer.name) {
            <div appScrollReveal class="group flex flex-col gap-4">
              <div class="reveal-scale media-zoom">
                <div class="media-placeholder aspect-square">Foto Dosen</div>
              </div>
              <div class="reveal-up">
                <h3 class="text-heading-md">{{ lecturer.name }}</h3>
                <p class="text-sm text-ink-muted">{{ lecturer.position }}</p>
                <p class="mt-2 text-xs uppercase tracking-wide text-primary">{{ lecturer.expertise }}</p>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class Lecturers {
  protected readonly lecturers = LECTURERS;
}
