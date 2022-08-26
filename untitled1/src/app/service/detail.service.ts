import {Injectable} from '@angular/core';
import {Apollo} from "apollo-angular";
import {Platform} from "../model/Platform";
import {MediaType} from "../model/MediaType";

const URL = "http://localhost:8080/homepage"

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  constructor(private apollo: Apollo) {
  }

  fetchMediaByIdAndMediaType(mediaId: number, mediaType: MediaType, platform: Platform, gql: any) {

    return this.apollo.watchQuery({
      query: gql,
      variables: {
        itemQuery: {
          id: mediaId,
          mediaType: mediaType,
          platform: platform
        }
      }
    }).valueChanges
  }
}
