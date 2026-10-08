import { ChangeDetectionStrategy, Component, ElementRef, signal, viewChild } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { SectionHeader } from '../section-header/section-header';
import { LECTURERS } from '../../data/lecturers';
import { ScrollReveal } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-lecturers',
  imports: [NgOptimizedImage, ScrollReveal, SectionHeader],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="dosen" class="section">
      <div class="container">
        <app-section-header eyebrow="Tenaga Pengajar" title="Belajar Bersama Para Pengajar" />

        <div class="carousel relative mt-10 md:mx-14">
          <button
            type="button"
            class="carousel-btn carousel-btn-prev bg-surface"
            aria-label="Dosen sebelumnya"
            [disabled]="!canPrev()"
            (click)="scrollByCard(-1)"
          >
            <span aria-hidden="true">←</span>
          </button>
          <button
            type="button"
            class="carousel-btn carousel-btn-next bg-surface"
            aria-label="Dosen berikutnya"
            [disabled]="!canNext()"
            (click)="scrollByCard(1)"
          >
            <span aria-hidden="true">→</span>
          </button>

          <div
            #track
            appScrollReveal
            class="stagger flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            role="region"
            aria-roledescription="carousel"
            aria-label="Daftar dosen"
            tabindex="0"
            (scroll)="updateEdges()"
          >
            @for (lecturer of lecturers; track lecturer.name) {
              <article class="carousel-card reveal-scale group flex shrink-0 snap-start flex-col gap-4">
                <div class="media-zoom">
                  <div class="aspect-[3/4] overflow-hidden bg-surface-alt">
                    <img
                      [ngSrc]="lecturer.photo"
                      width="1200"
                      height="1600"
                      sizes="(min-width: 1024px) 22vw, (min-width: 768px) 28vw, (min-width: 640px) 45vw, 100vw"
                      [alt]="'Foto ' + lecturer.name"
                      class="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h3 class="text-heading-md">{{ lecturer.name }}, {{ lecturer.degree }}</h3>
                  <p class="mt-1 text-sm font-normal text-ink-muted">Dosen Tetap</p>
                </div>
              </article>
            }
          </div>
        </div>
      </div>
    </section>
  `,
  styles: `
    /* Cards visible per row: 1 mobile, 2 sm, 3 md, 4 lg. */
    .carousel {
      --n: 1;
      --gap: 1.5rem;
      --card-w: calc((100cqw - (var(--n) - 1) * var(--gap)) / var(--n));
      container-type: inline-size;
    }
    @media (min-width: 640px) {
      .carousel { --n: 2; }
    }
    @media (min-width: 768px) {
      .carousel { --n: 3; }
    }
    @media (min-width: 1024px) {
      .carousel { --n: 4; }
    }
    .carousel-card {
      width: var(--card-w);
    }
    .carousel-btn {
      position: absolute;
      z-index: 1;
      /* Center of the 3:4 photo: half of (card width * 4/3). */
      top: calc(var(--card-w) * 2 / 3 - 1.25rem);
      display: inline-flex;
      height: 2.5rem;
      width: 2.5rem;
      align-items: center;
      justify-content: center;
      border: 1px solid currentColor;
      font-size: 1.125rem;
      transition:
        background-color 200ms,
        color 200ms;
    }
    .carousel-btn-prev { left: 0.5rem; }
    .carousel-btn-next { right: 0.5rem; }
    @media (min-width: 768px) {
      .carousel-btn-prev { left: -3.5rem; }
      .carousel-btn-next { right: -3.5rem; }
    }
    .carousel-btn:hover:not(:disabled) {
      background-color: #111;
      color: #fff;
    }
    .carousel-btn:focus-visible {
      outline: 2px solid currentColor;
      outline-offset: 2px;
    }
    .carousel-btn:disabled {
      opacity: 0.35;
      cursor: not-allowed;
    }
  `,
})
export class Lecturers {
  protected readonly lecturers = LECTURERS;
  protected readonly canPrev = signal(false);
  protected readonly canNext = signal(true);

  private readonly track = viewChild.required<ElementRef<HTMLElement>>('track');

  protected scrollByCard(direction: 1 | -1): void {
    const el = this.track().nativeElement;
    const card = el.querySelector('article');
    const step = card ? card.getBoundingClientRect().width + 24 : el.clientWidth;
    el.scrollBy({ left: direction * step, behavior: 'smooth' });
  }

  protected updateEdges(): void {
    const el = this.track().nativeElement;
    this.canPrev.set(el.scrollLeft > 4);
    this.canNext.set(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }
}
