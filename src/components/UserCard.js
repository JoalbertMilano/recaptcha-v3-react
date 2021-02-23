import React from 'react'
import { UserCardContainer, ButtonCardContainer} from '../elements/UsersList'

const UserCard = ({ id, user, name, email, phone}) => {
    return(
        <UserCardContainer>
            <span>ID:<label>{id}</label></span>
            <span>Usuario: <label>{user}</label></span>
            <span>Nombre: <label>{name}</label></span>
            <span>Correo: <label>{email}</label></span>
            <span>Telefono: <label>{phone}</label></span>
            <ButtonCardContainer>
                <button>Editar</button>
                <button>ELiminar</button>
            </ButtonCardContainer>
        </UserCardContainer>
    )
}

export default UserCard