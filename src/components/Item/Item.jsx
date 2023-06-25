import React from 'react';
import '../Item/Item.css'

const Item = ({ producto }) => {

  const { nombre, descripcion, precio, imagen, cantidad, onProductClicked } = producto

  /*

  <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
  */

  return (
    <>

      <div className="card"
        style={{ width: '15rem', height: '24rem', margin: '.5rem', alignSelf: 'center' }} >
       
        <div class="card-body">
          <b class="card-title">{nombre}</b>
          <img src={imagen} class="card-img-top" />
          <p class="card-text">${precio}</p>
          <p class="card-text">stock: {cantidad}</p>
          <button class="btn btn-light" onClick={onProductClicked}>Ver más</button>
        </div>

      </div>


    </>
  );
};

export default Item;


