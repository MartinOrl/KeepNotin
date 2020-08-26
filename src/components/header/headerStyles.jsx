import styled from 'styled-components'

// export const HeaderContainer = styled.div`
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     @media screen and (max-width: 768px){
//         flex-direction: column;
//         text-align: center;
//         margin: auto;
//         &:nth-of-type(1){
//             margin-bottom: 6px;
//         }
        
//     }
// `

// export const TrashedItems = styled.div`
//     font-size: 16px;
//     color: #141414;
//     margin-right: auto;
//     display: flex;
//     flex-direction: row;
//     @media screen and (max-width: 768px){
//         margin-right: 0;
//     }
//     img{
//         width: auto;
//         height: 30px;
//         padding-top: 18px;
//         margin-right: 8px;
//     }
// `

// export const AddTodo = styled.div`
//     font-size: 12px;
//     border: 1px solid #141414;
//     border-radius: 15px;
//     padding: 0px 12px;
//     height: 40%;
//     display: flex;
//     flex-direction: row;
//     justify-content: center;
//     align-items: center;
//     color: black;
//     text-decoration:none;
//     @media screen and (max-width: 768px){
//         width: 40%
//     }
//     img{
//         width: auto;
//         height: 20px;
//         margin-left: 8px;
//         top: 50%
//     }
//     &:hover{
//         cursor: pointer;
//     }
// `

// export const ToHomepage = styled(Link)`
//     color: black;
//     margin-right: auto;
//     font-size: 2rem;
//     text-decoration: none;
//     &:hover{
//         color: black;
//         text-decoration: none
//     }

// `

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction:row;
    flex-wrap: wrap;
    padding: 8px 16px;
    background: #0392cf;
    justify-content: space-between;
`

export const UserTools = styled.div`
    margin: auto 0;
    color: #e7eff6;
`

export const Title = styled.h1`
    font-size: 1.3rem;
    font-weight: 400;
    color: #e7eff6;
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
            transform: translateX(-40px)
        }
    }
`



export const SearchInput = styled.input`
    background: none;
    outline: none;
    color: #63ace5;
    border: none;
    transition: 300ms ease-in-out;
`   