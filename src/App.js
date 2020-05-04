import React, {useState} from 'react';
import './App.css';


function App() {
    const [count, setCount] = useState(0)

  return (
    <div className="container">
      <input
          className="mt-4"
          id="inputNumber"
          type="number"
          value= {5 + count}
          />
          
      <p className="mt-4">Ajout +1 : </p>
      <input className="btn btn-outline-info" onClick= {()=>{setCount(count +1)}} type="submit"/>
       

      <p className="mt-4">Soustrait -1 : {useState} </p>
      <input className="btn btn-outline-danger" onClick= {()=>{setCount (count -1)}} type="submit"/>
    </div>
  )
}

export default App

