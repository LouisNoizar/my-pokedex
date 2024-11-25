function PokemonCard({ pokemon }) {
  return (
    <figure>
      <h1>test</h1>
      {pokemon.imgSrc != null ? (
        <img src={pokemon.imgSrc} alt={pokemon.name} />
      ) : (
        <p>???</p>
      )}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}
export default PokemonCard;
