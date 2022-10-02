import Counter from "../Counter/Counter";
import Item from "../ItemList/Item"

const ItemDetail = ({ product }) => {
    return (
    <>
        <Item product={product} />
        <Counter />
    </>
    );
}

export default ItemDetail;

