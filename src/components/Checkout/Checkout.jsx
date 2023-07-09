import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { CartContex } from "../../contex/CartContex";
import { FormDeCompra } from "../Formrs/FormDeCompra"

import {
    getFirestore,
    collection,
    addDoc
} from "firebase/firestore";


const Checkout = () => {


    const { listaDelCarrito, limpiarListadoDelCarrito, precioTotal } = useContext(CartContex)

    const [ordenId, setOrdenId] = useState(null);
    const [dataForm, setDataForm] = useState({ nombre: '', telefono: '', email: '' })

    const generarOrden = () => {

        const orden = {}
        orden.comprador = dataForm;
        orden.productos = listaDelCarrito.map(producto => ({ id: producto.id, nombre: producto.nombre, precio: producto.precio, cantidad: producto.cantidad, descripcion: producto.descripcion }))
        orden.total = precioTotal()
        orden.fecha = new Date()

        const dbFirestore = getFirestore()
        const ordenCollecion = collection(dbFirestore, 'ordenes')


        addDoc(ordenCollecion, orden)
            .then(resp => { setOrdenId(resp.id) })
            .catch((err) => console.log(err))
            .finally(() => {
                setDataForm({ nombre: '', telefono: '', email: '' })
                setTimeout(() => { limpiarListadoDelCarrito() }, 2000)
            })


    }

    const handleForm = (evt) => {
        setDataForm({
            ...dataForm,
            [evt.target.name]: evt.target.value


        })

    }

    return (

        <>

            {
                ordenId
                    ? (<div className='text-center m-5'>
                        <h1 >Orden ID: </h1>
                        <p>{ordenId}</p>
                        <p>Gracias por su compra!!</p>
                        <Link className='btn btn-info fw-semibold text-dark my-5' to='/'>Volver al Inicio</Link>
                    </div>)
                    : (<div className='d-flex flex-column text-center mx-5 px-5 gap-2 w-75'>

                        <FormDeCompra handleForm={handleForm} generarOrdenDeCompra={generarOrden} dataForm={dataForm} />

                    </div>)
            }

        </>

    )

};

export { Checkout }