import { ApplicationConfig, InjectionToken, provideZoneChangeDetection } from '@angular/core';
import { PreloadAllModules, provideRouter, withPreloading } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideHttpClient(),
  ]
};

export const APP_TITLE = new InjectionToken('app title', {
  providedIn: 'root',
  factory: () => 'Info Support Pokémon App (Injected)'
});
