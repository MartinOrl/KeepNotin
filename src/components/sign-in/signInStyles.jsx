import styled from 'styled-components'

export const LoginContainer = styled.div`
    margin-top: 80px;
    text-align: center;
`

export const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 60%;
    margin: 0 auto;
`

export const FormInput = styled.input`
    padding: 8px 16px;
    border: none;
    border-bottom: 1px solid #666;
    width: 400px;
    margin: 16px auto;
    outline: none;
`

export const SubmitButton = styled.input`
    border: none;
    padding: 16px 56px;
    margin: 16px auto;
    border: 1px solid black;
    background: none;
    transition: 300ms cubic-bezier(0.19, 1, 0.22, 1);
    &:hover{
        color: white;
        background: black;
        cursor: pointer;
    }
`

export const Title = styled.h1`
    font-size: 1.5rem;
    font-weight: 400;
`

export const Subtitle = styled.p`
    font-size: 1.2rem;
    font-weight: 300;
`