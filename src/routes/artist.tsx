import { useParams } from "react-router-dom";

function ArtistDetails() {
  let { artistId } = useParams();
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Artist Information</h2>
      <h3>ID: {artistId}</h3>
    </main>
  );
}

export default ArtistDetails;
