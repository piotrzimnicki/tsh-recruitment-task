import React from "react";

interface Props {
    maxRating?: number;
    rating: number;
}

export const StarReview = ({rating, maxRating = 5}: Props) => {
    function prepareStars(current: number, max: number) {
        const arr = [];
        const leftStars = max - current;
        for (let i = 1; i <= current; i++) {
            arr.push("on");
        }
        if (leftStars > 0) {
            for (let i = 1; i <= leftStars; i++) {
                arr.push("off");
            }
        }
        return arr;
    }


    return (
        <div className="star-review">
            {prepareStars(rating, maxRating).map((el, i) => {
                if (el === 'on') return (
                    <span key={i}>
                        <img src={require('./assets/star-on.png').default} alt="star"/>
                    </span>
                );
                if (el !== 'on') return (
                    <span key={i}>
                        <img src={require('./assets/star-off.png').default} alt="star disabled"/>
                    </span>
                );
            })}
        </div>
    )
}