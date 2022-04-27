import React from "react";
import "./NoProductsFound.css";

export const NoProductsFound = () => {
    return (
        <div className="pnf-wrapper">
            <div className="inner">
                <img src={require('./assets/shopping-bag.svg').default} alt="shopping bag icon"/>
                <h2>Ooops... It`s empty here</h2>
                <p>There are no products on the list</p>
            </div>
        </div>
    )
}