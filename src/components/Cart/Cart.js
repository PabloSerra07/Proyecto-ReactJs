import { useContext, useState } from "react";
import { Button, Table, Container } from "react-bootstrap";
import CartContext from "../../contexts/Cartcontext";
import { Link } from "react-router-dom"; 
import { createOrder } from "../../utils/orders";
import { BsTrash2Fill}  from "react-icons/bs";
import "./Cart.css" 
import OrderModal from "../OrderModal/OrderModal";


const buyerMock = {
    name: 'Pablo Serra',
    phone: '0358-155623687',
    email: 'pablojaviej@mail.com'
}

const Cart = () => {
    const { cart, total, removeItem, clear } = useContext(CartContext);
    const [user, setUser] = useState(buyerMock);
    const [showModal, setShowModal] = useState(false);
    const [orderId, setOrderId] = useState();

    const handleRemove = (itemId) => {
    removeItem(itemId);
}

    const handleOpen = () => setShowModal(true);

    const handleClose = () => setShowModal(false);

    const handleBuy = async () => {
    const newOrder = {
        buyer: buyerMock,
        items: cart,
        total
    };
    
    const newOrderId = await createOrder(newOrder);
    setOrderId(newOrderId);
    clear();
}

const showTable = cart.length > 0    
    
return (
    <Container className='cartContainer'>
    <h1>Shopping cart</h1>
    {showTable && (
        <>
        <Table striped bordered hover variant="dark">
            <thead>
            <tr>
                <th>Title</th>
                <th>Price</th>
                <th>Amount</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
                {cart.map((item) => (
                <tr key={item.id}>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td>{item.quantity}</td>
                    <td><BsTrash2Fill onClick={() => handleRemove(item.id)}/></td>
                </tr>
                ))}
            </tbody>
        </Table>
        <h3>Total: $ {total}</h3>
        <Button variant="dark" onClick={handleOpen}>Checkout</Button>
        </>
    )}
    {!showTable && (
        <>
        <h2>Empty shopping cart</h2>
        <Link to='/'>
            <Button variant="dark">See products</Button>
        </Link>
        </>
    )}
    <OrderModal
        showModal={showModal}
        onClose={handleClose}
        onBuy={handleBuy}
        orderId={orderId}
    />
    </Container>
    );
}

export default Cart;