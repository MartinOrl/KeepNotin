
// eslint-disable-next-line
import React, {useEffect, useState} from 'react';
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux';
import uid from 'uid'

import { Holder, CategoryContainer, CategoryCollapse, CategoryTitle, CategoryInfoContainer } from './globalContainerStyles';

import { selectCurrentUser } from '../../redux/user/userSelectors';
// eslint-disable-next-line
import {firestore} from '../../firebase/firebase'

import TaskHeader from '../TaskHeader/taskHeader'

import TaskContainer from '../tasksContainer/tasksContainer'
import AddTodo from '../addTodo/addTodo';
import CategoryAdd from '../addCategory/addCategory'

import { selectTasks, selectCategory, selectCategories, selectSearch } from '../../redux/tasks/taskSelectors';
import { getTasksByCategory, getTasksBySearch } from '../../redux/tasks/taskUtils';
import { SetCurrentCategory, AddTask, AddCategory } from '../../redux/tasks/taskActions';

import { TestTasks } from '../../testSuite'


const GlobalContainer = ({categories, currentCategory, tasks, setCategory, user, addTask, searchTerm, addCategory}) => {
    const [collapse, setCollapse] = useState(false)

    const seedFromFirebase = () => {
        var taskRef = firestore.collection('users').doc(user.id).collection('tasks').doc('tasks')
        taskRef.get().then(doc => {
            var tasksFromDatabase = doc.data().tasks;
            var categoriesFromDatabase = doc.data().categories;
            addTask(tasksFromDatabase)
            addCategory(categoriesFromDatabase)
        })
    }

    useEffect(() => {
        if(user.id){
            if(user.id === 'Demo'){
                addTask(TestTasks)
            }
            if(user.id.length > 16){
                seedFromFirebase()
            }
        }
    // eslint-disable-next-line
    }, [addTask, user])

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
            <Holder type='Category' collapse={collapse}>
                <CategoryTitle>Categories</CategoryTitle>
                    <CategoryInfoContainer collapse={collapse}>
                    {
                        categories 
                        ? 
                        categories.map(category => (<CategoryContainer key={uid(2)} onClick={handleClick} active={category === currentCategory ? true : null} >{category}</CategoryContainer>))
                        : null
                    }
                    <CategoryAdd user={user} />
                </CategoryInfoContainer>
                <CategoryCollapse onClick={() => setCollapse(!collapse)} collapse={collapse} >&gt;</CategoryCollapse>
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
    addTask: task => dispatch(AddTask(task)),
    addCategory: category => dispatch(AddCategory(category))
})

export default connect(mapStateToProps, mapDispatchToProps)(GlobalContainer);