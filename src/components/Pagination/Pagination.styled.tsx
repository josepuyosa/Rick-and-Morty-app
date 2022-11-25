import styled from 'styled-components';

export const PaginationContainerStyled = styled.header`
    display: flex;
    justify-content: space-between;
    margin: 20px 40px;
`
export const ButtonPaginationStyled = styled.button`
    padding: 2px 30px;
    color: #FFFFFF;
    height: 46px;
    background: #12555F;
    transition: all 0.4s ease;
    align-items: center;
    text-decoration: none;
    &:hover {
        cursor: pointer;
        transition: all 0.4s ease;
        background: #187381;
    }
`