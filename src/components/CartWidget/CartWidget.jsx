
import './CartWidget.css'
import { CartContex} from "../../contex/CartContex";
import { useContext } from 'react';

import { Link } from "react-router-dom";

const CartWidget = () => {

    const {listaDelCarrito,productosTotal} = useContext(CartContex)


    if(productosTotal()=== 0){

       return('') 
    }
    return (
        <>

       
            <div className='carritoIcon' >
                <p className='numero'>
              {productosTotal()}


                </p>

                <Link to="/cart"> <ion-icon  name="cart-outline"></ion-icon></Link>
            </div>

        </>
    )
}


export default CartWidget