import React, { memo, useState } from 'react';

import search from './search.svg'


import { HeaderContainer, UserTools, Title, SearchBar, SearchInput, SearchIcon, Chevron, UserOptionsToggle, UserOptions, Option, ToggleContainer, DarkMode } from './headerStyles'
import { setSeachTerm } from '../../redux/tasks/taskActions';
import { connect } from 'react-redux';
import { selectCurrentUser } from '../../redux/user/userSelectors';
import { createStructuredSelector } from 'reselect';
import { LogOut } from '../../redux/user/userActions';
import { auth } from '../../firebase/firebase';
import { SetMode } from '../../redux/display/displayActions';
import { SelectMode } from '../../redux/display/displaySelectors'
import { SetPage } from '../../redux/page/pageActions';

const Header = ({setFilter, user, logOut, setMode, dayMode, setPage}) => {
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
        <DarkMode dayMode={dayMode}>
            <HeaderContainer>
                <Title onClick={() => setPage("Home")}>To-Do</Title>
                <SearchBar>
                    <SearchIcon src={search} />
                    <SearchInput type='text' placeholder="Search" onChange={handleChange}  />
                </SearchBar>
                <UserTools>
                    <ToggleContainer onClick={() => setVisibility(!visibility)}>
                        <UserOptionsToggle>{user.userName}</UserOptionsToggle>
                        <Chevron visibility={visibility} >&gt;</Chevron>
                    </ToggleContainer>
                    <UserOptions visibility={visibility} >
                        <Option onClick={() => {setVisibility(false); setPage("My Profile")}}>My Profile</Option>
                        <Option onClick={() => {setMode(); setVisibility(false)}} >Dark Mode</Option>
                        <Option onClick={() => {SignOut(); setVisibility(false)}} >Log Out</Option>
                    </UserOptions>
                </UserTools>
            </HeaderContainer>
        </DarkMode>
    )
}

const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser,
    dayMode: SelectMode
})

const mapDispatchToProps = dispatch => ({
    setFilter: filter => dispatch(setSeachTerm(filter)),
    logOut: () => dispatch(LogOut()),
    setMode: () => dispatch(SetMode()),
    setPage: page => dispatch(SetPage(page))
})


export default connect(mapStateToProps, mapDispatchToProps)(memo(Header));