import React, {Dispatch, SetStateAction} from "react";
import {Logo} from "../../common/Logo/Logo";
import {AppRoute} from "../../../routing/AppRoute.enum";
import {Link} from "react-router-dom";
import "./Header.css";
import {Checkbox} from "../../common/Checkbox/Checkbox";
import {SearchDataInt} from "../../types/global_interfaces";

interface Props {
    searchData: SearchDataInt;
    setSearchData:  Dispatch<SetStateAction<SearchDataInt>>;
}

export const Header = ({searchData,setSearchData}: Props) => {

    function checkboxHandler (e: React.ChangeEvent<HTMLInputElement>) {
        setSearchData(data => ({
            ...data,
            [e.target.name]: e.target.checked,
        }))
    }
    function inputHandler (e: React.ChangeEvent<HTMLInputElement>) {
        setSearchData(data => ({
            ...data,
            [e.target.name]: e.target.value,
        }))
    }

    return (
        <header className="header">
            <div className="inner container-inner">
                <Logo/>
                <div className="controls">
                    <div className="search">
                        <input
                            name="text"
                            value={searchData.text}
                            onChange={inputHandler}
                            placeholder="Search"
                            type="text"
                        />
                        <img
                            src={require('../../../assets/icons/icon-search.png').default}
                            alt="icon search"
                            className="icon-search"
                        />
                    </div>
                    <div className="check-filters">
                        <Checkbox setData={checkboxHandler} name="active" text="Active" />
                        <Checkbox setData={checkboxHandler} name="promo" text="Promo" />
                    </div>
                </div>
                <Link className="btn-login" to={AppRoute.Login}>Log in</Link>
            </div>
        </header>
    )
}