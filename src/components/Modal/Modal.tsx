import { Dispatch, FC, SetStateAction, useContext } from "react";
import { CommonContext } from "../../context/common.context";
import { AboutContainerStyled, ButtonCloseStyled, CardImgStyled, EpisodeContainerStyled, InfoSectionStyled, InterestingChContainerStyled, ModalConatinerStyled, ModalHeaderStyled, OverlayStyled } from "./Modal.styled";

interface IModalProps {
    modalOpen: boolean;
    setModalOpen: Dispatch<SetStateAction<boolean>>;
}
export const Modal: FC<IModalProps> = ({ modalOpen, setModalOpen }) => {

    const { character, setCharacter } = useContext(CommonContext);
    console.log(character)

    return (
        <>
            <OverlayStyled>
                <ModalConatinerStyled>
                    <ModalHeaderStyled>
                        <ButtonCloseStyled onClick={() => setModalOpen(false)}>
                            x
                        </ButtonCloseStyled>
                    </ModalHeaderStyled>
                    <CardImgStyled src={character.image} alt={character.name} />
                    <InfoSectionStyled>
                        <h3> status: {character.status} </h3>
                        <h3> name: {character.name} </h3>
                        <h3> species: {character.species} </h3>
                    </InfoSectionStyled>
                    <AboutContainerStyled>
                        <h3>gender: {character.gender}</h3>
                        <h3>origin: {character.origin.name}</h3>
                        <h3>type: {character.type}</h3>
                    </AboutContainerStyled>
                    <EpisodeContainerStyled>
                        <h3>episodes: </h3>
                    </EpisodeContainerStyled>
                    <InterestingChContainerStyled>
                        <h3> status: {character.status} </h3>
                        <h3> name: {character.name} </h3>
                        <h3> species: {character.species} </h3>
                    </InterestingChContainerStyled>

                </ModalConatinerStyled>
            </OverlayStyled>
        </>
    );
};