import { useState } from "react"
import './CheckoutForm.css'

const CheckoutForm = ({ onConfirm }) => {

    //Estados para guardar la informacion 
    const [name, setName] = useState('')
    const [phone,setPhone] = useState('')
    const [email,setEmail] = useState('')
    
    //Para confirmar email y mostrar que no coinciden si es que no
    const [confirmEmail, setConfirmEmail] = useState('');
    const [error, setError] = useState('');
    

    //Funcion tipo evento para setear la informacion del user
    const handleConfirm = (event) => {
        event.preventDefault()

        const userData = email == confirmEmail ? { name, phone, email } : null;
        
        //Si userData esta definido con la confirmación del Email se enviaran los datos , si no se Setea el error
        if (userData) {
            console.log('Enviando datos del pedido...');
            onConfirm(userData);
        } else {
            setError('Los correos electrónicos no coinciden.');
        }
    }

    return(
        <div className="Container">
            <form onSubmit={handleConfirm} className="Form">

                <label className="Label">
                    Nombre
                    <input 
                    className="Input"
                    type="text"
                    value={name}
                    onChange={ ({ target }) => setName(target.value) } 
                    />
                </label>

                <label className="Label">
                    Telefono
                    <input 
                    className="Input"
                    type="text"
                    value={phone}
                    onChange={ ({ target }) => setPhone(target.value) } 
                    />
                </label>

                <label className="Label">
                    Email
                    <input 
                    className="Input"
                    type="text"
                    value={email}
                    onChange={ ({ target }) => setEmail(target.value) } 
                    />
                </label>

                <label className="Label">
                    Confirmación de Email
                    <input 
                    className="Input"
                    type="text"
                    value={confirmEmail}
                    onChange={ ({ target }) => setConfirmEmail(target.value) } 
                    />
                </label>

                {/*Si error es true renderizara el mensaje error*/}
                {error && <p className="ErrorEmail">{error}</p>}

                <label className="LabelButton">
                    <button type="submit" className="Button">Crear pedido</button>
                </label>

            </form>

        </div>
    )
}

export default CheckoutForm