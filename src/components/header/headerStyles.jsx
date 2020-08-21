import styled from 'styled-components'

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    @media screen and (max-width: 768px){
        flex-direction: column;
        text-align: center;
        margin: auto;
        &:nth-of-type(1){
            margin-bottom: 6px;
        }
        
    }
`

export const TrashedItems = styled.div`
    font-size: 16px;
    color: #141414;
    margin-right: auto;
    display: flex;
    flex-direction: row;
    @media screen and (max-width: 768px){
        margin-right: 0;
    }
    img{
        width: auto;
        height: 30px;
        padding-top: 18px;
        margin-right: 8px;
    }
`

export const AddTodo = styled.div`
    font-size: 12px;
    border: 1px solid #141414;
    border-radius: 15px;
    padding: 0px 12px;
    height: 40%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 768px){
        width: 40%
    }
    img{
        width: auto;
        height: 20px;
        margin-left: 8px;
        top: 50%
    }
`