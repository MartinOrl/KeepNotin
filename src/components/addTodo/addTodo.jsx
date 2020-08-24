import React from 'react';
import uid from 'uid';

import { connect } from 'react-redux';

import { TaskAddContainer, TaskForm, FormInput, SubmitButton } from './addTodoStyles'

import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from '../../redux/user/userSelectors';

import { AddTask } from '../../redux/tasks/taskActions';
import { addTaskToDatabase } from '../../redux/tasks/taskUtils'


class AddTodo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: '',
            priority: '1',
            text: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    };

    handleSubmit = async event => {
        event.preventDefault()
        const { addTodo, user } = this.props;

        const newTask = {
            id: uid(9),
            title: this.state.title,
            priority: this.state.priority,
            text: this.state.text,
            status: 'Pending'
        }

        addTodo(newTask);
        addTaskToDatabase(user, newTask)

        this.setState({
            title: '',
            priority: '1',
            text: ''
        })

    }


    render(){
        return(
            <TaskAddContainer>
                <TaskForm onSubmit={this.handleSubmit}>
                    <FormInput required type="text" name="title" value={this.state.title} onChange={this.handleChange}  placeholder="Title"/>
                    <FormInput required  min="1" max="3"   type="number" name="priority" value={this.state.priority} onChange={this.handleChange}  placeholder="Priority"  />
                    <FormInput required type="text" name="text" value={this.state.text} onChange={this.handleChange}  placeholder="Text"  />
                    <SubmitButton type="submit" />
                </TaskForm>
            </TaskAddContainer>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
    addTodo: task => dispatch(AddTask(task))
})


export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);