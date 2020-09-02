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

const isDarkMode = css`
    ${Toggle}{
        color: #e7eff6
    }
    ${Input}{
        color: #e7eff6;
        border-bottom: 1px solid #e7eff6;
        &::placeholder{
            color: rgba(255,255,255,.8)
        }
    }
    ${Submit}{
        border: 1px solid #e7eff6;
        color: #e7eff6;
    }
`

const getMode = ({dayMode}) => {
    if(!dayMode){
        return isDarkMode
    }
    return ''
}

export const DarkMode = styled.div`
    ${getMode}
`