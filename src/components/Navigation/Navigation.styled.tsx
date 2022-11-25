import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ItemContainerStyled = styled(NavLink)`
    display: flex;
    flex-direction: column;
    align-items: center; 
    text-decoration: none;
    width: 125px;
    color: #ffffff;
    &.underline::after {
        content: "";
        margin-top: 40px;
        margin-left: auto;
        margin-right: auto;
        height: 4px;
        width: 0px;
        background-color: #B2DF28;
    }
    &.underline:hover::after {
        width: 100%;
        transition: all linear 0.4s;
      }
    &.active{
        /* background-color: #B2DF28; */
    }
    @media screen and (max-width: 560px) {
        display: none;
    }
`