import { useState } from "react";
import './App.css';


function App() {
  const[numeroUno, setNumeroUno] = useState(0);
  const[numeroDos, setNumeroDos] = useState(0);
  const[resultado, setResultado] = useState(0);
  
  const handleChangeUno = (event) => {
    setNumeroUno(event.target.value);
  }

  const handleChangeDos = (event) => {
    setNumeroDos(event.target.value);
  }

  const handleSumar = (event) => {
    setResultado(parseFloat(numeroUno) + parseFloat(numeroDos));
  }
  const handleRestar= (event) => {
    setResultado(parseFloat(numeroUno) - parseFloat(numeroDos));
  }
  const handleMultiplicar = (event) => {
    setResultado(parseFloat(numeroUno) * parseFloat(numeroDos));
  }
  const handleDividir = (event) => {
    setResultado(parseFloat(numeroUno) / parseFloat(numeroDos));
  }

  return (
      <>
      <h1>Calculadora</h1>
      <input type="text" placeholders="Numero 1" value={numeroUno} onChange={handleChangeUno}/> 
      <input type="text" placeholders="Numero 2" value={numeroDos} onChange={handleChangeDos}/>
      <hr/>
      <button onClick={handleSumar}>+</button>
      <button onClick={handleRestar}>-</button>
      <button onClick={handleMultiplicar}>*</button>
      <button onClick={handleDividir}>/</button> 
      <hr/>
      <p>Resultado: { resultado }</p>
      
      </>
      

    )
}

export default App;
