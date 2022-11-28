import styled from 'styled-components';

export const NotFoundContainerStyled = styled.div`
    display: flex;
    margin: 0 auto;
    padding: 40px;
    flex-direction: column;
    align-items: center;
`
export const NotFoundButtonStyled = styled.div`
    text-align: center;
    width: 165px;
    padding-top: 15px;
    height: 46px;
    background: #12555F;
    border-radius: 50px;
    font-family: 'Inter';
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: #FFFFFF;
    margin-top: 60px;
    &:hover {
        cursor: pointer;
        transition: all 0.4s ease;
        background: #187381;
    }
`