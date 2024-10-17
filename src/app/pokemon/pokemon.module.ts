import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonTeamComponent } from './pokemon-team/pokemon-team.component';
import { PokemonTrainingComponent } from './pokemon-training/pokemon-training.component';
import { LoadingComponent } from '../components/loading/loading.component';
import { OptionalPipe } from '../pipes/optional.pipe';
import { provideRouter, RouterModule, withComponentInputBinding } from '@angular/router';
import { PokemonService } from '../services/pokemon.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HoverDirective } from '../directives/hover.directive';
import { UnlessDirective } from '../directives/unless.directive';
import { pokemonRoutes } from './pokemon.routes';



@NgModule({
  declarations: [PokemonFormComponent, PokemonListComponent, PokemonTeamComponent, PokemonTrainingComponent],
  imports: [
    CommonModule, LoadingComponent, OptionalPipe, RouterModule, ReactiveFormsModule, HoverDirective, UnlessDirective
  ],
  providers: [ 
    PokemonService,
    provideRouter(pokemonRoutes, withComponentInputBinding())
   ]
})
export class PokemonModule { }
