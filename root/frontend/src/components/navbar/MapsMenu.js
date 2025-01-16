import React from "react";
import {useState} from 'react';
import MapItems from "./MapItems"
import { AiOutlineDown } from "react-icons/ai";
import "./maps_menu.css";
import { useScreenContext } from "../../context/ScreenSizeContext";
import { useMmenuctx } from "../../context/mmenuctx";


export default function MapsMenu() {

    const {showmmenu, setShowmmenu} = useMmenuctx();

    const {currentScreenWidthContext, screenMode, es} = useScreenContext();

    const [maps_triggered, setMaps_triggered] = useState(true);
    const [map_li_fades, setMap_li_fades] = useState(false);

    function wait_trigger_useState() {       // first animate li "maps" to disappear, then trigger animation for list items to appear.
        if(es() !== 'mobile') {
            setMap_li_fades(true)
            setTimeout(() => {
                setMaps_triggered(false);
                setMap_li_fades(false);
            }, 500)
        }
        else return;
    }

    function mmenu() {   // when explore now is clicked the mobile menu compares.
        if(es()==='mobile') {  
            setShowmmenu(true);
        }
    }

    return (
        <div className="maps_menu_c">
            {/* mapx_triggered = is not triggered */}
         
            {maps_triggered 
                ?
                    <div  className="map_menu_container">
                        <li className={` ${map_li_fades ? "maps_li_fades" : "maps_li"}`} onMouseEnter={() =>  wait_trigger_useState()}
                            // mobile menu compares:
                           onClick={() => mmenu()}
                        >
                           
                        {
                            currentScreenWidthContext <=600 && screenMode === "mobile"
                            ? `Explore Now.`
                            : `Maps`
                        }
                        
                        </li>
                            {
                                currentScreenWidthContext <=600 && screenMode === 'mobile'
                                ? null :   <div className="map_li_icon">
                                    <AiOutlineDown className={` ${map_li_fades ? "maps_li_fades map_li_icon_hovered" : "maps_li"}`} onMouseEnter={() =>  wait_trigger_useState()}/> </div>
                            }
                    </div>
                :   <MapItems maps_triggered={maps_triggered} setMaps_triggered={setMaps_triggered}/>
            }

        </div>
    )
}