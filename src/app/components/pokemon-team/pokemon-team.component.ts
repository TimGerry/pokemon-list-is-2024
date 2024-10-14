import { Component } from '@angular/core';
import { Pokemon } from '../../models/pokemon.model';
import { OptionalPipe } from '../../pipes/optional.pipe';
import { PokemonFormComponent } from '../pokemon-form/pokemon-form.component';
import { PokemonListComponent } from '../pokemon-list/pokemon-list.component';
import { LoadingComponent } from '../loading/loading.component';

@Component({
  selector: 'app-pokemon-team',
  standalone: true,
  imports: [PokemonListComponent, PokemonFormComponent, LoadingComponent],
  templateUrl: './pokemon-team.component.html',
  styleUrl: './pokemon-team.component.scss'
})
export class PokemonTeamComponent {
  pokemonList: Pokemon[] | undefined; 

  constructor() {
    setTimeout(() => {
      this.pokemonList = [
        { id: 'charmander', name: 'charmander', type: 'fire', level: 5, attack: 'ember' },
        { id: 'blaziken', name: 'blaziken', type: 'fire', type2: 'fighting', level: 36, attack: 'flamethrower' },
        { id: 'pikachu', name: 'pikachu', type: 'electric', level: 5, attack: 'thundershock' }
      ];
    }, 1000);
  }

  attack(pokemon: Pokemon) {
    window.alert(`${pokemon.name} used ${pokemon.attack}!`);
  }
}
