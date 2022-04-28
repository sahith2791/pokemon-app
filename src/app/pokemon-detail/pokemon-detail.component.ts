import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from '../service.service';
@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {
  pokemon_details: any = []
  constructor(private service: Service, private router: Router) { 
  }
  
  ngOnInit(): void {
    this.service.getMessage().subscribe(message => 
      {
        if(message !== ''){
          this.service.getPokemonDetail(message).subscribe(res => {
            this.pokemon_details = res
          })
        } else {
          this.router.navigate(['pokemon-list'])
        }
  })
    
  }

}
