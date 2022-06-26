import { useEffect, useState } from "react";
import { ITrack } from "../../models/track";

const initialTracks: ITrack[] = [];

const TopTracks = ({ artistId }: { artistId: string }) => {
  const [topTracks, setTopTracks] = useState(initialTracks);
  const [isLoading, setIsLoading] = useState(false);
  const hasTopTracks = topTracks.length > 0;

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setTopTracks([]);
      setIsLoading(false);
    }, 1000);
  }, [artistId]);

  return (
    <div>
      Top Tracks
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <div>
          {hasTopTracks ? (
            <div>
              Albums
              {topTracks.map((track, i) => (
                <div key={track.id}>
                  {i + 1} {track.title} {track.duration}
                </div>
              ))}
            </div>
          ) : (
            <div>No Top Tracks</div>
          )}
        </div>
      )}
    </div>
  );
};

export default TopTracks;
