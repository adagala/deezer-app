import { IAlbum } from "../../models/album";
import Loader from "../Loader";
import Album from "./Album";

const Albums = ({
  isLoading,
  albums,
}: {
  isLoading: boolean;
  albums: IAlbum[];
}) => {
  const hasAlbums = albums.length > 0;

  return (
    <div className="my-3">
      <h3 className="text-xl font-bold my-2">Albums</h3>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {hasAlbums ? (
            <div className="flex overflow-x-auto h-full gap-2">
              {albums.map((album) => (
                <div key={album.id}>
                  <Album key={album.id} album={album} />
                </div>
              ))}
            </div>
          ) : (
            <div>No Albums</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Albums;
