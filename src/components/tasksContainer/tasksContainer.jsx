import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';

import { selectTasks, selectTasksFilter } from '../../redux/tasks/taskSelectors'

import Task from '../task/task'

import { SortTasks } from '../../redux/tasks/taskUtils';

const TasksContainer = ({tasks, tasksFilter}) => {

    const sortedTasks = SortTasks(tasks, tasksFilter)

    return(
    <div>
        {
            sortedTasks ? sortedTasks.map(task => <Task task={task} key={task.id} />) : null
        }
    </div>
)}

const mapStateToProps = createStructuredSelector({
    tasks: selectTasks,
    tasksFilter: selectTasksFilter
})

export default connect(mapStateToProps)(TasksContainer);