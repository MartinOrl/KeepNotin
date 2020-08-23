import React from 'react';
import uid from 'uid';

import { connect } from 'react-redux';

import { TasksContainer } from './containerStyles';

import { AddTask } from '../../redux/tasks/taskActions';


class Container extends React.Component{
    constructor(props){
        super(props);

        this.state =  {
            title:"",
            priority: "",
            text: ""

        };
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
        const { addTodo } = this.props

        addTodo({
            id: uid(9),
            title: this.state.title,
            priority: this.state.priority,
            text: this.state.text
        })
    };



    render(){
        return(
            <TasksContainer>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="title" value={this.state.title} onChange={this.handleChange}  placeholder="Title"/>
                    <input type="text" name="priority" value={this.state.priority} onChange={this.handleChange}  placeholder="Priority"  />
                    <input type="text" name="text" value={this.state.text} onChange={this.handleChange}  placeholder="Text"  />
                    <input type="submit" />
                </form>
                <p>Title: {this.state.title}</p>
                <div style={{marginTop:"60px"}}>
                </div>
            </TasksContainer>
        )
    }
};

const mapDispatchToProps = dispatch => ({
    addTodo: task => dispatch(AddTask(task))
});

export default connect(null, mapDispatchToProps)(Container);