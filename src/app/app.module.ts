import { HttpClientModule } from '@angular/common/http';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ResultSearchComponent } from './result-search/result-search.component';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [					
    AppComponent,
    SearchComponent,
    ResultSearchComponent,
      MainComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
