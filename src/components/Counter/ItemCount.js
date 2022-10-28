import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import './ItemCount.css';
import { Link } from "react-router-dom";

const ItemCount = ({ initial, stock, onAdd }) => {
    const [count, setCount] = useState(parseInt(initial));

    const handleSubtract = () => {
        setCount(count - 1)
    }

    const handleAdd = () => {
        setCount(count + 1)
    }

    const handleClick =() => onAdd(count);


    useEffect(() => {
        setCount(parseInt(initial));
    },[initial])
    
    return (
        <div className="countContainer">
            <div className='itemCount'>
                <Button variant="dark" disabled={count <= 1} onClick={handleSubtract}>-</Button>
                <h5>{count}</h5>
                <Button variant="dark" disabled={count >= stock} onClick={handleAdd}>+</Button>
            </div>
            <div>
                <Button  variant="dark" disabled={stock <= 0} onClick={handleClick}>
                Add to cart
                </Button>
            </div>
        </div>
        )
    }

export default ItemCount;