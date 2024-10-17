import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-poke-balls',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './poke-balls.component.html',
  styleUrl: './poke-balls.component.scss'
})
export class PokeBallsComponent {

}
