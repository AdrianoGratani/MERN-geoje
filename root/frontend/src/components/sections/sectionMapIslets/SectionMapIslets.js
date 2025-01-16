import React from 'react';
// import { useEffect, useState } from 'react';
import {ReactComponent as GeojeIslets} from "../../../img/geoje_islets.svg";
import {ReactComponent as SvgIslets} from "../../../img/islet.svg";
import { useCardContext } from '../../../context/CardContext';
import { useScreenContext } from '../../../context/ScreenSizeContext';
import locations_data from '../../../locations_data/locations_data';
import SecTextMob from '../SecTextMob';
import "./section_map_islets.css";
import {Helmet} from "react-helmet";

export default function Section_map_islets() {
    const icons_islets_data = locations_data.islets;                                                // data for icon positioning.
    const {es} = useScreenContext();

    // CONTEXT DATA for icon layout - card layout interactions:
    const {
        cmi, setCmi, setMc, cci, setCci,
        resetContextData,
        setToggle_animation,
        setCurrentlyHoveredIcon, 
        currentlyHoveredCard,
        setCardIsClicked,
        setCurrentlyVisitedSection,
        setClickedIcon,
        setCard_data_for_ext_card,
    } = useCardContext();

     // ___ON HOVER
     function send_icon_id_to_context(location_id, location_data) {
        setToggle_animation(true);
        setCurrentlyHoveredIcon(location_id)
        setClickedIcon(location_id);
        setCardIsClicked(true);
        setCurrentlyVisitedSection("islets");
        setCard_data_for_ext_card(location_data);
    }

    function triggerExtCard(i, d) {   // i is the id  d is the data. [refer to mainland or seaside]
            if(es()==='mobile') {
                setCmi(i);
                setMc(d);

                if(cci!==null) { 
                    if(cci === i) {
                        setCci(null);
                    }
                    else if(cci !== i) {
                        setCci(i);
                    }
                }
                else setCci(i);
            }
            setToggle_animation(false);
            setCurrentlyHoveredIcon(null);
    }

    function p(i, p) {  // this function evaluates the position for MOBILE icons based on user-triggered context data.
                        // is the same es evalmp() in mainland.
        if(i===cmi) return 0;    
        return p;                        
    }

    return (

            <div class="single_map_section_container_islets" tabindex='0'
            onClick={()=> resetContextData()}
            >
                {
                    window.scrollY > 1400 && window.scrollY < 1900
                    ? 
                        <Helmet>
                            <title>GeojExplorer | Islets</title>
                        </Helmet> 
                    :  null
                }
                {/* .geoje_islets_svg is JUST for original _colors_ */}

                {
                    es() !== 'mobile' 
                    ?    <GeojeIslets class="geoje_islets_svg" style={{ 
                         }} />

                    :     <GeojeIslets class="geoje_islets_svg" style={{ 
                            width: '90vw',
                    }} />
                }
            {
                icons_islets_data.map((islet, tabIndex)=> (

                    <div className={
                        // 1. for desktop    2. for mobile
                        `is_icon_container ${currentlyHoveredCard === islet.id
                                                    ? "is_icon_effect"
                                                    : ""                                
                    }
                    ${es()==='mobile' && cci === islet.id
                        ? "is_icon_effect"
                        : ""                                
}
                    `}

                    onMouseEnter={()=> send_icon_id_to_context(islet.id, islet)}

                    // FOR BOTH DESKTOP AND MOBILE MAP ICONS!
                    onClick={()=> triggerExtCard(islet.id, islet)}
                    style={{
                        width: 'fit-content',
                        height: 'fit-content',
                        position: 'absolute',
                        top:  es()!=='mobile' ? `${islet.top}vw` : `${p(islet.id, islet.mtop)}vw`,
                        left: es()!=='mobile' ? `${islet.left}vw`: `${p(islet.id, islet.mleft)}vw`,
                        transition: 'left 0.5s, top 0.5s'
                    }}
                    // keyboard-only users:  AFTER ALL THE OTHERS
                    tabIndex={tabIndex + 40}
                    >
                    {/* {islet.id} */}
                        <SvgIslets
                            style={{
                                width:  es()!=='mobile'? '1.7vw' : '5vw', 
                                minWidth:  es()!=='mobile'? '1.7vw' : '5vw',
                                maxWidth:  es()!=='mobile'? '1.7vw' : '5vw',
                                height:  es()!=='mobile'? '1.7vw' : '5vw',
                                minHeight:  es()!=='mobile'? '1.7vw' : '5vw',
                                maxHeight:  es()!=='mobile'? '1.7vw' : '5vw',
                                margin: '3px',
                            }}
                        />

{/* MOBILE CARDS: */}
                       {
                            es() === 'mobile' &&  islet.id===cmi
                                ?
                                <div> 
                                {
                                    //  ...but only if the icon is clicked
                                    islet.id === cmi && cmi !== null
                                    ? <SecTextMob /> 
                                    : null
                                }
                             </div>
                                : null
                       }
                    </div>
                ))
            }
            </div>
    )
}