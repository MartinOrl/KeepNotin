import styled, { css } from 'styled-components'

const isActive = css`
    transform: rotate(45deg)
`

const getStyle = ({active}) => {
    if(active){
        return isActive
    }
    return null
}


export const Container = styled.div`
    margin: 8px 0;
    width: 100%;
`

export const Toggle = styled.p`
    font-size: 40px;
    margin: 0 auto;
    text-align: center;
    user-select: none;
    font-weight: 300;
    transition: 300ms ease-in-out;
    ${getStyle};
    &:hover{
        cursor: pointer;
    }
`

export const Input = styled.input`
    border: none;
    outline: none;
    padding: 6px 8px;
    border-bottom: 1px solid #777;
    background: none;
    margin-left: 40px;
    font-size: 15px;
`

export const Form = styled.form`

`

export const Submit = styled.button`
    margin-left: 12px;
    padding: 4px 16px;
    border: 1px solid #777;
    outline: none;
    background: none;

`