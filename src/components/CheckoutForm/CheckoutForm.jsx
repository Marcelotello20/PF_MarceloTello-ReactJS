import { useState } from "react"


const CheckoutForm = ({ onConfirm }) => {

    //Estados para guardar la informacion 
    const [name, setName] = useState('')
    const [phone,setPhone] = useState('')
    const [email,setEmail] = useState('')
    

    //Funcion tipo evento para setear la informacion del user
    const handleConfirm = (event) => {
        event.preventDefault()

        const userData = {
            name, phone, email
        }
        
        console.log('Enviando datos del pedido...');
        onConfirm(userData)
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
                    <button type="submit" className="Button">Crear pedido</button>
                </label>
            </form>
        </div>
    )
}

export default CheckoutForm