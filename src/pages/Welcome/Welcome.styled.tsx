import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const WelcomePageContainerStyled = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    z-index: -1;
    background: url("/src/assets/images/background_r&m_welcome.png") no-repeat center center fixed;
    background-size: cover;
    overflow-y: hidden;
    overflow-x: hidden;
    @media only screen and (max-width: 480px) {
        display: flex;
        width: 100vw;
        height: 100vh;
        background: url("/src/assets/images/img_mobile_bg.png") no-repeat center center fixed;
        background-size: cover;
        z-index: -1;
        img{
            max-width: 100%;
        }
    }
`;
export const LogoRyMStyled = styled.img`
    position: absolute;
    width: 857px;
    height: 366px;
    left: 582px;
    top: 220px;

    @media only screen and (max-width: 1024px) {
        position: absolute;
        width: 692px;
        height: 317px;
        left: 210px;
        top: 84px;
    }
    @media only screen and (max-width: 560px) {
        width: 388px;
        height: 212px;
        left: 96px;
        top: 138px;
    }
    @media only screen and (max-width: 480px) {
        position: fixed;
        height: 190px;
        width: 400px;
        left: 50px;
        top: 212px;
    }
   
`;
export const LogoSquadmakerStyled = styled.img`
    position: absolute;
    left: 815px;
    right: 394px;
    top: 190px;
    opacity: 0.7;

    @media only screen and (max-width: 1024px) {
        position: absolute;
        left: 340px;
        top: 32px;
        opacity: 0.7;
    }

    @media only screen and (max-width: 560px) {
        position: absolute;
        left: 132px;
        width: 284px;
        top: 60px;
        opacity: 0.7;
    }
    
    @media only screen and (max-width: 480px) {
        position: fixed;
        width: 300px;
        left: 90px;
        top: 136px;
    }
`;
export const WelcomeHeadingStyled = styled.h1`
    position: absolute;
    width: 1418px;
    height: 49px;
    left: 233px;
    top: 628px;
    margin: 0 auto;
    padding: 0;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 58px;
    line-height: 49px;
    text-align: center;
    color: #FFFFFF;

    @media only screen and (max-width: 1024px) {
        width: 400px;
        left: 312px;
        top: 398px;
        font-size: 42px;
    }
    @media only screen and (max-width: 560px) {
        width: 250px;
        left: 160px;
        top: 362px;
        font-size: 36px;
    }
    @media only screen and (max-width: 480px) {
        width: 370px;
        left: 52px;
        top: 420px;
    }
`;
export const WelcomeParagraphStyled = styled.p`
    position: absolute;
    width: 1140px;
    height: 60px;
    left: 415px;
    top: 679px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 30px;
    text-align: center;
    color: #FFFFFF;

    @media only screen and (max-width: 1024px) {
        width: 648px;
        left: 220px;
        top: 516px;
    }

    @media only screen and (max-width: 560px) {
        width: 534px;
        left: 18px;
        top: 492px;
    }
    @media only screen and (max-width: 480px) {
        position: fixed;
        width: 400px;
        font-size: 20px;
        left: 52px;
        top: 542px;
    }
`;
export const ButtonStyled = styled(NavLink)`
    display: flex;
    padding: 2px 30px;
    gap: 10px;
    color: #FFFFFF;
    position: absolute;
    height: 46px;
    left: 927px;
    top: 830px;
    background: #12555F;
    transition: all 0.4s ease;
    border-radius: 50px;
    align-items: center;
    text-decoration: none;
    &:hover {
        cursor: pointer;
        transition: all 0.4s ease;
        background: #187381;
    }

    @media only screen and (max-width: 1024px) {
        
        left: 488px;
        top: 750px;
    }

    @media only screen and (max-width: 560px) {
        left: 228px;
        top: 742px;
    }
    
    @media only screen and (max-width: 480px) {
        position: fixed;
        left: 180px;
        top: 822px;
    }
`;