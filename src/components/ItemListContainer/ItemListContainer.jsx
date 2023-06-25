
import React, { useEffect, useState } from 'react';
import { getProducts,getProductsCatId } from '../../services/Productos';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css'
import  { useNavigate,useParams } from 'react-router-dom';
import { getProductsFireB } from '../../services/Firebase/Firebase';
/*
/Users/indiradamico/Desktop/practica-mi-primera-app/src/components/ItemList
src/components/ItemListContainer
*/

const ItemListContainer = ({ greeting }) => {

  const{catId}=useParams();
  ////////nuevo

  const[productosFireB, setProductosFireB]=useState([])


  useEffect(() => {

    getProductsFireB(catId).then((res)=>{

      setProductosFireB(res)

    })
   }
    , [catId]);

  ///////////////


    const [listaProductos, setListaProductos] = useState([]);
    const navigate= useNavigate();
    
   
   


       

    useEffect(() => {
      if(catId) {

        getProductsCatId(catId)
        .then((res) => setListaProductos(res))
        .catch((error) => console.log(error));

      }else{

        getProducts()
        .then((res) => setListaProductos(res))
        .catch((error) => console.log(error));


      };}
      , [catId]);
  

   
    return (
      <div >
        <h2>{greeting}</h2>
        <ItemList listaProductos={productosFireB.map(item =>({
          ...item,
          onProductClicked:()=> navigate(`/item/${item.id}`)

        }))}/>
      </div>
    );
  };
  
  export  {ItemListContainer};






/*ANTES DE PROBAR LO DE LAURA

const ItemListContainer = ({ greeting }) => {


    const [listaProductos, setListaProductos] = useState([]);
    const navigate= useNavigate();
   

    useEffect(() => {
      getProducts()
        .then((res) => setListaProductos(res))
        .catch((error) => console.log(error));}
      , []);
  

   
    return (
      <div>
        <h2>{greeting}</h2>
        <ItemList listaProductos={listaProductos.map(item =>({
          ...item,
          onProductClicked:()=> navigate(`/product-detalle/${item.id}`)

        }))}/>
      </div>
    );
  };
  







*/



  
/*

const ItemListContainer = ({ greeting }) => {
    return (
        <>
            <div className="greeting">
                {greeting}
            </div>
        </>
    )
}

export default ItemListContainer
*/