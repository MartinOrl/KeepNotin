import styled, { css } from 'styled-components'




export const HeaderContainer = styled.div`
    display: flex;
    flex-direction:row;
    flex-wrap: wrap;
    padding: 8px 40px 8px 16px;
    transition: 300ms ease-in-out;
    justify-content: space-between;
    background: #0392cf;
    color: #e7eff6;
`

export const UserTools = styled.div`
    margin: auto 0;
    color: #e7eff6;
    @media screen and (max-width: 768px){
        margin: 5px auto;
    }
`

export const Title = styled.h1`
    font-size: 1.3rem;
    font-weight: 400;
    color: #e7eff6;
    margin-left: 20px;
    &:hover{
        cursor: pointer;
    };
    @media screen and (max-width: 875px){
        width: 100%;
        text-align: center;
    }
`
export const SearchIcon = styled.img`
    margin-right: 5px;
    transition: 200ms ease-in-out;
    width: 20px;
`

export const SearchBar = styled.div`
    width: 20%;
    padding: 8px 10px;
    margin: auto 0;
    background: #adcbe3;
    overflow: hidden;
    display: flex;
    flex-direction: row;

    &:focus-within{
        ${SearchIcon}{
            transform: rotate(45deg)
                        
        }
    }
    @media screen and (max-width: 875px){
        width: 90%;
        margin: auto;
    }
`

export const SearchInput = styled.input`
    background: none;
    outline: none;
    color: #0057e7;
    border: none;
    transition: 300ms ease-in-out;
`   

export const UserOptionsToggle = styled.p`

`
const rotation = css`
    transform: rotate(-90deg)
`

const ChevronBasic = css`
    transform: rotate(90deg)
`
const chevronRotate = ({visibility}) => {
    if(visibility){
        return rotation;
    } else{
        return ChevronBasic
    }
}

export const Chevron = styled.p`
    transition: 200ms ease-in-out;
    margin-left: 8px;
    ${chevronRotate};
`

const display = css`
    display: flex;
    flex-direction: column;
    position: absolute;
    border: 1px solid black;
    background: white;
    overflow: hidden;
    right: 40px;
    z-index: 1000;
    @media screen and (max-width: 768px){
        right: 200px;
    };
`

const noDisplay = css`
    display: none;
`

const getDisplay = ({visibility}) => {
    if(visibility){
        return display
    } else{
        return noDisplay
    }
}

export const UserOptions = styled.div`
    ${getDisplay}
`

export const Option = styled.p`
    margin: 8px 0;
    padding: 8px 16px;
    width: 100%;
    color: black;
    &:hover{
        background: #f7f7f7;
        cursor: pointer;
    }
`

export const ToggleContainer = styled.div`
    display: flex;
    flex-direction: row;
    &:hover{
        cursor: pointer;
    }
`

const isDarkMode = css`
    ${HeaderContainer}{
        background: #1e1f26;
        color: #e7eff6;
    }
    ${SearchBar}{
        background: #ccc;
    }
    ${SearchInput}{
        color: #1e1f26;
    }
    ${SearchIcon}{
        color: #1e1f26;
    }
`

const getMode = ({dayMode}) => {
    if(!dayMode){
        return isDarkMode
    }
    return ''
}

export const DarkMode = styled.div`
    ${getMode}
`