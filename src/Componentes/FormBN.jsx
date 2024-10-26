import { useContext, useState } from "react";
import "../CSS/FormBN.css";
import { BlocContext } from "../Contenido/BlocNCont";

function FormBN() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { keyId, setKeyId, CreateNote } = useContext(BlocContext);

  const HandleSubmit = (e) => {
    e.preventDefault();
    
    CreateNote({

      id: setKeyId(keyId + 1),
      title,
      description,
    
    });
    
    setTitle("");
    setDescription("");
  };

  return (
    
    <section>
      <h1 className="form_title">Bloc de notas</h1>
      <form className="form" onSubmit={HandleSubmit}>
        <input
          className="form_input"
          placeholder="Escribe el título"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          required
        />
        <textarea
          className="form_textarea"
          placeholder="Escribe algo"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          required
        />
        <button className="form_button">Añadir nota</button>
      </form>
    </section>
  );
}

export default FormBN;