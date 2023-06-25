export const productos = [
  {
    id: "1",
    categoryId:"1",
    nombre: "Desarrolla tu maximo potencial",
    descripcion:"En todo ser humano hay grandeza y potencial, si alguien mas pudo hacerlo es la prueba de que si se puede",
    precio: 1000,
    imagen: "https://www.murcia.com/noticias/fotos/1117655200w2.jpg",
    cantidad: "5",
  },

  {
    id: "2",
    categoryId:"1",
    nombre: "Conoce tus habilidades",
    descripcion: "En todo ser humano hay grandeza y potencial, si alguien mas pudo hacerlo es la prueba de que si se puede",
    precio: 4000,
    imagen: "https://www.murcia.com/noticias/fotos/1117655200w2.jpg",
    cantidad: "9",
  },


  /*
    const q = query(
        collection(db, "productos"),
        where("categoryId", "==", parametro)
      );

     const snapshot = await  getDocs(q);

     return snapshot
   */

  {
    id: "3",
    categoryId:"2",
    nombre: "Maximisa tus ingresos",
    descripcion: "La Educación financiera nos enseña que requerimos tener al menos 7 fuentes de ingresos para construir solides en nuestra economia",
    precio: 2000,
    imagen: " https://www.elfinancierocr.com/resizer/LsWuY1CWNdOrREY2KGzzqnsYmFU=/300x0/arc-anglerfish-arc2-prod-gruponacion/public/7UI6MRBEPBHJZOOCZM3B752FFE.jpg",
    cantidad: "6",
  },

  {
    id: "4",
    categoryId:"2",
    nombre: "Control financiero",
    descripcion:"Es primordial definir un presupuesto organizado mensual, ademas de definir nuestras deusas y plan para saldarlas, para comenzar a invertir",
    precio: 4000,
    imagen: "https://www.elfinancierocr.com/resizer/LsWuY1CWNdOrREY2KGzzqnsYmFU=/300x0/arc-anglerfish-arc2-prod-gruponacion/public/7UI6MRBEPBHJZOOCZM3B752FFE.jpg",
    cantidad: "9",
  },

  {
    id: "5",
    categoryId:"3",
    nombre: "Control financiero para empresas",
    descripcion: "Es primordial definir un presupuesto organizado mensual, ademas de definir nuestras deusas y plan para saldarlas, para comenzar a invertir",
    precio: 4000,
    imagen: "https://www.elfinancierocr.com/resizer/LsWuY1CWNdOrREY2KGzzqnsYmFU=/300x0/arc-anglerfish-arc2-prod-gruponacion/public/7UI6MRBEPBHJZOOCZM3B752FFE.jpg",
    cantidad: "9",
  },

  {
    id: "6",
    categoryId:"2",
    nombre: "Aprendiendo a invertir",
    descripcion: "La Educación financiera nos enseña que requerimos tener al menos 7 fuentes de ingresos para construir solides en nuestra economia",
    precio: 4000,
    imagen: "https://lamenteesmaravillosa.com/wp-content/uploads/2016/05/Mujer-pensando-en-sus-proyectos.jpg",
    cantidad: "9",
  }

  



];


export const  categories = [

  {id:"1", name:"Desarrollo personal"},

  {id:"2", name:"Finanzas personales"},

  {id:"3", name:"Finanzas para empresas"}


];