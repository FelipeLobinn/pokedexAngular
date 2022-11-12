import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeAPIService {

  constructor(
    private api: HttpClient
  ) { }

  getPoke(pokeGen: string) {
    //return this.api.get<any>(environment.apiBase + 'pokemon?limit='+limit+'&offset='+init);
    return this.api.get<any>(environment.apiBase + 'generation/'+pokeGen)
  }
}
