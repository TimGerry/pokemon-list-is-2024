import { CanActivateFn } from '@angular/router';

export const moneyGuard: CanActivateFn = (route, state) => {
  return window.confirm('Do you have money?');
};
