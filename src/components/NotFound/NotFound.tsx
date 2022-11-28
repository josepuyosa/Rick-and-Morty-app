import { FC } from "react";
import { NotFoundButtonStyled, NotFoundContainerStyled } from "./NotFound.styled";

interface INotFoundProps {
    onClick: () => void;
}
export const NotFound: FC<INotFoundProps> = ({ onClick }) => {
    return (
        <NotFoundContainerStyled>
            <h1>Uh-oh!</h1>
            <h2>Pareces perdido en tu viaje</h2>
            <NotFoundButtonStyled onClick={onClick}>Reset</NotFoundButtonStyled>
        </NotFoundContainerStyled>
    );
};
