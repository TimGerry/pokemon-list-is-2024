import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss'
})
export class LoadingComponent implements OnInit, OnDestroy {
  
  ngOnInit(): void {
    console.log('loading init');
  }

  ngOnDestroy(): void {
    console.log('loading destroy');
  }

}
