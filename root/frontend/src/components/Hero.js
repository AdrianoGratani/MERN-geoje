import React from "react";

import HeroMapAnimated from "./animated/hero_maps/HeroMapAnimated";
import "../pages/menu_page/menu_page.css";
import { useScreenContext } from "../context/ScreenSizeContext";
import MapsMenu from "./navbar/MapsMenu";
import { useMmenuctx } from "../context/mmenuctx";  // whenever you click, make the mmenu disappear.

// menu maps for mobile:  
import Mmenu from "./navbar/Mmenu";

export default function Hero ({hero_geoje_current_color}) {
    const {currentScreenWidthContext, screenMode, es} = useScreenContext();
    const {showmmenu, setShowmmenu} = useMmenuctx();
    function handlemmenu() {
        if(!showmmenu) {return;}
        if(es()==='mobile' && showmmenu) {setShowmmenu(false)}
    }
    return (

        <div>
             <div className="hero_container"
             onClick={ handlemmenu}>
                {/* mmenu has to be called from mapsmenu mobile button */}
                {  es()==='mobile' && <Mmenu  /> }

                {/* hero text */}
                {currentScreenWidthContext > 1400 ? 
                    <div className="hero_text_container" aria-label='introductive page, with some animations, for my website.'>
                        <h1><span className={`hero_geoje ${hero_geoje_current_color} `}>Everything</span> 

                        {currentScreenWidthContext > 1400 && <br />}
                        about  <span className={`hero_geoje ${hero_geoje_current_color}`} >Geoje</span>. 
                        {currentScreenWidthContext > 1400 && <br />}
                            In one Place. 
                        {currentScreenWidthContext > 1400 && <br />}
                        </h1>
                    </div>
                    
                    :   <span 
                        className={`hero_geoje  ${hero_geoje_current_color} `}>{
                            currentScreenWidthContext > 1200 && screenMode !== 'mobile' ?
                            `Everything About Geoje. In one Place.` : "Explore Geoje, Now!"
                        }
                        </span>
                }
                {/* on mobile the navbar goes here: */}
                {
                    currentScreenWidthContext <= 600 && screenMode === 'mobile' 
                    ?  <div className={`m-button m-button-${hero_geoje_current_color}`}
                    >
                        <MapsMenu aria-label=' button to access the menu, for mobile devices.'/>
                        </div>
                    :  null
                }
                {/* hero maps */}
                    <div className="hero_maps_and_description_container">
                        <div className="hero_maps_container">
                            <HeroMapAnimated index={hero_geoje_current_color}/>
                        </div>
                       
                    </div>
            </div>
        </div>
    )
}