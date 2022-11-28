import styled from 'styled-components';

export const GridRow = styled.div`
   margin-bottom: 80px;
    margin-right: 90px;
   display: grid;
   grid-template-columns: repeat(auto-fill, minmax(250px, 350px));
   grid-gap: 30px 150px;
   justify-content: center;
   align-items: baseline;
`
export const GridItem = styled.div`
   padding: 10px;
   line-height: 1;
   font-size: 20px;
   margin-bottom: 0;
   &:hover{
    cursor: pointer;
   }
`

export const HeaderContainerStyled = styled.div`
    width: 100vw; 
    height: 644px;
    margin: 0 auto;
    padding: 0;
    background: url(/src/assets/images/header_bg.png) no-repeat;
    background-size: cover;
    img{
        max-width: 100%;
    }

    @media only screen and (max-width: 480px) {
        
        height: 420px;
    }
`
export const LogoRyMStyled = styled.img`
    position: absolute;
    width: 500.73px;
    height: 221px;
    left: 725px;
    top: 133px;

    @media only screen and (max-width: 1024px) {
        left: 243px;
        top: 96px;
    }

    @media only screen and (max-width: 768px) {
        width: 522px;
        height: 240px;
        left: 134px;
    }
    
    @media only screen and (max-width: 480px) {
        width: 330px;
        left: 94px;
        top: 110px;
    }
`;
export const SearchBar = styled.input`
    display: flex;
    padding: 0px;
    padding-left: 60px;
    position: absolute;
    width: 610px;
    height: 60px;
    left: 625px;
    top: 372px;
    background: #081F32;
    border: 2px solid #FFFFFF;
    border-radius: 8px;
    color: #FFFFFF;
    font-size: 20px;
    order: 0;
    align-self: stretch;
    flex-grow: 1;

    @media only screen and (max-width: 1024px) {
        left: 188px;
    }

    @media only screen and (max-width: 768px) {
        width: 480px;
        left: 118px;
        top: 408px;
    }
    
    @media only screen and (max-width: 480px) {
        width: 280px;
        left: 30px;
        top: 430px;
    }
`;
export const NavigationContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    padding: 0px;
    width: 100%;
    height: 86px;
    gap: 40px;
    background: #081F32;

`;
export const ContainerStyled = styled.div`
    width: 100vw;
    height: 100vh;

    margin: auto;

`;