import { plantList } from "../datas/plantList"
import '../styles/ShoppingList.css'
import CareScale from "./CareScale"
import PlantItem from "./plantItem"
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
  {
    plantList.map(({id, cover, name, water,light }) => (
  <PlantItem
    id={id}
    cover={cover}
    name={name}
    water={water}
    light={light}
  />
                        
            ))}
           
        </ul>
        
        </div>
     
    )
}

export default ShoppingList