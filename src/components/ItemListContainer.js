import Container from 'react-bootstrap/Container';
const ItemListContainer = ({greeting})=>{
    return(
        <Container>
        <h1>Item Shop</h1>
        <h3>{greeting}</h3>
        </Container>
        
    )
}
export default ItemListContainer;