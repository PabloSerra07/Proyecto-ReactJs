import './ItemListContainer.css';
import Container from 'react-bootstrap/Container';
import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { getAllProducts, getProductsByCategory } from '../../utils/products';

const ItemListContainer = ({ greeting }) => {
const { categoryId } = useParams();
const [products, setProducts] = useState([]);

    useEffect(() => {
    if (categoryId) {
        getProductsByCategory(categoryId)
        .then((data) => setProducts(data))
        } else {
        getAllProducts()
        .then((data) => setProducts(data))
        }
    }, [categoryId])

    return (
    <Container >
        <h1 className='cntClass'>Games Products</h1 >
        <h3 className="greeting">{greeting}</h3>
        <ItemList products={products} />
    </Container>
    );
}

export default ItemListContainer;
