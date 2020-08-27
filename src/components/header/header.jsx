import React, {memo} from 'react';

import search from './search.svg'


import { HeaderContainer, UserTools, Title, SearchBar, SearchInput, SearchIcon } from './headerStyles'


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


export default memo(Header);