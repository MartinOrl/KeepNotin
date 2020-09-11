
// eslint-disable-next-line
import React, {useEffect, useState} from 'react';
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux';
import uid from 'uid'

import { DarkMode, CategoryContainer, CategoryCollapse, CategoryTitle, CategoryInfoContainer, CategoryHolder, TasksHolder, InfoHolder, GlobalHolder } from './globalContainerStyles';

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

import { TestTasks, TestCategories } from '../../testSuite'
import { SelectMode } from '../../redux/display/displaySelectors';


const GlobalContainer = ({categories, currentCategory, tasks, setCategory, user, addTask, searchTerm, addCategory, dayMode}) => {
    const [collapse, setCollapse] = useState(false)
    console.log(tasks.length)

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
                if(tasks.length === 0){
                    addTask(TestTasks)
                    addCategory(TestCategories)
                }
            }
            if(user.id === 'Guest'){
                if(tasks.length === 0){
                    addCategory(TestCategories)
                }
            }
            if(user.id.length > 16){
                if(tasks.length === 0){
                    seedFromFirebase()
                }
                
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
        <DarkMode dayMode={dayMode}>
            <GlobalHolder>
                <CategoryHolder collapse={collapse}>
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
                </CategoryHolder>
                <TasksHolder>
                    <TaskHeader />
                    <TaskContainer tasks={tasksToDisplay} />
                    <AddTodo />
                </TasksHolder>
                <InfoHolder>
                    Info Container Text
                </InfoHolder>
            </GlobalHolder>
        </DarkMode>
    )
}


const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser,
    tasks: selectTasks,
    categories: selectCategories,
    currentCategory: selectCategory,
    searchTerm: selectSearch,
    dayMode: SelectMode
})

const mapDispatchToProps = dispatch => ({
    setCategory: category => dispatch(SetCurrentCategory(category)),
    addTask: task => dispatch(AddTask(task)),
    addCategory: category => dispatch(AddCategory(category))
})

export default connect(mapStateToProps, mapDispatchToProps)(GlobalContainer);