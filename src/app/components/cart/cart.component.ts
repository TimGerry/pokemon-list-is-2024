import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ShoppingItem } from '../../models/shopping-item.model';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
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
