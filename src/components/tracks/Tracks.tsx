import { ITrack } from "../../models/track";
import Track from "./Track";

const Tracks = ({
  tracks,
  isLoading,
}: {
  tracks: ITrack[];
  isLoading: boolean;
}) => {
  const hasTracks = tracks.length > 0;
  return (
    <div className="md:grid md:grid-cols-3 md:gap-8 my-4">
      {isLoading ? (
        <>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((t) => (
            <div
              key={t}
              className="my-6 md:my-0 p-6 shadow-md border border-gray-50 dark:border-gray-700 dark:shadow-gray-800"
            >
              <div className="animate-pulse h-64 md:h-36 w-full bg-slate-200 dark:bg-slate-700"></div>
              <div className="text-lg font-semibold text-gray-400">
                <div className="animate-pulse h-5 md:h-3 mt-2 w-8 bg-slate-200 dark:bg-slate-700 rounded"></div>
              </div>
              <div className="text-xl font-bold">
                <div className="animate-pulse h-5 md:h-3 mt-2 w-2/3 bg-slate-200 dark:bg-slate-700 rounded"></div>
              </div>
              <div className="text-gray-500 font-bold">
                <div className="animate-pulse h-5 md:h-3 mt-2 w-1/2 bg-slate-200 dark:bg-slate-700 rounded"></div>
              </div>
              <div className="hidden md:block text-gray-400 font-semibold text-sm">
                <div className="animate-pulse h-5 md:h-3 mt-2 w-1/4 bg-slate-200 dark:bg-slate-700 rounded"></div>
              </div>
            </div>
          ))}
        </>
      ) : hasTracks ? (
        <>
          {tracks.map((track) => (
            <Track key={track.id} track={track} />
          ))}
        </>
      ) : (
        <div className="h-40 text-2xl flex items-center justify-center font-bold">
          No Tracks
        </div>
      )}
    </div>
  );
};

export default Tracks;
