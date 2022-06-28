import { ITracksResult } from "../../models/track";

const isProduction: boolean = process.env.NODE_ENV === "production";

const SEARCH_URL = isProduction
  ? "https://us-central1-deezer-app-c8dc8.cloudfunctions.net/search/"
  : "http://localhost:5001/deezer-app-c8dc8/us-central1/search/";

export const getSearchResults = async (props: { query: string }) => {
  const url = `${SEARCH_URL}${props.query}`;
  const response = await fetch(url);
  const results = response.json() as Promise<ITracksResult>;
  return results;
};
