import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonListingComponent } from './pokemon-listing.component';

describe('PokemonListingComponent', () => {
  let component: PokemonListingComponent;
  let fixture: ComponentFixture<PokemonListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
