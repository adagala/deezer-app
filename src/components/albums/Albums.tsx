import { useEffect, useState } from "react";
import { IAlbum } from "../../models/album";
import Album from "./Album";

const initialAlbums: IAlbum[] = [];

const Albums = ({ artistId }: { artistId: string }) => {
  const [albums, setAlbums] = useState(initialAlbums);
  const [isLoading, setIsLoading] = useState(false);
  const hasAlbums = albums.length > 0;

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setAlbums([
        {
          id: "294609352",
          title: "Homework",
          link: "https://www.deezer.com/album/294609352",
          cover: "https://api.deezer.com/album/294609352/image",
          cover_small:
            "https://e-cdns-images.dzcdn.net/images/cover/117dcf85bdf0851347403796521d1e9d/56x56-000000-80-0-0.jpg",
          cover_medium:
            "https://e-cdns-images.dzcdn.net/images/cover/117dcf85bdf0851347403796521d1e9d/250x250-000000-80-0-0.jpg",
          cover_big:
            "https://e-cdns-images.dzcdn.net/images/cover/117dcf85bdf0851347403796521d1e9d/500x500-000000-80-0-0.jpg",
          cover_xl:
            "https://e-cdns-images.dzcdn.net/images/cover/117dcf85bdf0851347403796521d1e9d/1000x1000-000000-80-0-0.jpg",
          md5_image: "117dcf85bdf0851347403796521d1e9d",
          genre_id: 113,
          fans: 7118,
          release_date: "1997-01-20",
          record_type: "album",
          tracklist: "https://api.deezer.com/album/294609352/tracks",
          explicit_lyrics: false,
          type: "album",
        },
      ]);
      setIsLoading(false);
    }, 1000);
  }, [artistId]);

  return (
    <div>
      Albums
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <div>
          {hasAlbums ? (
            <div>
              {albums.map((album) => (
                <Album key={album.id} album={album} />
              ))}
            </div>
          ) : (
            <div>No Albums</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Albums;
