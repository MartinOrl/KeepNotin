import React, {useState} from 'react'
import { connect } from 'react-redux'

import { createStructuredSelector } from 'reselect'

import { DarkMode, TaskHeaderContainer, Title, SortFilters, SortFilterToggle, Chevron, SortFiltersContainer, SortFilterToggleTitle } from './taskHeaderStyles'
import { SetTasksFilter } from '../../redux/tasks/taskActions'
import { selectCategory } from '../../redux/tasks/taskSelectors'
import { SelectMode } from '../../redux/display/displaySelectors'

const TaskHeader = ({setFilter, currentCategory, dayMode}) => {
    const [visibility, setVisibility] = useState(false)

    const handleClick = event => {
        setFilter(event.target.type)
        setVisibility(false)
    }

    return(
        <DarkMode dayMode={dayMode}>
            <TaskHeaderContainer>
                <Title>{currentCategory}</Title>
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
        </DarkMode>
)}

const mapStateToProps = createStructuredSelector({
    currentCategory: selectCategory,
    dayMode: SelectMode
})

const mapDispatchToProps = dispatch => ({
    setFilter: filter => dispatch(SetTasksFilter(filter))
})


export default connect(mapStateToProps, mapDispatchToProps)(TaskHeader);