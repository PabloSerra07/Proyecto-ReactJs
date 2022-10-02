import { useState } from 'react';


const MapComponent = () => {
  const [products, setProducts] = useState([])

  setTimeout(() => {
    setProducts([
      {id: 0,name: "Guego1",description: "aventura",año: 1987,stock:"number",Precio: "$"},
      {id: 1,name: "Guego1",description: "aventura",año: 1987,stock:"number",Precio: "$"},
      {id: 2,name: "Guego1",description: "aventura",año: 1987,stock:"number",Precio: "$"},
      {id: 3,name: "Guego1",description: "aventura",año: 1987,stock:"number",Precio: "$"}
    ])
  }, 5000)

  return (
    <>
      <h1>Este es mi componente</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>
              {product.name}
            </h3>
          </li>
        ))}
      </ul>
    </>
  )
};

export default MapComponent;

