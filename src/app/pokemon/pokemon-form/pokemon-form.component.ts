import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormControl, FormGroup, NgForm, NonNullableFormBuilder, ValidatorFn, Validators } from '@angular/forms';
import { Pokemon, pokemonTypes } from '../../models/pokemon.model';
import { catchError, delay, map, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';

type PokemonForm = {
  [P in keyof Omit<Pokemon, 'id'>]: FormControl<Pokemon[P]>
}

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrl: './pokemon-form.component.scss'
})
export class PokemonFormComponent implements OnInit {
  @Output() pokemonAdded = new EventEmitter<Omit<Pokemon, 'id'>>();

  pokemonForm!: FormGroup<PokemonForm>;

  constructor(private nnfb: NonNullableFormBuilder) {}

  ngOnInit(): void {
    this.pokemonForm = this.nnfb.group<PokemonForm>({
      name: this.nnfb.control('mudkip', [Validators.required, Validators.minLength(3)],  pokemonValidatorFn),
      type: this.nnfb.control('water', [Validators.required, typeValidatorFn]),
      type2: this.nnfb.control(undefined, typeValidatorFn),
      attack: this.nnfb.control('', Validators.required),
      level: this.nnfb.control(0, [Validators.required, Validators.min(1), Validators.max(100)]),
    }, { validators: duplicateTypeValidatorFn });

    this.pokemonForm.controls.name.disable();
  }

  submit() {
    if (!this.pokemonForm.valid) {
      console.log('Not valid!');
      return;
    }
    this.pokemonAdded.emit(this.pokemonForm.getRawValue());
    this.pokemonForm.reset();
  }

  logForm() {
    console.log('form value', this.pokemonForm.value);
    console.log('form raw value', this.pokemonForm.getRawValue());
    console.log('name value', this.pokemonForm.controls.name.value);
    console.log('name raw value', this.pokemonForm.controls.name.getRawValue());
  }
}

const typeValidatorFn: ValidatorFn = (control: AbstractControl) => {
  const val = control.value;
  const valid = !val || pokemonTypes.includes(val);

  return valid ? null : { invalidType: `${val} is not a valid pokémon type!` };
}

const duplicateTypeValidatorFn: ValidatorFn = (group: AbstractControl) => {
  const type = group.get('type')?.value;
  const type2 = group.get('type2')?.value;
  const valid = !type || !type2 || type != type2;

  return valid ? null : { duplicateType: `Duplicate types are not allowed!` }
}

const pokemonValidatorFn: AsyncValidatorFn = (control: AbstractControl) => {
  const name = control.value;

  if (!name) return of(null);

  return ajax(`https://pokeapi.co/api/v2/pokemon/${name}`).pipe(
    map(() => null),
    catchError(() => {
      return of({ invalidPokemon: `${name} is not a valid pokémon!`})
    }),
    // delay(5000)
  )
}
