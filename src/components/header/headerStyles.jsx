import styled from 'styled-components'

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction:row;
    flex-wrap: wrap;
    padding: 8px 40px 8px 16px;
    background: #0392cf;
    justify-content: space-between;
`

export const UserTools = styled.div`
    margin: auto 0;
    color: #e7eff6;
    @media screen and (max-widtH: 875px){
        display: none;
    }
`

export const Title = styled.h1`
    font-size: 1.3rem;
    font-weight: 400;
    color: #e7eff6;
    margin-left: 20px;
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

