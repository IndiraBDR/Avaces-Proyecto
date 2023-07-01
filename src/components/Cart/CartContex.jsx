import { createContext, useState } from "react"

const CartContex = createContext([])


const CartProvider = ({children}) =>{

  const [lista,setLista]= useState([])

  const [cantidad,setCantidad]= useState(0)

  const addProduct = (producto,cantidad)=>{


   

    if(lista.find((x)=> x.id  === producto.id)){
      return console.log("YA AGREGARDP");
   }

   setLista([...lista,producto])

   setCantidad(cantidad)

   console.log(lista);

   // console.log(producto);
    //console.log(cantidad);


  }

    return(

    <CartContex.Provider value={{addProduct,lista,cantidad}}>
        {children}
    </CartContex.Provider>

    )
}

export{CartProvider,CartContex}