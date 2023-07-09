
import { Link } from "react-router-dom";
import { ItemCounter } from "../../components/index";
import './ItemDetail.css'
import { useState, useContext } from "react";
import { CartContex} from "../../contex/CartContex";



export const ItemDetail = ({productoDetallado})=> {

const {nombre, descripcion, precio,imagen,id,stock} = productoDetallado;



const onAddFuncion = (cantidadDelCounter) => {

    addProduct(productoDetallado,cantidadDelCounter);
    setIrAlCarrito(true)
  
    
};

const [irAlCarrito,setIrAlCarrito]=useState(false)
const {addProduct} = useContext(CartContex)

 

return(

    

    <div className="card"
    style={{ width: '16rem', height: '32rem', alignSelf: 'center' }}>
        <div class="card-body">
        <b class="card-title" >{nombre}</b>
        <img  src={imagen} class="card-img-top"/>
        <p class="card-text">{descripcion}</p>
        <b class="card-text">${precio}</b>
        <br></br>
        {irAlCarrito ? <Link to='/cart' className="btn btn-light" >Ir al carrito</Link> : < ItemCounter stock={stock} initial={1}  onAdd={onAddFuncion} />}
        <Link to='/' className="btn btn-light" >Volver al catalogo</Link>
        </div>
        
    </div>
)



}
