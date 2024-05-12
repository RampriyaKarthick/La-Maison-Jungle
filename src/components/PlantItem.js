import CareScale from "./CareScale"

function PlantItem({ id, cover, name, water, light }){
	function handleClick(name) {
		
    alert(`Vous voulez acheter 1 ${name} ? Très bon choix 🌱✨`)

	}
    return (
		<li key={id} className='plant-item' onClick={()=>handleClick(name)}>
			<img className='plant-item-cover' src={cover} alt={`${name} cover`} />
			{name}
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>
	)
}
export default PlantItem