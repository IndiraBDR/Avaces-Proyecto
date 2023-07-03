import {
  getFirestore,
  getDocs,
  collection,
  where,
  query,
  doc,
  getDoc
} from "firebase/firestore";

const getProductsFireB = async (parametro) => {
  const db = getFirestore();

  if (parametro) {

    const q = query(
      collection(db, "productos"),
      where("categoryId", "==", parametro),
      
    );

    const snapshot = await getDocs(q);

    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

  } else {

    const productosRef = collection(db, "productos");

    const snapshot = await getDocs(productosRef);

    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  }

};



const getProductoDetalladoFireB = async (parametro) => {
    const db = getFirestore();
  
    if (parametro) {
  
      const q = doc(db, "productos",parametro);

      const snapshot = await getDoc(q);

      if(snapshot.exists()){
        
        return { id: snapshot.id, ...snapshot.data() };

      }else{ return null }
  
    } else {
  
      const productosRef = collection(db, "productos");
  
      const snapshot = await getDocs(productosRef);
  
      return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    }
  };




/*CODIGO ANTES DE CORRECION DE COERD

  const getProductoDetalladoFireB = async (parametro) => {
    const db = getFirestore();
  
    if (parametro) {
  
      const q = query(
        collection(db, "productos"),
        where("id", "==", parametro),
        
      );
  
      const snapshot = await getDocs(q);
  
      return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  
  
    } else {
  
  
      const productosRef = collection(db, "productos");
  
      const snapshot = await getDocs(productosRef);
  
      return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    }
  
  
  };
  
  */
  

export { getProductsFireB, getProductoDetalladoFireB};











/*codigo que funciona para MOSTRAR DESDE LA BASE DE DATOS

const getProductsFireB = async (parametro) =>{

    console.log(parametro);
  
const db = getFirestore()


const productosRef= collection(db,'productos')

const snapshot= await getDocs(productosRef)


    return snapshot.docs.map((doc)=>({ id:doc.id, ...doc.data()}))

}


export {getProductsFireB}



*/
