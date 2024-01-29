import './Header.css'

//Pasar como prop {titulo} al parametro ( )  del componente Header


const Header = ( {titulo} ) => {
        
    return (
        <div className="Titulo">
            <h1>{titulo}</h1>
        </div>
    )
}

export default Header