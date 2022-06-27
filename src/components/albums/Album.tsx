import { getYear } from "../../@configs/formatter";
import { IAlbum } from "../../models/album";

const Album = ({ album }: { album: IAlbum }) => {
  return (
    <div>
      <img src={album?.cover_small} alt="album cover" />
      <div>
        <b>{album?.title}</b>
      </div>
      {getYear({ date: album?.release_date })}
    </div>
  );
};

export default Album;
