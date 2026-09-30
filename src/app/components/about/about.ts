import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionHeader } from '../section-header/section-header';
import { ScrollReveal } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-about',
  imports: [ScrollReveal, SectionHeader],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="profil" class="section">
      <div class="container grid gap-10 lg:grid-cols-5 lg:items-center lg:gap-16">
        <div class="relative lg:col-span-2">
          <div appScrollReveal class="reveal-left media-placeholder aspect-[4/5]">Foto: Mahasiswa berlatih bersama dosen</div>
          <p appScrollReveal class="reveal-up mt-3 [--reveal-delay:150ms] text-[0.8125rem] font-normal leading-relaxed tracking-[0.01em] text-ink-muted">
            Sesi latihan lapangan &middot; Dokumentasi program studi
          </p>
        </div>

        <div class="stagger lg:col-span-3">
          <app-section-header
            class="[&_h2]:font-medium [&_h2]:leading-[1.14] [&_h2]:tracking-[-0.005em] [&_h2]:text-balance"
            eyebrow="Profil Program Studi"
            title="Membentuk Generasi Profesional di Bidang Olahraga"
          />

          <p appScrollReveal class="reveal-up mb-4 max-w-prose text-lg font-normal leading-[1.7] text-ink">
            Program Studi Pendidikan Kepelatihan Olahraga mempersiapkan mahasiswa melalui pendekatan akademik dan
            praktik yang seimbang, mencakup ilmu keolahragaan, pengembangan atlet, dan kompetensi kepelatihan.
          </p>
          <p appScrollReveal class="reveal-up mb-8 max-w-prose font-normal leading-[1.75] text-ink-muted">
            Mahasiswa dibekali kemampuan teori sekaligus pengalaman lapangan untuk membangun profesionalisme di
            dunia olahraga.
          </p>

          <blockquote appScrollReveal class="reveal-up [--reveal-y:1rem] border-l-4 border-primary pl-6">
            <p class="font-heading text-heading-md font-medium leading-[1.4] tracking-[-0.005em] text-ink">Dari teori ke lapangan, dari latihan menuju prestasi.</p>
          </blockquote>
        </div>
      </div>
    </section>
  `,
})
export class About {}
