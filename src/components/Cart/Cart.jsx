
import { useContext } from "react";
import { CartContex } from "./CartContex";
import Item from "../Item/Item";



const Cart = () => {

    const { addProduct, lista,cantidad} = useContext(CartContex)


    /* 
          {lista.map((productomapeado) => (
         
         <Item producto={productomapeado} key={productomapeado.id}/>

      
          
        ))}
    */

        console.log(cantidad);

        const precioTotal = lista.reduce((accum,producto)=> accum + (producto.precio*cantidad), 0)


    return (


        <>
            <p>CARRITO </p>


            {lista.map((productomapeado) => (
         
         <Item producto={productomapeado} key={productomapeado.id}/>

      
          
        ))}

      <div>{precioTotal}</div>

        </>
    )

}

export { Cart }