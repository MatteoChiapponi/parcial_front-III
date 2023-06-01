function Card({ cancionFavorita }) {
  const { artista, nombre } = cancionFavorita;
  return (
    <div className="container-favorite-song">
      <h3>tu cancion favorita es: </h3>
      <p>{`${nombre} del artista ${artista}`}</p>
    </div>
  );
}
export default Card;
