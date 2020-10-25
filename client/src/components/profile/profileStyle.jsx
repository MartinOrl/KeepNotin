import styled, { css } from 'styled-components'

export const GlobalContainer = styled.div`
    width: 90%;
    margin: 20px auto;
    height: 80%;
    background: white;
    padding: 16px 32px;
`

export const Option = styled.p`
    margin: 8px 0;
    font-size: 1.2rem;
`

export const Separator = styled.hr`
    width: 90%;
`

export const Input = styled.input`
    background: none;
    border: none;
    border-bottom: 1px solid black;
    padding: 8px 12px;
    margin-right: 16px;
    outline: none;
`

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 16px;
`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
`

const getActive = ({active}) => {
    if(active){
        return 'border-bottom: 1px solid black'
    }
    return ''
}

export const InputDisplayToggle = styled.img`
    height: 15px;
    width: auto;
    object-fit: contain;
    border: none;
    transition: 300ms ease-in-out;
    position: absolute;
    top: 25%;
    right: 20px;
    &:hover{
        cursor: pointer;
    }
    ${getActive}

`

export const SubmitButton = styled.button`
    padding: 12px 32px;
    border: 1px solid black;
    background: none;
    transition: 300ms ease-in-out;
    &:hover{
        background: black;
        color: white;
        cursor: pointer;
    }
`

export const DeleteAccount = styled.button`
    padding: 12px 32px;
    border: 1px solid red;
    background: none;
    color: red;
    transition: 300ms ease-in-out;
    &:hover{
        background: rgba(255,0,0,.4);
        color: black;
        cursor: pointer;
    }
`

const isDarkMode = css`
    ${GlobalContainer}{
        background: #283655;
        & *{
            color: #f8f8f4;
        }
    }
    ${DeleteAccount}{
        color: red;
        &:hover{
            color: black;
        }
    }
`

const getMode = ({dayMode}) => {
    if(!dayMode){
        return isDarkMode
    }
    return ''
}

export const DarkMode = styled.div`
    height: 100%;
    width: 100%;
    ${getMode}
`