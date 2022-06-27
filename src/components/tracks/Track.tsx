import { Link } from "react-router-dom";
import { getDuration } from "../../@configs/formatter";
import { ITrack } from "../../models/track";

const Track = ({ track }: { track: ITrack }) => {
  return (
    <div className="my-6 md:my-0 p-6 shadow-md border border-gray-50">
      <img
        className="w-full"
        src={track.album.cover_medium}
        alt="Artist Img"
        loading="lazy"
      ></img>
      <div className="text-lg font-semibold text-gray-400">
        {getDuration({ seconds: track.duration })}
      </div>
      <div className="text-xl font-bold">{track.title}</div>
      <div className="text-gray-500 font-bold">
        <Link to={`${track.artist.id}`}>By {track.artist.name}</Link>
      </div>
      <div className="hidden md:block text-gray-400 font-semibold text-sm">
        Album: {track.album.title}
      </div>
    </div>
  );
};

export default Track;
