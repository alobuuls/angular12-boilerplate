import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

// Interfaces
import { IPokemon, IPokemonResp } from '@interfaces/poke-api.interface';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  constructor( private http: HttpClient ) {}

  getPokemons(): Observable<IPokemon[]> {
    return this.http.get<IPokemonResp>(`${environment.endpointBaseApiPoke}/pokemon`).pipe(map(res => res.results));
  }

}
