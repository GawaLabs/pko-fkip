import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionHeader } from '../section-header/section-header';
import { ACADEMIC_JOURNEY } from '../../data/academic-journey';
import { ScrollReveal } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-academic-journey',
  imports: [ScrollReveal, SectionHeader],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="akademik" class="section">
      <div class="container">
        <app-section-header eyebrow="Pengalaman Akademik" title="Perjalanan Akademik Mahasiswa PKO" />

        <ol class="stagger grid gap-8 border-l border-border pl-6 md:grid-cols-3 md:border-l-0 md:pl-0 lg:grid-cols-6">
          @for (step of journey; track step.number) {
            <li appScrollReveal class="reveal-up flex flex-col gap-2 md:border-t md:border-border md:pt-6">
              <span class="reveal-scale origin-left text-eyebrow text-primary">{{ step.number }}</span>
              <h3 class="text-heading-md">{{ step.title }}</h3>
              <p class="text-sm text-ink-muted">{{ step.description }}</p>
            </li>
          }
        </ol>
      </div>
    </section>
  `,
})
export class AcademicJourney {
  protected readonly journey = ACADEMIC_JOURNEY;
}
