import { Component, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShopComponent } from './components/shop/shop.component';
import { PokemonTeamComponent } from './components/pokemon-team/pokemon-team.component';
import { APP_TITLE } from './app.config';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ShopComponent, PokemonTeamComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(@Inject(APP_TITLE) public title: string) {}
}
