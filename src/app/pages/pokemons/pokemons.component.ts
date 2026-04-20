import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

// Services
import { PokeApiService } from '@services/poke-api.service';

// Interfaces
import { IPokemon } from '@interfaces/poke-api.interface';

@Component({
  selector: 'pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

  pokemons: IPokemon[] = [];
  isLoading: boolean = false;
  suscriptionPokeApi!: Subscription;
  activeContainer!:boolean;

  constructor(private _pokeApi: PokeApiService) {}

  ngOnInit(): void {
    this.isLoading = true;

    this.suscriptionPokeApi = this._pokeApi.getPokemons().subscribe(res => {
      this.pokemons = res;
      this.isLoading = false;
    });
  }

  getDataFromChild(wasClickedTitleChild:boolean) {
    this.activeContainer = wasClickedTitleChild;
  }

  ngOnDestroy(): void {
    this.suscriptionPokeApi.unsubscribe();
  }

}
