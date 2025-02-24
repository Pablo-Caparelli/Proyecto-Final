import { useEffect, useState } from "react";
import { Layout } from "../../components/Layout/Layout.jsx";
import { PokemonCard } from "../../components/PokemonCard/PokemonCard.jsx";
import "./DatosAPI.css";

const DatosAPI = () => {
  const [pokemonData, setpokemonData] = useState([]);

  const handleFetch = async () => {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
      const data = await response.json();
      setpokemonData(data.results);
    } catch (error) {
      console.error("Error con el Fetch de Pokemon");
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <Layout>
      <h1 className="card">Pokemones Cards</h1>
      <div>
        {pokemonData.map((pokemon, index) => (
          <PokemonCard key={index} pokemonData={pokemon} />
        ))}

        {/* <div>
          <PokemonCard />
        </div> */}
      </div>
    </Layout>
  );
};

export { DatosAPI };
