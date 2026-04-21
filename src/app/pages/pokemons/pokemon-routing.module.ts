import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { PokemonsComponent } from '@pages/pokemons/pokemons.component';

export const routesPokemons: Routes = [
  {
    path: '',
    component: PokemonsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routesPokemons)],
  exports: [RouterModule]
})
export class PokemonsRoutingModule {}
