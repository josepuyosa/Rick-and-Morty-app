import { FC, ReactElement, ReactNode } from "react";
import { ButtonPaginationStyled, PaginationContainerStyled } from "./Pagination.styled";
interface IFooterItemsProps {
    children?: ReactElement;
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    totalPage: number;
}
export const Pagination: FC<IFooterItemsProps> = ({ page, setPage, totalPage }) => {
    return (
        <PaginationContainerStyled>
            {page <= 1 ? null : <ButtonPaginationStyled onClick={() => {
                setPage(page - 1)
                console.log("click")
            }} >
                previous Page
            </ButtonPaginationStyled>}

            <p>Page: {page}</p>
            {page >= totalPage ? null : <ButtonPaginationStyled onClick={() => {
                setPage(page + 1)
                console.log("click")
            }} >
                Next Page
            </ButtonPaginationStyled>}


        </PaginationContainerStyled>
    );
};