import React from 'react';
import logo from '../assets/logo.png'
import Banner from '../components/Banner'
// import Cart from '../components/Cart'
import ShoppingList from './ShoppingList';

function App() {
  return (
  <React.Fragment>
  <Banner>
  <img src={logo} alt='La-maison-jungle' className='lmj-logo'/>
<h1 className='lmj-title'>La Maison Jungle</h1>
    </Banner>
  {/* <Cart/> */}
  <ShoppingList/>
  </React.Fragment>

   
  
  );
}

export default App;
