import React from 'react';
import "./cloud_one.css";
import cloudImage from "../../../img/cloud.png";
import { useScreenContext } from '../../../context/ScreenSizeContext';

export default function Cloud_one() {
    const {es} = useScreenContext();

    return (
            <div>
                {
                    es() === 'mobile' 
                        ? <img src={cloudImage} class="cloud_img" id="cloud_img"></img>

                        :
                        <div>
                            <img src={cloudImage} class="cloud_img" id="cloud_img"></img>
                            <img src={cloudImage} class="cloud_img cla" id="cloud_img"></img>
                            <img src={cloudImage} class="cloud_img clb" id="cloud_img"></img>
                        </div>
                }
            </div>
    )
}




// <svg
// class="cloud_svg"
// xmlns="http://www.w3.org/2000/svg"
// viewBox="0 0 200 100"
// width="30vw"
// height="30vh"
// >
// <defs>
// <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
// <feDropShadow dx="2" dy="2" stdDeviation="5" floodColor="rgba(0, 0, 0, 0.5)" />
// </filter>
// </defs>
// <g fill="" filter="url(#shadow)">
// <ellipse cx="100" cy="50" rx="30" ry="20" />
// <ellipse cx="70" cy="40" rx="35" ry="25" />
// <ellipse cx="90" cy="50" rx="30" ry="20" />
// <ellipse cx="100" cy="60" rx="40" ry="30" />
// <ellipse cx="150" cy="50" rx="30" ry="20" />
// <ellipse cx="130" cy="40" rx="35" ry="25" />
// <ellipse cx="170" cy="50" rx="30" ry="20" />
// <ellipse cx="150" cy="60" rx="40" ry="30" />
// </g>
// </svg>