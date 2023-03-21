import "./Mural.scss";
import { db } from "../Firebase/firebase.js";
import React, { useState, useRef  } from 'react'; 

export const Dejamensaje = ({ traerMensajes }) => {
  const [enviando, setEnviando] = useState(false);
  const inputRef = useRef(null);
  const [mensaje, setMensaje] = useState("");
  const MAX_MESSAGE_LENGTH = 140;
  const fecha = new Date();

  const handleChange = (event) => {
    const { value } = event.target;
    if (value.length <= MAX_MESSAGE_LENGTH) {
      setMensaje(value);
    }
  };
  
  const onSubmit = async (event) => {
    event.preventDefault();
    if (mensaje.length > MAX_MESSAGE_LENGTH) {
      alert(`El mensaje no puede tener más de ${MAX_MESSAGE_LENGTH} caracteres.`);
      return;
    }
    setEnviando(true);  
    try {
      await db.collection("messages").add({
        text: mensaje,
        createdAt: fecha,
      });
      traerMensajes();
      event.target.reset();
      setMensaje("");
      setEnviando(false);
    } catch (error) {
      console.error("Error writing document: ", error);
      setEnviando(false);
    }
  };
  
  return (
    <div>
      <form className="formulario" onSubmit={onSubmit}>
        <label htmlFor="mensaje" className="creepy">
          <span className="squiggly">D</span>
          <span className="squiggly">e</span>
          <span className="squiggly">j</span>
          <span className="squiggly">a</span>
          <span className="squiggly">&nbsp;</span>
          <span className="squiggly">m</span>
          <span className="squiggly">e</span>
          <span className="squiggly">n</span>
          <span className="squiggly">s</span>
          <span className="squiggly">a</span>
          <span className="squiggly">j</span>
          <span className="squiggly">e</span>
        </label>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{ height: '10px', width:'5px' }}>
          <defs>
            <filter id="squiggly-0">
              <feTurbulence baseFrequency="0.02" numOctaves="3" result="noise" seed="0"/>
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" />
            </filter>
            <filter id="squiggly-1">
              <feTurbulence baseFrequency="0.02" numOctaves="3" result="noise" seed="1"/>
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" />
            </filter>
            <filter id="squiggly-2">
              <feTurbulence baseFrequency="0.02" numOctaves="3" result="noise" seed="2"/>
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" />
            </filter>
            <filter id="squiggly-3">
              <feTurbulence baseFrequency="0.02" numOctaves="3" result="noise" seed="3"/>
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" />
            </filter>
          </defs> 
        </svg>
        <div>
          <input type="text" id="mensaje" name="mensaje" required maxLength={MAX_MESSAGE_LENGTH} value={mensaje} onChange={handleChange} />
          <button type="submit" disabled={!mensaje || mensaje.length > MAX_MESSAGE_LENGTH || enviando}>{enviando ? "mm..." : "Enviar"}</button>
        </div>
      </form>
    </div>  
  );
};