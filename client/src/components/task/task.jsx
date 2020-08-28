import React from 'react'
import { connect } from 'react-redux'

import { TaskContainer, TaskInformation, Title, Text, SetImportant, Separator, Complete, Tick, CompleteContainer, RemoveToggle } from './taskStyles'

import { SetTaskCompleted, RemoveTask, UpImportance } from '../../redux/tasks/taskActions'

import low from './star.svg'
import medium from './important.svg'
import high from './high.svg'

const Task = ({task, updateStatus, removeTask, index, upPriority}) => {
    const handleClick = () => {
        removeTask(task)
    }
    const getImportance = () => {

        switch(task.priority){
            case 'Low':
                return low
            case 'Medium':
                return medium
            case 'High':
                return high
            default:
                return low
        }
    }

    const upImportance = () => {
        upPriority(task)
    }

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
            <RemoveToggle onClick={handleClick}>X</RemoveToggle>
            <SetImportant src={getImportance()} onClick={upImportance} /> 
        </TaskContainer>
        {
            !index ? <Separator /> : null
        }
    </div>
)}

const mapDispatchToProps = dispatch => ({
    updateStatus: task => dispatch(SetTaskCompleted(task)),
    removeTask: task => dispatch(RemoveTask(task)),
    upPriority: task => dispatch(UpImportance(task))
})

export default connect(null, mapDispatchToProps)(Task)