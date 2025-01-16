import React from 'react';
import HeaderTitle from "./HeaderTitle";

import "./header.css";

export default function Header() {
    return(
        <header class="header" id="header">
            {/* title */}
            <div class="header_title_container" id="header_title_container">
                <HeaderTitle />
            </div>

      
        </ header>
    );
}