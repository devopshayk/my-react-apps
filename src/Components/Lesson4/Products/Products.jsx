import React, { useState, useEffect } from 'react';
import './Products.css'

const Products = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((data) => data.json())
      .then((products) => setProductData(products.products));
  }, []);

  const removeItem = (index) => {
    const updatedItems = [...productData];
    updatedItems.splice(index, 1);
    setProductData(updatedItems);
  };

  return (
    <div className="App">
      {productData.map((product, index) => {
        return (
          <div key={index} className='productCard'>
            <h1>{product.name}</h1>
            <p>Price: ${product.price}</p>
            <img src={product.thumbnail} alt="Product" />
            <button onClick={() => removeItem(index)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
