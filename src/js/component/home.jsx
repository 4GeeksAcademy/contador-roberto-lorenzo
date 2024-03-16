import React, { useState, useEffect } from 'react';
import Card from './Card';
import { CiClock1 } from "react-icons/ci";
/* import Card from './Card';  */

const SecondCounter = () => {
  /* Contador que aumenta de forma creciente */
  const [seconds, setSeconds] = useState(0);
  const [digits, setDigits] = useState([0, 0, 0, 0, 0, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const digitsArray = seconds.toString().padStart(6, '0').split('');
      setDigits(digitsArray);
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    // Clear the interval on component unmount to avoid memory leaks
    return () => clearInterval(interval);
  }, [seconds]);


  /*  Contador que va de  forma decreciente */
  const [backwardsSeconds, setBackwardsSeconds] = useState(100000);
  const [backwardsDigits, setBackwardsDigits] = useState([0, 0, 0, 0, 0, 0]);

  useEffect(() => {
    const Interval = setInterval(() => {
      const backwardsDigitsArray = backwardsSeconds.toString().padStart(6, '0').split('');
      setBackwardsDigits(backwardsDigitsArray);
      setBackwardsSeconds((prevBackwardsSeconds) => prevBackwardsSeconds - 1);
    }, 1000);

    return () => clearInterval(Interval);
  }, [backwardsSeconds])

  /* programar boton para que inicie y pause el contador */

  const [buttonSeconds, setButtonSeconds] = useState(0);
  const [buttonDigits, setButtonDigits] = useState([0, 0, 0, 0]);
  const [iniciar, setIniciar] = useState(false)

  useEffect(() => {
    let interval = 0
    if (iniciar) {
      interval = setInterval(() => {
      const buttonDigitsArray = buttonSeconds.toString().padStart(4, '0').split('');
      setButtonDigits(buttonDigitsArray);
      setButtonSeconds((prevButtonSeconds) => prevButtonSeconds + 1);
    }, 1000)
    } else {
      clearInterval(interval)
    }
    
    return () => clearInterval(interval)
  }, [iniciar, buttonSeconds])

  const pausa = () => {
    setIniciar(!iniciar)
  }


  return (
    <div className="container bg-secondary">
      <div className="row d-flex flex-row justify-content-around g-5">
        <div className="d-flex justify-content-between">
          <div className="d-flex card text-center align-items-center bg-secondary text-bg-secondary mb-2 cardStyle">
            <p><CiClock1 /></p>
          </div>
          {
            digits.map((item, index) => (
              <Card key={index} item={item} />
            ))
          }
        </div>
        <div className="d-flex justify-content-between">
          <div className="d-flex card text-center align-items-center bg-secondary text-bg-secondary mb-2 cardStyle">
            <p><CiClock1 /></p>
          </div>
          {
            backwardsDigits.map((item, index) => (
              <Card key={index} item={item} />
            ))
          }
        </div>
        {/*aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa  */}
        <div className="d-flex justify-content-between">
          <div className="d-flex card text-center align-items-center bg-secondary text-bg-secondary mb-2 cardStyle">
            <p><CiClock1 /></p>
          </div>
          {
              buttonDigits.map((item, index) => (
                <Card key={index} item={item} />
              ))
            }
            <button className={`btn btn-dark btn-outline-${iniciar ? "danger" : "success" }`} onClick={pausa}>{iniciar ? "pausa" : "iniciar"}</button>
        </div>
      </div>

    </div>
  );
};

export default SecondCounter;

/* mapeo tiene 2 argumentos, item e index  estilos: col d-flex, todos los elementos internos se organicen */