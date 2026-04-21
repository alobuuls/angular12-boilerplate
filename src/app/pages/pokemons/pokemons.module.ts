import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routing
import { PokemonsRoutingModule } from '@pages/pokemons/pokemon-routing.module';

// Modules
import { SharedModule } from '@shared/shared.module';

// Components
import { PokemonsComponent } from '@pages/pokemons/pokemons.component';

@NgModule({
  declarations: [
    PokemonsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PokemonsRoutingModule
  ]
})
export class PokemonsModule {}
