import { LogoRyMStyled, WelcomePageContainerStyled, LogoSquadmakerStyled, WelcomeHeadingStyled, WelcomeParagraphStyled, ButtonStyled } from "./Welcome.styled";

export const Welcome = () => {
    return (
        <>
            <WelcomePageContainerStyled>
                <LogoRyMStyled src="/src/assets//images/Rick-And-Morty-Logo 1.png" alt="Rick-And-Morty-Logo" />
                <LogoSquadmakerStyled src="/src/assets//images/SquadMakers_Logo.svg" alt="SquadMakers_Logo" />
                <WelcomeHeadingStyled>Bienvenido a Rick and Morty</WelcomeHeadingStyled>
                <WelcomeParagraphStyled>En esta prueba, evaluaremos su capacidad para construit la aplicación mediante el análisis de código
                    <br /> y la reproducción del siquiente diseño.</WelcomeParagraphStyled>
            </WelcomePageContainerStyled>
            <ButtonStyled to={'/list/all'} >Continuar</ButtonStyled>
        </>
    );
};