import styled from 'styled-components'

export const TaskAddContainer = styled.div`
    text-align: center;
`

export const TaskForm = styled.form`
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    width: 300px;
    padding: 10px 18px;
    margin: 15px auto;
`

export const FormInput = styled.input`
    width: 200px;
    margin-bottom: 10px;
    outline: none;
    border: none;
    border-bottom: 1px solid #777;
    transition: 100ms ease-out;
    padding: 8px 16px;
    &:focus{
        background: rgb(245, 245, 245); 
    };
    &:-moz-ui-invalid{
        box-shadow: none
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