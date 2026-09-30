import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { IMAGE_LOADER, ImageLoaderConfig } from '@angular/common';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

const UNSPLASH_BASE_URL = 'https://images.unsplash.com';

// Only Unsplash photo ids (e.g. "photo-...") are routed through Unsplash's imgix-backed
// CDN for responsive sizing. Local assets (e.g. "img/untad-logo.png") pass through
// unchanged, otherwise a single global image loader would rewrite their src too.
function imageLoader(config: ImageLoaderConfig): string {
  if (!config.src.startsWith('photo-')) {
    return config.src;
  }

  const url = new URL(`${UNSPLASH_BASE_URL}/${config.src}`);
  url.searchParams.set('auto', 'format');
  if (config.width) {
    url.searchParams.set('w', config.width.toString());
  }
  return url.href;
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    { provide: IMAGE_LOADER, useValue: imageLoader },
  ]
};
