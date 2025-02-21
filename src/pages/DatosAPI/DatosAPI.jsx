import { useEffect, useState } from "react";
import { Layout } from "../../components/Layout/Layout.jsx";
import "./DatosAPI.css";

const DatosAPI = () => {
  const [pokemonData, setpokemonData] = useState(
    "https://pokeapi.co/api/v2/pokemon/"
  );

  const handleFetch = async () => {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
      const data = await response.json();
      setpokemonData(data.message);
    } catch (error) {
      console.error("Error con el Fetch de Pokemon");
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <Layout>
      <h1 className="card">Pokemon</h1>
      <div>
        <div>
          <PokemonCard />
        </div>
      </div>
    </Layout>
  );
};

export { DatosAPI };
