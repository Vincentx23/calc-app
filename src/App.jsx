//AREA DE IMPORTACION DE LIBRERIAS
import React from 'react'
import MathOperations from './components/MathOperations'
import Functions from './components/Funtions'
import Result from './components/Result'
import Numbers from './components/Numbers'

import './App.css'

//import ReactDOM from 'react-dom
//GENERACION DE COMPONENTE


const App=()=>{

   
//Lo que ejecuta la funcion 
return (
  <main className="react-calculator">
    <Result />
    <Numbers onClickNumber={number =>{ console.log("Click numero:", number)}}/>
    <Functions
    onContentClear={(clearx) => console.log("Clear:", clearx)}
    onDelete={(deletexc) => console.log("Borrar:", deletexc)}
    />

    <MathOperations
      onClickOperation={(operation) => console.log("Operation:", operation)}
      onClickEqual={(equal) => console.log("Igual:", equal)}
    />
  </main>
);

}


//EXPORTACION 
export default App