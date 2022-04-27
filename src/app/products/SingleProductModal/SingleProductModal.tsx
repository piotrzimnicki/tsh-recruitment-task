import React, {useState} from "react";
import "./SingleProductModal.css";

interface Props {
    image: string;
    name: string;
    description: string;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SingleProductModal = ({image, name, description, setShowModal}: Props) => {
    const [fadeOut, setFadeOut] = useState(false);

    function closeModal() {
        setFadeOut(true);
        setTimeout(() => {
            setFadeOut(false);
            setShowModal(false);
        }, 300)
    }

    return (
        <div className={`modal-wrapper ${fadeOut ? " fadeOut" : ""}`}>
            <div onClick={closeModal} className="background"></div>
            <div className="inner">
                <button className="btn-close" onClick={closeModal}>
                    <div className="image-wrapper">
                        <img src={require('./assets/close-icon.svg').default} alt="close icon"/>
                    </div>
                </button>
                <img src={image} alt={name}/>
                <div className="text">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}