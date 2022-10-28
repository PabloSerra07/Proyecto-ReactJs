import { FaOpencart } from 'react-icons/fa';
import './CartWidget.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import CartContext from '../../contexts/Cartcontext';
import { Badge } from 'react-bootstrap';



const CartWidget = ()=>{
    const {totalQuantity} = useContext(CartContext)
    return ( 
      //////agregar--img/////  
        <>
        <Link to="/cart">
            <FaOpencart/>
            
        </Link>
        {totalQuantity > 0 && (
            <Badge pill bg="danger">{totalQuantity}</Badge>
            )}
            </>
    );
}
export default CartWidget;