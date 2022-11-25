import { FC } from "react";
import { CardInfoStyled, CardItemStyled, GreenPointStyled } from "./Character.styled";

interface ICharacterProps {
    character: {
        name: string;
        image: string;
        location: {
            name: string
        };
        origin: {
            name: string;
        }
        id: number;
    }
}
export const Character: FC<ICharacterProps> = ({ character }) => {

    function handleClick() {

    }
    return (
        <>
            <CardItemStyled>
                <img src={character.image} alt={character.name} />
                <GreenPointStyled />
                <CardInfoStyled>
                    <h2>Alive - Human</h2>
                    <p>{character.name}</p>
                    <h2>Last know location:</h2>
                    <p>{character.location.name}</p>
                    <h2>First seen in:</h2>
                    <p>{character.origin.name}</p>
                </CardInfoStyled>
            </CardItemStyled>
        </>
    );
};