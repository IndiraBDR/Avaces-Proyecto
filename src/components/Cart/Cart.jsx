
import { useContext } from "react";
import {CartContex} from "./CartContex";



const Cart = () =>{

    const {addProduct} = useContext(CartContex)


    return(

        <p>CARRITO</p>
    )

}

export{ Cart}