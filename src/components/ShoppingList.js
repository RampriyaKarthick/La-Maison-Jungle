import { plantList } from "../datas/plantList"
import '../styles/ShoppingList.css'
import CareScale from "./CareScale"
function ShoppingList() {

    const categories = plantList.reduce(
        (acc,plant) => acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
    )

    return (
        <div>
   <ul>
           {categories.map((x)=>(
            <li key={x}>{x}</li>
           ))}
        </ul>
        <ul className="plant-list">
            {plantList.map((x) =>(
<li key={x.id} className='plant-item'>{x.name}
{x.isSpecialOffer && <div className='sales'>Soldes</div>}
<CareScale careType='water' scaleValue={x.water} />
<CareScale careType='light' scaleValue={x.light} />
                        </li>
            ))}
        </ul>
        </div>
     
    )
}

export default ShoppingList