import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../models/pokemon.model';
import { OptionalPipe } from '../../pipes/optional.pipe';
import { PokemonFormComponent } from '../pokemon-form/pokemon-form.component';
import { PokemonListComponent } from '../pokemon-list/pokemon-list.component';
import { LoadingComponent } from '../loading/loading.component';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-team',
  standalone: true,
  imports: [PokemonListComponent, PokemonFormComponent, LoadingComponent],
  templateUrl: './pokemon-team.component.html',
  styleUrl: './pokemon-team.component.scss'
})
export class PokemonTeamComponent implements OnInit {
  pokemonList: Pokemon[] | undefined; 

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonList = this.pokemonService.getAll();
  }

  attack(pokemon: Pokemon) {
    window.alert(`${pokemon.name} used ${pokemon.attack}!`);
  }
}
