import { FC, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Character } from "../../components/Character";
import { Footer } from "../../components/Footer";
import { Modal } from "../../components/Modal";
import { Navigation } from "../../components/Navigation";
import { Pagination } from "../../components/Pagination";
import { CommonContext } from "../../context/common.context";
import { HeaderContainerStyled, LogoRyMStyled, NavigationContainer, SearchBar, GridItem, GridRow } from "./List.styled";

interface ICharacter {
    name: string;
    image: string;
    location: {
        name: string;
    };
    origin: {
        name: string;
    }
    id: number;
};
export const List: FC = () => {

    const { setCharacter } = useContext(CommonContext);

    const [searchText, setSearchText] = useState("");
    const [content, setContent] = useState<ICharacter[] | []>([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [totalPage, setTotalPage] = useState(0);
    const [page, setPage] = useState(1);
    const params = useParams();

    useEffect(() => {
        async function fetchData() {
            const params4 = new URLSearchParams({ "page": page.toString() });
            if (params.gender !== 'all') {
                params4.append("gender", params.gender || "")
            }
            if (searchText) {
                params4.append("name", searchText || "")
            }
            const response = await fetch(`https://rickandmortyapi.com/api/character/?${params4.toString()}`);
            const data = await response.json();
            setContent(data.results);
            setTotalPage(data.info.pages);
        }
        fetchData();
    }, [params, searchText, page])

    function handleChange(event: any) {
        setSearchText(event.target.value);
    }

    function openCharacterModal(character: any) {

        setCharacter(character);
        setModalOpen(true);
    }
    return (
        <>
            <HeaderContainerStyled>
                <LogoRyMStyled src="/src/assets//images/Rick-And-Morty-Logo 1.png" alt="Rick-And-Morty-Logo" />
                <SearchBar
                    type="text"
                    placeholder="Buscar personaje..."
                    value={searchText}
                    onChange={handleChange}
                />
            </HeaderContainerStyled>
            <NavigationContainer>
                <Navigation />
            </NavigationContainer>
            <Pagination page={page} setPage={setPage} totalPage={totalPage} />
            {modalOpen ? <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} /> : null}

            <GridRow >
                {content?.map((character) => {
                    return (
                        <GridItem onClick={() => openCharacterModal(character)} key={character.id}>
                            <Character character={character} />
                        </GridItem>
                    );
                })}
            </GridRow>
            <Footer />
        </>

    )
};



