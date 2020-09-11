import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { GlobalContainer, DeleteAccount, Input,InputContainer, InputDisplayToggle, Option, Container, SubmitButton } from './profileStyle'

import { selectCurrentUser } from '../../redux/user/userSelectors'

import eye from './eye.svg'
import { useState } from 'react'

const Profile = ({user}) => {
    const [oldType, setOldType] = useState(false)
    const [newType, setNewType] = useState(false)
    console.log(user)

    return(
        <GlobalContainer>
            <h1>Hello, {user.userName}</h1>
            <Option>Change Password</Option>
            <Container >
                <InputContainer>
                    <Input type={oldType ? 'text' : 'password'} placeholder='Old Password'  />
                    <InputDisplayToggle src={eye} active={oldType} onClick={()=> setOldType(!oldType)} />
                </InputContainer>
                <InputContainer>
                    <Input type={newType ? 'text' : 'password'} placeholder='New Password'  />
                    <InputDisplayToggle src={eye} active={newType} onClick={()=> setNewType(!newType)} />
                </InputContainer>
                
                <SubmitButton >Change Password</SubmitButton>
            </Container>
            <DeleteAccount>Delete</DeleteAccount>
        </GlobalContainer>
    )
}

const mapState = createStructuredSelector({
    user: selectCurrentUser
})

export default connect(mapState)(Profile);