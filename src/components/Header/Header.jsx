import './Header.css'

const Header = ( {titulo} ) => {
        
    return (
        <div className="Titulo">
            <h1>{titulo}</h1>
        </div>
    )
}

export default Header