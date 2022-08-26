import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Media} from "../model/Media";
import {MediaType} from "../model/MediaType";

const URL = "http://localhost:8080/api/homepage"
@Injectable({
  providedIn: 'root'
})
export class HomepageService {

  constructor(private http: HttpClient) { }

  getTopMovie(mediaType: MediaType) : Observable<Media[]> {
    return this.http.get<Media[]>(`${URL}/top?mediaType=${mediaType}`);
  }
}
