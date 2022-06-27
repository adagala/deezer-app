import { ITrack } from "../../models/track";
import Track from "./Track";

const Tracks = ({ tracks }: { tracks: ITrack[] }) => {
  return (
    <div className="md:grid md:grid-cols-3 md:gap-8 my-4">
      {tracks.map((track) => (
        <Track key={track.id} track={track} />
      ))}
    </div>
  );
};

export default Tracks;
