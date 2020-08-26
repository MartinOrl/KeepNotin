import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';

import { selectTasks } from '../../redux/tasks/taskSelectors'

import Task from '../task/task'

const TasksContainer = ({tasks}) => {
    return(
    <div>
        {
            tasks ? tasks.map(task => <Task task={task} key={task.id} />) : null
        }
    </div>
)}

const mapStateToProps = createStructuredSelector({
    tasks: selectTasks
})

export default connect(mapStateToProps)(TasksContainer);