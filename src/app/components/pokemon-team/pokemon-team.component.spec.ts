import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';

import { PokemonTeamComponent } from './pokemon-team.component';
import { Pokemon } from '../../models/pokemon.model';

describe('PokemonTeamComponent', () => {
  let component: PokemonTeamComponent;
  let fixture: ComponentFixture<PokemonTeamComponent>;
  let nativeEl: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonTeamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonTeamComponent);
    component = fixture.componentInstance;
    nativeEl = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display pokemon data', async () => {
    // arrange
    const expected: Pokemon[] = [
      { id: 'blaziken', name: 'blaziken', type: 'fire', type2: 'fighting', level: 36, attack: 'flamethrower' },
      { id: 'pikachu', name: 'pikachu', type: 'electric', level: 5, attack: 'thundershock' }
    ];
    component.pokemonList = expected;

    // act
    fixture.detectChanges();
    await fixture.whenStable();

    // assert
    const actual = nativeEl.querySelectorAll('app-pokemon-list tbody > tr');
    expect(actual).toHaveSize(expected.length);
  });

  describe('Async scenarios', () => {
    // FAILS IN AFTER ALL
    xit('should run async 1', () => {
      const p = new Promise(res => {
        setTimeout(() => res(42));
      });
      p.then(num => expect(num).toBe(0));
    });

    // FAILS NORMALLY
    xit('should run async 2', async () => {
      const p = new Promise(res => setTimeout(() => res(42)));
      const num = await p;
      expect(num).toBe(0);
    });

    // OLD SCHOOL
    xit('should run async', done => {
      const p = new Promise(res => setTimeout(() => res(42)));
      p.then(num => {
        expect(num).toBe(0);
        done();
      });
    });

    xit('should run async with waitForAsync', waitForAsync(() => {
      //                                         👆
      const p = new Promise(res => setTimeout(() => res(42)));
      p.then(num => expect(num).toBe(0));
    }));
  
    it('should run async with fakeAsync', fakeAsync(() => {
      //                                    👆
      let val = 0;
      setTimeout(() => (val = 42), 10000);
      setTimeout(() => (val = 0), 20000);
      tick(10000);
      expect(val).toBe(42);
      tick(10000);
      expect(val).toBe(0);
    }));
  });

});
