import { Routes } from "@angular/router";
import { PokemonTeamComponent } from "./pokemon-team/pokemon-team.component";
import { PokemonTrainingComponent } from "./pokemon-training/pokemon-training.component";

export const pokemonRoutes: Routes = [
    { path: '', component: PokemonTeamComponent },
    { path: ':id', component: PokemonTrainingComponent }
]