import { useState } from "react";
import Card from "./components/Card";

function App() {
  //estados
  const [cancionFavorita, setCancionFavorita] = useState({
    artista: "",
    nombre: "",
  });
  const [mensajeError, setMensajeError] = useState("");
  const [card, setCard] = useState(null);

  //handle events
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      cancionFavorita.artista.length < 3 ||
      cancionFavorita.nombre.length < 6
    ) {
      setMensajeError("Por favor chequea que la información sea correcta");
      setCard(null);
      return;
    }
    e.target.reset();
    setCancionFavorita({ artista: "", nombre: "" });
    setMensajeError("");
    setCard(
      <>
        <Card cancionFavorita={cancionFavorita} />
      </>
    );
  };
  const handleOnBlur = (e) => {
    const inputId = parseInt(e.target.id);
    const inputValue = e.target.value;

    inputId === 1
      ? setCancionFavorita({ ...cancionFavorita, artista: inputValue })
      : setCancionFavorita({ ...cancionFavorita, nombre: inputValue });
  };

  //return component
  return (
    <>
      <h1>Elige tu cancion favorita</h1>
      <form onSubmit={handleSubmit} className="form-favorite-song">
        <input
          id="1"
          onBlur={(e) => handleOnBlur(e)}
          type="text"
          placeholder="artista"
        />
        <input
          id="2"
          onBlur={(e) => handleOnBlur(e)}
          type="text"
          placeholder="nombre"
        />
        <button type="submit">enviar</button>
        {mensajeError && <p className="error">{mensajeError}</p>}
      </form>
      {card}
    </>
  );
}

export default App;
