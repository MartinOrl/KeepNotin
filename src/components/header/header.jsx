import React, {memo} from 'react';
import { connect } from 'react-redux'

import search from './search.svg'


import { HeaderContainer, UserTools, Title, SearchBar, SearchInput, SearchIcon } from './headerStyles'


import { setVisibility } from '../../redux/display/displayActions';

const Header = () => {
    return (
        <HeaderContainer>
            <Title>To-Do</Title>
            <SearchBar>
                <SearchIcon src={search} />
                <SearchInput placeholder="Search"  />
            </SearchBar>
            <UserTools>
                Test
            </UserTools>
        </HeaderContainer>
    )
}


const mapDispatchToProps = dispatch => ({
    setDisplay: () => dispatch(setVisibility())
})

export default connect(null, mapDispatchToProps)(memo(Header));