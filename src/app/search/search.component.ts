import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() onSearchText = new EventEmitter<string>();
  searchText$ = new Subject<string>();

  constructor() { }

  ngOnInit() {
    this.searchText$.pipe(
      debounceTime(400),
      distinctUntilChanged(),
    ).subscribe((texto) =>{
      this.onSearchText.emit(texto);
    })
  }

  applyFilter( text:any ) {
    this.searchText$.next(text.value) 
  }

  

}
