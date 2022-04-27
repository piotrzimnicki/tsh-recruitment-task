import React, {useEffect, useState} from "react";
import {SimplePagination} from "./partials/SimplePagination";
import {PaginationBothSides} from "./partials/PaginationBothSides";
import {PaginationFromLeft} from "./partials/PaginationFromLeft";
import "./Pagination.css";

interface Props {
    currentPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
    pagesNumber: number;
    pagesToShow: number;
}

export const PaginationCached = (props: Props) => {
    const {currentPage, setCurrentPage, pagesNumber, pagesToShow} = props;
    const [side, setSide] = useState<string>("left");
    const arrayOfPages: number[] = [];
    for (let i = 1; i <= pagesNumber; i++) {
        arrayOfPages.push(i);
    }

    useEffect(() => {
        setCurrentPage(1);
        setSide("left");
    }, [])

    if (pagesNumber <= 6) {
        return (
            <>
               <SimplePagination
                   currentPage={currentPage}
                   setCurrentPage={setCurrentPage}
                   pagesNumber={pagesNumber}
               />
            </>
        )
    } else {
        return (
            <>
               <PaginationBothSides
                   pagesNumber={pagesNumber}
                   pagesToShow={pagesToShow}
                   currentPage={currentPage}
                   setCurrentPage={setCurrentPage}
                   side={side}
                   setSide={setSide}
               />
                {/*<PaginationFromLeft*/}
                {/*    pagesNumber={pagesNumber}*/}
                {/*    currentPage={currentPage}*/}
                {/*    pagesToShow={pagesToShow}*/}
                {/*    setCurrentPage={setCurrentPage}*/}
                {/*/>*/}
            </>
        )
    }
}