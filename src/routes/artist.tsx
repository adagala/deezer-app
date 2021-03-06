import { useParams } from "react-router-dom";
import Artist from "../components/artist/Artist";

function ArtistDetails() {
  let params = useParams();
  const artistId = params.artistId as string;

  return (
    <main className="my-4">
      <Artist artistId={artistId} />
    </main>
  );
}

export default ArtistDetails;
