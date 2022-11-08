import { Component, Input, OnInit } from '@angular/core';
import { Beer } from '../interface/beer.interface';

@Component({
  selector: 'app-result-search',
  templateUrl: './result-search.component.html',
  styleUrls: ['./result-search.component.css']
})
export class ResultSearchComponent implements OnInit {
  
  @Input() beers: Beer[] = [];
  srcImgDefault : string = "https://images.punkapi.com/v2/5.png"

  constructor() { }

  ngOnInit() {
  }

}
