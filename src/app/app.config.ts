import { ApplicationConfig, InjectionToken, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};

export const APP_TITLE = new InjectionToken('app title', {
  providedIn: 'root',
  factory: () => 'Info Support Pokémon App (Injected)'
});
