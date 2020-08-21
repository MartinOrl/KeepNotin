import React from 'react'
import { auth } from '../../firebase/firebase'

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
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="email" name="email" onChange={this.handleChange} value={this.state.userName} />
                    <input type="password" name="password" onChange={this.handleChange} value={this.state.password} />
                    <input type="submit" />
                </form>
            </div>
        )
    }


}

export default SignIn