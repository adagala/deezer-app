import { IAlbumsResult } from "./album";
import { ITracksResult } from "./track";

export interface IArtist {
  id: string;
  name: string;
  link: string;
  share: string;
  picture: string;
  picture_small: string;
  picture_medium: string;
  picture_big: string;
  picture_xl: string;
  nb_album: number;
  nb_fan: number;
  radio: boolean;
  tracklist: string;
  type: string;
}

export interface IArtistInformationResult {
  artist: IArtist;
  albums: IAlbumsResult;
  topTracks: ITracksResult;
}
