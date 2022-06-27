import { useEffect, useState } from "react";
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
    <div>
      Top Tracks
      {isLoading ? (
        <div>Loading Top Tracks...</div>
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
