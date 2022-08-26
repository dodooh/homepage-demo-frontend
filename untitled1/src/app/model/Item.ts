import {MediaType} from "./MediaType";
import {LinkPlay} from "./LinkPlay";

export interface Item {
  id?: number;
  mediaType?:MediaType;
  startTime?:string;
  expiredTime?:string;
  title?:string;
  description?:string;
  actors?:string[];
  directors?:string[];
  channelId?:number;
  player?:string[];
  linkPlay: LinkPlay;
}
