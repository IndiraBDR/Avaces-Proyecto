
import { useContext } from "react";
import { CartContex } from "../../contex/CartContex";
import Item from "../Item/Item";
import ItemCart from "../ItemCart/ItemCart";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import './Cart.css'




const Cart = () => {



    const { addProduct, listaDelCarrito, cantidad, limpiarListadoDelCarrito, precioTotal } = useContext(CartContex);



    



   


    if (listaDelCarrito.length === 0) {

        return (

            <>

            <div className="carrito-vacio">
                <h3>El carrito esta vacio</h3>

                <Link to='/'className="btn btn-ligth">Volver al catalogo</Link>

                </div>
            </>

        )

    };

    return (


        <>

            <div className="cart-container">

                <div>

                    {listaDelCarrito.map((productomapeado) => (

                        <ItemCart producto={productomapeado} key={productomapeado.id} />

                    ))}

                </div>

                <div className="finalizar-compra">
                    <div>Total de compra: ${precioTotal()}</div>
               
                    <button className="btn" onClick={limpiarListadoDelCarrito}>Vaciar carrito</button>
                    <Link to='/' className="btn btn-light" >Volver al catalogo</Link>
                    <Link to='/checkout' className="btn btn-light" >Finalizar compra</Link>
                </div>


            </div>
        </>
    )

}

export { Cart }