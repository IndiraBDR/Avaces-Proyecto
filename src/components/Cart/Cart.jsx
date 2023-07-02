
import { useContext } from "react";
import { CartContex } from "../../contex/CartContex";
import Item from "../Item/Item";



const Cart = () => {

    const { addProduct, listaDelCarrito,cantidad} = useContext(CartContex)


    /* 
          {lista.map((productomapeado) => (
         
         <Item producto={productomapeado} key={productomapeado.id}/>

      
          
        ))}
    */

        console.log(cantidad);

        const precioTotal = listaDelCarrito.reduce((accum,producto)=> accum + (producto.precio*producto.cantidad), 0)


    return (


        <>
            <p>CARRITO </p>


            {listaDelCarrito.map((productomapeado) => (
         
         <Item producto={productomapeado} key={productomapeado.id}/>

      
          
        ))}

      <div>{precioTotal}</div>

        </>
    )

}

export { Cart }