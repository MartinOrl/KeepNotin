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
import { AddCategory } from './redux/category/categoryActions';

import { TestCategories, TestTasks } from './testSuite'
import { AddTask } from './redux/tasks/taskActions';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount(){
    const { setUser, addCategories, addTask } = this.props
    addCategories(TestCategories)
    addTask(TestTasks)

    if(process.env.NODE_ENV !== 'development'){
      console.log("Google Login Start")
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
      })}
    else{
      setUser({
        id:"Lol"
      })
    }
  }
  

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){

    return(
      <div>
        <Switch>
          <Route path="/" render={() =>
              this.props.user ? (<Main />) : (<SignIn/>)
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
  addTask: task => dispatch(AddTask(task))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
