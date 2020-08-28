import styled, {css} from 'styled-components'

const display = css`
    display: flex;
    flex-direction: column;
    padding: 8px 6px;
`

const noDisplay = css`
    display: none;
`

const hoverEffect = css`
    background: black;
    color: white;
    cursor: pointer;
`

const noHover = css`
    background: inherit;
    color: inherit;
    cursor: pointer;
`

const getStyle = ({visibility}) => {
    if(visibility){
        return display;
    } else{
        return noDisplay;
    }
}

const getHoverAvaliable = ({loading}) => {
    if(!loading){
        return hoverEffect
    } else{
        return noHover
    }
}

export const ComponentContainer = styled.div`
    text-align: center;
    position: absolute;
    right: 20px;
    bottom: 20px;
`

export const TaskForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 9px auto;
    text-align: start;
`


export const FormInput = styled.input`
    width: 75%;
    margin: 0 auto;
    margin-bottom: 10px;
    outline: none;
    border: none;
    border-bottom: 1px solid #777;
    transition: 100ms ease-out;
    padding: 8px 16px;
    &:-moz-ui-invalid{
        box-shadow: none
    }
    &::placeholder{
        color: #111;
    }
    @media screen and (max-width: 875px){
        margin: 15px auto;
    }
`

export const SubmitButton = styled.button`
    border: 1px solid black;
    margin: 0 auto;
    margin-top: 10px;
    padding: 12px 8px;
    background: none;
    transition: 90ms ease-in-out;
    width: 80%;
    &:hover{
        ${getHoverAvaliable}
    };
    &:active{
    };
    @media screen and (max-width: 875px){
        margin: auto;
        margin-top: 40px;;
    }
`

export const Title = styled.h1`
    font-size: 1.25rem;
    margin: 0;
    margin-top: 8px;
`

export const TaskAddToggle = styled.div`
    height: 60px;
    width: 60px;
    border-radius: 50%;
    background-color: #2196F3;
    font-size: 38px;
    color: white;
    position: fixed;
    right: 200px;
    bottom: 60px;
    &:hover{
        cursor: pointer;
    }
    p{
        margin: 0 auto;
        user-select: none;
    }
    @media screen and (max-width: 875px){
        right: 40px;
        bottom: 40px;
        font-size: 45px;
    }
`

export const TaskAddContainer = styled.div`
    position: fixed;
    right: 80px;
    bottom: 160px;
    background: white;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.36);
    width: 230px;
    ${getStyle};
    @media screen and (max-width: 875px){
        left: 10%;
        bottom: 60px;
        width: 300px;
        height: 400px;
    }
    @media screen and (max-width: 678px){
        width: 70%;
        height: 400px;
        left: 50px;
        bottom: 120px;
    }
`


export const Selection = styled.select`
    padding: 4px 6px;
    border: none;
    border-bottom: 1px solid #777;
    transition: 300ms ease-in-out;
    width: 200px;
    margin: 0 auto;
    margin-bottom: 10px;
    &:active, &:focus{
        outline: none;
    }
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E');
    background-repeat: no-repeat, repeat;
    background-position: right .7em top 50%, 0 0;
    background-size: .65em auto, 100%;
    @media screen and (max-width: 875px){
        width: 250px;
        margin: 15px auto;
    }
`