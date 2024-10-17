import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonFormComponent } from './pokemon-form.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('PokemonFormComponent', () => {
  let component: PokemonFormComponent;
  let fixture: ComponentFixture<PokemonFormComponent>;
  let nativeEl: HTMLElement;
  let emitSpy: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonFormComponent],
      imports: [ReactiveFormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonFormComponent);
    component = fixture.componentInstance;
    nativeEl = fixture.nativeElement;

    emitSpy = spyOn(component.pokemonAdded, 'emit');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be disabled by default', () => {
    // assert
    const submitButton = nativeEl.querySelector<HTMLButtonElement>('form > button');
    expect(submitButton?.innerHTML).toBe('Add!');
    expect(submitButton?.disabled).toBeTrue();
  });

  it('should submit', async () => {
    // arrange
    const expected = {
      name: 'mudkip',
      type: 'water',
      type2: null,
      attack: 'water gun',
      level: 5
    }

    const attackInput = nativeEl.querySelector<HTMLInputElement>('#pokemonAttackInput')!;
    const levelInput = nativeEl.querySelector<HTMLInputElement>('#pokemonLevelInput')!;
    const submitButton = nativeEl.querySelector<HTMLButtonElement>('form > button')!;

    attackInput.value = 'water gun';
    attackInput.dispatchEvent(new Event('input'));
    levelInput.value = '5';
    levelInput.dispatchEvent(new Event('input'));

    fixture.detectChanges();
    await fixture.whenStable();

    expect(submitButton.disabled).toBeFalse();

    // act
    submitButton.click();

    // assert
    expect(emitSpy).toHaveBeenCalledOnceWith(expected);
  });
});
