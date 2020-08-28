import styled, {css} from 'styled-components'

const display = css`
    display: flex-block;
    width: 80px;
    border: 1px solid black;
    flex-direction: column;
    overflow: hidden;
    z-index: 1000;
    position: absolute;
    background: white;
    right: 0px;
    ul li{
        list-style: none;
        transition: 200ms ease-out;
        padding: 8px 12px;
        width: 80px;
        &:hover{
            background: #f7f7f7;
            cursor: pointer;
        };
    };
    ul{
        padding: 0;
        margin: 0;
    }
`
const noDisplay = css`
    display: none;
`

const rotation = css`
    transform: rotate(-90deg)
`
const ChevronBasic = css`
    transform: rotate(90deg)
`


const getDisplay = ({visibility}) => {
    if(visibility === 'true'){
        return display
    }else{
        return noDisplay
    }
}

const chevronRotate = ({visibility}) => {
    if(visibility === 'true'){
        return rotation;
    } else{
        return ChevronBasic
    }
}

export const TaskHeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
`

export const Title = styled.h1`
    margin-right: auto;
`

export const SortFilters = styled.div`
    transition: 300ms ease-in-out;
    ${getDisplay};
`

export const SortFilterToggle = styled.div`
    display: flex;
    flex-direction: row;
    &:hover{
        cursor: pointer;
    }
`
export const SortFilterToggleTitle = styled.p`
    margin: auto 0;
    margin-right: 8px;
`

export const Chevron = styled.p`
    transition: 200ms ease-in-out;
    ${chevronRotate};
`

export const SortFiltersContainer = styled.div`
    margin: auto 0;
    position: relative;
`