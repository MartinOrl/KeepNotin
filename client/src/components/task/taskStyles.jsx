import styled, { css } from 'styled-components'

const completed = css`
    text-decoration: line-through;
    opacity: 0.4;
`

const getStyle = ({status}) => {
    if(status){
        return completed
    }
}

export const TaskContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    margin: 8px 0;
    transition: 300ms ease-in-out;

`

export const Title = styled.h1`
    margin: 0;
    font-size: 1.2rem;
    font-weight: 400;
    margin-bottom: 3px;
    transition: 300ms ease-in-out;
`

export const Text = styled.p`
    opacity: 0.4;
    margin: 0;
    transition: 300ms ease-in-out;
`

export const TaskInformation = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: auto;
    margin-left: 20px;
    ${Title}, ${Text} {
        ${getStyle}
    }
`


export const CompleteContainer = styled.label`
    display: block;
    position: relative;
    cursor: pointer;
    font-size: 22px;
    user-select: none;
    margin: auto 30px auto 0;
`
export const Tick = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    height: 35px;
    width: 35px;
    background-color: #eee;
    transition: 300ms ease-in-out;
    border-radius: 50%;
    &:after{
        content: '';
        position: absolute;
        display: none;
        left: 12px;
        top: 8px;
        width: 8px;
        height: 13px;
        border: solid white;
        border-width: 0 3px 3px 0;
        transform: rotate(45deg);
    }
`

export const SetImportant = styled.img`
    width: 20px;
    height: auto;
    &:hover{
        cursor: pointer;
    }
`

export const Separator = styled.hr`
    opacity: 0.3;
    margin: 4px 0;
    margin-left: auto;
    width: 98%;
`

export const Complete = styled.input`
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
    &:checked ~ ${Tick}{
        background-color: #2196F3;
    }
    &:checked ~ ${Tick}:after{
        display: block;
    }
`

export const RemoveToggle = styled.div`
    margin: auto 20px;
    transition: 200ms ease-in-out;
    font-size: 20px;
    &:hover{
        color: red;
        cursor: pointer;
    }
`