
import {categories} from '../temporal/data';


const getCategories = () => {
    let error = true;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (error) {
                resolve(categories);
            } else {
                reject('Hubo un error intente mas tarde');
            }
        }, 2000);
    });
};


const getCategory = (id) => {
    let error = true;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (error) {
                resolve(categories.find((item)=> item.id === id));
            } else {
                reject('Hubo un error intente mas tarde');
            }
        }, 2000);
    });
};




export { getCategories, getCategory };