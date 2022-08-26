import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DetailService} from "../../service/detail.service";
import {MediaType} from "../../model/MediaType";
import {gql} from "apollo-angular";
import {Item} from "../../model/Item";
import {Platform} from "../../model/Platform";

const GET_MOVIE_BY_ID = gql`
  query GetMovieById ($itemQuery: InputItem!){
  getItemById(itemQuery: $itemQuery){
          title
    description
    actors
    directors
    startTime
    expiredTime
    mediaAsset{
        bannerUrl
        posterUrl
        thumbnailUrl
    }
    linkPlay{
        url
    }
  }
  }
`

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  mediaId: number;
  movie: Item;

  constructor(private activatedRoute: ActivatedRoute,
              private detailService: DetailService) {
  }

  ngOnInit(): void {
    this.mediaId = Number(this.activatedRoute.snapshot.paramMap.get("id"));
    this.detailService.fetchMediaByIdAndMediaType(this.mediaId, MediaType.MOVIE, Platform.IOS, GET_MOVIE_BY_ID).subscribe(res => {
      // @ts-ignore
      this.movie = res.data.getItemById as Item;
      console.log(this.movie)
    })
  }

}
