import { useEffect, useState } from "react";
import { getDuration } from "../../@configs/formatter";
import { ITrack } from "../../models/track";
import { getArtistTopTracks } from "../../services/artist";
import Loader from "../Loader";

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
        <Loader />
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
