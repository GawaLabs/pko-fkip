import { DestroyRef, Directive, ElementRef, Injectable, afterNextRender, inject, signal } from '@angular/core';

/** Portion of an element that must be visible before it reveals. */
const REVEAL_THRESHOLD = 0.15;

/**
 * One IntersectionObserver shared by every [appScrollReveal] element.
 * Each element is revealed once, then unobserved.
 */
@Injectable({ providedIn: 'root' })
export class ScrollRevealObserver {
  private readonly callbacks = new Map<Element, () => void>();
  private observer?: IntersectionObserver;

  observe(element: Element, onReveal: () => void): void {
    if (typeof IntersectionObserver === 'undefined') {
      onReveal();
      return;
    }

    this.observer ??= new IntersectionObserver((entries) => this.handle(entries), {
      threshold: REVEAL_THRESHOLD,
      rootMargin: '0px 0px -5% 0px',
    });
    this.callbacks.set(element, onReveal);
    this.observer.observe(element);
  }

  unobserve(element: Element): void {
    this.callbacks.delete(element);
    this.observer?.unobserve(element);
  }

  private handle(entries: IntersectionObserverEntry[]): void {
    for (const entry of entries) {
      // The initial callback also reports elements that are barely on screen,
      // so require the threshold rather than just isIntersecting.
      if (entry.intersectionRatio < REVEAL_THRESHOLD) {
        continue;
      }
      this.callbacks.get(entry.target)?.();
      this.unobserve(entry.target);
    }
  }
}

/**
 * Adds `is-visible` the first time the host enters the viewport. The host
 * and any `.reveal-*` descendants then transition in (see styles.css).
 */
@Directive({
  selector: '[appScrollReveal]',
  host: { '[class.is-visible]': 'visible()' },
})
export class ScrollReveal {
  protected readonly visible = signal(false);

  constructor() {
    const element = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
    const observer = inject(ScrollRevealObserver);

    afterNextRender(() => observer.observe(element, () => this.visible.set(true)));
    inject(DestroyRef).onDestroy(() => observer.unobserve(element));
  }
}
