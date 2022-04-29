import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PokemonListingComponent } from './pokemon-listing.component';
import { PaginationPipePipe } from '../pagination.pipe';
import { Service } from '../service.service';
import { of } from 'rxjs';

describe('PokemonListingComponent', () => {
  let component: PokemonListingComponent;
  let fixture: ComponentFixture<PokemonListingComponent>;
  let service: Service

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [ PokemonListingComponent, PaginationPipePipe ],
      providers: [
        Service
      ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(PokemonListingComponent);
    component = fixture.componentInstance;
    service = TestBed.get(Service);
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('html render pokemon lists', () => {
    fixture.detectChanges()
    const el = fixture.nativeElement.querySelector('.title')
    expect(el.innerText).toContain('Pokemon Lists')
  })

  describe('Service', () => {
    it('should be created', () => {
      expect(service).toBeTruthy();
    });

    it('should listed 1000 pokemon data', async() => {
      const Response = {
          count: 1000,
          next: '',
          previous: null,
          results: []
        };
      spyOn(service, 'getPokemonList').and.returnValue(of(Response));
      service.getPokemonList().subscribe(res => {
        expect(res.count).toEqual(1000)
      })
    })
  })

});
