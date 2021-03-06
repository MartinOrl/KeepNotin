import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components'

import SignIn from './components/sign-in/signIn';

import { auth, createUserProfile } from './firebase/firebase';

import Main from './pages/Main';

import { selectCurrentUser } from './redux/user/userSelectors';
import { setCurrentUser} from './redux/user/userActions';

import Spinner from './components/spinner/spinner'
import { SelectMode } from './redux/display/displaySelectors';

const SpinnerContainer = () => {
  return(
    <div style={{marginTop: '90px'}}>
      <Spinner size='120px'/>
    </div>
  )
}

const DarkMode = styled.div`
  background: ${props => !props.dayMode ? '#072540' : '#eee'} !important;
  min-height: 100vh;
`

class App extends React.Component {
  unsubscribeFromAuth = null;
  constructor(){
    super()

    this.state = {
      loggingIn: false
    }
  }

  componentDidMount(){
    const { setUser} = this.props
    
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        console.log("User State has Changed")
        this.setState({loggingIn: true})
        const userRef = await createUserProfile(userAuth);
        userRef.onSnapshot(snapShot => {
          setUser({
            id: snapShot.id,
            ...snapShot.data()
          })
          this.setState({loggingIn: false})
        })
      }
      
    })
      
}
  handleLogin = () => {
    if(this.state.loggingIn){
      return <SpinnerContainer />
    }
    return <SignIn />
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){

    return(
      <DarkMode dayMode={this.props.dayMode}>
        <Switch>
          <Route path="/" render={() =>
              this.props.user ? (<Main />) : this.handleLogin()
          } />
        </Switch>
      </DarkMode>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
  dayMode: SelectMode
})

const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
