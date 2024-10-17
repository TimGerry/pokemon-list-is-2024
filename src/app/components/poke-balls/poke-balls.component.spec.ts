import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeBallsComponent } from './poke-balls.component';

describe('PokeBallsComponent', () => {
  let component: PokeBallsComponent;
  let fixture: ComponentFixture<PokeBallsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokeBallsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokeBallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
