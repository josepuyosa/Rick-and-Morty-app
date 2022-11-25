import styled from 'styled-components';

export const ModalConatinerStyled = styled.div`
    position: relative;
    width: 700px;
    height: 800px;
    background: #FFFFFF;
    border-radius: 5px;
    box-shadow: rgba(100,100,111, 0.2) 0px 7px 29px 0px;
    padding: 20px;
`
export const OverlayStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.5);
    z-index: 1;
    @media screen and (max-width: 560px) {
        display: none;
    }

`
export const ModalHeaderStyled = styled.div`
    position: absolute;
    width: 100%;
    height: 200px;
    border-radius: 6px;
    left: 0px;
    top: 0px;
    background: url(/src/assets/images/modal_header_bg.png) no-repeat;
    background-size: cover;
`
export const InfoSectionStyled = styled.div`
    display: flex;
    position: absolute;
    width: 100%;
    height: 160px;
    left: 0px;
    top: 200px;
    background: #081F32;
    flex-direction: column;
    align-items: center;
    h3{
        padding-top: 10px;
        margin: 0 auto;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        color: #FFFFFF;
    }
    h3:first-child{
        padding-top: 60px;
    }
`
export const ButtonCloseStyled = styled.button`
    position: absolute;
    width: 30px;
    height: 30px;
    left: 700px;
    top: 21px;
    border-radius: 200px;
    border: none;
    &:hover {
        transition: all 0.2s ease;
        transform: scale(1.2);
        cursor: pointer;
    }
`
export const CardImgStyled = styled.img`
    position: absolute;
    width: 130px;
    height: 130px;
    left: 308px;
    top: 116px;
    background: #FFFFFF;
    border-radius: 300px;
    border: none;
    z-index: 1;
`
export const AboutContainerStyled = styled.div`
    display: flex;
    position: absolute;
    padding:10px;
    width: 97%;
    height: 98px;
    left: 0px;
    top: 360px;
    align-items: center;
    border-bottom: 1px solid #C4C4C4;

    background: #FFFFFF;
     h3{
        padding-top: 10px;
        margin: 0 auto;
        font-family: 'Montserrat';
        font-weight: 300;
        color: #000000;
    }
`

export const EpisodeContainerStyled = styled.div`
    display: flex;
    position: absolute;
    padding:10px;
    width: 97%;
    height: 140px;
    left: 0px;
    top: 480px;
    align-items: center;
    border-bottom: 1px solid #C4C4C4;

    background: #FFFFFF;
     h3{
        padding-top: 10px;
        margin: 0 auto;
        font-family: 'Montserrat';
        font-weight: 300;
        color: #000000;
    }
`
export const InterestingChContainerStyled = styled.div`
    display: flex;
    position: absolute;
    padding:10px;
    width: 97%;
    height: 112px;
    left: 0px;
    top: 698px;
    align-items: center;

    background: #FFFFFF;
     h3{
        padding-top: 10px;
        margin: 0 auto;
        font-family: 'Montserrat';
        font-weight: 300;
        color: #000000;
    }
`