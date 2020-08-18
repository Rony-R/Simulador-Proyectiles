import React, { Fragment, useState, useEffect } from "react";
import Formulario from "./components/Formulario";

function App() {
  return (
    <Fragment>
      <h1>Simulador de Proyectiles</h1>
      <div className="cont">
        <div className="row">
          <div className="two columns">
            <h2></h2>
          </div>

          <div className="eight columns">
            <Formulario />
          </div>
          <div className="two columns">
            <h2></h2>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
