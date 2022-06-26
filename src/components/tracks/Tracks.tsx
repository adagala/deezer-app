import { ITrack } from "../../models/track";
import Track from "./Track";

const Tracks = ({ tracks }: { tracks: ITrack[] }) => {
  return (
    <div>
      {tracks.map((track) => (
        <Track key={track.id} track={track} />
      ))}
    </div>
  );
};

export default Tracks;
