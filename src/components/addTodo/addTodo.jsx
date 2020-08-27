import React from 'react';
import uid from 'uid';

import { connect } from 'react-redux';

import { ComponentContainer, TaskAddToggle, TaskAddContainer, TaskForm, FormInput, SubmitButton, Title, Selection  } from './addTodoStyles'

import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from '../../redux/user/userSelectors';

import { AddTask } from '../../redux/tasks/taskActions';

// eslint-disable-next-line
import { addTaskToDatabase } from '../../redux/tasks/taskUtils'

import { setVisibility } from '../../redux/display/displayActions'

import { selectCategory } from '../../redux/category/categorySelectors';


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
        const { addTodo, category } = this.props;

        const newTask = {
            id: uid(9),
            title: this.state.title,
            priority: this.state.priority,
            text: this.state.text,
            category: category,
            completed: false
        }

        addTodo(newTask)

        this.setState({
            title: '',
            priority: '',
            text: ''
        })

    }


    render(){
        return(
            <ComponentContainer>
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
                <TaskAddToggle onClick={() => this.setState({visibility: !this.state.visibility})}><p>+</p></TaskAddToggle>
            </ComponentContainer>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser,
    category: selectCategory
});

const mapDispatchToProps = dispatch => ({
    addTodo: task => dispatch(AddTask(task)),
    setDisplay: () => dispatch(setVisibility())
})


export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);