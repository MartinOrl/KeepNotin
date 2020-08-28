import React, { memo } from 'react';

import search from './search.svg'


import { HeaderContainer, UserTools, Title, SearchBar, SearchInput, SearchIcon } from './headerStyles'
import { setSeachTerm } from '../../redux/tasks/taskActions';
import { connect } from 'react-redux';


const Header = ({setFilter}) => {

    const handleChange = event => {
        // eslint-disable-next-line
        let filter;
        if(event.target.value){
            filter = 'text'
        }else{
            filter = ''
        }
        setFilter(event.target.value)

    }

    return (
        <HeaderContainer>
            <Title>To-Do</Title>
            <SearchBar>
                <SearchIcon src={search} />
                <SearchInput placeholder="Search" onChange={handleChange}  />
            </SearchBar>
            <UserTools>
                <div>John Doe</div>
            </UserTools>
        </HeaderContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    setFilter: filter => dispatch(setSeachTerm(filter))
})


export default connect(null, mapDispatchToProps)(memo(Header));