import styled, { css, keyframes } from 'styled-components'

const activeStyle = css`
    color: #1e1f26 !important;
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

const BasicStyle = css`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
`

export const CategoryHolder = styled.div`
    ${BasicStyle};
    width: 17%;
    height: 95vh;
    background: none;
    padding-top: 16px;
    transition: 300ms ease-in-out;
    @media screen and (max-width: 875px){
        height: auto;
        text-align: center;
        width: 100%;
        ${CategoryContainer}{
            margin: 0 auto;
        }
    }
`

export const TasksHolder = styled.div`
    ${BasicStyle};
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

export const InfoHolder = styled.div`
    ${BasicStyle};
    width: 13%;
    height: 300px;
    margin-top: 10px;
    padding: 12px 40px;
    background: white;
    transition: 400ms ease-in-out;
    @media screen and (max-width: 875px){
        display: none;
    }
`


export const GlobalHolder = styled.div`
    ${BasicStyle};
    display: flex;
    flex-direction: row;
    background: #e5e6eb;
    transition: 300ms ease-in-out;
    @media screen and (max-width: 875px){
        flex-direction: column;
    };
`



const isCollapsed = css`
    transform: rotate(90deg) translateY(-5px);
`

const notCollapsed = css`
    transform: rotate(-90deg) translateY(-5px);
`

const getCollapse = ({collapse}) => {
    if(collapse){
        return isCollapsed
    }
    return notCollapsed
}

export const CategoryCollapse = styled.p`
    font-size: 32px;
    display: none;
    margin: 0 auto;
    text-align: center;
    transition: 300ms ease-in-out;
    ${getCollapse};
    @media screen and (max-width: 768px){
        display: block;
    }
`

export const CategoryTitle = styled.h1`
    margin: 12px auto;
    font-size: 1.2rem;
    transition: 300ms ease-in-out;
`

const testCollapsed = keyframes`
    0%{
        height: 250px;
    }
    100%{
        height: 0;
        overflow: hidden;
    }
`

const noTestCollapsed = keyframes`
    0%{
        height: 0;
        overflow: hidden;
    }
    100%{
        height: 250px;
    }
`


const getCollapseStatus = ({collapse}) => {
    if(collapse){
        return testCollapsed
    }
    return noTestCollapsed
}

export const CategoryInfoContainer = styled.div`
    animation: ${getCollapseStatus} 400ms forwards ease-in-out;
`


const isDarkMode = css`
    ${CategoryHolder}{
        background: #1e1f26;
    }
    ${CategoryTitle}{
        color: #e7eff6;
    }
    ${CategoryContainer}{
        color: #e7eff9;
        &:hover{
            color: #1e1f26;
        }
    }
    ${CategoryCollapse}{
        color: #e7eff6 !important;
    }
    ${TasksHolder}{
        background: #283655;
    }
    ${InfoHolder}{
        background: #283655;
        color: #f8f8f4;
    }
    ${GlobalHolder}{
        background: #072540;
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