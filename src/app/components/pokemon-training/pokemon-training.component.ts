import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Pokemon } from '../../models/pokemon.model';
import { LoadingComponent } from '../loading/loading.component';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-pokemon-training',
  standalone: true,
  imports: [LoadingComponent],
  templateUrl: './pokemon-training.component.html',
  styleUrl: './pokemon-training.component.scss'
})
export class PokemonTrainingComponent implements OnInit, OnDestroy {
  pokemon: Pokemon | undefined;
  #song = new Audio('assets/pokemon-song.mp3');

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
  }

  start() {
    this.#song.play();
  }
  
  getPokemonImage() {
    return `https://img.pokemondb.net/artwork/avif/${this.pokemon!.name}.avif`;
  }
}
