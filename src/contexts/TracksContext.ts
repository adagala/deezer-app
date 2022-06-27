import { createContext } from "react";
import { ITrack } from "../models/track";

const initialTracks: ITrack[] = [];
export const TracksContext = createContext(initialTracks);
