import React from 'react';
import { createStructuredSelector } from 'reselect'

import { connect } from 'react-redux';

import { TasksHolder } from './containerStyles';

import { selectCurrentUser } from '../../redux/user/userSelectors';
import { selectAddTodoDisplay } from '../../redux/display/displaySelectors'
import TasksContainer from '../TodoContainer/todoContainer'
import { selectTasks } from '../../redux/tasks/taskSelectors';
import Spinner from '../spinner/spinner';


import {firestore} from '../../firebase/firebase'
import { Seed } from '../../redux/tasks/taskActions'

import AddTodo from '../addTodo/addTodo'


class Container extends React.Component{
    constructor(){
        super()
        this.state = {
            display: false
        }
    }


    componentDidMount(){
        const { user, seedRedux, tasks } = this.props
        // eslint-disable-next-line
        if(tasks == false){
            var tasksRef = firestore.collection("users").doc(user.id).collection("tasks").doc("tasks")
            tasksRef.get().then(doc => {
                var { tasks } = doc.data();
                seedRedux(tasks)
        })}

    }
    
    getPending = () => {
        return this.props.tasks.filter(task => task.status === 'Pending')
    }
    getInProgress = () => {
        return this.props.tasks.filter(task => task.status === 'In Progress')
    }

    getCompleted = () => {
        return this.props.tasks.filter(task => task.status === 'Completed')
    }

    render(){
        const pending = this.getPending()
        const inProgress = this.getInProgress()
        const completed = this.getCompleted()
        const {visibility} = this.props
        console.log(visibility)
        return(
            <div>
                {
                    !visibility ? <AddTodo /> : null
                }
                <div>
                    {
                        this.props.tasks 
                        ?
                        <TasksHolder>
                            <TasksContainer tasks={pending} />
                            <TasksContainer tasks={inProgress} />
                            <TasksContainer tasks={completed} />
                        </TasksHolder>
                        :
                        <Spinner />
                    }
                </div>
            </div>
        )
    }
};

const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser,
    tasks: selectTasks,
    visibility: selectAddTodoDisplay
})

const mapDispatchToProps = dispatch => ({
    seedRedux: tasks => dispatch(Seed(tasks))
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);