import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HomepageComponent} from './home/homepage/homepage.component';
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from './app-routing.module';
import {RouterTestingModule} from "@angular/router/testing";
import {GraphQLModule} from './graphql.module';
import {MovieDetailComponent} from "./home/movie-detail/movie-detail.component";
import {ProgramDetailComponent} from "./home/program-detail/program-detail.component";
import {SportDetailComponent} from "./home/sport-detail/sport-detail.component";

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    MovieDetailComponent,
    ProgramDetailComponent,
    SportDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterTestingModule,
    GraphQLModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
