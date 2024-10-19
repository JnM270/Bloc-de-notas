// Bloc de notas. Juan Bauza

import React, { useState } from 'react';

const BlocNt = () => {
    const [notas, setNotas] = useState([]);
    const [nuevaNota, setNotaNueva] = useState('');

    const agregarNota = () => {       //Agregar notas
        if (nuevaNota) {
            setNotas([...notas, nuevaNota]);
            setNotaNueva('');
        }
    };

    const editNota = (index) => {            // Editar notas
        const notaEdit = prompt('Edita la nota:', notas[index]); 
        if (notaEdit !== null) {
            const nuevasNotas = [...notas];
            nuevasNotas[index] = notaEdit;
            setNotas(nuevasNotas);
        }
    };

    const borraNota = (index) => {  // Eliminación de notas
        const nuevasNotas = notas.filter((nota, i) => i !== index);
        setNotas(nuevasNotas);
    };

    return (
        <div>
            <h1>Bloc de Notas</h1>
            <input
                type="text"
                value={nuevaNota}
                onChange={(e) => setNotaNueva(e.target.value)}
                placeholder="Escribe una nota"
            />
            <button onClick={agregarNota}>Agregar Nota</button>
            <ul>
                {notas.map((nota, index) => (
                    <li key={index}>
                        {nota}
                        <button onClick={() => editNota(index)}>Editar nota</button>
                        <button onClick={() => borraNota(index)}>Borrar nota</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BlocNt;

