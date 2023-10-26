import React, { useState } from 'react';
import User from './Components/Lesson4/User/User.jsx'; 
import Products from './Components/Lesson4/Products/Products.jsx';


function App() {
  const [userSelected, setUserSelected] = useState(true); 
  const [productsSelected, setProductsSelected] = useState(false); 

  const handleUserClick = () => {
    setUserSelected(true);
    setProductsSelected(false);
  };

  const handleProductsClick = () => {
    setUserSelected(false);
    setProductsSelected(true);
  };

  return (
    <div className="App">
      <div>
        <button onClick={handleUserClick}>User</button>
        <button onClick={handleProductsClick}>Products</button>
      </div>
      {userSelected && <User />} 
      {productsSelected && <Products />} 
    </div>
  );
}

export default App;