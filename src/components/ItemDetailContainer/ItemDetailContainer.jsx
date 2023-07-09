import { useEffect, useState } from "react"

import { ItemDetail } from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

import {getProductoDetalladoFireB  } from "../../services/Firebase/Firebase";



 const ItemDetailContainer = () =>{

  const {id}= useParams();



  const[productoDetalladoFireB, setProductoDetalladoFireB]=useState([])


  useEffect(() => {

    getProductoDetalladoFireB(id).then((res)=>{

      setProductoDetalladoFireB(res)


    })
   }
    , [id]);


  



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