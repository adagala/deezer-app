import { Link } from "react-router-dom";
import { getDuration } from "../../@configs/formatter";
import { ITrack } from "../../models/track";

const Track = ({ track }: { track: ITrack }) => {
  return (
    <div>
      <img src={track.album.cover_small} alt="Artist Img"></img>
      <div>{getDuration({ seconds: track.duration })}</div>
      <div>
        <b>{track.title}</b>
      </div>
      <div>
        <Link to={`${track.artist.id}`}>By {track.artist.name}</Link>
      </div>
      Album: {track.album.title}
      <br />
      <hr />
    </div>
  );
};

export default Track;
