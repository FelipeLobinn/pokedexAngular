import { Component, OnInit } from '@angular/core';
import { PokeAPIService } from 'src/app/services/pokeAPIService/poke-api.service';

@Component({
  selector: 'app-sub-page',
  templateUrl: './sub-page.component.html',
  styleUrls: ['./sub-page.component.scss']
})
export class SubPageComponent implements OnInit {

  dataGen: any;
  constructor(
    private apiServ : PokeAPIService,
  ) { }

  ngOnInit(): void {
    this.getPoke();
  }

  getPoke() {
    let init: number, limit: number;
    let pokeGen = (<HTMLSelectElement>document.getElementById('pokeGen')).value;

    console.log('Init: ',init!, ' Limit: ', limit!)

    this.apiServ.getPoke(pokeGen).subscribe((res) => {
      this.dataGen = res;
      console.log(this.dataGen);
    })
  }

}
