import styled, { css } from 'styled-components'

const activeStyle = css`
    background: #f7f7f7;
`
const noActive = css`
    background: none;
`


export const getActive = ({active}) => {
    if(active){
        return activeStyle
    }
    return noActive
}



export const CategoryContainer = styled.div`
    width: 100%;
    padding: 12px 40px;
    box-sizing: border-box;
    transition: 300ms ease-in-out;
    &:hover{
        background: #f7f7f7;
        cursor: pointer;
    }
    ${getActive}
`

const GlobalHolderStyle = css`
    display: flex;
    flex-direction: row;
    background: #e5e6eb;
    @media screen and (max-width: 875px){
        flex-direction: column;
    }
`

const BasicStyle = css`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
`

const CategoryHolderStyle = css`
    width: 17%;
    height: 800px;
    background: none;
    padding-top: 16px;
    @media screen and (max-width: 875px){
        height: auto;
        text-align: center;
        width: 100%;
        ${CategoryContainer}{
            margin: 0 auto;
        }
    }
`

const TasksHolderStyle = css`
    width: 68%;
    margin-right: 16px;
    padding: 12px 40px;
    background: white;
    position: relative;
    transition: 400ms ease-in-out;
    @media screen and (max-width: 875px){
        width: 100%;
    }
`

const InfoHolderStyle = css`
    width: 13%;
    height: 300px;
    margin-top: 10px;
    padding: 12px 40px;
    background: white;
    @media screen and (max-width: 875px){
        display: none;
    }
`

const getStyle = ({type}) => {
    switch(type){
        case 'Category':
            return CategoryHolderStyle;
        case 'Tasks':
            return TasksHolderStyle;
        case 'Info':
            return InfoHolderStyle;
        case 'Global':
            return GlobalHolderStyle;
        default:
            return null;
    }
}


export const Holder = styled.div`
    ${BasicStyle};
    ${getStyle}
`

