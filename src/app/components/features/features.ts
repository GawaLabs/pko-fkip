import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionHeader } from '../section-header/section-header';
import { FEATURES } from '../../data/features';
import { ScrollReveal } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-features',
  imports: [ScrollReveal, SectionHeader],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="mengapa-pko" class="section bg-surface-alt">
      <div class="container">
        <app-section-header eyebrow="Keunggulan" title="Mengapa Memilih PKO?" />

        <div class="stagger grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          @for (feature of features; track feature.number) {
            <div appScrollReveal class="flex flex-col gap-3 bg-surface p-8">
              <span class="reveal-scale origin-left text-eyebrow text-primary">{{ feature.number }}</span>
              <h3 class="reveal-up text-heading-md">{{ feature.title }}</h3>
              <p class="reveal-up text-sm text-ink-muted">{{ feature.description }}</p>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class Features {
  protected readonly features = FEATURES;
}
