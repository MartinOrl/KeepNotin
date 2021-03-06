import React from 'react';
import uid from 'uid';

import { connect } from 'react-redux';

import { DarkMode, ComponentContainer, TaskAddToggle, TaskAddContainer, TaskForm, FormInput, SubmitButton, Title, Selection  } from './addTodoStyles'

import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from '../../redux/user/userSelectors';

import { AddTask } from '../../redux/tasks/taskActions';
import { addTaskToDatabase } from '../../redux/tasks/taskUtils'
import { selectCategory } from '../../redux/tasks/taskSelectors';
import { SelectMode } from '../../redux/display/displaySelectors'


class AddTodo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: '',
            priority: '',
            text: '',
            visibility: false
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
        const { addTodo, category, user } = this.props;

        const newTask = {
            id: uid(9),
            title: this.state.title,
            priority: this.state.priority,
            text: this.state.text,
            category: category,
            completed: false
        }

        addTodo(newTask)
        addTaskToDatabase(user, newTask)
        this.setState({
            title: '',
            priority: '',
            text: '',
            visibility: false
        })

    }


    render(){
        return(
            <DarkMode dayMode={this.props.dayMode}>
                <ComponentContainer>
                    <TaskAddToggle onClick={() => this.setState({visibility: !this.state.visibility})} active={this.state.visibility} >+</TaskAddToggle>
                    <TaskAddContainer visibility={this.state.visibility ? true : false} >
                        <Title>Add Todo</Title>
                        <TaskForm onSubmit={this.handleSubmit}>
                            <FormInput required type="text" name="title" value={this.state.title} onChange={this.handleChange}  placeholder="Title"/>
                            <Selection onChange={this.handleChange} name='priority' value={this.state.priority}>
                                <option value='' selected disable hidden>Priority</option>
                                <option value='Low' >Low</option>
                                <option value='Medium' >Medium</option>
                                <option value='High' >High</option>
                            </Selection>
                            <FormInput required type="text" name="text" value={this.state.text} onChange={this.handleChange}  placeholder="Text"  />
                            <SubmitButton type="submit" value="Add Todo">
                            Add Todo
                            </SubmitButton>
                        </TaskForm>
                    </TaskAddContainer>
                </ComponentContainer>
            </DarkMode>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser,
    category: selectCategory,
    dayMode: SelectMode
});

const mapDispatchToProps = dispatch => ({
    addTodo: task => dispatch(AddTask(task)),
})


export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);