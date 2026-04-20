export interface IPokemon {
  name: string;
  url: string;
}

export interface IPokemonResp {
  count: number;
  next: string;
  previous: null | string;
  results: IPokemon[];
}
