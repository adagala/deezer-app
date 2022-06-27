import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getFans } from "../../@configs/formatter";
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
      <div className="">
        <Link
          to="/"
          className="font-bold p-2 text-sm text-indigo-600 rounded-sm"
        >
          Go Back
        </Link>
      </div>
      <div className="w-full md:flex md:gap-3">
        <div className="my-2 md:w-2/3 bg-gray-300 h-40 md:h-80 flex items-center">
          <div className="w-full">
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
              <div className="p-4 flex items-center justify-between rounded-sm">
                <div>
                  <div className="text-xl md:text-3xl font-bold">
                    {artist.name}
                  </div>
                  <div className="md:text-xl font-semibold text-gray-400">
                    {getFans({ fans: artist.nb_fan })} fans
                  </div>
                </div>
                <div>
                  <img
                    className="md:hidden"
                    src={artist.picture_medium}
                    height={90}
                    width={90}
                    alt="artist"
                    loading="lazy"
                  />
                  <img
                    className="hidden md:block"
                    src={artist.picture_medium}
                    alt="artist"
                    height={150}
                    width={150}
                    loading="lazy"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="md:w-1/3 flex items-center">
          <TopTracks artistId={artistId} />
        </div>
      </div>
      <Albums artistId={artistId} />
    </>
  );
};

export default Artist;
