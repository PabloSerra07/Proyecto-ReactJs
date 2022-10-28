
import { useState , useContext } from "react"; 
import ItemCount from "../Counter/ItemCount";
import Item from "../ItemList/Item"
import "./itemDetail.css"
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartContext from "../../contexts/Cartcontext";


const ItemDetail = ({ product }) => {
    const { addItem } = useContext(CartContext);
    const [ counter , setCount ] = useState(0);
    const [showItemCount, setShowItemCount] = useState(true);
    
    
    
    
    const handleAdd = (value) =>{
        setCount(value);
        setShowItemCount(false);
        addItem(product, value);
    }
    
    return (
    <div className="itemDetail">
        <Item product={product} />
        {showItemCount && (
            <ItemCount initial={1} Stock={10} onAdd={handleAdd}/>
        )}
        {!showItemCount && (
        <Link to='/cart'>
            <Button variant="dark">
            Go Cart
            </Button>
        </Link>
    )}
    </div>
    );
}

export default ItemDetail;

