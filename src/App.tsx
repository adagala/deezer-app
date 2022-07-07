import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import { TracksContext } from "./contexts/TracksContext";
import { ITrack } from "./models/track";
import ArtistDetails from "./routes/artist";
import { getSearchResults } from "./services/tracks";

const initialTracks: ITrack[] = [];
const App = () => {
  const [tracks, setTracks] = useState(initialTracks);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const onSearchTracks = async () => {
    try {
      setIsLoading(true);
      const tracks = await getSearchResults({ query });
      setTracks(tracks.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const onQueryChange = (e: any) => {
    setQuery(e.target.value);
  };

  return (
    <TracksContext.Provider value={tracks}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                onQueryChange={onQueryChange}
                onSearchTracks={onSearchTracks}
                query={query}
                tracks={tracks}
                isLoading={isLoading}
              />
            }
          />
          <Route path=":artistId" element={<ArtistDetails />} />
        </Routes>
      </BrowserRouter>
    </TracksContext.Provider>
  );
};

export default App;
