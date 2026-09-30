import { ChangeDetectionStrategy, Component } from '@angular/core';
import { STATISTICS } from '../../data/statistics';
import { ScrollReveal } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-statistics',
  imports: [ScrollReveal],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="statistik" class="section border-y border-border bg-surface-alt">
      <div class="container">
        <span appScrollReveal class="eyebrow reveal-up block">PKO Dalam Angka</span>

        <div class="stagger mt-6 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-5 md:gap-x-0 md:divide-x md:divide-border">
          @for (stat of statistics; track stat.label) {
            <div appScrollReveal class="reveal-up flex flex-col gap-2 border-t-2 border-ink pt-4 md:border-t-0 md:px-8 md:pt-0 md:first:pl-0">
              <span class="reveal-scale origin-left text-display-2 tabular-nums text-primary">{{ stat.value }}</span>
              <span class="text-sm text-ink-muted">{{ stat.label }}</span>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class Statistics {
  protected readonly statistics = STATISTICS;
}
