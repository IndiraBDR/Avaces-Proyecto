
import './CartWidget.css'
import { CartContex} from "../Cart/CartContex";
import { useContext } from 'react';

import { Link } from "react-router-dom";

const CartWidget = () => {

    const {lista} = useContext(CartContex)
    return (
        <>

       
            <div className='carritoIcon' >
                <p className='numero'>
                    {lista.length}


                </p>

                <Link to="/cart"> <ion-icon  name="cart-outline"></ion-icon></Link>
            </div>

        </>
    )
}


export default CartWidget