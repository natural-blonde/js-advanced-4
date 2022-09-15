import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { SearchPipe } from './search/search.pipe';
import { SortPipe } from './sort/sort.pipe';
import { Sort2Pipe } from './sort2/sort2.pipe';
import { Sort3Pipe } from './sort3/sort3.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainComponentComponent,
    SearchPipe,
    SortPipe,
    Sort2Pipe,
    Sort3Pipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
