import { Component, Input } from '@angular/core';
import { Pokemon } from '../../models/pokemon.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-list',
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
