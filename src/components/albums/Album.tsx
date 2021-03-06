import { getYear } from "../../@configs/formatter";
import { IAlbum } from "../../models/album";

const Album = ({ album }: { album: IAlbum }) => {
  return (
    <div className="my-2 p-4 shadow-md w-60 md:2-40 border border-gray-100 rounded-sm dark:border-gray-700 dark:shadow-gray-800">
      <img
        className="w-full"
        src={album?.cover_medium}
        alt="album cover"
        loading="lazy"
      />
      <div className="font-bold text-sm">{album?.title}</div>
      <div className="font-semibold text-gray-400">
        {getYear({ date: album?.release_date })}
      </div>
    </div>
  );
};

export default Album;
