
import {productos} from '../temporal/data';


const getProducts = () => {
    let error = true;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (error) {
                resolve(productos);
            } else {
                reject('Hubo un error intente mas tarde');
            }
        }, 2000);
    });
};


const getProduct = (id) => {
    let error = true;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (error) {
                resolve(productos.find((item)=> item.id === id));
            } else {
                reject('Hubo un error intente mas tarde');
            }
        }, 2000);
    });
};


const getProductsCatId = (catId) => {
    let error = true;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (error) {
                resolve(productos.filter((item)=> item.categoryId === catId));
            } else {
                reject('Hubo un error intente mas tarde');
            }
        }, 2000);
    });
};




export { getProducts, getProduct, getProductsCatId };