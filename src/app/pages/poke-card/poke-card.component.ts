import { Component, Input, OnInit } from '@angular/core';
import { PokeAPIService } from 'src/app/services/pokeAPIService/poke-api.service';

@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.scss']
})
export class PokeCardComponent implements OnInit {

  @Input() dataPokeByGen: any;
  dataPokemon: any;
  constructor(
    private apiServ : PokeAPIService,
  ) { }

  ngOnInit(): void {
    this.getPoke();
  }

  async getPoke() {
    let namePokemon = 'pokemon/' + this.dataPokeByGen.name;


    await this.apiServ.getPoke(namePokemon).subscribe((res) => {
      this.dataPokemon = res;
    });
  }
}
