import { IAlbumsResult } from "../../models/album";
import { IArtist } from "../../models/artist";
import { ITracksResult } from "../../models/track";

const isProduction: boolean = process.env.NODE_ENV === "production";

const ARTIST_URL = isProduction
  ? "https://us-central1-deezer-app-c8dc8.cloudfunctions.net/artist/"
  : "http://localhost:5001/deezer-app-c8dc8/us-central1/artist/";

export const getArtist = async (props: { artistId: string }) => {
  const url = `${ARTIST_URL}${props.artistId}`;
  const response = await fetch(url);
  const artist = response.json() as Promise<IArtist>;
  return artist;
};

export const getArtistAlbums = async (props: { artistId: string }) => {
  const url = `${ARTIST_URL}${props.artistId}/albums`;
  const response = await fetch(url);
  const albums = response.json() as Promise<IAlbumsResult>;
  return albums;
};

export const getArtistTopTracks = async (props: { artistId: string }) => {
  const url = `${ARTIST_URL}${props.artistId}/top`;
  const response = await fetch(url);
  const result = response.json() as Promise<ITracksResult>;
  return result;
};
