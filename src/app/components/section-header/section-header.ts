import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ScrollReveal } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-section-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [ScrollReveal],
  host: { class: 'block stagger [--reveal-y:1.5625rem]' },
  template: `
    @if (eyebrow()) {
      <span class="eyebrow reveal-up">{{ eyebrow() }}</span>
    }
    <h2 class="section-title reveal-up">{{ title() }}</h2>
    @if (subtitle()) {
      <p class="section-subtitle reveal-up">{{ subtitle() }}</p>
    }
  `,
})
export class SectionHeader {
  eyebrow = input<string>();
  title = input.required<string>();
  subtitle = input<string>();
}
