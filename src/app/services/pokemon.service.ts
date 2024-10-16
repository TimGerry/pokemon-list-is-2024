import { Injectable } from '@angular/core';
import { assertIsPokemon, assertIsPokemonArray, Pokemon } from '../models/pokemon.model';
import { HttpClient } from '@angular/common/http';
import { map, Observable, OperatorFunction } from 'rxjs';
import { environment } from '../../environments/environment';

const BASE_URL = environment.baseUrl + '/pokemon'

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Pokemon[]> {
    return this.httpClient.get<unknown>(BASE_URL).pipe(
      assert(assertIsPokemonArray)
    );
  }

  get(id: string): Observable<Pokemon> {
    return this.httpClient.get<unknown>(`${BASE_URL}/${id}`).pipe(
      assert(assertIsPokemon)
    );
  }
}

const assert = <T>(
  fn: (value: unknown) => asserts value is T
): OperatorFunction<unknown, T> => map(data => {
  fn(data);
  return data;
});
