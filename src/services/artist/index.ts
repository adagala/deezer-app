import { IAlbumsResult } from "../../models/album";
import { IArtist } from "../../models/artist";
import { ITracksResult } from "../../models/track";

const API_END_POINT = process.env.REACT_APP_API_END_POINT as string;
const ARTIST_END_POINT = `${API_END_POINT}/artist/`;

export const getArtist = async (props: { artistId: string }) => {
  const url = `${ARTIST_END_POINT}${props.artistId}`;
  const response = await fetch(url);
  const artist = response.json() as Promise<IArtist>;
  return artist;
};

export const getArtistAlbums = async (props: { artistId: string }) => {
  const url = `${ARTIST_END_POINT}${props.artistId}/albums`;
  const response = await fetch(url);
  const albums = response.json() as Promise<IAlbumsResult>;
  return albums;
};

export const getArtistTopTracks = async (props: { artistId: string }) => {
  const url = `${ARTIST_END_POINT}${props.artistId}/top`;
  const response = await fetch(url);
  const result = response.json() as Promise<ITracksResult>;
  return result;
};
