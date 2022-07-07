import { IAlbum } from "../../models/album";
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
        <div className="flex overflow-x-auto h-full gap-2">
          {[1, 2, 4, 5, 6, 7, 8, 9].map((t) => (
            <div key={t}>
              <div className="my-2 p-4 shadow-md w-52 border border-gray-100 rounded-sm dark:border-gray-700 dark:shadow-gray-800">
                <div className="animate-pulse h-64 md:h-36 w-full bg-slate-200 dark:bg-slate-700"></div>
                <div className="font-bold text-sm">
                  <div className="animate-pulse h-5 md:h-3 mt-2 w-2/3 bg-slate-200 dark:bg-slate-700 rounded"></div>
                </div>
                <div className="font-semibold text-gray-400">
                  <div className="animate-pulse h-5 md:h-3 mt-2 w-12 bg-slate-200 dark:bg-slate-700 rounded"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>
          {hasAlbums ? (
            <div className="flex overflow-x-auto h-full gap-2">
              {albums.map((album) => (
                <div key={album.id}>
                  <Album album={album} />
                </div>
              ))}
            </div>
          ) : (
            <div>No Albums</div>
          )}
        </>
      )}
    </div>
  );
};

export default Albums;
