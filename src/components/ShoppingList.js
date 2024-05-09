import { plantList } from "../datas/plantList"
import '../styles/ShoppingList.css'
function ShoppingList() {

    const categories = plantList.reduce(
        (acc,plant) => acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
    )

    return (
        <ul>
            {plantList.map((x, index) => (
                <li key={`${x}-${index}`}>{x}</li>
            ))}
        </ul>
    )
}

export default ShoppingList