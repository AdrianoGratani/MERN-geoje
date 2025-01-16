import React from 'react';
import { useState } from 'react';
import { useCardContext } from '../../../context/CardContext';
import { useScreenContext } from '../../../context/ScreenSizeContext';
import { ReactComponent as GeojeLand } from "../../../img/geoje_land.svg";
import { ReactComponent as IconHike } from "../../../img/hike.svg";
import locations_data from '../../../locations_data/locations_data';
import "./section_map_land.css";
import SecTextMob from '../SecTextMob';
import { Helmet } from 'react-helmet';

export default function SectionMapLand() {
    // render differnt svg for mobile
    const { es } = useScreenContext();

    const {
        cmi, setCmi, setMc, cci, setCci,
        resetContextData,
        setToggle_animation,
        currentlyHoveredIconCard,
        setCurrentlyHoveredIcon,
        currentlyHoveredCard,
        setCardIsClicked,
        setCurrentlyVisitedSection,
        setClickedIcon,
        setCard_data_for_ext_card,
    } = useCardContext();

    //  DESKTOP VERSION:  ___ON HOVER IT SHOWS THE EXT CARD  ______NOT_____ ON CLICK
    function send_icon_id_to_context(location_id, location_data) {
        setToggle_animation(true);
        setCurrentlyHoveredIcon(location_id)
        setClickedIcon(location_id);
        setCardIsClicked(true);
        setCurrentlyVisitedSection("mainland");
        setCard_data_for_ext_card(location_data);
    }

    function remove_icon_id_from_context() {
    }

    function triggerExtCard(id, l) {                       // SAME FUNCTION FOR MOBILE AND DESKTOP
        if (es() == 'mobile') {    // set which mobile card must appear and give it data.
            setCmi(id);
            setMc(l);

            // check if the id stored is different from the current clicked icon id
            // you clicked an icon? it means the card is already displayed.
            // which means you clicked AGAIN. so delete the context cci to update the icon style to default.

            if (cci !== null) {
                if (cci === id) {
                    setCci(null);
                }
                else if (cci !== id) {
                    setCci(id);
                }
            }
            else setCci(id);
        }
        setToggle_animation(false);
        // setCurrentlyHoveredIcon(null);

    }

    // mobile icon position evaluator
    function evalmp(p, ii) {     //  if icon clicked, repostion to display their text.
        if (ii === cmi)  // if the id is same as context data id for mobile icon reposition to top left
        {
            return 0;
        } else {         // otherwise return the arg invaried.
            return p;
        }
    }

    return (
        <div class="single_map_section_container_land" tabindex='0'
            onClick={() => resetContextData()}
        >
            {
                window.scrollY > 450
                ?
                <Helmet>
                    <title>GeojExplorer | Mainland</title>
                </Helmet>
                :
                <Helmet>
                    <title>GeojExplorer | MainPage</title>
                </Helmet>
            }

            {                                                               // MAP SVG
                es() !== 'mobile'
                    ? <GeojeLand className=" geoje_land_svg" style={{
                    }} />
                    : <GeojeLand className=" geoje_land_svg" style={{
                        width: '68vw'
                    }} />
            }
            {                                                               // ICONS SVG
                locations_data.mainland.map((location, tabIndex) => (
                    <div
                        tabIndex={tabIndex + 1}
                        class={`m_icon_container 
                                ${es() !== 'mobile' && currentlyHoveredCard === location.id
                                ? "m_icon_effect"
                                : ""
                            }
                                                    
                                ${es() === 'mobile' && cci === location.id   // for mobile
                                ? "m_icon_effect"
                                : ""
                            }
                                `}
                        onMouseEnter={() => send_icon_id_to_context(location.id, location)}
                        onMouseLeave={() => remove_icon_id_from_context()}
                        onClick={() => triggerExtCard(location.id, location)}  // both desktop and mobile
                        style={{
                            position: 'absolute',
                            // ON MOBILE vw is used for both x and y axis... it works.
                            top: es() !== 'mobile' ? `${location.top}vw` : `${evalmp(location.mtop, location.id)}vw`,
                            left: es() !== 'mobile' ? `${location.left}vw` : `${evalmp(location.mleft, location.id)}vw`,
                            width: 'fit-content',
                            height: 'fit-content',
                            transition: 'left 0.5s, top 0.5s'
                        }}>

                        <IconHike style={{
                            width: es() !== 'mobile' ? '1.3vw' : '3.5vw',
                            height: es() !== 'mobile' ? '1.3vw' : '3.5vw',
                            margin: es() !== 'mobile' ? '3px' : '1px',
                        }} />

                        {/* on mobile devices info cards is generated from the icon. */}

                        {
                            es() === 'mobile'
                                ?
                                <div>
                                    {
                                        //  ...but only if the icon is clicked
                                        location.id === cmi && cmi !== null
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
