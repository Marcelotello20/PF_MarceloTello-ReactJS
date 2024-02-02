# React + Vite
Inicializacion con el codigo 
## 'npm run dev'


Este proyecto esta trabajado con React + Vite , esta dirigido a crear una app con productos para su compra junto con un carrito que almacena los objetos elegidos en productos y enviarlos al carro con funciones para quitar el producto elegido, limpiar el carrito o pasar al checkout ya sabiendo el total de la compra.Despues Ingresaran a un checkout donde este les preguntara su nombre , su numero de telefono y su correo para crearles la orden y nosotros tomar su pedido y enviarlo a nuestra base de datos.

# Base de Datos en Firebase Items(productos) y Orders(ordenes de compra)
Tanto los productos como los datos de la orden generada estan creados en Firebase para la obtención de estos integrado en el codigo de jsx

# Importante - CartContex(CartPage y CheckoutPage(total() y totalQuantity())

En el código de Cart y Checkout saldra un "total()" y un "totalQuantity()" esto lo tuve que llamar de esta forma para poder transformar lo que era la funcion a un valor number que aceptara Firebase y FireStorage dado a como cree la función total y totalQuantity en CartContext.

# HEADERS PAGES

Los Headers y sus cambios estan configurados en base a los Navlinks de Navbar.jsx, funcionan estos con la obtencion recoletada de categoryId en Firestore de la collection(db,'items') y asi vamos dandole la navegacion y el cambio de estilos del header. 
En Header podemos ver un operador ternario para definir className que es ocupado en el return para que la clase del Header sea en base a la obtencion de titulo como props de Header , este prop lo recibimos en ItemListContainer de el estado header,setHeadertitle usado en conjunto con el useEffect de ItemListContainer que es de donde recibimos los datos de FireStore. 


# CART Y LOCALSTORAGE

En el CartContext existe un sistema de verificación del cart [] con su useState , primero comprueba si existe en el localStorage para luego con un ternario darle la lógica de que si existe savedCart que lo transforme en un Objeto JS ya que en localStorage se tiene que guardar como cadenas de texto.
Luego con un UseEffect guardamos el cart (carrito) en el localStorage cada vez que este cambie con JSON.stringify que es para transformarlo a cadena de texto junto con la clave cart.

# BUTTONS 

Los estilos visuales de los bottones se encuentran dentro del css en la misma carpeta del componente. Los quise trabajar asi para poder darle mejor lectura a todo el trabajo y personalizarlo de la mejor manera.





Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
# PF_MarceloTello-ReactJS
