import React from "react";
import "./Spinner.css"

export const Spinner = () => (
    <span className="spinner">
        <span className="inner">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="30" cy="30" r="28" stroke="#E0E2EA" strokeWidth="4"/>
            </svg>
        <span className="circle-cut">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30 30C30 14.536 17.464 2 2 2" stroke="#4460F7" strokeWidth="4" strokeLinecap="round"/>
            </svg>
        </span>
        </span>
    </span>
)