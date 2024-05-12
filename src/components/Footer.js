import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
	const [inputValue, setInputValue] = useState('')
function handleInput(e){
	setInputValue(e.target.value)
}

function handleBlur(){
	if(!inputValue.includes('@')){
		alert("Sorry , Valid email address should contain @")
	}
}
	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
			
				<input placeholder='Enter your email address' value={inputValue} onChange={handleInput} onBlur={handleBlur}/>
			
		</footer>
	)
}

export default Footer