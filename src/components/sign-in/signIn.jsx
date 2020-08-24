import React from 'react'
import { auth } from '../../firebase/firebase'

import { LoginContainer, LoginForm, FormInput, SubmitButton, Title, Subtitle } from './signInStyles'

class SignIn extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            email: "",
            password: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try{
            await auth.signInWithEmailAndPassword(email, password);
            console.log("Logging in")
            this.setState({email: '', password: ''})
        }catch (error){
            console.error(error)
        }
    }

    render(){
        return(
            <LoginContainer>
                <Title>Welcome!</Title>
                <Subtitle>Please, Log In!</Subtitle>
                <LoginForm onSubmit={this.handleSubmit}>
                    <FormInput type="email" name="email" onChange={this.handleChange} value={this.state.userName} placeholder='Email'  />
                    <FormInput type="password" name="password" onChange={this.handleChange} value={this.state.password} placeholder='Password'  />
                    <SubmitButton type="submit" value="Log In" />
                </LoginForm>
            </LoginContainer>
        )
    }


}

export default SignIn