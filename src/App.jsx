import React from 'react';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <Header />
      <Products />
      <Cart />
    </Provider>

  );
}

export default App;
