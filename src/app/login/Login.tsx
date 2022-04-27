import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import {AppRoute} from 'routing/AppRoute.enum';

import './Login.css';
import {Logo} from "../common/Logo/Logo";

interface FormData {
    username: string;
    password: string;
}

interface Props {
    prop: boolean | string;
}

export const Login = ({prop}:Props) => {
    const [formData,setFormData] = useState<FormData>({
        username: "",
        password: ""
    })
    function inputHandler (e: React.ChangeEvent<HTMLInputElement>) {
        setFormData(data => ({
            ...data,
            [e.target.name]: e.target.value
        }))
    }
    return (
        <div className="login-page-wrapper default-container">
            <div className="left">
                <img src={require('../../assets/images/login-image.jpg').default} alt=""/>
            </div>
            <div className="right">
                <Logo/>
                <div className="inner">
                    <Link to={AppRoute.Home}>Products page</Link>
                    <h2>Login {prop}</h2>
                    <form>
                        <label>
                            <span>username</span>
                            <input
                                placeholder="Enter username"
                                value={formData.username}
                                onChange={inputHandler}
                                name="username"
                            />
                        </label>
                        <label>
                            <span>password</span>
                            <input
                                placeholder="Enter password"
                                value={formData.password}
                                onChange={inputHandler}
                                name="password"
                                type="password"
                            />
                        </label>
                        <button className="btn-login" type="submit">Log in</button>
                    </form>
                    <a className="forgot-pass" href="#">Forgot password?</a>
                </div>
            </div>
        </div>

    );
};
