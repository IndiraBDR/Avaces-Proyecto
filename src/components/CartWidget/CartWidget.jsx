
import './CartWidget.css'
import { CartContex } from "../../contex/CartContex";
import { useContext } from 'react';
import { Link } from "react-router-dom";

const CartWidget = () => {

    const { listaDelCarrito, productosTotal } = useContext(CartContex)

    return (
        <>
            <div className='carritoIcon' >
                <p className='numero'>
                    {productosTotal() === 0 ? " " : productosTotal()}
                </p>
                <Link to="/cart"> <ion-icon name="cart-outline"></ion-icon></Link>
            </div>

        </>
    )
}

export default CartWidget