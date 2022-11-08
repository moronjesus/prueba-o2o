import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Beer } from '../interface/beer.interface';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

constructor( private http: HttpClient ) { }

  private apiBaseUrl : string   = "https://api.punkapi.com/v2";

  
  /**
   * It takes a string as a parameter, and returns an Observable of type Beer
   * @param {string} param - The search parameter.
   * @returns Observable<Beer>
   */
  searchBeer( param : string ): Observable<Beer[]> {
    const url = `${this.apiBaseUrl}/beers?${param}`;
    return this.http.get<any>(url);
  }


}