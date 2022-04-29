import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { Service } from './service.service';



describe('Service', () => {
  let service: Service;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have getPokemon Lists', () => {
    const service: Service = TestBed.get(Service);
    expect(service.getPokemonList).toBeTruthy();
   });

  it('should have getPokemon Individual detail', () => {
    const service: Service = TestBed.get(Service);
    expect(service.getPokemonDetail).toBeTruthy();
   });
});
