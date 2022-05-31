import React, { useState, useEffect } from "react";
import PokemonList from "./PokemonList";
import Pagination from "./Pagination";
import axios from "axios";

function App() {
  // VARIABLE DECLARATIONS
  const [pokemon, setPokemon] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [nextPageUrl, setNextPageUrl] = useState([]);
  const [prevPageUrl, setPrevPageUrl] = useState([]);
  const [loading, setLoading] = useState(true);

  // FUNCTIONS
  useEffect(() => {
    setLoading(true);
    let cancel;
    axios
      .get(currentPageUrl, {
        cancelToken: axios.CancelToken((cancelItem) => (cancel = cancelItem)),
      })
      .then((res) => {
        setLoading(false); 
        setPrevPageUrl(res.data.previous);
        setNextPageUrl(res.data.next);
        setPokemon(res.data.results.map((output) => output.name));

        return () => cancel();
      });
  }, [currentPageUrl]);

  
  function goToPrevPage() {
    setCurrentPageUrl(prevPageUrl);
  }
  function goToNextPage() {
    setCurrentPageUrl(nextPageUrl);
  }

  if (loading) return "Loading...";

  return (
    <>
      <PokemonList pokemon={pokemon} />
      <Pagination 
      goToPrevPage={prevPageUrl ? goToPrevPage : null } 
      goToNextPage={nextPageUrl ? goToNextPage : null} 
      />
    </>
  );
}

export default App;
