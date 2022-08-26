import {Component, OnInit} from '@angular/core';
import {HomepageService} from "../../service/homepage.service";
import {Media} from "../../model/Media";
import {MediaType} from "../../model/MediaType";


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  movies: Media[];
  programs: Media[];
  sports: Media[];

  constructor(private homepageService: HomepageService) {
  }

  ngOnInit(): void {
    this.homepageService.getTopMovie(MediaType.MOVIE).subscribe(res => {
      this.movies = res;
    });
    this.homepageService.getTopMovie(MediaType.PROGRAM).subscribe(res => {
      this.programs = res;
    });
    this.homepageService.getTopMovie(MediaType.SPORT).subscribe(res => {
      this.sports = res;
    })
  }

}
