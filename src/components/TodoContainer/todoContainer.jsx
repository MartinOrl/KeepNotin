import React from 'react';
import styled from 'styled-components';
import Todo from '../todo/todo';

const Container = styled.div`
    border: 1px solid black;
    height: 80vh;
    overflow-y: hidden;
    margin-top: 30px;
    width: 450px;
    padding: 8px;
    display: flex;
    flex-direction: column;
    margin: 16px;
`



const TasksContainer = ({tasks}) => {
        return(
            <Container>
            {
                tasks.length > 0 
                ? 
                tasks.map(task => {
                    return <Todo key={task.id} title={task.title} priority={task.priority} text={task.text} status={task.status} />
                })
                : 
                null
            }
            </Container>
        )
}

export default TasksContainer;