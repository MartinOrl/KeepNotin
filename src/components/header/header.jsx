import React, { memo, useState } from 'react';

import search from './search.svg'


import { HeaderContainer, UserTools, Title, SearchBar, SearchInput, SearchIcon, Chevron, UserOptionsToggle, UserOptions, Option, ToggleContainer } from './headerStyles'
import { setSeachTerm } from '../../redux/tasks/taskActions';
import { connect } from 'react-redux';
import { selectCurrentUser } from '../../redux/user/userSelectors';
import { createStructuredSelector } from 'reselect';
import { LogOut } from '../../redux/user/userActions';
import { auth } from '../../firebase/firebase';

const Header = ({setFilter, user, logOut}) => {
    const [visibility, setVisibility] = useState(false)

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

    const SignOut = () => {
        logOut()
        auth.signOut()
    }


    return (
        <HeaderContainer>
            <Title>To-Do</Title>
            <SearchBar>
                <SearchIcon src={search} />
                <SearchInput placeholder="Search" onChange={handleChange}  />
            </SearchBar>
            <UserTools>
                <ToggleContainer>
                    <UserOptionsToggle onClick={() => setVisibility(!visibility)}>{user.userName}</UserOptionsToggle>
                    <Chevron visibility={visibility} >&gt;</Chevron>
                </ToggleContainer>
                <UserOptions visibility={visibility} >
                    <Option>My Profile</Option>
                    <Option>Settings</Option>
                    <Option onClick={SignOut} >Log Out</Option>
                </UserOptions>
            </UserTools>
        </HeaderContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
    setFilter: filter => dispatch(setSeachTerm(filter)),
    logOut: () => dispatch(LogOut())
})


export default connect(mapStateToProps, mapDispatchToProps)(memo(Header));