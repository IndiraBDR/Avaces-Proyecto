
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NavBar,ItemListContainer, ItemDetailContainer, Cart } from './components';
import { CartProvider } from './contex/CartContex';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { FormsDeCompra } from './components/Formrs/FormsDeCompra';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBJVfzNV_gU-rUKv9vsK5ArLkCmuGxd0w",
  authDomain: "tienda-productos-55e46.firebaseapp.com",
  projectId: "tienda-productos-55e46",
  storageBucket: "tienda-productos-55e46.appspot.com",
  messagingSenderId: "12283930021",
  appId: "1:12283930021:web:41b7cee53012f35595344c",
  measurementId: "G-5LX9F8LS1Y"
};

// Initialize Firebase
initializeApp(firebaseConfig);


  /*//////NUEVO

  const[productosFireB, setProductosFireB]=useState([])

  useEffect(() => {

    getProductsDetalladoFireB(id).then((res)=>{

      setProductosFireB(res)

    console.log(id);

    })
   }
    , [id]);



  //////
*/



function App() {
  return (
    <>
      
      

    
      
  
   <CartProvider>
      <BrowserRouter>

      <NavBar></NavBar>
        <Routes>

          <Route path="/" element={<ItemListContainer greeting="Bienvenidos a mi pagina"/>} />
          <Route path='/category/:catId' element={<ItemListContainer greeting="Bienvenidos a mi pagina"/>} />
          <Route path='/item/:id' element={ <ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path="/ordenindira" element={<FormsDeCompra/>}></Route>


          
        </Routes>
      </BrowserRouter>
      </CartProvider>
      
    </>

    
    /*
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting="Bienvenidos a mi pagina"/>
      <ItemDetailContainer/>
    </div>
    */
  );
}

export default App;
