import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomepageComponent} from "./home/homepage/homepage.component";
import {MovieDetailComponent} from "./home/movie-detail/movie-detail.component";
import {ProgramDetailComponent} from "./home/program-detail/program-detail.component";
import {SportDetailComponent} from "./home/sport-detail/sport-detail.component";

const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: 'detail/movie/:id', component: MovieDetailComponent },
  { path: 'detail/program/:id', component: ProgramDetailComponent },
  { path: 'detail/sport/:id', component: SportDetailComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ]
})
export class AppRoutingModule { }
