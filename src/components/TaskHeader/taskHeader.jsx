import React, {useState} from 'react'
import { connect } from 'react-redux'

import { createStructuredSelector } from 'reselect'

import { TaskHeaderContainer, Title, SortFilters, SortFilterToggle, Chevron, SortFiltersContainer, SortFilterToggleTitle } from './taskHeaderStyles'
import { SetTasksFilter } from '../../redux/tasks/taskActions'
import { selectTasksFilter } from '../../redux/tasks/taskSelectors'


const TaskHeader = ({setFilter, filter}) => {
    const [visibility, setVisibility] = useState(false)

    const handleClick = event => {
        setFilter(event.target.type)
        setVisibility(false)
    }

    return(
    <TaskHeaderContainer>
        <Title>My Day</Title>
        <SortFiltersContainer>
            <SortFilterToggle onClick={() => setVisibility(!visibility)} >
                <SortFilterToggleTitle>Sort</SortFilterToggleTitle>
                <Chevron visibility={visibility.toString()} >&gt;</Chevron>
            </SortFilterToggle>
            <SortFilters visibility={visibility.toString()}>
                <ul>
                    <li onClick={handleClick} type='Alphabet' >A-Z</li>
                    <li onClick={handleClick} type='Alphabet Reverse' >Z-A</li>
                    <li onClick={handleClick} type='Priority' >Priority</li>
                </ul>
            </SortFilters>
        </SortFiltersContainer>
    </TaskHeaderContainer>
)}

const mapStateToProps = createStructuredSelector({
    filter: selectTasksFilter
})

const mapDispatchToProps = dispatch => ({
    setFilter: filter => dispatch(SetTasksFilter(filter))
})


export default connect(mapStateToProps, mapDispatchToProps)(TaskHeader);