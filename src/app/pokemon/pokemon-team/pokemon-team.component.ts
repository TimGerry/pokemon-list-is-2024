import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../models/pokemon.model';
import { PokemonService } from '../../services/pokemon.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pokemon-team',
  templateUrl: './pokemon-team.component.html',
  styleUrl: './pokemon-team.component.scss'
})
export class PokemonTeamComponent implements OnInit {
  pokemon$!: Observable<Pokemon[] | undefined>

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemon$ = this.pokemonService.pokemon$;
  }
  
  addPokemon(pokemonToAdd: Omit<Pokemon, 'id'>) {
    this.pokemonService.create(pokemonToAdd);
  }
}
