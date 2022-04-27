import React from "react";

interface Arguments {
    pagesNumber: number,
    pagesToShow: number,
    currentPage: number,
    pagesArr: number[];
    side: string;
    showDotsMiddle: React.MutableRefObject<boolean>;
}

export const generateAdvancedPaginationArr = (args:Arguments) => {
    const {pagesNumber,pagesToShow,currentPage,pagesArr,side,showDotsMiddle} = args;
    let leftPag = [];
    let rightPag = [];
    for (let i = 1; i <= pagesToShow; i++) { leftPag.push(i)};

    for (let i = pagesNumber - pagesToShow + 1; i <= pagesNumber; i++) {
        rightPag.push(i)
    };

    if (side === "left") {
        rightPag = [];
        for (let i = pagesNumber - pagesToShow + 1; i <= pagesNumber; i++) {
            rightPag.push(i)
        };

        if (pagesArr.indexOf(currentPage) >= pagesToShow - 1) {
            leftPag = [currentPage - 1, currentPage, currentPage + 1];
            showDotsMiddle.current = true;
        }
        if (currentPage === pagesNumber - pagesToShow) {
            leftPag = [currentPage - 2, currentPage - 1, currentPage];
            showDotsMiddle.current = false;
        }
        if (currentPage === pagesNumber - pagesToShow - 1) {
            showDotsMiddle.current = false;
        }
    }
    if (side === "right") {
        leftPag = [];
        for (let i = 1; i <= pagesToShow; i++) { leftPag.push(i) };

        if (pagesArr.indexOf(currentPage) <= pagesNumber - pagesToShow) {
            rightPag = [currentPage - 1, currentPage, currentPage + 1];
            showDotsMiddle.current = true;
        }
        if (pagesArr.indexOf(currentPage) === pagesToShow) {
            rightPag = [currentPage, currentPage + 1, currentPage + 2];
            showDotsMiddle.current = false;
        }
        if (pagesArr.indexOf(currentPage) === pagesToShow + 1) {
            showDotsMiddle.current = false;
        }
    }
    const exportArr = [leftPag, rightPag];
    return exportArr;
}