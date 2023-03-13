import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './header/search/search.component';
import { SortingComponent } from './header/sorting/sorting.component';
import { CardComponent } from './card/card.component';
import { ButtonComponent } from './common/button/button.component';
import { FilterComponent } from './header/filter/filter.component';
import { MainComponent } from './main/main.component';
import { CardListComponent } from './card-list/card-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    SortingComponent,
    CardComponent,
    ButtonComponent,
    FilterComponent,
    MainComponent,
    CardListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
