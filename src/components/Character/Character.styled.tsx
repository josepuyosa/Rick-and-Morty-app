import styled from 'styled-components';

export const CardItemStyled = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;

    width: 420px;
    height: 178px;

    background: #FFFFFF;
    /* 200 */

    border: 1px solid #B9B9B9;
    border-radius: 10px;
    img{
        width: 176px;
        border-radius: 10px;
    }
    h2{
        /* font-family: 'Montserrat'; */
        font-weight: 300;
        font-size: 12px;
        color: #000000;
        width: 100%;
    }
    p{
        width: 300px;
        height: 24px;
        margin: 0;
        padding: 0;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;
        color: #000000;
    } 
`
export const CardInfoStyled = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`
export const GreenPointStyled = styled.span`
    position: relative;
    left: 0px;
    top: 0px;
    margin: 10px;
    padding: 5px;
    width: 26px;
    border-radius: 10px;
    background: #B2DF28;
`