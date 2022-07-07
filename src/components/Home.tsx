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
  return (
    <>
      <Header />
      <Search
        onSearchTracks={onSearchTracks}
        onQueryChange={onQueryChange}
        query={query}
      />
      <Tracks isLoading={isLoading} tracks={tracks} />
    </>
  );
};

export default Home;
