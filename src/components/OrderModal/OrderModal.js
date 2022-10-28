import { Alert, Button, Form, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import './OrderModal.css';

const OrderModal = ({ showModal, onClose, onBuy, orderId}) => {

    return (
    <Modal show={showModal} onHide={onClose}>
        <Modal.Header closeButton>
        <Modal.Title>Checkout</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Ingrese email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Ingrese nombre" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="text" placeholder="Ingrese telefono" />
        </Form.Group>
        </Modal.Body>
        <Modal.Footer>
        {!orderId && (
            <>
            <Button variant="secondary" onClick={onClose}>
                Cancel
            </Button>
            <Button variant="primary" onClick={onBuy}>
                To Buy
            </Button>
            </>
        )}
        {orderId && (
            <div className='footerOrderSuccess'>
            <Alert key='success' variant='success'>
                Order Number: {orderId}
            </Alert>
            <Link to='/'>
                <Button variant="success">
                Buy Again
                </Button>
            </Link>
            </div>
        )}
        </Modal.Footer>
    </Modal>
    );
}

export default OrderModal;