import React from 'react'
import { Label, InputGroup, Input, ValideIcon, ErrorInput } from '../elements/Form'
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons'

const InputComponent = ({state, setState, type, label, placeholder, name, errorInputMessage, regularExpression, funcion }) =>{
    
    const onChange = (e) =>{
        setState({...state, campo: e.target.value})
    }

    const validate = () =>{
        if(regularExpression){
            if(regularExpression.test(state.campo)){
                setState({...state, valido: 'true'})
            }
            else{
                setState({...state, valido: 'false'})
            }
        }
        if(funcion){
            funcion();
        }
    }
    
    return(
        <div>
            <Label htmlFor={name} valid={state.valido}>{label}</Label>
            <InputGroup>
                <Input 
                    type={type} 
                    placeholder={placeholder} 
                    id={name}
                    value={state.campo}
                    onChange={onChange}
                    onKeyUp={validate}
                    onBlur={validate}
                    valid={state.valido}
                />
                <ValideIcon 
                    icon={state.valido === 'true' ? faCheckCircle : faTimesCircle} 
                    valid={state.valido}
                />
            </InputGroup>
            <ErrorInput valid={state.valido}>{errorInputMessage}</ErrorInput>
        </div>
    )
}

export default InputComponent