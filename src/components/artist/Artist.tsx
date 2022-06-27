import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IArtist } from "../../models/artist";
import { getArtist } from "../../services/artist";
import Albums from "../albums/Albums";
import TopTracks from "./TopTracks";

const initialArtist: IArtist = {
  id: "",
  name: "",
  link: "",
  share: "",
  picture: "",
  picture_small: "",
  picture_medium: "",
  picture_big: "",
  picture_xl: "",
  nb_album: 0,
  nb_fan: 0,
  radio: false,
  tracklist: "",
  type: "",
};

const Artist = ({ artistId }: { artistId: string }) => {
  const [artist, setArtist] = useState(initialArtist);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getArtist({ artistId })
      .then((a) => setArtist(a))
      .finally(() => setIsLoading(false));
  }, [artistId]);

  return (
    <>
      <div>
        {isLoading ? (
          <div>Loading Artist...</div>
        ) : (
          <div>
            <div>
              <Link to="/">GO Back</Link>
            </div>
            <img src={artist.picture_small} alt="artist" />
            <div>{artist.name}</div>
            <div>{artist.nb_fan} fans</div>
          </div>
        )}
      </div>
      <TopTracks artistId={artistId} />
      <Albums artistId={artistId} />
    </>
  );
};

export default Artist;
