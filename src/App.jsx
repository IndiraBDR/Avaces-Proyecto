
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NavBar, ItemListContainer, ItemDetailContainer, Cart } from './components';
import { CartProvider } from './contex/CartContex';
import { Checkout } from "./components/Checkout/Checkout";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCBJVfzNV_gU-rUKv9vsK5ArLkCmuGxd0w",
  authDomain: "tienda-productos-55e46.firebaseapp.com",
  projectId: "tienda-productos-55e46",
  storageBucket: "tienda-productos-55e46.appspot.com",
  messagingSenderId: "12283930021",
  appId: "1:12283930021:web:41b7cee53012f35595344c",
  measurementId: "G-5LX9F8LS1Y"
};
initializeApp(firebaseConfig);

function App() {
  return (

    <>
      <CartProvider>
        <BrowserRouter>
          <NavBar></NavBar>
          <Routes>
            <Route path="/" element={<ItemListContainer greeting="Aprende en linea IDR" />} />
            <Route path='/category/:catId' element={<ItemListContainer greeting="Aprende en linea IDR" />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />}></Route>
            <Route path="/checkout" element={<Checkout />}></Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>

    </>

  );
}

export default App;
