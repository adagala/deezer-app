import { ITrack } from "../models/track";
import Search from "./Search";
import Tracks from "./tracks/Tracks";

const Home = ({
  tracks,
  query,
  onQueryChange,
  onSearchTracks,
}: {
  tracks: ITrack[];
  query: string;
  onQueryChange: (e: any) => void;
  onSearchTracks: () => Promise<void>;
}) => {
  const hasTracks = tracks.length > 0;

  return (
    <>
      <Search
        onSearchTracks={onSearchTracks}
        onQueryChange={onQueryChange}
        query={query}
      />
      {hasTracks ? <Tracks tracks={tracks} /> : <div>No Tracks</div>}
    </>
  );
};

export default Home;
