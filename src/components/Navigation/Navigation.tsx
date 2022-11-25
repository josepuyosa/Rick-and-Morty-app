import { useState } from "react";
import { ItemContainerStyled } from "./Navigation.styled";

export const Navigation = () => {

    const [items, setItems] = useState([
        {
            item: "All", to: '/list/all'
        },
        {
            item: "Unknown", to: '/list/unknown'
        },
        {
            item: "Female", to: '/list/Female'
        },
        {
            item: "Male", to: '/list/male'
        },
        {
            item: "Genderless", to: '/list/genderless'
        },
    ])
    const [active, setActive] = useState(false)

    function handleClick(e: any) {
        if (e.currentTarget === items) {
            setActive(true)
        } else {
            setActive(false)
        }
    }
    return (
        <>
            {items.map((item) => {
                return (
                    <ItemContainerStyled key={item.to} className={active ? "active" : "underline"} onClick={handleClick} to={item.to}>
                        {item.item}
                    </ItemContainerStyled>
                );
            })}
        </>
    );
};