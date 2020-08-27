import React, {useEffect} from 'react';
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux';
import uid from 'uid'

import { Holder, CategoryContainer } from './globalContainerStyles';

import { selectCurrentUser } from '../../redux/user/userSelectors';

import {firestore} from '../../firebase/firebase'

import TaskHeader from '../TaskHeader/taskHeader'

import TaskContainer from '../tasksContainer/tasksContainer'
import AddTodo from '../addTodo/addTodo';
import { selectTasks, selectCategory, selectCategories, selectSearch } from '../../redux/tasks/taskSelectors';
import { getTasksByCategory, getTasksBySearch } from '../../redux/tasks/taskUtils';
import { SetCurrentCategory, AddTask } from '../../redux/tasks/taskActions';


const GlobalContainer = ({categories, currentCategory, tasks, setCategory, user, addTask, searchTerm}) => {
    // useEffect(() => {
    //         var tasksRef = firestore.collection('users').doc(user.id).collection('tasks').doc('tasks')
    //         tasksRef.get().then(doc => {
    //             var tasksFromFirebase  = doc.data().tasks;
    //             console.log(tasksFromFirebase)
    //             addTask(tasksFromFirebase)
    //         })
    // }, [addTask, user])

    var tasksToDisplay;

    var tasksByCategory = getTasksByCategory(tasks, currentCategory);
    const handleClick = event => {
        setCategory(event.target.textContent)
    };
    if(searchTerm){
        tasksToDisplay = getTasksBySearch(tasksByCategory, searchTerm)
    }else{
        tasksToDisplay = tasksByCategory
    }
    

    return(
        <Holder type='Global'>
            <Holder type='Category'>
                {
                    categories 
                    ? 
                    categories.map(category => (<CategoryContainer key={uid(2)} onClick={handleClick} >{category}</CategoryContainer>))
                    : null
                }
            </Holder>
            <Holder type='Tasks'>
                <TaskHeader />
                <TaskContainer tasks={tasksToDisplay} />
                <AddTodo />
            </Holder>
            <Holder type='Info'>
                Info Container Text
            </Holder>
        </Holder>
    )
}


const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser,
    tasks: selectTasks,
    categories: selectCategories,
    currentCategory: selectCategory,
    searchTerm: selectSearch
})

const mapDispatchToProps = dispatch => ({
    setCategory: category => dispatch(SetCurrentCategory(category)),
    addTask: task => dispatch(AddTask(task))
})

export default connect(mapStateToProps, mapDispatchToProps)(GlobalContainer);