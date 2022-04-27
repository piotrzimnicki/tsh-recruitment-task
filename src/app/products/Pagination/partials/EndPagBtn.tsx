import React from "react";

interface Props {
    currentPage: number;
    setCurrentPage?:  React.Dispatch<React.SetStateAction<number>>;
    side?: string;
    setSide?:  React.Dispatch<React.SetStateAction<string>>;
    text: string;
    targetLinkNumber: number;
    urlWithFilters?: string;
    setDataUrl?: React.Dispatch<React.SetStateAction<string>>;
}

export const EndPagBtn = (props : Props) => {
    const {
        currentPage,
        setCurrentPage,
        side,
        setSide,
        text,
        targetLinkNumber,
        urlWithFilters,
        setDataUrl,
    } = props;
    return (
        <span
            className={currentPage === targetLinkNumber ? "disabled" : ""}
            onClick={() => {
                setCurrentPage && setCurrentPage(targetLinkNumber);
                setSide && side && setSide(side);
                (setDataUrl && urlWithFilters) && setDataUrl(`${urlWithFilters}&page=${targetLinkNumber}`);
            }}
        >
            {text}
        </span>
    )
}