import { Component, OnInit, Signal } from '@angular/core';
import { Pokemon } from '../../models/pokemon.model';
import { PokemonService } from '../../services/pokemon.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pokemon-team',
  templateUrl: './pokemon-team.component.html',
  styleUrl: './pokemon-team.component.scss'
})
export class PokemonTeamComponent implements OnInit {
  pokemonList!: Signal<Pokemon[] | undefined>;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonList = this.pokemonService.pokemonList;
  }
  
  addPokemon(pokemonToAdd: Omit<Pokemon, 'id'>) {
    this.pokemonService.create(pokemonToAdd);
  }
}
