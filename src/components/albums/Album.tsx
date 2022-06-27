import { getYear } from "../../@configs/formatter";
import { IAlbum } from "../../models/album";

const Album = ({ album }: { album: IAlbum }) => {
  return (
    <div className="my-2 p-6 shadow-md w-60 border border-gray-50">
      <img className="w-full" src={album?.cover_medium} alt="album cover" />
      <div className="h-12">
        <div className="font-bold text-sm">{album?.title}</div>
        <div className="font-semibold text-gray-400">
          {getYear({ date: album?.release_date })}
        </div>
      </div>
    </div>
  );
};

export default Album;
