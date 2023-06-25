
import { Link } from "react-router-dom";
import { ItemCounter } from "../../components/index";
import './ItemDetail.css'
import { useState, useContext } from "react";
import { CartContex} from "../Cart/CartContex";



export const ItemDetail = ({productoDetallado})=> {

const {nombre, descripcion, precio,imagen,id,cantidad} = productoDetallado;



const onAddFuncion = (cantidadDelCounter) => {

    addProduct(productoDetallado,cantidadDelCounter);
    setIrAlCarrito(true)
  

 //  console.log(cantidadDelCounter);
    
};

const [irAlCarrito,setIrAlCarrito]=useState(false)
const {addProduct} = useContext(CartContex)


/*

const onAddFuncion = (cantidadDelCounter) => {
    setCantidadAgregada(cantidadDelCounter);
    
};


  const [cantidadAgregada,setCantidadAgregada]= useState()

*/


return(

    <div className="card"
    style={{ width: '16rem', height: '32rem', alignSelf: 'center' }}>
        <div class="card-body">
        <p>{id}</p>
        <b class="card-title" >{nombre}</b>
        <img  src={imagen} class="card-img-top"/>
        <p class="card-text">{descripcion}</p>
        <b class="card-text">{precio}</b>
        <br></br>
       
        {irAlCarrito ? <Link to='/cart' className="btn btn-light" >Ir al carrito</Link> : < ItemCounter stock={cantidad} initial={1}  onAdd={onAddFuncion} />}

        </div>
        
    </div>
)


}
// {cantidadAgregada ? <Link to='/cart' className="btn btn-light" >Ir al carrito</Link> : < ItemCounter stock={cantidad} initial={1}  onAdd={onAddFuncion} />}