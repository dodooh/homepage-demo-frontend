import {Component, OnInit} from '@angular/core';
import {gql} from "apollo-angular";
import {Item} from "../../model/Item";
import {ActivatedRoute} from "@angular/router";
import {DetailService} from "../../service/detail.service";
import {MediaType} from "../../model/MediaType";
import {Platform} from "../../model/Platform";

const GET_SPORT_BY_ID = gql`
  query GetSportById ($itemQuery: InputItem!){
  getItemById(itemQuery: $itemQuery){
        title
    description
    player
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
  selector: 'app-sport-detail',
  templateUrl: './sport-detail.component.html',
  styleUrls: ['./sport-detail.component.css']
})
export class SportDetailComponent implements OnInit {

  mediaId: number;
  sport: Item;

  constructor(private activatedRoute: ActivatedRoute,
              private detailService: DetailService) {
  }

  ngOnInit(): void {
    this.mediaId = Number(this.activatedRoute.snapshot.paramMap.get("id"));
    this.detailService.fetchMediaByIdAndMediaType(this.mediaId, MediaType.SPORT, Platform.IOS, GET_SPORT_BY_ID).subscribe(res => {
      // @ts-ignore
      this.sport = res.data.getItemById as Item;
      console.log(this.sport)
    })
  }

}
