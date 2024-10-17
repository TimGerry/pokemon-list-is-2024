import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ShoppingItem } from '../../models/shopping-item.model';

@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShoppingListComponent {
  @Input() items!: ShoppingItem[];
}
