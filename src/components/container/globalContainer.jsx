import React from 'react';
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux';
import uid from 'uid'

import { Holder, CategoryContainer } from './globalContainerStyles';

import { selectCurrentUser } from '../../redux/user/userSelectors';
import { selectAddTodoDisplay } from '../../redux/display/displaySelectors'
import { selectCategories, selectCategory } from '../../redux/category/categorySelectors'

// import {firestore} from '../../firebase/firebase'

import TaskHeader from '../TaskHeader/taskHeader'

import TaskContainer from '../tasksContainer/tasksContainer'
import AddTodo from '../addTodo/addTodo';
import { selectTasks } from '../../redux/tasks/taskSelectors';
import { getTasksByCategory } from '../../redux/tasks/taskUtils';
import { SetCurrentCategory } from '../../redux/category/categoryActions';


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
    handleClick = event => {
        this.props.setCategory(event.target.textContent)
    }



    render(){
        const { categories, currentCategory, tasks } = this.props
        const tasksByCategory = getTasksByCategory(tasks, currentCategory)

        return(
            <Holder type='Global'>
                <Holder type='Category'>
                    {
                        categories 
                        ? 
                        categories.map(category => (<CategoryContainer key={uid(2)} name={category} onClick={this.handleClick} >{category}</CategoryContainer>))
                        : null
                    }
                </Holder>
                <Holder type='Tasks'>
                    <TaskHeader />
                    <TaskContainer tasks={tasksByCategory} />
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
    tasks: selectTasks,
    categories: selectCategories,
    currentCategory: selectCategory
})

const mapDispatchToProps = dispatch => ({
    setCategory: category => dispatch(SetCurrentCategory(category))
})

export default connect(mapStateToProps, mapDispatchToProps)(GlobalContainer);