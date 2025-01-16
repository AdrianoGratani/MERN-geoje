import React from 'react';    // CONTEXT:
import { useState, useEffect } from 'react';
import { useCardContext } from '../../../context/CardContext';
import "../ext_card_style.css";
import Carousel from '../extended_card_carousel/Carousel';

export default function ExtSeaside({resetContextData, cards_data}) {

    const [extended_card_toggled, SetExtended_card_toggled] = useState(true);

    const c = cards_data;

    // cards_data: is a whole bunch of data for all the cards. you must retrieve the one you need.
    const { 
        card_data_for_ext_card,
        setCard_data_for_ext_card,
        setCardIsClicked,
        setCurrentlyVisitedSection,
        setCurrentlyClickedCardID,
        currentlyHoveredIcon  
    } = useCardContext();
 
    function resetContextData() {                                          // when you click the extended card, means you don't want to see it, so this function makes it disappear.
        setCard_data_for_ext_card(null);    
        setCardIsClicked(false);
        setCurrentlyClickedCardID(null);
        setCurrentlyVisitedSection(null);
    }

    function handle_reset_data() {
        SetExtended_card_toggled(false);
        setTimeout(()=> {
            resetContextData();
        }, 1000)
    }

    const [re, setRe] = useState(0);
    const [ca, setCa] = useState(0);
    
    function er() {            // return text about restaurants
        setRe(Math.floor(Math.random() * 10));
        setCa(Math.floor(Math.random() * 10));
    }
    useEffect(()=> {
        er();
    }, []);
    const [newIcon_hovered, setNewIcon_hovered] = useState(false);
    useEffect(()=> {
        er();                                                   // refresh resto and cafe data
        setNewIcon_hovered(true);
        setTimeout(()=> {
            setNewIcon_hovered(false);
        }, 200) 
    } , [currentlyHoveredIcon]);


    
    return (
        <div class={`ext_sea_card_container ext_sea_card_container_appears ${extended_card_toggled === false ? "ext_sea_card_container_fades" : ""}`} 
        onClick={handle_reset_data}>
        {/* same layout for all sections. */}

        <div class={`ext_card_text_container ${newIcon_hovered ? "ext_card_title_appears" : ""}`}>

            <div class="ext_card_title_container">
                <h1 class="ext_card_seaside_title">{card_data_for_ext_card.name}</h1>
                <div class="ext_card_infos_subtitle_container">
                    <h2 class="ext_card_seaside_infos_subtitle">
                        {card_data_for_ext_card.subtitle}
                    </h2>
                </div>
            </div>



            <div class="ext_card_seaside_infos_container">
                <h1 className={`ext_card_description_title `}>

                Useful Infos for {card_data_for_ext_card.name}:
                </h1>

                <div class="ext_card_infos_sand_container">
                    <p class="ext_card_infos_sand  ">
                    {card_data_for_ext_card.name} is sandy or rocky beach? {
                        
                        card_data_for_ext_card.sand 
                        ? "It's a sandy beach."
                        : "It's a rocky beach."
                    }
                    </p>
                </div>
                <div class="ext_card_infos_car_container">
                    <p class="ext_card_infos_car">
                    Car Parking is available? {
                    card_data_for_ext_card.parking === 'yes' 
                    ? "Parking is available."
                    : "Parking is not available"
                    }
                    </p>
                </div>
                <div class="ext_card_infos_eat_container">
                    <p class="ext_card_infos_eat">
                    Are there restaurants nearby? {
                    card_data_for_ext_card.cafes === 'yes'
                    // generate restaurant number
                    ?  `There are ${re} restaurants, and ${ca} cafes nearby.`
                    :  "There are no restaurants nearby."
                    }
                    </p>
                </div>
                

                  {/* description: */}
                  <div class="ext_card_sea_description_container">
                        <h1 className="ext_card_description_title">
                            Description
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