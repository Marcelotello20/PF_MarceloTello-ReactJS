import './Header.css'

//Pasar como prop {titulo} al parametro ( )  del componente Header


const Header = ( {titulo} ) => {

    //Determina la clase de Header basada en el parametro titulo para trabajar su CSS
    const className = 
        titulo === "Producción" ? "ProduccionHeader" :
        titulo === "Beats" ? "BeatsHeader" :
        titulo === "Grabación" ? "GrabacionHeader" :
        titulo === "Sonido" ? "SonidoHeader" :
        "Title"; // Default Class para el HeaderIndex
    
    const parrafoCategoryHeader =
        titulo === "Producción" ? "Producir no es solo grabarte" :
        titulo === "Beats" ? "Instrumentales con emoción" :
        titulo === "Grabación" ? "Capturando tu voz" :
        titulo === "Sonido" ? "Mixing y Master" :
        "Estudio de produccion musical enfocado al area de la Blackmusic. Con experiencia en produccion de variados ritmos como Afrobeats - Dancehall - Hiphop - Reggaeton - Trap , entre otros. Nuestro enfoque es el de transmitir emociones con nuestras producciones, siempre comentamos lo importante que es que trabajemos en conjunto para poder llegar a trabajar producciones ¡Full Calidad!."; //DEFAULT

    //Devuelve Nuestro Header dependiendo de el useState(ItemListContainer headerTitle)   
    return (
        <div className='Headers'>

            <div className={className}>
               <h1>{titulo}</h1>
               <p>{parrafoCategoryHeader}</p>
            </div>

        </div>
        
    );
}

export default Header