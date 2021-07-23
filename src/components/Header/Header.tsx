import { OrderContext } from "../../context/OrderContext";
import { useContext } from "react";
import "./Header.css";


function Header() {

    const { order } = useContext(OrderContext)

    return (
        <header className="HeaderContainer">
            <h3>Little Cabin Dining</h3>
            <div>
                <p>Order Count: {order.length}</p>
            </div>
        </header>
    );

}

export default Header;