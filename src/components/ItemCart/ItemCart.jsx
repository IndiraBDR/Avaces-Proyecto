

import React from 'react';
import '../../components/ItemCart/ItemCart.css'
import { useContext } from 'react';
import { CartContex } from "../../contex/CartContex";

const ItemCart = ({ producto }) => {

  const { nombre, descripcion, precio, imagen, onProductClicked, stock, cantidad } = producto
  const { eliminarProducto } = useContext(CartContex)


  return (
    <>

      <div class="card mb-3" style={{ maxWidth: "700px" }}>
        <div class="row g-0">
          <div class="col-md-4">
            <img src={imagen} class="img-fluid rounded-start" alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{nombre}</h5>
              <p class="card-text">Cantidad:{cantidad}</p>
              <p class="card-text">Precio Unit: ${precio}</p>
              <p class="card-text">Sub Total: ${precio * cantidad}</p>
              <button class="btn btn-light" onClick={() => eliminarProducto(producto.id)}>Eliminar</button>

            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default ItemCart;
