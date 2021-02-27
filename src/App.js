import React , { useState, useRef, useCallback } from 'react'
import {Form, Label, ErrorMessage, TermsContainer, SuccessMessage, ButtonContainer,  Button} from './elements/Form'
import { UserList} from './elements/UsersList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { GoogleReCaptcha, useGoogleReCaptcha } from 'react-google-recaptcha-v3' 
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import InputComponent from './components/Input'
import UserCard from './components/UserCard'

const App = () => {

    const [user, setUser] = useState({campo: '', valido: null})
    const [name, setName] = useState({campo: '', valido: null})
    const [password, setPassword] = useState({campo: '', valido: null})
    const [confirmedPassword, setConfirmedPassword] = useState({campo: '', valido: null})
    const [email, setEmail] = useState({campo: '', valido: null})
    const [phone, setPhone] = useState({campo: '', valido: null})
    const [terms, setTerms] = useState(false)
    const [validForm, setValidForm] = useState(null)
    const [token, setToken] = useState('')

    const expressions = {
        user: /^[a-zA-Z0-9_-]{4,16}$/, 
        name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
        password: /^.{4,12}$/,
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        phone: /^\d{7,14}$/
    }


    const validateConfirmedPassword = () =>{
        if(password.campo.length > 0){
            if(password.campo !== confirmedPassword.campo){
                setConfirmedPassword((prevState) =>{
                    return {...prevState, valido: 'false'}
                })
            }
            else{
                setConfirmedPassword((prevState) =>{
                    return {...prevState, valido: 'true'}
                })
            }
        }
    }

    const onChangeTerminos = (e) => {
        setTerms(e.target.checked)
    }

    const onVerifyRecaptcha = useCallback(
        token => {
            setToken(token)
            console.log(token)
        },
        [setToken]
    )

    const onSubmit = (e) => {

        e.preventDefault()

        if(
            user.valido === 'true' &&
            name.valido === 'true' &&
            password.valido === 'true' &&
            confirmedPassword.valido === 'true' &&
            email.valido === 'true' &&
            phone.valido === 'true' &&
            terms
        ){
            setValidForm(true)
            setUser({campo: '', valido: null})
            setName({campo: '', valido: null})
            setPassword({campo: '', valido: null})
            setConfirmedPassword({campo: '', valido: null})
            setEmail({campo: '', valido: null})
            setPhone({campo: '', valido: null})
            setTerms(false)

        }
        else{
            setValidForm(false)
        }
    }

  return (
    <main>
        <Form action="" onSubmit={onSubmit}>
            <InputComponent 
                state={user}
                setState={setUser}
                type="text"
                label="Usuario"
                placeholder="Ingresa un usuario"
                name="usuario"
                errorInputMessage="El usuario tiene que ser de 4 a 16 digitos y solo puede contener numeros, letras y guion bajo."
                regularExpression={expressions.user}
            />  
            <InputComponent 
                state={name}
                setState={setName}
                type="text"
                label="Nombre"
                placeholder="Ingresa un Nombre"
                name="nombre"
                errorInputMessage="El nombre solo puede contener letras y espacios."
                regularExpression={expressions.name}
            />
            <InputComponent 
                state={password}
                setState={setPassword}
                type="password"
                label="Contraseña"
                placeholder="Ingresa una contraseña"
                name="password"
                errorInputMessage="La contraseña tiene que ser de 4 a 12 digitos."
                regularExpression={expressions.password}
            />
            <InputComponent 
                state={confirmedPassword}
                setState={setConfirmedPassword}
                type="password"
                label="Confirmar contraseña"
                placeholder="Confirma la contraseña"
                name="confirmedPassword"
                errorInputMessage="Ambas contraseñas deben ser iguales."
                funcion={validateConfirmedPassword}
            />
            <InputComponent 
                state={email}
                setState={setEmail}
                type="email"
                label="Correo"
                placeholder="Ingresa un correo"
                name="email"
                errorInputMessage="El correo solo puede contener letras, numeros, puntos, guiones y guion bajo."
                regularExpression={expressions.email}
            />
            <InputComponent 
                state={phone}
                setState={setPhone}
                type="text"
                label="Telefono"
                placeholder="Ingresa un telefono"
                name="phone"
                errorInputMessage="El telefono solo puede contener numerosm un minimo de 7 digitos y un maximo de 14 digitos."
                regularExpression={expressions.phone}
            />
            <TermsContainer>
                <Label>
                    <input 
                        type="checkbox" 
                        name="terms" 
                        id="terms" 
                        checked={terms} 
                        onChange={onChangeTerminos}
                    />
                    Acepto los Terminos y Condiciones
                </Label>
                <GoogleReCaptcha
                    onVerify={onVerifyRecaptcha}
                />
            </TermsContainer>
            {validForm === false && <ErrorMessage>
                <p><FontAwesomeIcon icon={faExclamationTriangle} /><b>Error:</b> Por favor rellena el formulario correctamente</p>
            </ErrorMessage>}
            <ButtonContainer>
                <Button type="submit">Crear</Button>
                {validForm === true && <SuccessMessage>El formulario se envio correctamente</SuccessMessage>}
            </ButtonContainer>
        </Form>
        <UserList>
            <h3>Uusarios registrados</h3>
            <UserCard 
                id="1564683"
                user="DrackMaster"
                name="Joalbert Milano"
                email="joalbertmilano@gmail.com"
                phone="123456789"
            />
            <UserCard 
                id="1564683"
                user="DrackMaster"
                name="Joalbert Milano"
                email="joalbertmilano@gmail.com"
                phone="123456789"
            />
            <UserCard 
                id="1564683"
                user="DrackMaster"
                name="Joalbert Milano"
                email="joalbertmilano@gmail.com"
                phone="123456789"
            />
            <UserCard 
                id="1564683"
                user="DrackMaster"
                name="Joalbert Milano"
                email="joalbertmilano@gmail.com"
                phone="123456789"
            />
        </UserList>
    </main>
  );
}

export default App
