import React from 'react'

import Header from '../components/header/header'
import Container from '../components/container/container'
import TodoContainer from '../components/TodoContainer/todoContainer'

const Main = () => {
    return(
        <div>
            <Header />
            <Container />
            <TodoContainer />
        </div>
    )
}

export default Main;