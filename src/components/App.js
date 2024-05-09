import React from 'react';
import '../App.css';
import Banner from '../components/Banner'
import Cart from '../components/Cart'
import ShoppingList from './ShoppingList';

function App() {
  return (
  <React.Fragment>
    <Banner/>
  <Cart/>
  <ShoppingList/>
  </React.Fragment>

   
  
  );
}

export default App;
