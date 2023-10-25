import React, { useState } from 'react';
import User from './Components/Lesson4/User/User.jsx'; 
import Products from './Components/Lesson4/Products/Products.jsx';


function App() {
  const [userSelected, setUserSelected] = useState(true); // Состояние для отслеживания выбора User
  const [productsSelected, setProductsSelected] = useState(false); // Состояние для отслеживания выбора Products

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
      {userSelected && <User />} {/* Отображение компонента User, если userSelected === true */}
      {productsSelected && <Products />} {/* Отображение компонента Products, если productsSelected === true */}
    </div>
  );
}

export default App;