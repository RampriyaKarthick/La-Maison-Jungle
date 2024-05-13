import '../styles/Cart.css'
import { useState } from 'react';

function Cart({ cart, updateCart }){
    // const monsteraPrice = 8;
    // const ivyPrice= 10
    // const flowerPrice = 15
    
    const [isOpen, setIsOpen] = useState(false)
    const total = cart.reduce(
        (acc,plantx) => acc+plantx.amount * plantx.price,
        0
    )


   return isOpen ? (
    <div className='lmj-cart'>
    <div>
    <button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Fermer
			</button>

            <button
				className='lmj-empty-cart'
				onClick={() => updateCart([])}
			>
				EmptyCart
			</button>
    </div>
   
        <h2>Panier</h2>
        {cart.map(({name,price,amount}, index) =>(
            <div key={`${name}-${index}`}>
                {name} {price}x{amount}
            </div>
        ))}
        {/* <div>
        Monstera: {monsteraPrice}€
        <button onClick={() => updateCart(cart+1)}>
            Ajouter
        </button>
        </div> */}
        {/* <ul>
            <li></li>
            <li>Lierre: {ivyPrice}</li>
            <li>Fleurs: {flowerPrice}</li>
        </ul> */}


       <h3> Total:{total}€</h3> 

    </div>
   ) : (
    <div className='lmj-cart-closed'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				Ouvrir le Panier
			</button>
		</div>
)
}

export default Cart