import { Link } from 'react-router-dom'
import './Footer.css'


const Footer = () => {
    return (

        <footer className='Footer'>
            <h5 className="FooterTitle">Redes Sociales y Links</h5>
            <div className="FooterLinks">
                <Link to='/' className="Links">Inicio</Link>
                <a className="Links" href="https://www.instagram.com/ghettolifemuzik/">Instagram</a>
                <a className="Links" href="https://wa.me/56954762733">Whatsapp</a>
                <a className="Links" href="https://www.youtube.com/@GhettoLifeMuzik">Youtube</a>
            </div>
        </footer>
    )
}

export default Footer