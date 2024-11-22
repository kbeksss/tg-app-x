import React from 'react';
import {styled} from "@mui/material";

const TokenTradesIcon = styled((props) => (
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_1018_4124)">
            <circle cx="16.9286" cy="7.238" r="6.23812" fill="white" stroke="black" strokeWidth="2"/>
            <circle cx="9.2144" cy="14.9524" r="8.04766" fill="white" stroke="black" strokeWidth="2"/>
            <path d="M9.21445 11.0722L10.2845 13.8824L13.0947 14.9524L10.2845 16.0225L9.21445 18.8327L8.1444 16.0225L5.33423 14.9524L8.1444 13.8824L9.21445 11.0722Z" fill="black"/>
        </g>
        <defs>
            <clipPath id="clip0_1018_4124">
                <rect width="24" height="24" fill="white" transform="translate(0.166748)"/>
            </clipPath>
        </defs>
    </svg>

))(({ theme }) => ({
    width: 24,
    height: 24,
    color: 'inherit',
}));

export default TokenTradesIcon;
