import { useState } from "react";
import PropTypes from 'prop-types';


export const  App= ({number})=> {
  const [counter, setcounter] = useState(number);
  
  const handleIcrease =()=>{
    setcounter(counter +1)
  }

  const handleDecrease =()=>{
    if(counter >0){
      setcounter(counter -1)
    }
  }

  const hadleReset =()=>{
    setcounter(number)
  }


  return (
  <div>
    <h1>{counter}</h1>
    <div>
      <button onClick={()=>handleIcrease()}>+</button>
    </div>
    <div>
      <button onClick={() => handleDecrease()}> -</button>
    </div>
    <div>
      <button onClick={() => hadleReset()}> Reset</button>
    </div>
  </div>
  );
}

App.protoTypes = {
  number : PropTypes.number.isRequired , //para que el prop sea string y obligatorio
  
};
App.defaultProps = {
  number : 0
}