import React from 'react';
import '../Item/Item.css'

const Item = ({ producto }) => {

  const { nombre, descripcion, precio, imagen, onProductClicked, stock } = producto


  return (
    <>

      <div className="card"
        style={{ width: '15rem', height: '24rem', margin: '.5rem', alignSelf: 'center' }} >

        <div class="card-body">
          <b class="card-title">{nombre}</b>
          <img src={imagen} class="card-img-top" />
          <p class="card-text">${precio}</p>
          <p class="card-text">stock: {stock}</p>
          <button class="btn btn-light" onClick={onProductClicked}>Ver más</button>
        </div>

      </div>

    </>
  );
};

export default Item;


