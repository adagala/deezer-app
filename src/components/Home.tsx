import { ITrack } from "../models/track";
import Header from "./layout/Header";
import Loader from "./Loader";
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
        <Loader />
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
