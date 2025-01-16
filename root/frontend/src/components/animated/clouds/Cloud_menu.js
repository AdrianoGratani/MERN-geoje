import React from 'react';
import "./cloud_menu.css";
import cloudImage from "../../../img/cloud.png";

import { useNavigate} from 'react-router-dom';               // for routing

export default function Cloud_menu() {

    const navigate = useNavigate();         // useNavigate() is the same as the old good useHistory router hook.
                                            // useNavigate() takes a route URL as argument, and takes the user to that specific page.

    function handleRouting() {
        // navigate.push('/menu_page')      // ERROR: navigate does not use push(). instead, call navigate with the route as arg.
        navigate('/menu_page');              // basically, this function of router-dom sets the url to: http://localhost:3000/menu_page
    }

    return (
        <div 
        onClick={handleRouting}
        class="cloud_menu_container" id="cloud_menu_container">
            <img src={cloudImage} class="cloud_img_menu" id="cloud_img_menu">
            </img>
            <p class="cloud_menu_text" id="cloud_menu_text">Play</p>
        </div>

    )
}
