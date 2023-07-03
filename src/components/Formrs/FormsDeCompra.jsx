
const FormsDeCompra = (handleForm, generarOrdenDeCompra, dataForm) => {


    const handleOnSubmit = (e) => {
        e.preventDefault()
       
          generarOrdenDeCompra()
        
        
      }

    return (

        <>

            <form onSubmit={handleOnSubmit}>


               <input onChange={handleForm} type="text" name='nombre' value={dataForm.nombre} placeholder='Ingrese su Nombre'/>


                   <input onChange={handleForm} type="text" name='telefono' value={dataForm.telefono} placeholder='Ingrese su Telefono'/>


             
                   <input onChange={handleForm} type="text" name='email' value={dataForm.email} placeholder='Ingrese su email'/>

                   <button className="btn btn-outline-secondary w-50 mt-2" type="submit">Finalizar Compra</button>
            </form>


        </>
    )
}

export{FormsDeCompra}