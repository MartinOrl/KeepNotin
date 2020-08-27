import React from 'react'
import { connect } from 'react-redux'

import { TaskContainer, TaskInformation, Title, Text, SetImportant, Separator, Complete, Tick, CompleteContainer } from './taskStyles'

import { SetTaskCompleted } from '../../redux/tasks/taskActions'

const Task = ({task, updateStatus}) => {
    return(
    <div>
        <TaskContainer>
            <CompleteContainer>
                <Complete type='checkbox' onChange={(event) => updateStatus(task)} defaultChecked={task.completed} />
                <Tick />
            </CompleteContainer>
            <TaskInformation status={task.completed} >
                <Title>{task.title}</Title>
                <Text>{task.text}</Text>
            </TaskInformation>
            <SetImportant>{task.priority}</SetImportant>    
        </TaskContainer>
        <Separator />
    </div>
)}

const mapDispatchToProps = dispatch => ({
    updateStatus: task => dispatch(SetTaskCompleted(task))
})

export default connect(null, mapDispatchToProps)(Task)