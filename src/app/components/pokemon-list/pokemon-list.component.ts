import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemon } from '../../models/pokemon.model';
import { OptionalPipe } from '../../pipes/optional.pipe';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [OptionalPipe],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss'
})
export class PokemonListComponent {
  @Input() pokemonList!: Pokemon[];
  @Output() pokemonClicked = new EventEmitter<Pokemon>();

  clickPokemon(pokemon: Pokemon) {
    this.pokemonClicked.emit(pokemon);
  }

  getPokemonImage(pokemon: Pokemon) {
    return `https://img.pokemondb.net/artwork/avif/${pokemon.name}.avif`
  }
}
