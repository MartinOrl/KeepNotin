import React, {memo} from 'react'

import { Container, Title } from './todoStyles'

const evalPriority = (priority) => {
    if(priority === '1'){
        return {
            color: 'green',
            text: 'Low'
        }
    }
    if(priority === '2'){
        return {
            color: 'blue',
            text: 'Medium'
        }
    }
    else{
        return {
            color: 'red',
            text: 'High'
        }
    }
}

const Todo = ({title, priority, text, status}) => {

    const priorityLevel = evalPriority(priority)
    return(
    <Container>
        <div style={{display:'flex',flexDirection:'row'}}>
            <svg height='30' width='30' style={{paddingTop: '12px', marginRight: '5px'}}>
                <circle cx='15' cy='15' r='10' fill={priorityLevel.color} />
            </svg>
            <p style={{margin: '0', marginTop: '16px'}}>{priorityLevel.text}</p>
        </div>
        <Title>{title}</Title>
        <p style={{marginTop: '4px'}}>{text}</p>
    </Container>
)}

export default memo(Todo)