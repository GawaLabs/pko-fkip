import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [NgOptimizedImage],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './hero.css',
  template: `
    <section
      id="beranda"
      class="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-ink text-white md:min-h-[92vh]"
    >
      <img
        ngSrc="photo-1526676317768-d9b14f15615a"
        fill
        priority
        ngSrcset="640w, 960w, 1280w, 1600w, 1920w"
        sizes="100vw"
        alt="Atlet bersiap di garis start lintasan lari"
        class="hero-media object-cover object-center"
      />

      <div class="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/10" aria-hidden="true"></div>

      <div class="container relative z-10 flex -translate-y-3 flex-col gap-6 pb-12 pt-28 md:-translate-y-10 md:pb-16 md:pt-32 lg:-translate-y-20">
        <span class="hero-reveal text-eyebrow uppercase text-accent">Pendidikan Kepelatihan Olahraga</span>

        <h1 class="hero-reveal hero-reveal-delay-1 max-w-4xl text-balance text-display-1 text-white">
          Profesional, Berintegritas dan Berwawasan Lingkungan.
        </h1>

        <p class="hero-reveal hero-reveal-delay-2 max-w-xl text-lg text-white/80">
          Mempersiapkan lulusan yang kompeten sebagai pelatih, tenaga pendidik, dan praktisi olahraga yang profesional, adaptif, dan peduli terhadap kelestarian lingkungan.
        </p>

        <div class="hero-reveal hero-reveal-delay-3 flex flex-wrap items-center gap-4 pt-2">
          <a href="#profil" class="btn-primary">Jelajahi Program Studi</a>
          <a
            href="#admisi"
            class="inline-flex items-center justify-center gap-2 rounded-sm border border-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors duration-200 hover:bg-white hover:text-ink"
          >
            Informasi Penerimaan
          </a>
        </div>

        <p class="hero-reveal hero-reveal-delay-4 pt-4 text-sm uppercase tracking-widest text-white/60">
          Fakultas Keguruan dan Ilmu Pendidikan Universitas Tadulako
        </p>
      </div>
    </section>
  `,
})
export class Hero {}
