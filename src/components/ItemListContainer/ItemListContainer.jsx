
import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css'
import  { useNavigate,useParams } from 'react-router-dom';
import { getProductsFireB } from '../../services/Firebase/Firebase';


const ItemListContainer = ({ greeting }) => {

  const{catId}=useParams();
  

  const[productosFireB, setProductosFireB]=useState([])


  useEffect(() => {

    getProductsFireB(catId).then((res)=>{

      setProductosFireB(res)

    })
   }
    , [catId]);

  


    const [listaProductos, setListaProductos] = useState([]);
    const navigate= useNavigate();
    
   
   
  
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







    


  
