import React from 'react';
import logo from '../assets/logo.png'
import Banner from '../components/Banner'
import Cart from '../components/Cart'
import ShoppingList from './ShoppingList';
import Footer from './Footer';
import '../styles/Layout.css'
import { useState , useEffect} from 'react';


function App() {
  const savedCart = localStorage.getItem('cart')
	const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])
  
 
  return (
  <React.Fragment>
  <Banner>
  <img src={logo} alt='La-maison-jungle' className='lmj-logo'/>
<h1 className='lmj-title'>La Maison Jungle</h1>
    </Banner>
    <div className='lmj-layout-inner'>
    <Cart cart={cart} updateCart={updateCart} />
                <ShoppingList cart={cart} updateCart={updateCart} />
			</div>
      
  <Footer/>

  </React.Fragment>

   
  
  );
}

export default App;
