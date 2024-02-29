import React from "react";
import { useNavigate } from "react-router-dom";

function AboutPage() {
  const navigate = useNavigate();

  const volverAtras = () => {
    navigate(-1);
  };

  return (
    <div>
      <button onClick={volverAtras} type="button" className="nes-btn is-warning">🔙</button>
      <div>
        <div className="nes-container is-dark with-title">
          <h2 className="title">GAMEHYPE</h2>
          <p>
            GAMEHYPE es un proyecto llevado a cabo por Pablo Sánchez y Francisco
            Estepa, estudiantes de webdevelopment en Ironhack. Es una App de
            videojuegos en la que podemos encontrar información de las
            principales plataformas, de las principales plataformas retro, y un
            apartado de venta de juegos. Para obtener la información que
            arrojamos en pantalla hemos usado una{" "}
            <a href="https://rawg.io/apidocs">API</a> externa y JSON_server
            local. Toda la App ha sido desarrollada con herramientas de React,
            JavaScript, CSS y las bibliotecas de estilos{" "}
            <a href="https://nostalgic-css.github.io/NES.css/#">Ness</a>,{" "}
            <a href="https://react-bootstrap.netlify.app/">Bootstrap</a> y{" "}
            <a href="https://www.davidhu.io/react-spinners/">
              REACT SPINNERS by David Hu
            </a>
          </p>
        </div>
      </div>

      <div className="nes-container is-dark with-title">
        <h2 className="title">Nuestros perfiles:</h2>
        <h3>Pablo </h3>
        <a
          className="nes-icon github is-large"
          href="https://github.com/PabloSanchezCamara"
        ></a>
        <a
          className="nes-icon linkedin is-large"
          href="https://www.linkedin.com/in/pablo-sanchez-camara-b143892b4/"
        ></a>

        <h3>Fran</h3>
        <a
          className="nes-icon github is-large"
          href="https://github.com/fraestgue"
        ></a>
        <a
          className="nes-icon linkedin is-large"
          href="https://www.linkedin.com/in/francisco-estepa-guerra-400417163/"
        ></a>
      </div>
    </div>
  );
}

export default AboutPage;
