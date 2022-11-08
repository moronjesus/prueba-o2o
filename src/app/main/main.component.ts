import { Component, OnInit } from '@angular/core';
import { Beer } from '../interface/beer.interface';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  
  beers     : Beer[] = []
  beerParam : string[] = ['beer_name','yeast','hops','malt','food']
  
  constructor( private searchService: SearchService ) { }
  
  ngOnInit() {
  }
  
  searchBeer(text: string){
    this.beers =[]
    this.beerParam.forEach((itemParam) => {
      const param = `${itemParam}=${text}`
      this.searchService.searchBeer(param)
      .subscribe((beer)=>{
        if (beer.length > 0) {
          this.beers.push(...beer)
        }
      })
    })
  }
  
  searchText(text: string){
    if (text==='') {
      this.beers =[]
      return
    }
    text.replace(/ /g, "_")
    this.searchBeer(text)
  }
  
  

}
