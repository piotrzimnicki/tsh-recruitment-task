import React, {useState} from "react";
import {StarReview} from "../StarReview/StarReview";
import {SingleProductInt} from "../../types/global_interfaces";
import "./SingleProduct.css";
import {SingleProductModal} from "../SingleProductModal/SingleProductModal";

interface Props {
    singleData: SingleProductInt;
}

export const SingleProduct = ({singleData}: Props) => {
    const [showModal, setShowModal] = useState<boolean>(false);
    function modalHandler (e: React.MouseEvent) {
        e.preventDefault();
        setShowModal(true);
    }
    return (
        <div
            className={
                `single-product fadeIn
                ${singleData.active ? "" : " disabled"}
                ${singleData.promo ? " promo" : ""}
                `}>
            <div  className="inner">
                <a onClick={modalHandler} href="#">
                    <figure>
                        <img src={singleData.image} alt={singleData.name}/>
                        <figcaption>
                            <h2>{singleData.name}</h2>
                            <p>{singleData.description}</p>
                        </figcaption>
                    </figure>
                </a>
                <div>
                    <StarReview rating={singleData.rating}/>
                    {
                        singleData.active
                            ?
                            <a onClick={modalHandler} className="btn btn-blue" href="#">Show details</a>
                            :
                            <a className="btn btn-disabled" href="#">Unavailable</a>
                    }
                </div>
            </div>
            {showModal && <SingleProductModal
                image={singleData.image}
                name={singleData.name}
                description={singleData.description}
                setShowModal={setShowModal}
            />}
        </div>
    )
}