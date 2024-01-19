//LISTA DE PRODUCTOS
const products = [
    //Producción Completa
    {id: 1, category: 'produccion', name: 'Prod Completa Promo Apollo Full', price: 155000, stock: 2 , description: 'Descripcion producto' , img: '../public/images/productos/1 promo-apollo-full.png'},
    {id: 2, category: 'produccion', name: 'Prod Completa Promo Apollo', price: 145000, stock: 4 , description: 'Descripcion producto' , img: '../public/images/productos/2 promo-apollo.png'},
    {id: 3, category: 'produccion', name: 'Prod Completa Promo Akai', price: 125000, stock: 2 , description: 'Descripcion producto' , img: '../public/images/productos/3 promo-akai.png'},
    //Beats
    {id: 4, category: 'beats', name: 'Beat a Pedido', price: 80000, stock: 4 , description: 'Descripcion producto' , img: '../public/images/productos/4 Beat-a-pedido.png'},
    {id: 5, category: 'beats', name: 'Beat de Catalogo', price: 50000, stock: 0 , description: 'Descripcion producto' , img: '../public/images/productos/5 Beat-catalogo.png'},
    {id: 6, category: 'beats', name: 'Beat Ofertas', price: 30000, stock: 0 , description: 'Descripcion producto' , img: '../public/images/productos/6 Beat-en-oferta.png'},
    //Grabaciones
    {id: 7, category: 'grabacion', name: 'Grabacion de Voces Apollo', price: 70000, stock: 3 , description: 'Descripcion producto' , img: '../public/images/productos/7 Grabacion-apollo.png'},
    {id: 8, category: 'grabacion', name: 'Grabacion de Voces Apollo Maqueta', price: 30000, stock: 1 , description: 'Descripcion producto' , img: '../public/images/productos/8 Grabacion-Apollo-Maqueta.png'},
    {id: 9, category: 'grabacion', name: 'Grabacion de Voces Akai', price: 60000, stock: 3 , description: 'Descripcion producto' , img: '../public/images/productos/9 Grabacion-Akai.png'},
    {id: 10, category: 'grabacion', name: 'Grabacion de Voces Akai Maqueta', price: 20000, stock: 1 , description: 'Descripcion producto' , img: '../public/images/productos/10 Grabacion-Akai-maqueta.png'},
    //Ingenieria en sonido
    {id: 11, category: 'sonido', name: 'Mezcla Beat', price: 50000, stock: 2 , description: 'Descripcion producto' , img: '../public/images/productos/11 Sonido-Mezcla-Beat.png'},
    {id: 12, category: 'sonido', name: 'Mezcla de Voces', price: 50000, stock: 2 , description: 'Descripcion producto' , img: '../public/images/productos/12 Sonido-Mezcla-Voz.png'},
    {id: 13, category: 'sonido', name: 'Master', price: 15000, stock: 2 , description: 'Descripcion producto' , img: '../public/images/productos/13 Sonido-Master.png'},
    {id: 14, category: 'sonido', name: 'Promo Mezcla + Master Voz y Beat', price: 65000, stock: 4 , description: 'Descripcion producto' , img: '../public/images/productos/14 Sonido-Promo-Mezcla-+-Master.png'}, 
]

//PARA OBTENER PRODUCTOS
export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

//PARA OBTENER PRODUCTOS POR ID
export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id == productId))
        }, 500)
    })
}

//PARA OBTENER PRODUCTOS POR CATEGORY
export const getProductByCategory = (productCategory) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.category == productCategory))
        }, 500)
    })
}

