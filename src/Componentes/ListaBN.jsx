import CartasBN from "./CartasBN";
import { useContext } from "react";
import { BlocContext } from "../Contenido/BlocNCont";
import "../CSS/ListaBN.css"

function ListaBN() {
  const {notes} = useContext(BlocContext);

  if (notes.length === 0) {
    return <h2 className="note_empty">Vacío</h2>;
  }
  
  return (
    
    <section className="note_section">
      {notes.map((note) => (
        <CartasBN key={note.id} note={note}/>
      ))}
    </section>
  );
}

export default ListaBN;