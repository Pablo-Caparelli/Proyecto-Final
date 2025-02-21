const PokemonCard = (props) => {
  const { name, url } = props;

  return (
    <div className="card">
      <h3>{name}</h3>
      <img src={url} alt="pokemon image" />
    </div>
  );
};

export default { PokemonCard };
