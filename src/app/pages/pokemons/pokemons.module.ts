import { NgModule } from '@angular/core';

// Routing
import { PokemonsRoutingModule } from '@pages/pokemons/pokemon-routing.module';

// Modules
import { SharedModule } from 'src/app/shared/shared.module';

// Components
import { PokemonsComponent } from '@pages/pokemons/pokemons.component';

@NgModule({
  declarations: [
    PokemonsComponent
  ],
  imports: [
    SharedModule,
    PokemonsRoutingModule
  ]
})
export class PokemonsModule {}
