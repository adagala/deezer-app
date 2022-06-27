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
    <div className="my-3">
      <h3 className="text-xl font-bold my-2">Albums</h3>
      {isLoading ? (
        <div className="h-40 text-2xl flex items-center justify-center font-bold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="animate-spin h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
        </div>
      ) : (
        <div>
          {hasAlbums ? (
            <div className="flex overflow-x-auto h-full gap-2">
              {albums.map((album) => (
                <div key={album.id} className="">
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
