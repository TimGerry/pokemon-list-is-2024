import { Component } from '@angular/core';
import { ContentDirective } from '../../directives/content.directive';

@Component({
  selector: 'app-memo',
  standalone: true,
  imports: [ContentDirective],
  templateUrl: './memo.component.html',
  styleUrl: './memo.component.scss'
})
export class MemoComponent {
  noteContent = 'Take your notes here!';
}
