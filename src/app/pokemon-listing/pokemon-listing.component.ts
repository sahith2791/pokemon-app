import { Component, OnInit } from '@angular/core';
import { Service } from '../service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pokemon-listing',
  templateUrl: './pokemon-listing.component.html',
  styleUrls: ['./pokemon-listing.component.css']
})
export class PokemonListingComponent implements OnInit {

  pokemon_data: any = []
  total: number = 0
  pageSize: number = 10
  page: any = 1
  itemsPerPage = 10;
  searchTerm: any

  constructor(private service: Service, private router: Router) { 
    service.getPokemonList().subscribe(res=> {
      this.pokemon_data = res.results
      this.total = res.count
    })
  }

  ngOnInit(): void {
  }

  pageChanged(event:any) {
    this.page = event.page;
 }

 show_detail(url: any){
  this.service.setMessage(url)
  this.router.navigate(['pokemon-detail'])
 }


}
