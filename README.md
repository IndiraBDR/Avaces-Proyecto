
# # Aprende en linea IDR


### Catacterisitcas

-vesion de node.js utilizada es: v16.16.0.

### Descripcion
 Es un e-commerce  pensado y destinado para la venta de info productos o cursos digitales en las areas de desarrollo personal y financiero de personas independientes y empresas.
 
 Esta desarollado principalmete con React.js, basado en el concepto de aplicacion de una sola pagina, esta constituido por una carpeta components que contiene  compenetes de presentacion y funcionales que se encargan de manejar la logica. Cuenta con una carpeta contex donde se maneja el contexto del carrito de compras y una carpeta de servicios donde son declaradas las funciones de acceso a la base de datos FIREBASE donde estan almacenados los productos y categorias. El usuario puede navegar en el ItemListContainer (ruta base) donde puede ver el listado de cursos para la venta y a traves del el boton de "ver mas" puede acceder al detalle del producto que selecciona para poder ver la descripcion del mismo y a su vez se habilita en esta vista del detalle un ItemCount que permite al usuario seleccionar la cantidad que desea del producto ademas de un boton que le permite ir al carrito y otro que regresa a ItemListContainer. Durante toda la experiecia el usurio puede visualizar el Icono del carrito que le permite acceder a su ruta en cualquier momento, al igual que al cliquear el logo le permite volver a la direccion base, si el usuario olvido seleccionar algun producto o desea agragar mas del que ya selecciono puede regresar y agregarlos sin generar duplicados.
 
 
 Al tener listo su pedido el usurio puede visualizarlo a traves de carrito junto al precio total de la compra, y una botonera que le permite regresar a comprar a la ruta base, vaciar el carrito o finalizar la compra, ademas de ver la cantidad de Items comprados junto al icono del carrito, cuya cantidad se desmonta si no hay productos seleccionados. Al pulsar "finalizar compra" el usurio puede acceder a un formulario que le permite rellenar sus datos para generar la orden de compra y finalmente almacenarla  en firebase.
 
 
 La pagina cuenta con un despleglable de categorias que permite filtrar los productos dependiendo de su tipo utilizando funcionalidades del FIREBASE.


## Estilos

Basados principalmente en CSS, utilizando el enlace css al  framework  Bootstrap.

###End