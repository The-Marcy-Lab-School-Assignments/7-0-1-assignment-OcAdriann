import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import GifContainer from "./components/GifContainer";
import GifSearch from "./components/GifSearch";
import { handleFetch } from "./utils";
import API_KEY from "./config";

function App() {
  const [gifs, setGifs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchTrendingGifs = async () => {
    setLoading(true);
    const [response, error] = await handleFetch(
      `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=3`
    );
    if (!error) {
      setGifs(response.data);
    } else {
      console.error("Error fetching trending gifs:", error);
    }
    setLoading(false);
  };

  const fetchGifsBySearch = async (term) => {
    setLoading(true);
    const [response, error] = await handleFetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${term}&limit=3`
    );
    if (!error) {
      setGifs(response.data);
    } else {
      console.error("Error fetching gifs:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchTrendingGifs();
  }, []);

  return (
    <div>
      <NavBar color="black" title="Giphy Search" />
      <div className="ui container">
        <GifSearch onSearch={fetchGifsBySearch} setSearchTerm={setSearchTerm} />
        <br />
        {loading ? <p>Loading...</p> : <GifContainer gifs={gifs} />}
      </div>
    </div>
  );
}

export default App;
