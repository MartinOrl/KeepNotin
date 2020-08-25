import React from 'react';
import { connect } from 'react-redux'


import { HeaderContainer, TrashedItems, AddTodo, ToHomepage } from './headerStyles';
import trash from './delete.svg'
import add from './plus.svg'

import { setVisibility } from '../../redux/display/displayActions';

class Header extends React.PureComponent{

    render(){
        const { setDisplay } = this.props
        return(
        <HeaderContainer>
            <TrashedItems>
                <img src={trash} alt="trash bin" />
                <h2>Trash Bin</h2>
            </TrashedItems>
            <ToHomepage to="/">Home</ToHomepage>
            <AddTodo onClick={setDisplay}>
                <h2>Add Todo</h2>
                <img src={add} alt="addition symbol" />
            </AddTodo>
        </HeaderContainer>
    )}
};


const mapDispatchToProps = dispatch => ({
    setDisplay: () => dispatch(setVisibility())
})

export default connect(null, mapDispatchToProps)(Header);