
import { useContext } from "react";
import { CartContex } from "../../contex/CartContex";
import Item from "../Item/Item";
import ItemCart from "../ItemCart/ItemCart";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";



const Cart = () => {

    const { addProduct, listaDelCarrito,cantidad,limpiarListadoDelCarrito ,precioTotal} = useContext(CartContex);



    /* 
          {lista.map((productomapeado) => (
         
         <Item producto={productomapeado} key={productomapeado.id}/>

      
          
        ))}
    */

      

      //  const precioTotal = listaDelCarrito.reduce((accum,producto)=> accum + (producto.precio*producto.cantidad), 0)


        if(listaDelCarrito.length === 0){

            return(

                <>
                <p>El carrito esta vacio</p>

                <Link to='/'>Volver a comprar</Link>
                </>
            )

        };


    return (


        <>
            <p>CARRITO </p>


            {listaDelCarrito.map((productomapeado) => (
         
         <ItemCart producto={productomapeado} key={productomapeado.id}/>

        
          
        ))}

      <div>{precioTotal()}</div>

      <button onClick={limpiarListadoDelCarrito }>limpiar carrito</button>

      <Link to={"/ordenindira"}>ir al formulario</Link>

        </>
    )

}

export { Cart }