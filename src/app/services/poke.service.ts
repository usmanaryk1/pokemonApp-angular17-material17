import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PokeService {

  URL_BASE = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) { }

  getPokemons(): Observable<any> {
    const url =`${this.URL_BASE}/pokemon?limit=905&offset=0`;
    return this.http.get<any>(url);
  }

  getPokemonsLazy(offset: number, limit: number): Observable<any> {
    const url =`${this.URL_BASE}/pokemon?offset=${offset}&limit=${limit}`;
    return this.http.get<any>(url);
  }

  getPokeDetails(pokemonUrl: string) : Observable<any> {
    return this.http.get<any>(pokemonUrl);
  }

  getPokemon(pokemon: string): Observable<any> {
    const url = `${this.URL_BASE}/pokemon/${pokemon}`;
    return this.http.get<any>(url);
  }

  getPokemonById(pokemon: number): Observable<any> {
    const url = `${this.URL_BASE}/pokemon/${pokemon}`;
    return this.http.get<any>(url);
  }

  getAbility(abilityUrl: string): Observable<any> {
    return this.http.get<any>(abilityUrl);
  }

  getSpecie(specieUrl: string): Observable<any> {
    return this.http.get<any>(specieUrl);
  }

  getEvolutionChain(evolutionUrl: string): Observable<any> {
    return this.http.get<any>(evolutionUrl);
  }
  
}
