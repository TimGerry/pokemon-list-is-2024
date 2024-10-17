import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-potions',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './potions.component.html',
  styleUrl: './potions.component.scss'
})
export class PotionsComponent {

}
