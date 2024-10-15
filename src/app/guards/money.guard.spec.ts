import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { moneyGuard } from './money.guard';

describe('moneyGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => moneyGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
