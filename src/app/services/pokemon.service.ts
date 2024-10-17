import { Injectable, signal } from '@angular/core';
import { assertIsPokemon, assertIsPokemonArray, Pokemon } from '../models/pokemon.model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable, OperatorFunction, tap } from 'rxjs';
import { environment } from '../../environments/environment';

const BASE_URL = environment.baseUrl + '/pokemon'

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  // #pokemonSubject = new BehaviorSubject<Pokemon[] | undefined>(undefined);
  // public pokemon$ = this.#pokemonSubject.asObservable();

  #pokemonSignal = signal<Pokemon[] | undefined>(undefined);
  public pokemonList = this.#pokemonSignal.asReadonly();

  constructor(private httpClient: HttpClient) {
    this.load();
  }

  get(id: string): Observable<Pokemon> {
    return this.httpClient.get<unknown>(`${BASE_URL}/${id}`).pipe(
      assert(assertIsPokemon)
    );
  }

  create(pokemonToCreate: Omit<Pokemon, 'id'>): void {
    this.httpClient.post<void>(BASE_URL, { id: pokemonToCreate.name.toLowerCase(), ...pokemonToCreate })
      .subscribe(() => this.load());
  }

  train(pokemonTrain: Pokemon): Observable<Pokemon> {
    return this.httpClient.put<unknown>(`${BASE_URL}/${pokemonTrain.id}`, { ...pokemonTrain, level: ++pokemonTrain.level }).pipe(
      assert(assertIsPokemon),
      tap(data => this.#pokemonSignal.update(oldData => oldData?.map(p => p.id === data.id ? data : p)))
    )
  }

  load() {
    this.httpClient.get<unknown>(BASE_URL).pipe(
      assert(assertIsPokemonArray)
    ).subscribe(data => this.#pokemonSignal.set(data));
  }
}

const assert = <T>(
  fn: (value: unknown) => asserts value is T
): OperatorFunction<unknown, T> => map(data => {
  fn(data);
  return data;
});
