import { Component, Inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { APP_TITLE } from './app.config';
import { MenuComponent } from './components/menu/menu.component';
import { PokemonModule } from './pokemon/pokemon.module';
import { MemoComponent } from './components/memo/memo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent, PokemonModule, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(@Inject(APP_TITLE) public title: string) {}
}
