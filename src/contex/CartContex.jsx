import { createContext, useState } from "react"

const CartContex = createContext([])


const CartProvider = ({ children }) => {

  const [listaDelCarrito, setListaDelCarrito] = useState([])



  const addProduct = (producto, cantidad) => {

    if (isInCart(producto.id)) { setListaDelCarrito(listaDelCarrito.map
      
      (itemDeListado => {return itemDeListado.id === producto.id ? { ...itemDeListado,cantidad: itemDeListado.cantidad + cantidad } : itemDeListado}));

      

  }else{

    setListaDelCarrito([...listaDelCarrito,{...producto,cantidad}])
  }

}




  const limpiarListadoDelCarrito = () => setListaDelCarrito([]);

  const isInCart = (id) => listaDelCarrito.find((x) => x.id === id) ? true : false;

  const eliminarProducto = (id) => { setListaDelCarrito(listaDelCarrito.filter((x) => x.id !== id)) };

 const precioTotal = () => listaDelCarrito.reduce((accum,producto)=> accum + (producto.precio*producto.cantidad), 0);

  const productosTotal= () => listaDelCarrito.reduce((accum,productoActual)=> accum + productoActual.cantidad,0)

console.log(listaDelCarrito);

  return (

    <CartContex.Provider value={{ addProduct, listaDelCarrito,isInCart,eliminarProducto,productosTotal,precioTotal,limpiarListadoDelCarrito  }}>
      {children}
    </CartContex.Provider>

  )


  

  

  





 


}

export { CartProvider, CartContex }