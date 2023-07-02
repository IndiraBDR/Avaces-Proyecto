
import './CartWidget.css'
import { CartContex} from "../../contex/CartContex";
import { useContext } from 'react';

import { Link } from "react-router-dom";

const CartWidget = () => {

    const {listaDelCarrito} = useContext(CartContex)
    return (
        <>

       
            <div className='carritoIcon' >
                <p className='numero'>
                    {listaDelCarrito.length}


                </p>

                <Link to="/cart"> <ion-icon  name="cart-outline"></ion-icon></Link>
            </div>

        </>
    )
}


export default CartWidget