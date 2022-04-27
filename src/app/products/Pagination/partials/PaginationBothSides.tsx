import React from "react";
import {EndPagBtn} from "./EndPagBtn";

interface Props {
    pagesNumber: number,
    pagesToShow: number,
    currentPage: number,
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
    side: string;
    setSide: React.Dispatch<React.SetStateAction<string>>;
}

export const PaginationBothSides = (props: Props) => {
    const {pagesNumber,pagesToShow,currentPage,setCurrentPage,side,setSide} = props;
    const arrayOfPages: number[] = [];
    for (let i = 1; i <= pagesNumber; i++) {
        arrayOfPages.push(i);
    }

    const generateBothSidesPagArr = () => {
        let leftPag: (string | number)[] = [];
        let rightPag: (string | number)[] = [];

        if (side === "left") {
            rightPag = [];
            for (let i = pagesNumber - pagesToShow + 1; i <= pagesNumber; i++) {
                rightPag.push(i)
            };

            if(currentPage <= pagesToShow - 1) {
                leftPag = arrayOfPages.slice(0,pagesToShow);
                leftPag.push("...");
                rightPag = arrayOfPages.slice(pagesNumber - pagesToShow, pagesNumber);
            }

            if (currentPage >= pagesToShow - 1) {
                leftPag = arrayOfPages.slice(0,currentPage + 1).slice(-pagesToShow);
                leftPag.push("...");
            }
            if (currentPage === pagesNumber - pagesToShow) {
                leftPag = arrayOfPages.slice(0,currentPage).slice(-pagesToShow);
            }
            if (currentPage === pagesNumber - pagesToShow - 1) {
                leftPag = arrayOfPages.slice(0,currentPage + 1).slice(-pagesToShow);
            }
        }
        if (side === "right") {

            if(currentPage > pagesNumber - pagesToShow + 1) {
                leftPag = arrayOfPages.slice(0,pagesToShow);
                rightPag = arrayOfPages.slice(pagesNumber - pagesToShow, pagesNumber);
                rightPag.unshift("...");
            }
            if (currentPage <= pagesNumber - pagesToShow + 1) {
                leftPag = arrayOfPages.slice(0,pagesToShow);
                rightPag = arrayOfPages.slice(currentPage - 2 ,pagesNumber).slice(0,pagesToShow);
                rightPag.unshift("...");
            }
            if (currentPage === pagesToShow + 1) {
                leftPag = arrayOfPages.slice(0,pagesToShow);
                rightPag = arrayOfPages.slice(currentPage - 1, currentPage + pagesToShow - 1)
            }
            if (currentPage === pagesToShow + 2) {
                leftPag = arrayOfPages.slice(0,pagesToShow);
                rightPag = arrayOfPages.slice(currentPage - 2 ,pagesNumber).slice(0,pagesToShow);
            }
        }
        const exportArr = [leftPag, rightPag];
        return exportArr;
    }

    return (
        <>
            <EndPagBtn
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                text="First"
                targetLinkNumber={1}
                side="left"
                setSide={setSide}
            />
            {generateBothSidesPagArr()[0].map(el => {
                if(el === "...") {
                    return <span key={el}>{el}</span>
                } else {
                return (
                    <span
                        className={currentPage === el ? "current" : ""}
                        key={el}
                        onClick={() => {
                            setCurrentPage(() => Number(el))
                            setSide("left");
                        }}
                    >{el}
                    </span>

                )}
            })}
            {generateBothSidesPagArr()[1].map(el => {
                if(el === "...") {
                    return <span key={el}>{el}</span>
                } else {
                    return (
                        <span
                            className={currentPage === el ? "current" : ""}
                            key={el}
                            onClick={() => {
                                setCurrentPage(() => Number(el))
                                setSide("right");
                            }}
                        >{el}
                    </span>

                    )}
            })}
            <EndPagBtn
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                text="Last"
                targetLinkNumber={pagesNumber}
                setSide={setSide}
                side="right"
            />
        </>
    )
}