import styled from 'styled-components'

export const TaskAddContainer = styled.div`
    text-align: center;
`

export const TaskForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 300px;
    padding: 10px 18px;
    margin: 15px auto;
    background: #e6e6ea;
    box-shadow: 4px 7px 8px -4px rgba(0,0,0,.61)
`


export const FormInput = styled.input`
    width: 200px;
    margin-bottom: 10px;
    outline: none;
    border: none;
    border-bottom: 1px solid #777;
    transition: 100ms ease-out;
    padding: 8px 16px;
    background: #e6e6ea;
    &:-moz-ui-invalid{
        box-shadow: none
    }
    &::placeholder{
        color: #111;
    }
`

export const SubmitButton = styled.input`
    border: 1px solid black;
    margin-top: 10px;
    padding: 12px 8px;
    background: none;
    transition: 90ms ease-in-out;
    &:hover{
        background: black;
        color: white;
    }
`

export const Title = styled.h1`
    font-size: 1.5rem
`