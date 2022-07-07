import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getFans } from "../../@configs/formatter";
import { IAlbum } from "../../models/album";
import { IArtist } from "../../models/artist";
import { ITrack } from "../../models/track";
import { getArtistInformation } from "../../services/artist";
import Albums from "../albums/Albums";
import Header from "../layout/Header";
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
const initialTracks: ITrack[] = [];
const initialAlbums: IAlbum[] = [];

const Artist = ({ artistId }: { artistId: string }) => {
  const [artist, setArtist] = useState(initialArtist);
  const [albums, setAlbums] = useState(initialAlbums);
  const [topTracks, setTopTracks] = useState(initialTracks);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getArtistInformation({ artistId })
      .then((a) => {
        setArtist(a.artist);
        setAlbums(a.albums.data);
        setTopTracks(a.topTracks.data);
      })
      .finally(() => setIsLoading(false));
  }, [artistId]);

  return (
    <>
      <Header />
      <div className="">
        <Link
          to="/"
          className="font-bold p-2 text-sm text-indigo-600 rounded-sm dark:text-white hover:underline hover:underline-offset-1"
        >
          Go Back
        </Link>
      </div>
      <div className="w-full md:flex md:gap-3">
        <div className="my-2 md:w-2/3 bg-gray-300 dark:bg-gray-500 h-40 md:h-80 flex items-center">
          <div className="w-full">
            {isLoading ? (
              <div className="p-4 flex items-center justify-between rounded-sm">
                <div>
                  <div className="text-xl md:text-3xl font-bold">
                    <div className="animate-pulse h-5 md:h-8 mt-2 w-32 bg-slate-200 dark:bg-slate-700 rounded"></div>
                  </div>
                  <div className="md:text-xl font-semibold text-gray-400 dark:text-gray-300">
                    <div className="animate-pulse h-5 md:h-7 mt-2 w-16 bg-slate-200 dark:bg-slate-700 rounded"></div>
                  </div>
                </div>
                <div>
                  <div className="animate-pulse h-20 w-20 md:h-36 md:w-36 bg-slate-200 dark:bg-slate-700"></div>
                </div>
              </div>
            ) : (
              <div className="p-4 flex items-center justify-between rounded-sm">
                <div>
                  <div className="text-xl md:text-3xl font-bold">
                    {artist.name}
                  </div>
                  <div className="md:text-xl font-semibold text-gray-400 dark:text-gray-300">
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
          <TopTracks isLoading={isLoading} topTracks={topTracks} />
        </div>
      </div>
      <Albums isLoading={isLoading} albums={albums} />
    </>
  );
};

export default Artist;
