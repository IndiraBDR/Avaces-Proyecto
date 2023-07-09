
import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css'
import { useNavigate, useParams } from 'react-router-dom';
import { getProductsFireB } from '../../services/Firebase/Firebase';


const ItemListContainer = ({ greeting }) => {

  const { catId } = useParams();
  const [productosFireB, setProductosFireB] = useState([])
  const navigate = useNavigate();

  useEffect(() => {

    getProductsFireB(catId).then((res) => {

      setProductosFireB(res)

    })
  }
    , [catId]);


  return (
    <div >
      <h2>{greeting}</h2>
      <ItemList listaProductos={productosFireB.map(item => ({
        ...item,
        onProductClicked: () => navigate(`/item/${item.id}`)

      }))} />
    </div>
  );
};

export { ItemListContainer };











