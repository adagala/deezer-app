import { useEffect, useState } from "react";
import { IArtist } from "../../models/artist";
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
    setTimeout(() => {
      setArtist({
        id: "27",
        name: "Daft Punk",
        link: "https://www.deezer.com/artist/27",
        share:
          "https://www.deezer.com/artist/27?utm_source=deezer&utm_content=artist-27&utm_term=0_1656277112&utm_medium=web",
        picture: "https://api.deezer.com/artist/27/image",
        picture_small:
          "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/56x56-000000-80-0-0.jpg",
        picture_medium:
          "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/250x250-000000-80-0-0.jpg",
        picture_big:
          "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/500x500-000000-80-0-0.jpg",
        picture_xl:
          "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/1000x1000-000000-80-0-0.jpg",
        nb_album: 34,
        nb_fan: 4290569,
        radio: true,
        tracklist: "https://api.deezer.com/artist/27/top?limit=50",
        type: "artist",
      });
      setIsLoading(false);
    }, 1000);
  }, [artistId]);

  return (
    <>
      <div>
        Artist Details
        {isLoading ? (
          <div>Loading Artist...</div>
        ) : (
          <div>
            <img src={artist.picture_small} alt="artist" />
            <div>{artist.name}</div>
            <div>{artist.nb_fan}</div>
          </div>
        )}
      </div>
      <TopTracks artistId={artistId} />
      <Albums artistId={artistId} />
    </>
  );
};

export default Artist;
