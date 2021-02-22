import React , { useState } from 'react'
import {Form, Label, InputGroup, Input, ValideIcon, ErrorMessage, TermsContainer, ErrorInput, SuccessMessage, ButtonContainer,  Button} from './elements/Form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faTimesCircle, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'

const App = () => {

  return (
    <main className="app">
        <Form>
            <div>
                <Label htmlFor="">Usuario</Label>
                <InputGroup>
                    <Input type="text" placeholder="usuario"/>
                    <ValideIcon icon={faCheckCircle}/>
                </InputGroup>
                <ErrorInput>Texto de ejemplo</ErrorInput>
            </div>
            <TermsContainer>
                <Label>
                    <input type="checkbox" name="terms" id="terms" />
                    Acepto los Terminos y Condiciones
                </Label>
            </TermsContainer>
            {false && <ErrorMessage>
                <p><FontAwesomeIcon icon={faExclamationTriangle} /><b>Error:</b> Por favor rellena el formulario correctamente</p>
            </ErrorMessage>}
            <ButtonContainer>
                <Button type="submit">Enviar</Button>
                <SuccessMessage>El formulario se envio correctamente</SuccessMessage>
            </ButtonContainer>
        </Form>
    </main>
  );
}

export default App
