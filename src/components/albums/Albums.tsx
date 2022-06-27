import { useEffect, useState } from "react";
import { IAlbum } from "../../models/album";
import { getArtistAlbums } from "../../services/artist";
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
    <div>
      Albums
      {isLoading ? (
        <div>Loading Albums...</div>
      ) : (
        <div>
          {hasAlbums ? (
            <div>
              {albums.map((album) => (
                <Album key={album.id} album={album} />
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
