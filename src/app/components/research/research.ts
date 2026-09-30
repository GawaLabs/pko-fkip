import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionHeader } from '../section-header/section-header';
import { RESEARCH_ITEMS, ResearchCategory } from '../../data/research';
import { ScrollReveal } from '../../directives/scroll-reveal.directive';

interface ResearchGroup {
  category: ResearchCategory;
  items: typeof RESEARCH_ITEMS;
}

@Component({
  selector: 'app-research',
  imports: [ScrollReveal, SectionHeader],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="riset" class="section">
      <div class="container">
        <app-section-header eyebrow="Riset & Pengabdian" title="Riset untuk Performa. Pengabdian untuk Masyarakat." />

        <div class="stagger grid gap-10 lg:grid-cols-3">
          @for (group of groups; track group.category) {
            <div>
              <h3 appScrollReveal class="reveal-up mb-4 border-b border-border pb-3 text-heading-md text-primary">{{ group.category }}</h3>
              <div class="stagger flex flex-col gap-6 [--reveal-y:0.75rem] [--reveal-step:80ms]">
                @for (item of group.items; track item.title) {
                  <div appScrollReveal class="reveal-up">
                    <h4 class="font-heading text-base font-semibold text-ink">{{ item.title }}</h4>
                    <p class="text-sm text-ink-muted">{{ item.description }}</p>
                  </div>
                }
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class Research {
  private readonly categories: ResearchCategory[] = ['Penelitian', 'Publikasi', 'Pengabdian'];

  protected readonly groups: ResearchGroup[] = this.categories.map((category) => ({
    category,
    items: RESEARCH_ITEMS.filter((item) => item.category === category),
  }));
}
