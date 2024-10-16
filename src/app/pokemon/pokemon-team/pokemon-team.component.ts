import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../models/pokemon.model';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-team',
  templateUrl: './pokemon-team.component.html',
  styleUrl: './pokemon-team.component.scss'
})
export class PokemonTeamComponent implements OnInit {
  pokemonList: Pokemon[] | undefined; 

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.load();
  }
  
  addPokemon(pokemonToAdd: Omit<Pokemon, 'id'>) {
    this.pokemonService.create(pokemonToAdd).subscribe(() => this.load());
  }

  load() {
    this.pokemonService.getAll().subscribe(data => this.pokemonList = data);
  }
}
