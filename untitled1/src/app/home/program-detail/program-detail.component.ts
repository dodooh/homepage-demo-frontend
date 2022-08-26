import {Component, OnInit} from '@angular/core';
import {gql} from "apollo-angular";
import {Item} from "../../model/Item";
import {ActivatedRoute} from "@angular/router";
import {DetailService} from "../../service/detail.service";
import {MediaType} from "../../model/MediaType";
import {Platform} from "../../model/Platform";


const GET_PROGRAM_BY_ID = gql`
  query GetProgramById ($itemQuery: InputItem!){
  getItemById(itemQuery: $itemQuery){
    title
    description
    channelId
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
  selector: 'app-program-detail',
  templateUrl: './program-detail.component.html',
  styleUrls: ['./program-detail.component.css']
})
export class ProgramDetailComponent implements OnInit {

  mediaId: number;
  program: Item;

  constructor(private activatedRoute: ActivatedRoute,
              private detailService: DetailService) {
  }

  ngOnInit(): void {
    this.mediaId = Number(this.activatedRoute.snapshot.paramMap.get("id"));
    this.detailService.fetchMediaByIdAndMediaType(this.mediaId, MediaType.PROGRAM, Platform.IOS, GET_PROGRAM_BY_ID).subscribe(res => {
      // @ts-ignore
      this.program = res.data.getItemById as Item;
      console.log(this.program)
    })
  }

}
