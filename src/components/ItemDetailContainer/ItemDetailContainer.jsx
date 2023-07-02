import { useEffect, useState } from "react"
import { getProducts,getProduct } from "../../services/Productos"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

import {getProductoDetalladoFireB  } from "../../services/Firebase/Firebase";



 const ItemDetailContainer = () =>{

  const {id}= useParams();


  //NUEVO


  const[productoDetalladoFireB, setProductoDetalladoFireB]=useState([])


  useEffect(() => {

    getProductoDetalladoFireB(id).then((res)=>{

      setProductoDetalladoFireB(res)

  //    console.log(id);

    })
   }
    , [id]);


  //




/*CODIGO  VIEJO
  const [productoDetallado,setproductoDetallado]= useState()

  useEffect ( ()=> {

    getProduct(id)
    .then((res)=>setproductoDetallado(res))

    console.log(id);
   
    

  },[])

*/




    return(

       <>
     
  

       <ItemDetail productoDetallado={productoDetalladoFireB}/>
       
        </>
        
      
    )

    

}


export {ItemDetailContainer};


/*

const [productoDetallado,setproductoDetallado]= useState({})


  useEffect ( ()=> {

    getProducts()
    .then((res)=>setproductoDetallado(res.find((producto)=>producto.id === 2)))
    .catch((err)=> console.log(err))

  },[])


  return(

        <>
        <ItemDetail productoDetallado={productoDetallado}/>
        </>
    )
*/