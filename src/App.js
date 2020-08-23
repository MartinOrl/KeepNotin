import React from 'react';
import './App.css';
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'

import SignIn from './components/sign-in/signIn'

import { auth, createUserProfile } from './firebase/firebase'

import Main from './pages/Main'
import { selectCurrentUser } from './redux/user/userSelectors';
import { setCurrentUser} from './redux/user/userActions'

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount(){
    const { setUser } = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfile(userAuth);
        userRef.onSnapshot(snapShot => {
          setUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
      }
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }


  render(){
    return(
      <div>
        {
          this.props.user ? 
            <Main />
          : 
          <SignIn />
        }
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
})

const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
