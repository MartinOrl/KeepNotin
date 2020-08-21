import React from 'react';
import './App.css';


import SignIn from './components/sign-in/signIn'

import { auth, createUserProfile } from './firebase/firebase'

import CurrentUserContext from './contexts/user/currentUserContext'

import TasksContext from './contexts/tasks/tasksContext'

import Main from './pages/Main'

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null,
      tasks: null
    };

  }


  unsubscribeFromAuth = null;

  componentDidMount(){

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfile(userAuth);
        userRef.onSnapshot(snapShot => {
          console.log(snapShot.data())
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }, () => {console.log(this.state.currentUser)})
        })
      }
      this.setState({currentUser: userAuth})
    })

  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }


  render(){
    return(
      <div>
      <CurrentUserContext.Provider value={this.state.currentUser}>
        {
          this.state.currentUser ? 

          <TasksContext.Provider value={this.state.tasks}>
            <Main />
          </TasksContext.Provider>  

          : 

          <SignIn />
        }
        </CurrentUserContext.Provider>
      </div>
    )
  }
}


export default App;
