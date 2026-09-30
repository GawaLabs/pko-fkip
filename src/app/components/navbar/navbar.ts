import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ADMISSION_NAV_LINK, MAIN_NAV_LINKS } from '../../data/navigation';

@Component({
  selector: 'app-navbar',
  imports: [NgOptimizedImage],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="sticky top-0 z-50 border-b border-border bg-surface">
      <div class="container flex h-16 items-center justify-between md:h-20">
        <a href="#beranda" class="flex items-center gap-3">
          <img
            ngSrc="img/untad-logo.png"
            width="48"
            height="48"
            priority
            alt="Logo Universitas Tadulako"
            class="h-10 w-10 md:h-12 md:w-12"
          />
          <span class="font-heading text-sm font-semibold leading-tight text-ink md:text-base">
            Pendidikan Kepelatihan Olahraga FKIP Untad
          </span>
        </a>

        <nav class="hidden items-center gap-6 lg:flex">
          @for (link of navLinks; track link.href) {
            <a [href]="link.href" class="text-sm font-medium text-ink-muted transition-colors hover:text-ink">
              {{ link.label }}
            </a>
          }
          <a [href]="admissionLink.href" class="btn-primary">{{ admissionLink.label }}</a>
        </nav>

        <button
          type="button"
          class="flex flex-col gap-1.5 p-2 lg:hidden"
          [attr.aria-expanded]="open()"
          aria-controls="mobile-menu"
          (click)="toggle()"
        >
          <span class="sr-only">Buka menu navigasi</span>
          <span class="block h-0.5 w-6 bg-ink"></span>
          <span class="block h-0.5 w-6 bg-ink"></span>
          <span class="block h-0.5 w-6 bg-ink"></span>
        </button>
      </div>

      @if (open()) {
        <nav id="mobile-menu" class="border-t border-border bg-surface px-4 pb-6 pt-2 lg:hidden">
          @for (link of navLinks; track link.href) {
            <a
              [href]="link.href"
              (click)="close()"
              class="block border-b border-border py-3 text-sm font-medium text-ink last:border-none"
            >
              {{ link.label }}
            </a>
          }
          <a [href]="admissionLink.href" (click)="close()" class="btn-primary mt-4 block text-center">
            {{ admissionLink.label }}
          </a>
        </nav>
      }
    </header>
  `,
})
export class Navbar {
  protected readonly navLinks = MAIN_NAV_LINKS;
  protected readonly admissionLink = ADMISSION_NAV_LINK;
  protected readonly open = signal(false);

  protected toggle(): void {
    this.open.update((value) => !value);
  }

  protected close(): void {
    this.open.set(false);
  }
}
