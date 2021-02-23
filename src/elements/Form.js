import styled, { css } from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const colors = {
    border: "#48dbfb",
    error: "#e17055",
    success: "#10ac84"
}

const Form = styled.form`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
`

const Label = styled.label`
    display: block;
    font-weight: 700;
    margin-left: 10px;
    padding: 10px 0;
    min-height: 40px;
    cursor: pointer;

    ${props => props.valid === 'false' && css`
        color: ${colors.error};
    `}
`

const InputGroup = styled.div`
    position: relative;
    z-index: 10;

    /* FLEX */
    display: flex;
    align-items: center;
`

const Input = styled.input`
    width: 100%;
    height: 45px;
    padding: 0 30px 0 10px;
    line-height: 45px;
    font-size: 18px;
    border-radius: 3px;
    border: solid 3px transparent;
    transition: all 0.5s ease;

    &:focus {
        border: 3px solid ${colors.border};
        outline: none;
        box-shadow: 3px 0 30px rgba(163,163,163,0.4);
    }

    ${props => props.valid === 'true' && css`
        border: solid 3px transparent;
    `}

    ${props => props.valid === 'false' && css`
        border: solid 3px ${colors.error} !important;
    `}
`
const ValideIcon = styled(FontAwesomeIcon)`
    position: absolute;
    right: 10px;
    font-size: 16px;
    opacity: 0;
    z-index: 20px;

    ${props => props.valid === 'true' && css`
        opacity: 1;
        color: ${colors.success};
    `}

    ${props => props.valid === 'false' && css`
        opacity: 1;
        color: ${colors.error};
    `}
`

const ErrorInput = styled.p`
    margin: 10px 0;
    font-size: 12px;
    color: ${colors.error};
    display: none;

    ${props => props.valid === 'true' && css`
        display: none;
    `}

    ${props => props.valid === 'false' && css`
        display: block;
    `}
`;

const TermsContainer = styled.div`
    grid-column: span 2;

    input{
        margin-right: 10px;
    }
`

const ErrorMessage = styled.div`
    grid-column: span 2;

    b{
        margin-left: 10px;
    }
`

const SuccessMessage = styled.p`
    font-size: 14px;
    color: ${colors.success};
`

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-column: span 2;

    p{
        margin: 10px 0;
    }
`

const Button = styled.button`
    padding: 5px 15px;
    font-size: 18px;
    font-weight: 500;
    color: white;
    background-color: #0abde3;
    border: solid 2px black;
    border-radius: 10px;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.5s ease;

    &:hover{
        background-color: #48dbfb;
        box-shadow: 3px 0px 30px rgba(163,163,163,0.5);
    }
    &:focus{
        outline: none;
    }
`

export {
    Form, 
    Label, 
    InputGroup, 
    Input, 
    ValideIcon, 
    ErrorMessage, 
    TermsContainer, 
    ErrorInput, 
    SuccessMessage, 
    ButtonContainer, 
    Button
}