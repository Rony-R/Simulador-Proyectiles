import React, { Fragment, useState, useMemo } from "react";
import {
  simulate,
  generateLabels,
  impimirDataset,
  generarEtiquetas,
} from "../Funciones/Grafica";
import { css } from "@emotion/core";
import MoonLoader from "react-spinners/MoonLoader";
import LineGraph from "./LineGraph";

const Formulario = () => {
  //state para guardar la informacion inicial:
  const [info, setInfo] = useState({
    v1: "",
    ang1: "",
    v2: "",
    ang2: "",
  });

  //State para el error
  const [error, setError] = useState(false);

  //State para el spinner:
  const [loading, setLoading] = useState(false);

  const [bandera, setBandera] = useState(false);

  //Variables para guardar los datasets:
  let dataset1 = {};
  let dataset2 = {};

  //Variable para guardar las etiquetas:
  let labels = {};

  //States:
  const [d1, setD1] = useState([]);
  const [d2, setD2] = useState([]);
  const [l, setL] = useState({});

  //Funcion para cambiar el state segun se escribe en los inputs:
  const actualizarSate = (e) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
  };

  //States de prueba:

  const [t1, setT1] = useState("Recorrido del Proyectil 1");
  const [t2, setT2] = useState("Recorrido del Proyectil 2");

  //Funcion para limpiar el formulario:
  const clean = () => {
    setInfo({
      v1: "",
      ang1: "",
      v2: "",
      ang2: "",
    });

    dataset1 = {};
    dataset2 = {};

    setD1([]);
    setD2([]);
    setL({});

    setBandera(false);
  };

  //Destructuring de los elementos:
  const { v1, ang1, v2, ang2 } = info;

  //Submit los inputs:
  const submitInfo = (e) => {
    e.preventDefault();

    setLoading(true);

    //Validaciones
    if (v1 === "" || ang1 === "" || v2 === "" || ang2 === "") {
      //Colocar error igual a true
      setError(true);
      setLoading(false);
      return;
    }

    //Colocar error igual a false
    setError(false);

    //Mandando los datos a la funcion simulate:
    dataset1 = simulate(v1, ang1);
    dataset2 = simulate(v2, ang2);

    //Mandando los datasets:
    // labels = generateLabels(dataset1, dataset2);
    labels = generarEtiquetas(dataset1, dataset2);

    setD1(dataset1.data);
    setD2(dataset2.data);
    setL(labels);

    // console.log(dataset1.xlabels);
    // console.log(dataset1.ylabels);
    // console.log("**************************************");
    // console.log(dataset2.xlabels);
    // console.log(dataset2.ylabels);
    // console.log("**************************************");
    // console.log(labels);
    // console.log("**************************************");
    // console.log("**************************************");
    // console.log(generarEtiquetas(dataset1, dataset2));

    setBandera(true);

    setLoading(false);
  };

  return (
    <Fragment>
      <form onSubmit={submitInfo}>
        <label htmlFor="">Velocidad Proyectil 1</label>
        <input
          type="number"
          name="v1"
          className="u-full-width"
          placeholder="Velocidad en m/s2"
          onChange={actualizarSate}
          value={v1}
        />
        <label htmlFor="">Angulo Proyectil 1</label>
        <input
          type="number"
          name="ang1"
          className="u-full-width"
          placeholder="Angulo en °"
          onChange={actualizarSate}
          value={ang1}
        />

        <label htmlFor="">Velocidad Proyectil 2</label>
        <input
          type="number"
          name="v2"
          className="u-full-width"
          placeholder="Velocidad en m/s2"
          onChange={actualizarSate}
          value={v2}
        />
        <label htmlFor="">Angulo Proyectil 2</label>
        <input
          type="number"
          name="ang2"
          className="u-full-width"
          placeholder="Angulo en °"
          onChange={actualizarSate}
          value={ang2}
        />

        {error ? (
          <p className="alerta-error">Todos los campos son obligatorios!</p>
        ) : null}

        <button type="submit" className="u-full-width button-primary">
          Crear Grafica
        </button>
      </form>

      <button
        type="button"
        onClick={clean}
        className="u-full-width button-primary"
      >
        Limpiar Formulario
      </button>

      {loading ? <MoonLoader /> : null}

      {bandera ? <LineGraph t1={t1} t2={t2} d1={d1} d2={d2} l={l} /> : null}
    </Fragment>
  );
};

export default Formulario;
