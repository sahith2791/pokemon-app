import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PokemonDetailComponent } from './pokemon-detail.component';
import { Service } from '../service.service';
import { of } from 'rxjs';

describe('PokemonDetailComponent', () => {
  let component: PokemonDetailComponent;
  let fixture: ComponentFixture<PokemonDetailComponent>;
  let service: Service

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [ PokemonDetailComponent ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(PokemonDetailComponent);
    component = fixture.componentInstance;
    service = TestBed.get(Service);
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Service', () => {
    it('should be created', () => {
      expect(service).toBeTruthy();
    });

    it('should get details', async() => {
      let url = 'https://pokeapi.co/api/v2/pokemon/1/'
      const Response = {
          name: "bulbasaur",
          height: 7,
          weight: 69
        };
      spyOn(service, 'getPokemonDetail').and.returnValue(of(Response));
      service.getPokemonDetail(url).subscribe(res => {
        expect(Response).toEqual(res)
      })
    })
  })

});
