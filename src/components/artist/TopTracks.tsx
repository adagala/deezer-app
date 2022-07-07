import { getDuration } from "../../@configs/formatter";
import { ITrack } from "../../models/track";

const TopTracks = ({
  isLoading,
  topTracks,
}: {
  isLoading: boolean;
  topTracks: ITrack[];
}) => {
  const hasTopTracks = topTracks.length > 0;

  return (
    <div className="w-full">
      <h3 className="text-xl font-bold my-2">Top Tracks</h3>
      {isLoading ? (
        <>
          {[1, 2, 3, 4, 5].map((t) => (
            <div
              key={t}
              className="border-b border-b-gray-400 flex py-2 text-sm"
            >
              <div className="w-5/6 flex">
                <div className="font-bold"></div>
                <div className="ml-2">
                  <div className="animate-pulse h-5 md:h-3 mt-2 w-44 md:w-32 bg-slate-200 dark:bg-slate-700 rounded"></div>
                </div>
              </div>
              <div className="w-1/6 text-gray-400 text-right">
                <div className="animate-pulse h-5 md:h-3 mt-2 w-8 bg-slate-200 dark:bg-slate-700 rounded"></div>
              </div>
            </div>
          ))}
        </>
      ) : (
        <div>
          {hasTopTracks ? (
            <>
              {topTracks.map((track, i) => (
                <div
                  key={track.id}
                  className="border-b border-b-gray-400 flex py-2 text-sm"
                >
                  <div className="w-5/6 flex">
                    <div className="font-bold">{i + 1}.</div>
                    <div className="ml-2">{track?.title}</div>
                  </div>
                  <div className="w-1/6 text-gray-400 text-right">
                    {getDuration({ seconds: track.duration })}
                  </div>
                </div>
              ))}
            </>
          ) : (
            <div className="h-40 text-1xl flex items-center justify-center font-bold">
              No Top Tracks
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TopTracks;
