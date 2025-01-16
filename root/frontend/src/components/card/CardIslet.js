import React from 'react';
import { useEffect } from 'react';
import { GiIsland } from "react-icons/gi";
import { FaCarSide } from "react-icons/fa6";
import { FaBridgeWater } from "react-icons/fa6";
import { PiBowlFoodBold } from "react-icons/pi";
import { MdOutlineBeachAccess } from "react-icons/md";

// import the utility to USE the context useState data:
import { useCardContext } from '../../context/CardContext';

import "./card_style.css";

export default function CardIslet({card_data}) {

    // CONTEXT DATA:
    const { 
        setCard_data_for_ext_card,
        setCardIsClicked,
        setCurrentlyVisitedSection,
        setCurrentlyClickedCardID,
        // data for hovering: 
        currentlyHoveredIcon, 
        currentlyHoveredCard, setCurrentlyHoveredIconCard,  
    } = useCardContext();

    // props data:
    let c = card_data;
    let islets_card_data_keys = {
        id: c.id,
        // short card data
        n : c.name,
        c : c.car,
        b : c.bridge,
        s : c.sand,
        e : c.eat,
    };

    function set_context_currently_hovered_card(islet_card_id) {
        setCurrentlyHoveredIconCard(islet_card_id);
    }

    function handle_context_data_extended_cards(data_for_ext_card, is_card_clicked, visited_section_name, clicked_card_id) {
        setCard_data_for_ext_card(data_for_ext_card);                      // both card and ext card are in secthion_text but separated by few layers. send the clicked card data to a context state variable
        setCardIsClicked(is_card_clicked);
        setCurrentlyVisitedSection(visited_section_name);
        setCurrentlyClickedCardID(clicked_card_id);
    }

    //debug:
    useEffect(()=> {
        // console.log(currentlyHoveredCard);
        // console.log(currentlyVisitedSection);
        // console.log(currentlyClickedCardID);
    },[currentlyHoveredCard]);

    return (
        // upper line: name;  lower line: infos.

        <div
            // check if the icon for this card is being hovered: 
            className={`card_islets_container 
                        ${currentlyHoveredIcon === card_data.id
                          ? "is_card_effect"
                          : ""
                        }`}

            // event listener to set extended CArd:
            onClick={()=> handle_context_data_extended_cards(card_data, true, "islets", card_data.id)}

            // event listener to set the context data:
            onMouseEnter={()=> set_context_currently_hovered_card(card_data.id)}
            onMouseLeave={()=> set_context_currently_hovered_card(null)}
        >

            {/* name takes a full line. */}
            <h1 className="card_name_islets">
                <div className="icon_container_islets">
                    <GiIsland />
                </div>
                <div className="islets_text"
                    style={{
                        fontSize: islets_card_data_keys.n.length > 10 ? '0.9rem' : '1rem'
                    }}
                >
                    {islets_card_data_keys.n}
                </div>
            </h1>

            {/* additional card infos take one line altogether. */}
            <div class="card_additional_infos">

                {
                    islets_card_data_keys.c === 'yes'
                    ?
                        <h4 className="card_name_bycar">
                            <div className="icon_container_islets">
                                <FaCarSide />
                            </div>
                            <div className="islets_text">
                            </div>
                        </h4>
                    : null
                
                }

                {
                    islets_card_data_keys.b === 'yes'
                    ?
                        <h4 className="card_name_bridge">
                            <div className="icon_container_islets">
                                <FaBridgeWater />
                            </div>
                            <div className="islets_text">
                            </div>
                        </h4>
                    : null
                }
                {
                    islets_card_data_keys.e === 'yes'
                    ?
                        <h4 className="card_name_bridge">
                            <div className="icon_container_islets">
                                <PiBowlFoodBold />
                            </div>
                            <div className="islets_text">
                            </div>
                        </h4>
                    : null
                }
                {
                    islets_card_data_keys.s === 'yes'
                    ?
                        <h4 className="card_name_bridge">
                            <div className="icon_container_islets">
                                <MdOutlineBeachAccess />
                            </div>
                            <div className="islets_text">
                            </div>
                        </h4>
                    : null
                }

            </div>
        </div>
    )
}