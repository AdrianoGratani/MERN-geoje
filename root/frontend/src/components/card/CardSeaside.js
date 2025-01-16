import React from 'react';
import { useCardContext } from '../../context/CardContext';
// import { useEffect } from 'react';
// import { useState } from 'react';

import "./card_style.css";

// icons:
import { FaHouseTsunami } from "react-icons/fa6";
import { FaUmbrellaBeach } from "react-icons/fa6";
import { FaCaravan } from "react-icons/fa6";
import { FaGlassWaterDroplet } from "react-icons/fa6";


export default function CardSeaside({ card_data }) {

    // state for external card rendering:

    // CONTEXT:
    const {
        // context data for ext card:
        setCard_data_for_ext_card,
        cardIsClicked, setCardIsClicked,
        currentlyClickedCardID, setCurrentlyClickedCardID,
         
        // context data for icon/card events:
        currentlyHoveredIcon,
        setCurrentlyHoveredIconCard,
        setCurrentlyVisitedSection,
        } = useCardContext();

    // props data:
    let c = card_data;
    let seaside_card_data_keys = {
        n : c.name,
        id: c.id,
        s : c.sand,
        p : c.parking,
        c : c.cafes,
    };

    function set_context_currently_hovered_card(card_id) {
        setCurrentlyHoveredIconCard(card_id);
    }
    function remove_context_currently_hovered_card() {
        setCurrentlyHoveredIconCard(null);
    }

    function handle_context_seaside_clicked_card_(card_id) {
        setCard_data_for_ext_card(card_data);
        setCardIsClicked(true);            // context state for external card rendering:

        // set context data:
        setCurrentlyVisitedSection("seaside");
        setCurrentlyClickedCardID(card_id);
        
        console.log(card_id + "   " + currentlyClickedCardID + " " + " " + cardIsClicked); // for debugging:
    }

    return (
        // [LAYOUT] upper line: name;  lower line: infos.
        <div className={`${ currentlyHoveredIcon === card_data.id ? "s_card_effect" : ""} card_seaside_container  `}
            // event listeners for card_icon events, based on the context data
            onMouseEnter={ ()=> set_context_currently_hovered_card(seaside_card_data_keys.id) }
            onMouseLeave={ ()=> remove_context_currently_hovered_card() } 

            // event listener for extended card:
            onClick={()=> handle_context_seaside_clicked_card_(card_data.id)}
            aria-label={`infos for ${seaside_card_data_keys.n}`} 
            >
            {/* name takes a full line. */}
           
            <h1 className="card_name_seaside">
                <div className="icon_container_seaside">
                    <FaHouseTsunami class="icon_sea" aria-hidden='true'/>
                </div>
                <div className="seaside_text" aria-hidden='true'
                    style={{
                        fontSize: seaside_card_data_keys.n.length > 10 ? '0.9rem' : '1rem'
                    }}
                >
                    {seaside_card_data_keys.n}
                </div>
            </h1>

             {/* additional card infos take one line altogether. */}
            <div class="card_additional_infos_sea">

                {
                    seaside_card_data_keys.s === "yes"
                    ? 
                    <h4 className="card_sand">
                        <div className="icon_container_seaside">
                            <FaUmbrellaBeach class="icon_sea"/>     
                        </div>
                        <div className="seaside_text">
                          
                        </div>
                   </h4>
                    : null
                }    
               

                {
                    seaside_card_data_keys.p === 'yes'
                    ?
                        <h4 className="card_name_parking">
                            <div className="icon_container_seaside">
                                <FaCaravan class="icon_sea"/>
                            </div>
                            <div className="seaside_text">
                            </div>
                        </h4>
                    : null

                }
                
                {
                    seaside_card_data_keys.c === 'yes'
                    ?
                        <h4 className="card_name_cafes">
                            <div className="icon_container_seaside">
                                <FaGlassWaterDroplet class="icon_sea"/>
                            </div>
                            <div className="seaside_text">
                            </div>
                        </h4>
                    :   null
                
                }
             </div>
            
        </div>
    )
}