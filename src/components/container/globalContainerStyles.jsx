import styled, { css } from 'styled-components'


const GlobalHolderStyle = css`
    display: flex;
    flex-direction: row;
    width: 100%;
    background: #e5e6eb;
`

const BasicStyle = css`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    box-sizing: border-box;
`

const CategoryHolderStyle = css`
    width: 17%;
    height: 800px;
    background: none;
    padding-top: 16px;
`

const TasksHolderStyle = css`
    width: 68%;
    height: 800px;
    margin-right: 16px;
    padding: 12px 40px;
    background: white;
    position: relative;
`

const InfoHolderStyle = css`
    width: 13%;
    height: 790px;
    margin-top: 10px;
    padding: 12px 40px;
    background: white;
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

export const CategoryContainer = styled.div`
    width: 100%;
    padding: 12px 40px;
    box-sizing: border-box;
    transition: 300ms ease-in-out;
    &:hover{
        background: #f7f7f7;
    }
`