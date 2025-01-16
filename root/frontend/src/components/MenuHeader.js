import React from 'react';
// click 'about and it take you to the css animation page:
import { useNavigate} from 'react-router-dom';               // for routing
import { useState, useEffect } from 'react';
import "../pages/menu_page/menu_page.css";
import MapsMenu from './navbar/MapsMenu';
import { useScreenContext } from '../context/ScreenSizeContext';

export default function MenuHeader() {
    const {currentScreenWidthContext, screenMode} = useScreenContext();
    const n = useNavigate();   
    const hr = () => {
        n('/about');
    }

    const [oo, setOo] = useState(false);
    

    useEffect(()=> {
        if(oo) {
            const i = setInterval(()=> {
                hr();
            }, 500);
            return ()=> clearInterval(i);
        }
        else return;
    }, [oo]);

    return (
        <div className="menu_page_header">
            <nav className="menu_page_nav">
                    <ul className="menu_page_ul ">
                        <li
                        onClick={()=>setOo(true)}
                        className="menu_about_me">About</li>
                        {
                            // not on mobile version:
                            currentScreenWidthContext > 600 && screenMode !== 'mobile'
                                ?
                                <li className="lii">
                                    <MapsMenu />
                                </li>
                            : null
                        }
                </ul>
            </nav>
        </div>
    )
}