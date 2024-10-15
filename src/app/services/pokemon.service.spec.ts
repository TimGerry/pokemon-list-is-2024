import { TestBed } from '@angular/core/testing';

import { PokemonService } from './pokemon.service';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { Pokemon } from '../models/pokemon.model';
import { lastValueFrom } from 'rxjs';

fdescribe('PokemonService', () => {
  let service: PokemonService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });

    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(PokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return data', async () => {
    // arrange
    const expected: Pokemon[] = [
      { id: 'blaziken', name: 'blaziken', type: 'fire', type2: 'fighting', level: 36, attack: 'flamethrower' },
      { id: 'blaziken', name: 'blaziken', type: 'fire', type2: 'fighting', level: 36, attack: 'flamethrower' },
      { id: 'blaziken', name: 'blaziken', type: 'fire', type2: 'fighting', level: 36, attack: 'flamethrower' },
      { id: 'pikachu', name: 'pikachu', type: 'electric', level: 5, attack: 'thundershock' }
    ];

    // act
    const actual = lastValueFrom(service.getAll());

    httpMock.expectOne('/pokemon').flush(expected);

    // expect
    expect(await actual).toHaveSize(expected.length);
  });
});
