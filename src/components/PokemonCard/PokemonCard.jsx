const PokemonCard = ({ pokemonData }) => {
  const { name, url } = pokemonData;

  // Extraer el ID del Pokémon desde la URL de la API
  const id = url.split("/").filter(Boolean).pop();

  // URL de la imagen oficial del Pokémon
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <div className="card">
      <h3>{name}</h3>
      <img src={imageUrl} alt={name} />
    </div>
  );
};

export { PokemonCard };
