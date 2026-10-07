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
          @for (link of navLinks; track link.label) {
            @if (link.children; as children) {
              <div
                class="relative"
                (mouseenter)="dropdownOpen.set(true)"
                (mouseleave)="dropdownOpen.set(false)"
                (focusout)="onDropdownFocusOut($event)"
                (keydown.escape)="dropdownOpen.set(false)"
              >
                <button
                  type="button"
                  class="flex items-center gap-1 text-sm font-medium text-ink-muted transition-colors hover:text-ink"
                  aria-haspopup="true"
                  aria-controls="download-menu"
                  [attr.aria-expanded]="dropdownOpen()"
                  (click)="dropdownOpen.update(toggleValue)"
                >
                  {{ link.label }}
                  <span aria-hidden="true" class="text-xs">&#9662;</span>
                </button>
                @if (dropdownOpen()) {
                  <ul
                    id="download-menu"
                    class="absolute left-0 top-full min-w-56 border border-border bg-surface py-2"
                  >
                    @for (child of children; track child.label) {
                      <li>
                        <a
                          [href]="child.href"
                          class="block px-4 py-2 text-sm text-ink-muted transition-colors hover:text-ink focus-visible:text-ink"
                        >
                          {{ child.label }}
                        </a>
                      </li>
                    }
                  </ul>
                }
              </div>
            } @else {
              <a [href]="link.href" class="text-sm font-medium text-ink-muted transition-colors hover:text-ink">
                {{ link.label }}
              </a>
            }
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
          @for (link of navLinks; track link.label) {
            @if (link.children; as children) {
              <div class="border-b border-border">
                <button
                  type="button"
                  class="flex w-full items-center justify-between py-3 text-sm font-medium text-ink"
                  aria-controls="mobile-download-menu"
                  [attr.aria-expanded]="mobileSubmenuOpen()"
                  (click)="mobileSubmenuOpen.update(toggleValue)"
                >
                  {{ link.label }}
                  <span aria-hidden="true" class="text-xs">&#9662;</span>
                </button>
                @if (mobileSubmenuOpen()) {
                  <ul id="mobile-download-menu" class="pb-2 pl-4">
                    @for (child of children; track child.label) {
                      <li>
                        <a [href]="child.href" (click)="close()" class="block py-2 text-sm text-ink-muted">
                          {{ child.label }}
                        </a>
                      </li>
                    }
                  </ul>
                }
              </div>
            } @else {
              <a
                [href]="link.href"
                (click)="close()"
                class="block border-b border-border py-3 text-sm font-medium text-ink"
              >
                {{ link.label }}
              </a>
            }
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
  protected readonly dropdownOpen = signal(false);
  protected readonly mobileSubmenuOpen = signal(false);
  protected readonly toggleValue = (value: boolean): boolean => !value;

  protected toggle(): void {
    this.open.update(this.toggleValue);
  }

  protected close(): void {
    this.open.set(false);
    this.mobileSubmenuOpen.set(false);
  }

  protected onDropdownFocusOut(event: FocusEvent): void {
    const container = event.currentTarget as HTMLElement;
    if (!container.contains(event.relatedTarget as Node | null)) {
      this.dropdownOpen.set(false);
    }
  }
}
