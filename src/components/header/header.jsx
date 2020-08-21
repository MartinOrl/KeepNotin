import React from 'react';

import { HeaderContainer, TrashedItems, AddTodo } from './headerStyles';
import trash from './delete.svg'
import add from './plus.svg'

const Header = () => {
    return(
        <HeaderContainer>
            <TrashedItems>
                <img src={trash} alt="trash bin" />
                <h2>Trash Bin</h2>
            </TrashedItems>
            <AddTodo>
                <h2>Add Todo</h2>
                <img src={add} alt="addition symbol" />
            </AddTodo>
        </HeaderContainer>
    )
};

export default Header;