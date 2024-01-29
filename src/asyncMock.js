// //LISTA DE PRODUCTOS
// const products = [
//     //Producción
//     {id: 1, category: 'Producción', name: 'Prod Completa Promo Apollo Full', price: 155000, stock: 2 , description: 'Incluye Beat, Grabación, Afinación Manual, Mezcla y Master. Este trabajo se hace en la prestigiosa Interfaz de sonido Apollo Twin.' , img: '../public/images/productos/1 promo-apollo-full.png'},
//     {id: 2, category: 'Producción', name: 'Prod Completa Promo Apollo', price: 145000, stock: 4 , description: 'Incluye Beat, Grabación, Mezcla y Master. Este trabajo se hace en la prestigiosa Interfaz de sonido Apollo Twin.' , img: '../public/images/productos/2 promo-apollo.png'},
//     {id: 3, category: 'Producción', name: 'Prod Completa Promo Akai', price: 125000, stock: 2 , description: 'Incluye Beat, Grabación, Mezcla y Master. Este trabajo se hace en la Interfaz gamma media de sonido Akai EIE.' , img: '../public/images/productos/3 promo-akai.png'},
//     //Beats
//     {id: 4, category: 'Beats', name: 'Beat a Pedido', price: 80000, stock: 4 , description: 'Proceso creativo a partir de tu idea. Nos envias una referencia o tu voz ya grabada en alguna maqueta, nos sirve para cohesionar mas el trabajo y asi sea mas compacto. Incluye Mezcla del beat y un PreMaster' , img: '../public/images/productos/4 Beat-a-pedido.png'},
//     {id: 5, category: 'Beats', name: 'Beat de Catalogo', price: 50000, stock: 0 , description: 'Puedes elegir entre los beats de nuestro catalogo. Incluye Mezcla del beat.' , img: '../public/images/productos/5 Beat-catalogo.png'},
//     {id: 6, category: 'Beats', name: 'Beat Ofertas', price: 30000, stock: 0 , description: 'Puedes elegir entre los beats de nuestro catalogo en la sección de ofertas. Incluye Mezcla del beat.' , img: '../public/images/productos/6 Beat-en-oferta.png'},
//     //Grabaciones
//     {id: 7, category: 'Grabación', name: 'Grabacion de Voces Apollo', price: 70000, stock: 3 , description: '2 Sesiones de 2 horas. Mezcla con recortes creativos, transiciones,Fx , etc. Grabado en la interfaz Apollo Twin. Incluye Mezcla y PreMaster general.' , img: '../public/images/productos/7 Grabacion-apollo.png'},
//     {id: 8, category: 'Grabación', name: 'Grabacion de Voces Apollo Maqueta', price: 30000, stock: 1 , description: '1 Sesion de 2 horas. Grabado en la interfaz Apollo Twin. Incluye Mezcla en sesion y PreMaster general.La mezcla es solo en las horas de sesión.' , img: '../public/images/productos/8 Grabacion-Apollo-Maqueta.png'},
//     {id: 9, category: 'Grabación', name: 'Grabacion de Voces Akai', price: 60000, stock: 3 , description: '2 Sesiones de 2 horas. Mezcla con recortes creativos, transiciones,Fx, etc. Grabado en la interfaz Akai EIE. Incluye Mezcla y PreMaster general.' , img: '../public/images/productos/9 Grabacion-Akai.png'},
//     {id: 10, category: 'Grabación', name: 'Grabacion de Voces Akai Maqueta', price: 20000, stock: 1 , description: '1 Sesiones de 2 horas. Grabado en la interfaz Akai EIE. Incluye Mezcla en sesion y PreMaster general.La mezcla es solo en las horas de sesión.' , img: '../public/images/productos/10 Grabacion-Akai-maqueta.png'},
//     //Ingenieria en sonido
//     {id: 11, category: 'Sonido', name: 'Mezcla Beat', price: 50000, stock: 2 , description: 'Mezcla tus beats para poder embellecer el trabajo hecho por tu beatmaker y conseguir el resultado que tanto esperas.Derecho a 3 Cambios de la mezcla, cualquier cambio extra $10.000 que se terminan sumando 3 arreglos mas con el pago.' , img: '../public/images/productos/11 Sonido-Mezcla-Beat.png'},
//     {id: 12, category: 'Sonido', name: 'Mezcla de Voces', price: 50000, stock: 2 , description: 'Mezcla tus voces para poder darle ese color, sonido cálido y comprimido tan buscado en el mercado y que hara relucir aún más tus grabaciones.Derecho a 3 cambios de la mezcla, cualquier cambio extra $10.000 que se terminan sumando 3 arreglos mas con el pago.' , img: '../public/images/productos/12 Sonido-Mezcla-Voz.png'},
//     {id: 13, category: 'Sonido', name: 'Master', price: 15000, stock: 2 , description: 'Finaliza el proceso de la ingenieria con el master, dandole los ultimos retoques para que el track suene competitivo y este listo para las plataformas digitales.' , img: '../public/images/productos/13 Sonido-Master.png'},
//     {id: 14, category: 'Sonido', name: 'Promo Mezcla + Master Voz y Beat', price: 65000, stock: 4 , description: 'Trabajo de Mezcla y Master de tu canción completa cohesionando todos sus elementos para embellecer el trabajo preproducción. Para que el track suene con el mejor sonido y este listo para las plataformas digitales.' , img: '../public/images/productos/14 Sonido-Promo-Mezcla-+-Master.png'}, 
// ]

// //FUNCION FLECHA PARA OBTENER PRODUCTOS
// export const getProducts = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(products)
//         }, 500)
//     })
// }

// //FUNCION FLECHA CON PARAMETRO PARA OBTENER PRODUCTOS POR ID
// export const getProductById = (productId) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(products.find(prod => prod.id == productId))
//         }, 500)
//     })
// }

// //FUNCION FLECHA CON PARAMETRO PARA OBTENER PRODUCTOS POR CATEGORY
// export const getProductByCategory = (productCategory) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(products.filter(prod => prod.category == productCategory))
//         }, 500)
//     })
// }

