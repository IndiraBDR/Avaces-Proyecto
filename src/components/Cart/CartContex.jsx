import { createContext, useState } from "react"

const CartContex = createContext([])


const CartProvider = ({children}) =>{

  const [lista,setLista]= useState([])

  const addProduct = (producto,cantidad)=>{


   

    if(lista.find((x)=> x.id  === producto.id)){
      return console.log("YA AGREGARDP");
   }

   setLista([...lista,producto])

   console.log(producto);

   // console.log(producto);
    //console.log(cantidad);


  }

    return(

    <CartContex.Provider value={{addProduct}}>
        {children}
    </CartContex.Provider>

    )
}

export{CartProvider,CartContex}