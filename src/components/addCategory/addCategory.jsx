import React, { useState } from 'react'

import { Container, Toggle, Input, Form, Submit } from './addCategoryStyles'
import { AddCategory } from '../../redux/tasks/taskActions'
import { connect } from 'react-redux'
import { addCategoryToDatabase } from '../../redux/tasks/taskUtils'

export const CategoryAdd = ({ addCategory, user }) => {
    const [display, setDisplay] = useState(false)
    const [value, setValue] = useState('')

    const handleChange = (event) => {
        event.preventDefault()
        setValue(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        addCategory(value)
        setValue('')
        setDisplay(false)
        addCategoryToDatabase(user, value)

    }

    return(
        <Container>
            <Toggle onClick={() => setDisplay(!display)} active={display}  >+</Toggle>
            {
                display
                ?
                <Form onSubmit={handleSubmit}>
                    <Input required type='text' autoFocus={display ? 'true' : 'false'} onChange={handleChange} value={value} placeholder='New Category' />
                    <Submit type='submit'>Add</Submit>
                </Form>
                :
                null
            }
        </Container>
    )
}

const mapDispatchToProps = dispatch => ({
    addCategory: category => dispatch(AddCategory(category))
})

export default connect(null, mapDispatchToProps)(CategoryAdd);