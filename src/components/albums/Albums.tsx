import { useEffect, useState } from "react";
import { IAlbum } from "../../models/album";
import { getArtistAlbums } from "../../services/artist";
import Loader from "../Loader";
import Album from "./Album";

const initialAlbums: IAlbum[] = [];

const Albums = ({ artistId }: { artistId: string }) => {
  const [albums, setAlbums] = useState(initialAlbums);
  const [isLoading, setIsLoading] = useState(false);
  const hasAlbums = albums.length > 0;

  useEffect(() => {
    setIsLoading(true);
    getArtistAlbums({ artistId })
      .then((a) => setAlbums(a.data))
      .finally(() => setIsLoading(false));
  }, [artistId]);

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
