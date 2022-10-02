import { FaOpencart } from 'react-icons/fa';
import './CartWidget.css';
import { Link } from 'react-router-dom';

const CartWidget = ()=>{
    return ( 
      //////agregar--img/////  
        <Link to="/cart">
            <FaOpencart/>
            
        </Link>
    )
}
export default CartWidget;