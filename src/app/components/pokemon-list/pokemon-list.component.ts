import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemon } from '../../models/pokemon.model';
import { OptionalPipe } from '../../pipes/optional.pipe';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [OptionalPipe],
  // imports: [OptionalPipe, RouterModule],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss'
})
export class PokemonListComponent {
  @Input() pokemonList!: Pokemon[];

  constructor(private router: Router) {}

  clickPokemon(pokemon: Pokemon) {
    this.router.navigate(['pokemon', pokemon.id]);
  }

  getPokemonImage(pokemon: Pokemon) {
    return `https://img.pokemondb.net/artwork/avif/${pokemon.name}.avif`
  }
}
