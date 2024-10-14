import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pokemon } from './models/pokemon.model';
import { OptionalPipe } from './pipes/optional.pipe';
import { CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, OptionalPipe, CurrencyPipe, DatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Info Support Pokémon App';
  today = new Date();
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

  getPokemonImage(pokemon: Pokemon) {
    return `https://img.pokemondb.net/artwork/avif/${pokemon.name}.avif`
  }

  clickPokemon(pokemon: Pokemon) {
    window.alert(`${pokemon.name} used ${pokemon.attack}!`);
  }
}
