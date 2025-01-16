import React from 'react'
import {useState, useEffect} from 'react';
import { useCardContext } from '../../../context/CardContext';
import "../ext_card_style.css";

import Carousel from '../extended_card_carousel/Carousel';

export default function ExtIslets({resetContextData, cards_data}) {
    // state for toggling the card:
    const [toggle_animation, setToggle_animation] = useState(true);


    // CONTEXT:
    const { 
        card_data_for_ext_card,
        setCard_data_for_ext_card,
        setCardIsClicked,
        setCurrentlyVisitedSection,
        setCurrentlyClickedCardID,  
        currentlyHoveredIcon
    } = useCardContext();

    function resetContextData() {                                          // when you click the extended card, means you don't want to see it, so this function makes it disappear.
            setCard_data_for_ext_card(null)
            setCardIsClicked(false);
            setCurrentlyVisitedSection(null);
            setCurrentlyClickedCardID(null);
    }

    function handle_reset_data() {
        setToggle_animation(!toggle_animation);
        // console.log(cards_data.id);
            resetContextData();
    }


    // let previousIcon = currentlyHoveredIcon;
    // function hoveredIconChanges(currentIcon) {
        //     if(currentIcon !== previousIcon) {
    //         console.log(currentIcon, previousIcon)
    //         previousIcon = currentIcon;
    //         return true;
    //     }
    //     return false;
    // }
    // constant refresh of ext cards based on which icon user hovers:    + (useEffect to check that on each change of currentlyHoveredIcon)
    
    const [newIcon_hovered, setNewIcon_hovered] = useState(false);
    useEffect(()=> {
        setNewIcon_hovered(true);
        setTimeout(()=> {
            setNewIcon_hovered(false);
        }, 200) 
    } , [currentlyHoveredIcon]);


    const [cr, setCr] = useState(0);
    const [l, setL] = useState(0);
    function rt() {                 // random text generator;
        setL(`You drive along the island for ${Math.floor(Math.random() * 10)} km.`);
        setCr(`There are ${Math.floor(Math.random() * 10)} and ${Math.floor(Math.random() * 10)} cafes in this Island.`);
    }
    useEffect(()=> {
        rt();
    },[currentlyHoveredIcon]);

    return (
        
        <div id="ext_islet_card_container" 
            onClick={handle_reset_data}
            // BUG class={`ext_card_container ${toggle_animation ? "ext_card_container_appears" : "ext_card_container_fades"}`}
            class={`ext_islet_card_container ext_islet_card_container_appears
            ${toggle_animation===false ? "ext_islet_card_container_fades" : ""}`}
        >
        {/* same layout, for all sections. */}

            <div class={`ext_card_text_container ${newIcon_hovered ? "ext_card_title_appears": ""}`}>

                <div class="ext_card_title_container">
                    <h1 class="ext_card_islets_title">{card_data_for_ext_card.name}</h1>
                    <div class="ext_card_infos_subtitle_container">
                        <h2 class="ext_card_islets_infos_subtitle">
                            {card_data_for_ext_card.subtitle}
                        </h2>
                    </div>
                </div>


                <div class="ext_card_islets_infos_container">

                    <h1 className="ext_card_description_title">
                    Useful Infos about {card_data_for_ext_card.name}:
                    </h1>
                    <div class="ext_card_infos_car_container">
                        <p class="ext_card_infos_car">
                        Can I reach it by car? {
                        card_data_for_ext_card.car === "yes"
                        ? `${l}`
                        : "You can only reach this island by walk."
                        }
                        </p>
                    </div>
                    <div class="ext_card_infos_sand_container">
                        <p class="ext_card_infos_sand">
                        Can I swim in {card_data_for_ext_card.name}, or just hike? {
                        card_data_for_ext_card.sand === "yes"
                        ? "There is sand, you can enjoy the beach."
                        : "No, it's a rocky beach. Only hiking here!"
                        }
                        </p>
                    </div>
                    <div class="ext_card_infos_eat_container">
                        <p class="ext_card_infos_eat">
                        Are there any restaurants in {card_data_for_ext_card.name}? {
                        card_data_for_ext_card.eat === "yes"
                        ? `${cr}`
                        : "No, there are no restaurants, nor cafes."
                        }
                        </p>
                    </div>
                    <div class="ext_card_infos_bridge_container">
                        <p class="ext_card_infos_bridge">
                        Is it reachable by bridge or by ferry?
                        {
                        card_data_for_ext_card.bridge === "yes"
                        ? "There as a bridge."
                        : "No, you can only reach the Island by ferry."
                        }
                        </p>
                    </div>

                    {/* description: */}
                    <div class="ext_card_islets_description_container">
                        <h1 className="ext_card_description_title">
                            Description:
                        </h1>
                        <p class="ext_card_description">
                            {card_data_for_ext_card.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}