import React from 'react';
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux';
import uid from 'uid'

import { Holder, CategoryContainer } from './globalContainerStyles';

import { selectCurrentUser } from '../../redux/user/userSelectors';
import { selectAddTodoDisplay } from '../../redux/display/displaySelectors'
import { selectCategories } from '../../redux/category/categorySelectors'

// import {firestore} from '../../firebase/firebase'

// import AddTodo from '../addTodo/addTodo'
import TaskHeader from '../TaskHeader/taskHeader'

import TaskContainer from '../tasksContainer/tasksContainer'
import AddTodo from '../addTodo/addTodo';


class GlobalContainer extends React.Component{
    constructor(){
        super()
        this.state = {
            display: false
        }
    }

    // componentDidMount(){
    //     const { user, seedRedux, tasks } = this.props
    //     // eslint-disable-next-line
    //     if(tasks == false){
    //         var tasksRef = firestore.collection("users").doc(user.id).collection("tasks").doc("tasks")
    //         tasksRef.get().then(doc => {
    //             var { tasks } = doc.data();
    //             seedRedux(tasks)
    //     })}

    // }

    render(){
        const { categories } = this.props
        return(
            <Holder type='Global'>
                <Holder type='Category'>
                    {
                        categories 
                        ? 
                        categories.map(category => (<CategoryContainer key={uid(2)} >{category}</CategoryContainer>))
                        : null
                    }
                </Holder>
                <Holder type='Tasks'>
                    <TaskHeader />
                    <TaskContainer />
                    <AddTodo />
                </Holder>
                <Holder type='Info'>
                    Info Container Text
                </Holder>
            </Holder>
        )
    }
};

const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser,
    visibility: selectAddTodoDisplay,
    categories: selectCategories
})

export default connect(mapStateToProps)(GlobalContainer);