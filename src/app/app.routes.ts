import { Routes } from '@angular/router';
import { PokemonTeamComponent } from './components/pokemon-team/pokemon-team.component';
import { ShopComponent } from './components/shop/shop.component';
import { PokemonTrainingComponent } from './components/pokemon-training/pokemon-training.component';
import { pokemonResolver } from './resolvers/pokemon.resolver';
import { moneyGuard } from './guards/money.guard';

export const routes: Routes = [
    { path: '', redirectTo: 'pokemon', pathMatch: 'full' },
    { path: 'pokemon', component: PokemonTeamComponent },
    { path: 'pokemon/:id', component: PokemonTrainingComponent },
    // { path: 'pokemon/:id', component: PokemonTrainingComponent, resolve: { pokemon: pokemonResolver } },
    { path: 'shop', component: ShopComponent, canActivate: [moneyGuard] }
];
