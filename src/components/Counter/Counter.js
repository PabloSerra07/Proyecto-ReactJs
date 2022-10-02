import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import './Counter.css';


const Counter = () => {
    const[count, setCount] = useState(0);
    
    
    const handleClick = ()=>{
        setCount(count + 1)
    }
    const handleClick1 = ()=>{
        setCount(count - 1)
    }
    let stock = 10
    return (
        <div className="counter">
            <Button disabled={count <=0} onClick={handleClick1} variant="outline-dark">-</Button>
            <p>Counter {count}</p>
            <Button  disabled={count >= stock} onClick={handleClick} variant="outline-dark">+</Button>
            <Button variant="primary" size="lg" active>Agregar al Carrito</Button>{' '}
        </div> 
        
    );
}

export default Counter;