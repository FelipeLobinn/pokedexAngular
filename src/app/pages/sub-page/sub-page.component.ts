import { Component, OnInit } from '@angular/core';
import { timeout } from 'rxjs';
import { PokeAPIService } from 'src/app/services/pokeAPIService/poke-api.service';

@Component({
  selector: 'app-sub-page',
  templateUrl: './sub-page.component.html',
  styleUrls: ['./sub-page.component.scss']
})
export class SubPageComponent implements OnInit {

  dataGeneration: any;
  dataPokemon: any;
  constructor(
    private apiServ : PokeAPIService,
  ) { }

  ngOnInit(): void {
    this.getGeneration();
  }

  getGeneration() {
    let pokeGeneration = 'generation/' + (<HTMLSelectElement>document.getElementById('pokeGeneration')).value;
    
    
    this.apiServ.getPoke(pokeGeneration).subscribe((response) => {
      this.dataGeneration = response;
      console.log(this.dataGeneration);

    })     
  }
}

