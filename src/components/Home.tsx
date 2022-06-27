import { ITrack } from "../models/track";
import Header from "./layout/Header";
import Search from "./Search";
import Tracks from "./tracks/Tracks";

const Home = ({
  tracks,
  query,
  onQueryChange,
  onSearchTracks,
  isLoading,
}: {
  tracks: ITrack[];
  query: string;
  onQueryChange: (e: any) => void;
  onSearchTracks: () => Promise<void>;
  isLoading: boolean;
}) => {
  const hasTracks = tracks.length > 0;

  return (
    <>
      <Header />
      <Search
        onSearchTracks={onSearchTracks}
        onQueryChange={onQueryChange}
        query={query}
      />
      {isLoading ? (
        <div className="h-40 text-2xl flex items-center justify-center font-bold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="animate-spin h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
        </div>
      ) : hasTracks ? (
        <Tracks tracks={tracks} />
      ) : (
        <div className="h-40 text-2xl flex items-center justify-center font-bold">
          No Tracks
        </div>
      )}
    </>
  );
};

export default Home;
