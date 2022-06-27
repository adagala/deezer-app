import { useEffect, useState } from "react";
import { getDuration } from "../../@configs/formatter";
import { ITrack } from "../../models/track";
import { getArtistTopTracks } from "../../services/artist";

const initialTracks: ITrack[] = [];

const TopTracks = ({ artistId }: { artistId: string }) => {
  const [topTracks, setTopTracks] = useState(initialTracks);
  const [isLoading, setIsLoading] = useState(false);
  const hasTopTracks = topTracks.length > 0;

  useEffect(() => {
    setIsLoading(true);
    getArtistTopTracks({ artistId })
      .then((tracks) => setTopTracks(tracks.data))
      .finally(() => setIsLoading(false));
  }, [artistId]);

  return (
    <div className="w-full">
      <h3 className="text-xl font-bold my-2">Top Tracks</h3>
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
          {hasTopTracks ? (
            <div>
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
            </div>
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
