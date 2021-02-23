import styled from 'styled-components'

const UserList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    width: 90%;
    margin: auto;

    h3{
        grid-column: span 2;
        text-align: center;
    }
`

const UserCardContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin: 20px;
    padding: 10px;
    border-radius: 3px;
    box-shadow: 5px 0 30px rgba(163, 163, 163, 0.3);

    span{
        font-weight: 600;
        overflow: hidden;

        label{
            display: block;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            font-weight: initial;
            border-bottom: solid 2px #48dbfb;
        }

        &:first-child{
            grid-column: span 2;

            label{
                margin-left: 10px;
                display: inline !important;
            }
        }

    }
`

const ButtonCardContainer = styled.div`
    grid-column: span 2;
    display: flex;
    justify-content: space-around;

    button{
        min-width: 90px;
        padding: 5px;
        font-weight: 600;
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
    }
`

export {UserList, UserCardContainer, ButtonCardContainer}