import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { MAIN_NAV_LINKS } from '../../data/navigation';

@Component({
  selector: 'app-footer',
  imports: [NgOptimizedImage],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer id="footer" class="border-t border-border bg-ink text-white">
      <div class="container grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div class="flex items-start gap-3">
          <img
            ngSrc="img/untad-logo.png"
            width="48"
            height="48"
            alt="Logo Universitas Tadulako"
            class="h-11 w-11 shrink-0"
          />
          <div>
            <p class="font-heading text-lg font-semibold">Pendidikan Kepelatihan Olahraga</p>
            <p class="text-sm text-white/70">Fakultas Keguruan dan Ilmu Pendidikan Universitas Tadulako</p>
          </div>
        </div>

        <div>
          <h3 class="mb-4 text-xs font-semibold uppercase tracking-wide text-white/60">Navigasi</h3>
          <ul class="flex flex-col gap-2">
            @for (link of navLinks; track link.href) {
              <li><a [href]="link.href" class="text-sm text-white/80 hover:text-white">{{ link.label }}</a></li>
            }
          </ul>
        </div>

        <div>
          <h3 class="mb-4 text-xs font-semibold uppercase tracking-wide text-white/60">Kontak</h3>
          <ul class="flex flex-col gap-2 text-sm text-white/80">
            <li>Alamat: Kampus FKIP Universitas Tadulako, Palu, Sulawesi Tengah</li>
            <li>Email: pko&#64;fkip.untad.ac.id</li>
            <li>Telepon: (0451) 000000</li>
            <li>Website: fkip.untad.ac.id</li>
          </ul>
        </div>

        <div>
          <h3 class="mb-4 text-xs font-semibold uppercase tracking-wide text-white/60">Media Sosial</h3>
          <ul class="flex flex-col gap-2 text-sm text-white/80">
            <li>Instagram</li>
            <li>Facebook</li>
            <li>YouTube</li>
            <li>TikTok</li>
          </ul>
        </div>
      </div>

      <div class="border-t border-white/10">
        <p class="container py-6 text-center text-xs text-white/60">
          &copy; 2026 Pendidikan Kepelatihan Olahraga FKIP Universitas Tadulako.
        </p>
      </div>
    </footer>
  `,
})
export class Footer {
  protected readonly navLinks = MAIN_NAV_LINKS;
}
