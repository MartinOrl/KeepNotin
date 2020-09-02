import React, { useState } from 'react'
import { createStructuredSelector } from 'reselect'
import { Container, Toggle, Input, Form, Submit, DarkMode } from './addCategoryStyles'
import { AddCategory } from '../../redux/tasks/taskActions'
import { connect } from 'react-redux'
import { addCategoryToDatabase } from '../../redux/tasks/taskUtils'
import { SelectMode } from '../../redux/display/displaySelectors'

export const CategoryAdd = ({ addCategory, user, dayMode }) => {
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
        <DarkMode dayMode={dayMode}>
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
        </DarkMode>
    )
}

const mapStateToProps = createStructuredSelector({
    dayMode: SelectMode
})

const mapDispatchToProps = dispatch => ({
    addCategory: category => dispatch(AddCategory(category))
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryAdd);