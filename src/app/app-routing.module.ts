import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListingComponent } from './pokemon-listing/pokemon-listing.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';

const routes: Routes = [
  { path: 'pokemon-list', component: PokemonListingComponent },
  { path: 'pokemon-detail', component: PokemonDetailComponent },
  { path: '', redirectTo: '/pokemon-list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }