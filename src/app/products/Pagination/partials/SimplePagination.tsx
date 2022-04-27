import React from "react";
import {EndPagBtn} from "./EndPagBtn";

interface Props {
    currentPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
    pagesNumber: number;
}

export const SimplePagination = ({currentPage, setCurrentPage, pagesNumber}: Props) => {
    const arrayOfPages: number[] = [];
    for (let i = 1; i <= pagesNumber; i++) {
        arrayOfPages.push(i);
    }
    return (
        <>
            <EndPagBtn
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                text="First"
                targetLinkNumber={1}
            />
            {arrayOfPages.map(el => (
                <span
                    className={currentPage === el ? "current" : ""}
                    key={el}
                    onClick={() => setCurrentPage(el)}
                >
                            {el}
                        </span>
            ))}
            <EndPagBtn
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                text="Last"
                targetLinkNumber={pagesNumber}
            />
        </>
    )
}