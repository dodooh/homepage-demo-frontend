import {MediaType} from "./MediaType";
import {MediaAsset} from "./MediaAsset";

export interface Media {
  id?: number;
  mediaType?: MediaType;
  startTime?: string;
  expiredTime?: string;
  title?: string;
  description?: string;
  mediaAsset?: MediaAsset;
}
