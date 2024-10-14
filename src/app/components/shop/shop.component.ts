import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ShoppingItem } from '../../models/shopping-item.model';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CurrencyPipe, DatePipe, FormsModule],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent {
  today = new Date();

  shoppingList: ShoppingItem[] = [];
  shoppingItem: ShoppingItem = {
    product: '',
    amount: 0
  }; 

  
  submit(form: NgForm) {
    if (form.invalid) {
      console.log('you cheecky basterd');
      return;
    }
    this.shoppingList.push({ ...this.shoppingItem });
    form.reset();
  }
}
