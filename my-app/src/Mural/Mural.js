import "./Mural.scss";
import { db } from "../Firebase/firebase.js";
import React, { useState, useEffect } from 'react'; 
import { Dejamensaje } from "./Dejamensaje";

export const Mural = () => {
  const [mensajes, setMensajes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [enviando, setEnviando] = useState(false);

  const traerMensajes = async () => {
    const mensajesRef = await db.collection("messages").orderBy("createdAt").get();
    const mensajes = mensajesRef.docs.map((doc) => {
      const data = doc.data();
      if (/^https?:\/\//.test(data.text)) {
        return {
          id: doc.id,
          mensaje: <a href={data.text} target="_blank" rel="noopener noreferrer">{data.text}</a>,
          fecha: data.createdAt,
          link: true,
        };
      } else {
        return {
          id: doc.id,
          mensaje: data.text,
          fecha: data.createdAt,
          link: false,
        };
      }
    });
    setMensajes(mensajes);
    setLoading(false);
  };

  useEffect(() => {
    traerMensajes();
  }, []);

  if (loading) {
    return (
      <div className="loader">
        <div className="dot-elastic"></div>
      </div> 
    )
  }

  return (
    <div>
     <Dejamensaje traerMensajes={traerMensajes} />
      {mensajes.length === 0 ? (
        <div className="loader"> 
          <span role="img" className="cara" aria-label="happy face">&#129300;</span> 
        </div>
      ) : (
        <div className="contenedor">
          <div className="mural">
            {mensajes.map((msg) => (
              <div key={msg.id}>
                <p>{msg.mensaje}</p>
                <p id="time">{new Date(msg.fecha.seconds * 1000).toLocaleString()}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};