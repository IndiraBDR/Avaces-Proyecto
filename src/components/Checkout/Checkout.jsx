import { useContext,useState } from "react";

import { FormsDeCompra } from "../Formrs/FormsDeCompra";
import { CartContex } from "../../contex/CartContex";

import {
    getFirestore,
    collection, 
    getDoc,
    addDoc
  } from "firebase/firestore";
  

const Checkout = () => {


    const { listaDelCarrito, limpiarListadoDelCarrito, precioTotal } = useContext(CartContex)

    const [ordenId, setOrdenId] = useState(null);
    const [dataForm, setDataForm] = useState({ nombre: '', telefono: '', email: '' })

    const generarOrden = () => {

        const orden = {}
        orden.compra = dataForm;
        orden.productos = listaDelCarrito.map (producto=>({id:producto.id, nombre: producto.nombre, precio:producto.precio,cantidad:producto.cantidad }))
        orden.total = precioTotal()

        const dbFirestore = getFirestore()
        const ordenCollecion = collection (dbFirestore, 'ordenes')
       
        
        addDoc(ordenCollecion , orden)
        .then(resp => { setOrdenId(resp.id)})
        .catch( (err) => console.log(err) )
        .finally( () => { 
            setDataForm( { nombre: '', telefono: '', email: ''} )  
            setTimeout( () => { limpiarListadoDelCarrito() }, 2000)
        }) 

    }

    const handleForm = (evt) => {  

        setDataForm({
            ...dataForm,
            [evt.target.name]: evt.target.value
        })

        

    }


    return(

        <>
        
        <FormsDeCompra handleForm={handleForm} generarOrdenDeCompra={generarOrden} dataForm={dataForm}/>
        </>
        
        
      //  <CheckoutValidacion generateOrder={generateOrder} handleForm={handleForm} dataForm={dataForm} />
    )



};

export {Checkout}