import React from "react";
import {EndPagBtn} from "./EndPagBtn";

interface Props {
    pagesNumber: number;
    currentPage: number;
    pagesToShow: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export const PaginationFromLeft = ({pagesNumber,currentPage,pagesToShow, setCurrentPage}: Props) => {

    const arrayOfPages: number[] = [];
    for (let i = 1; i <= pagesNumber; i++) {
        arrayOfPages.push(i);
    }
    function generateFromLeftPagArr () {
        let startArray: number[];
        let endArray: number[];
        let finalArray: (string | number)[];

        if(currentPage <= pagesToShow - 1 ) {
            startArray = arrayOfPages.slice(0,pagesToShow);
            endArray = arrayOfPages.slice(pagesNumber - pagesToShow,pagesNumber);
            finalArray = [...startArray,"...",...endArray];
        } else if (currentPage >= pagesToShow && currentPage < pagesNumber - pagesToShow - 1) {
            startArray = arrayOfPages.slice(0,currentPage + 1).slice(-pagesToShow);
            endArray = arrayOfPages.slice(currentPage + 1, pagesNumber).slice(-pagesToShow);
            finalArray = [...startArray,"...",...endArray];
        } else if (currentPage === pagesNumber - pagesToShow - 1) {
            startArray = arrayOfPages.slice(0,currentPage + 1).slice(-pagesToShow);
            endArray = arrayOfPages.slice(currentPage , pagesNumber).slice(-pagesToShow);
            finalArray = [...startArray,...endArray];
        }
        else if (currentPage === pagesNumber - pagesToShow) {
            startArray = arrayOfPages.slice(0,currentPage).slice(-pagesToShow);
            endArray = arrayOfPages.slice(pagesNumber - pagesToShow,pagesNumber).slice(-pagesToShow);
            finalArray = [...startArray,...endArray];
        } else {
            startArray = arrayOfPages.slice(0,pagesToShow);
            endArray = arrayOfPages.slice(pagesNumber - pagesToShow,pagesNumber);
            finalArray = [...startArray,"...",...endArray];
        }
        return finalArray;
    }

    return (
        <>
            <EndPagBtn
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                text="First"
                targetLinkNumber={1}
            />
            {generateFromLeftPagArr().map(el => {
                if(el === "...") {
                    return <span key={el}>{el}</span>
                } else {
                    return (
                        <span
                            className={currentPage === el ? "current" : ""}
                            key={el}
                            onClick={() => {setCurrentPage(() => Number(el))}}
                        >{el}
                        </span>
                    )
                }
            })}
            <EndPagBtn
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                text="Last"
                targetLinkNumber={pagesNumber}
            />
        </>
    )
}