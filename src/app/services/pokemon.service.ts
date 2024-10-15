import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  #pokemonList: Pokemon[] = [
    { id: 'charmander', name: 'charmander', type: 'fire', level: 5, attack: 'ember' },
    { id: 'blaziken', name: 'blaziken', type: 'fire', type2: 'fighting', level: 36, attack: 'flamethrower' },
    { id: 'pikachu', name: 'pikachu', type: 'electric', level: 5, attack: 'thundershock' }
  ];

  constructor() { }

  getAll(): Pokemon[] {
    return this.#pokemonList;
  }
}
