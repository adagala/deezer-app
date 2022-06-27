import { ITracksResult } from "../../models/track";

const SEARCH_URL = "http://localhost:5001/deezer-app-c8dc8/us-central1/search/";

export const getSearchResults = async (props: { query: string }) => {
  const url = `${SEARCH_URL}${props.query}`;
  const response = await fetch(url);
  const results = response.json() as Promise<ITracksResult>;
  return results;
};
