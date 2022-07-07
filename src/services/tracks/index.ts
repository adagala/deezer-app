import { ITracksResult } from "../../models/track";

const API_END_POINT = process.env.REACT_APP_API_END_POINT as string;
const SEARCH_END_POINT = `${API_END_POINT}/search/`;

export const getSearchResults = async (props: { query: string }) => {
  const url = `${SEARCH_END_POINT}${props.query}`;
  const response = await fetch(url);
  const results = response.json() as Promise<ITracksResult>;
  return results;
};
