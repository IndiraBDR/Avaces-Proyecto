import './FormDeCompra.css'

const FormDeCompra = ({ handleForm, generarOrdenDeCompra, dataForm }) => {


    const handleOnSubmit = (e) => {
        e.preventDefault()

        generarOrdenDeCompra()


    }

    return (

        <>
        

            <form className="form-de-compra" onSubmit={handleOnSubmit}>

            <h3>Datos de la compra</h3>

              
                    <div class="mb-3">
                    <label class="form-label">Nombre completo</label>
                    <input onChange={handleForm} class="input" type="text" name='nombre' value={dataForm.nombre} placeholder='Ingrese su Nombre' />
                    </div>

                    <div class="mb-3">
                    <label class="form-label">Numero de contacto</label>
                    <input onChange={handleForm} class="input"type="text" name='telefono' value={dataForm.telefono} placeholder='Ingrese su Telefono' />
                    </div>

                    <div class="mb-3">

                    <label class="form-label" >Email de contacto</label>
                    <input onChange={handleForm} class="input" type="text" name='email' value={dataForm.email} placeholder='Ingrese su email' />

                    </div>

         

                <button className="btn btn-outline-secondary w-50 mt-2" type="submit">Finalizar Compra</button>
            </form>


        </>
    )
}

export { FormDeCompra }

/*
<form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>

*/