import { createContext, useState } from "react"

const CartContex = createContext([])


const CartProvider = ({children}) =>{

  

  const addProduct = (producto,cantidad)=>{

    console.log(producto);
    console.log(cantidad);


  }

    return(

    <CartContex.Provider value={{addProduct}}>
        {children}
    </CartContex.Provider>

    )
}

export{CartProvider,CartContex}