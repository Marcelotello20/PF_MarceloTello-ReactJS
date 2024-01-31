# React + Vite

Este proyecto esta trabajado con React + Vite , esta dirigido a crear una app con productos para su compra junto con un carrito que almacena los objetos elegidos en productos y enviarlos al carro con funciones para quitar el producto elegido, limpiar el carrito o pasar al checkout ya sabiendo el total de la compra.Despues Ingresaran a un checkout donde este les preguntara su nombre , su numero de telefono y su correo para crearles la orden y nosotros tomar su pedido y enviarlo a nuestra base de datos.

# Base de Datos en Firebase Items(productos) y Orders(ordenes de compra)
Tanto los productos como los datos de la orden generada estan creados en Firebase para la obtención de estos integrado en el codigo de jsx

# Importante - CartContex(CartPage y CheckoutPage(total() y totalQuantity())

En el código de Cart y Checkout saldra un "total()" y un "totalQuantity()" esto lo tuve que llamar de esta forma para poder transformar lo que era la funcion a un valor number que aceptara Firebase y FireStorage dado a como cree la función total y totalQuantity en CartContext.

#





Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
# PE2_MarceloTello-ReactJS
