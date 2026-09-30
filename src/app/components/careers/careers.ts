import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionHeader } from '../section-header/section-header';
import { CAREER_PATHS, CAREER_PATHWAY_STEPS } from '../../data/careers';
import { ScrollReveal } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-careers',
  imports: [ScrollReveal, SectionHeader],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="karier" class="section bg-surface-alt">
      <div class="container">
        <app-section-header eyebrow="Prospek Karier" title="Lulusan PKO, Siap Berkontribusi di Dunia Olahraga" />

        <div class="stagger mb-12 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-6">
          @for (step of pathwaySteps; track step; let last = $last) {
            <div appScrollReveal class="flex items-center gap-3 sm:gap-6">
              <span
                class="reveal-scale rounded-sm border border-ink px-5 py-2 text-xs font-semibold uppercase tracking-wide text-ink"
              >
                {{ step }}
              </span>
              @if (!last) {
                <span class="reveal-up text-ink-muted [--reveal-y:0.5rem]" aria-hidden="true">&darr;</span>
              }
            </div>
          }
        </div>

        <div class="stagger grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          @for (path of careerPaths; track path.title) {
            <div appScrollReveal class="reveal-up border border-border bg-surface p-6 text-center">
              <p class="font-heading text-sm font-semibold text-ink">{{ path.title }}</p>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class Careers {
  protected readonly careerPaths = CAREER_PATHS;
  protected readonly pathwaySteps = CAREER_PATHWAY_STEPS;
}
