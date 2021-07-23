import { Item } from "../../model/Item";

interface Props {
    item: Item;
}

function menuItem({item}: Props) {


    return (
        <div className="ItemContainer">
            <ul>
                <li>Name: {item.name}</li>
                <li>Calories: {item.calories}</li>
                <li>Price: {item.price}</li>
                <li>Vegetarian: {item.vegetarian ? "Yes" : "No" }</li>
            </ul>
            <button>add to order</button>
        </div>
    )
}


export default menuItem;