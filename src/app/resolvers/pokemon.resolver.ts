import { ResolveFn } from '@angular/router';
import { Pokemon } from '../models/pokemon.model';
import { inject } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

export const pokemonResolver: ResolveFn<Pokemon> = (route, state) => {
  return inject(PokemonService).get(route.params['id']);
};
