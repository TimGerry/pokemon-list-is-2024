import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Pokemon } from '../../models/pokemon.model';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';
import { interval, Subject, Subscription, switchMap, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-pokemon-training',
  templateUrl: './pokemon-training.component.html',
  styleUrl: './pokemon-training.component.scss'
})
export class PokemonTrainingComponent implements OnInit, OnDestroy {
  pokemon: Pokemon | undefined;
  #song = new Audio('assets/pokemon-song.mp3');
  #destroy = new Subject();

  @Input() set id(id: string) {
    this.pokemonService.get(id).subscribe(data => this.pokemon = data);
  }

  constructor(private activatedRoute: ActivatedRoute, private pokemonService: PokemonService) {}

  ngOnInit(): void {
    // this.activatedRoute.data.subscribe(data => this.pokemon = data['pokemon']);

    // this.activatedRoute.params.pipe(
    //   switchMap(params => this.pokemonService.get(params['id']))
    // ).subscribe(data => this.pokemon = data);
  }

  ngOnDestroy(): void {
    this.#song.pause();
    this.#destroy.next(undefined);
    this.#destroy.complete();
  }

  start() {
    this.#song.play();
    interval(1000).pipe(
      takeUntil(this.#destroy),
      switchMap(() => this.pokemonService.train(this.pokemon!)),
      tap(data => console.log('trained pokemon!', data))
    ).subscribe(data => this.pokemon = data);
  }

  stop() {
    this.#song.pause();
    this.#destroy.next(undefined);
  }
  
  getPokemonImage() {
    return `https://img.pokemondb.net/artwork/avif/${this.pokemon!.name}.avif`;
  }
}
