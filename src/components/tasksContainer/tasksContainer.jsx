import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';

import { selectTasksFilter } from '../../redux/tasks/taskSelectors'

import { Container } from './tasksContainerStyles'

import Task from '../task/task'

import { SortTasks } from '../../redux/tasks/taskUtils';

const TasksContainer = ({tasks, tasksFilter}) => {


    const sortedTasks = SortTasks(tasks, tasksFilter)

    return(
    <Container>
        {
            sortedTasks ? sortedTasks.map(task => <Task task={task} key={task.id} />) : null
        }
    </Container>
)}

const mapStateToProps = createStructuredSelector({
    tasksFilter: selectTasksFilter
})

export default connect(mapStateToProps)(TasksContainer);