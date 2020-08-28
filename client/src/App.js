import React from 'react';
import './App.css';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom'

import SignIn from './components/sign-in/signIn';

import { auth, createUserProfile } from './firebase/firebase';

import Main from './pages/Main';

import { selectCurrentUser } from './redux/user/userSelectors';
import { setCurrentUser} from './redux/user/userActions';

import { AddCategory } from './redux/tasks/taskActions';

import { TestCategories } from './testSuite'

import Spinner from './components/spinner/spinner'

const SpinnerContainer = () => {
  return(
    <div style={{marginTop: '90px'}}>
      <Spinner size='120px'/>
    </div>
  )
}

class App extends React.Component {
  unsubscribeFromAuth = null;
  constructor(){
    super()

    this.state = {
      loggingIn: false
    }
  }

  componentDidMount(){
    const { setUser, addCategories } = this.props
    addCategories(TestCategories)
    
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
      <div>
        <Switch>
          <Route path="/" render={() =>
              this.props.user ? (<Main />) : this.handleLogin()
          } />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
})

const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch(setCurrentUser(user)),
  addCategories: categories => dispatch(AddCategory(categories)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
