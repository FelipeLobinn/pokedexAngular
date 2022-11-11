import { Component, OnInit } from '@angular/core';
import { PokeAPIService } from 'src/app/services/pokeAPIService/poke-api.service';

@Component({
  selector: 'app-sub-page',
  templateUrl: './sub-page.component.html',
  styleUrls: ['./sub-page.component.scss']
})
export class SubPageComponent implements OnInit {

  dataPoke: any;
  constructor(
    private apiServ : PokeAPIService,
  ) { }

  ngOnInit(): void {
    this.getPoke();
  }

  getPoke() {
    this.apiServ.getPoke().subscribe((res) => {
      this.dataPoke = res;
      console.log(this.dataPoke);
    })
  }

}
