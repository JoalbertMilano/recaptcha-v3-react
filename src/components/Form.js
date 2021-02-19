import React, {useState} from 'react'

const Form = () =>{
    const [datos, setDatos] = useState({
        firstName: '',
        lastName: ''
    })

    const handleInputChange = (event) =>{
        // console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault()
        console.log(datos.firstName + " " + datos.lastName)
    }

    return(
        <form onSubmit={enviarDatos}>
            <input 
                type="text" 
                placeholder="First name" 
                name="firstName"
                onChange={handleInputChange}
            />
            <input 
                type="text" 
                placeholder="Last name" 
                name="lastName"
                onChange={handleInputChange}
            />
            <button type="submit">Send</button>
            <h3>{datos.firstName} - {datos.lastName}</h3>
        </form>
    )
}

export default Form