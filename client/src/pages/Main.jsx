import React from 'react'

import Header from '../components/header/header'
import GlobalContainer from '../components/container/globalContainer'
import Profile from '../components/profile/profile'
import { createStructuredSelector } from 'reselect'
import { SelectCurrentPage } from '../redux/page/pageSelectors'
import { connect } from 'react-redux'

const Main = ({page}) => {
    console.log(page)
    const handleRender = () => {
        switch(page){
            case 'Home':
                return <GlobalContainer />
            case 'My Profile':
                return <Profile />
            default:
                return ''
        }
    }
    return(
        <div>
            <Header />
            {
                handleRender()
            }
        </div>
)}

const mapState = createStructuredSelector({
    page: SelectCurrentPage
})

export default connect(mapState)(Main);