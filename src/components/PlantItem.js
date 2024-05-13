import CareScale from "./CareScale"
import '../styles/PlantItem.css'

function PlantItem({ id, cover, name, water, light, price}){
	function handleClick(name) {
		
    alert(`Vous voulez acheter 1 ${name} ? Très bon choix 🌱✨`)

	}
    return (
		<div>
	<li key={id} className='lmj-plant-item' onClick={()=>handleClick(name)}>
	     
			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
			{name}
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
				<span className='lmj-plant-item-price'>{price}€</span>
			</div>
		</li>
	
		</div>
	
	)
}
export default PlantItem