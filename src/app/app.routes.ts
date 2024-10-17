import { Routes } from '@angular/router';
import { PokemonTeamComponent } from './pokemon/pokemon-team/pokemon-team.component';
import { ShopComponent } from './components/shop/shop.component';
import { PokemonTrainingComponent } from './pokemon/pokemon-training/pokemon-training.component';
import { pokemonResolver } from './resolvers/pokemon.resolver';
import { moneyGuard } from './guards/money.guard';
import { PokeBallsComponent } from './components/poke-balls/poke-balls.component';
import { PotionsComponent } from './components/potions/potions.component';
import { MemoComponent } from './components/memo/memo.component';

export const routes: Routes = [
    { path: '', redirectTo: 'shop', pathMatch: 'full' },
    { path: 'pokemon', loadChildren: async () => (await import('./pokemon/pokemon.module')).PokemonModule },
    // { path: 'pokemon/:id', component: PokemonTrainingComponent, resolve: { pokemon: pokemonResolver } },
    // { path: 'shop', component: ShopComponent, canActivate: [moneyGuard] }
    {
        path: 'shop', component: ShopComponent, children: [
            { path: '', redirectTo: 'poke-balls', pathMatch: 'full' },
            { path: 'poke-balls', component: PokeBallsComponent },
            { path: 'potions', component: PotionsComponent }
        ]
    },
    { outlet: 'utility', path: 'memo', component: MemoComponent },
    { outlet: 'utility', path: 'cart', loadComponent: async () => (await import('./components/cart/cart.component')).CartComponent }
];
