import CartWidget from '../CartWidget/CartWidget';
import './navbar.css'
import logo from '../../assets/img/logoindira.png'
//import { NavLink } from 'react-bootstrap';
import { NavLink,useParams,useNavigate} from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { getCategories } from '../../services/Categories';
import{getProductsCatId } from'../../services/Productos'
import{ItemListContainer} from '../../components/index'







const NavBar = () => {

  const [categories, setCategories] = useState([]);

  const navigateLogo= useNavigate();
  
/* borrado por LAURA
  const [listaProductos, setListaProductos] = useState([]);

  const{catId} = useParams;



    useEffect(() => {
      getProductsCatId (catId)
        .then((res) => setListaProductos(res))
        .catch((error) => console.log(error));
    }
      , [catId]);
*/

  useEffect(() => {
    getCategories()
      .then((res) => setCategories(res))
      .catch((error) => console.log(error));
  }
    , []);




  return (


    <>

      <nav className="navbar navbar-muted navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" onClick={()=> navigateLogo(`/`)}>
            {" "}
            <img src={logo} alt="hey" width={30} height={30} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <h2 className="tituloNabvar">IDR</h2>
              </li>


              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="vision.html">
                  Visión
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="mision.html">
                  Misión
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="teayudo.html"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Te ayudo
                </a>
                <ul className="dropdown-menu">

                  
                  {categories.map((itemcategory) =>(

                    <li >
                      <NavLink to=  {`/category/${itemcategory.id}/`} className="dropdown-item">{itemcategory.name}</NavLink>
                     
                    </li>

                  ))}


                
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contacto.html">
                  Contacto
                </a>
              </li>
            </ul>
            <CartWidget />
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-btn-light" type="submit">
                Buscar
              </button>
            </form>
          </div>
        </div>
      </nav>






    </>


  );



}

export { NavBar }