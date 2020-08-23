import React from 'react'

import { connect } from 'react-redux'

import { createStructuredSelector } from 'reselect'

import { selectTasks} from '../../redux/tasks/taskSelectors'

class TodoContainer extends React.PureComponent{

    render(){
        const {tasks} = this.props
        return(
            <div>
            {
                tasks.length > 0
                ?
                tasks.map(task => (
                    <p key={task.id}>Title: {task.title}</p>
                ))
                :
                null
            }
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    tasks: selectTasks
})

export default connect(mapStateToProps)(TodoContainer)