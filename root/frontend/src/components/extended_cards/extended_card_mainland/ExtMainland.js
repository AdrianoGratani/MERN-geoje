import React, {  useState, useEffect } from 'react'
import { useCardContext } from '../../../context/CardContext';
import "../ext_card_style.css";
import Carousel from '../extended_card_carousel/Carousel';

export default function ExtMainland({ 
    currentlyClickedCardID
}) {
    // let card_data_extracted = cards_data[currentlyClickedCardID];
    
    // CONTEXT:
    const { 
        toggle_animation, setToggle_animation,
        card_data_for_ext_card,
        setCard_data_for_ext_card,
        cardIsClicked, 
        setCardIsClicked,
        // currentlyVisitedSection,
        setCurrentlyVisitedSection,
        setCurrentlyClickedCardID,
        
        setClickedIcon,
        currentlyHoveredIcon,
        setCurrentlyHoveredIcon

    } = useCardContext();

    function resetContextData() {                                          // when you click the extended card, means you don't want to see it, so this function makes it disappear.
        setCard_data_for_ext_card(null);    
        setCardIsClicked(false);
        setCurrentlyClickedCardID(null);
        setCurrentlyVisitedSection(null);
        setClickedIcon(null);
        setToggle_animation(false);
        setCard_data_for_ext_card(null);
        setCurrentlyHoveredIcon(null);
    }
    
   
    function handle_reset_data() {
        // console.log("etx_mainland.js: cardIsClicked is " + cardIsClicked)
        setToggle_animation(false)
        setTimeout(()=> {
            resetContextData();
            // add the removed class here,
        }, 1000)
    }

    let previousIcon = currentlyHoveredIcon;
    function hoveredIconChanges(currentIcon) {
        if(currentIcon !== previousIcon) {
            console.log(currentIcon, previousIcon)
            previousIcon = currentIcon;
            return true;
        }
        return false;
    }

    const [newIcon_hovered, setNewIcon_hovered] = useState(false);
    useEffect(()=> {
        setNewIcon_hovered(true);
        setTimeout(()=> {
            setNewIcon_hovered(false);
        }, 1000) 
    } , [currentlyHoveredIcon]);

    return (
        <div id="ext_card_container" 
            onClick={handle_reset_data}
            // class={`ext_card_container ${toggle_animation ? "ext_card_container_appears" : "ext_card_container_fades"}`}
            class={`ext_card_container ext_card_container_appears  ${toggle_animation===false ? "ext_card_container_fades" : ""}`}
        >
        {/* same layout for all sections. */}

        {/* <div className='anim'></div> */}

            <div class={`ext_card_text_container ${newIcon_hovered ? "ext_card_title_appears" : ""}`}>

                <div class="ext_card_title_container">
                    <h1 
                    class={`ext_card_title ${newIcon_hovered ? "ext_card_title_appears" : ""}`}>
                        {card_data_for_ext_card.name}
                    </h1>

                    <div class="ext_card_infos_subtitle_container">
                        <h2 class={`ext_card_infos_subtitle  ${newIcon_hovered ? "ext_card_title_appears" : ""}`}>
                            {card_data_for_ext_card.subtitle}
                        </h2>
                    </div>
                </div>


                <div class="ext_card_infos_container">
                <h1 className="ext_card_description_title">
                    Useful Infos
                </h1>
                    {/* all the infos */}
                    <div class="ext_card_infos_height_container">
                        <p class="ext_card_infos_height">
                        Height: {card_data_for_ext_card.height}
                        </p>
                    </div>
                    <div class="ext_card_infos_difficulty_container">
                        <p class="ext_card_infos_difficulty">
                        Difficulty of this Hike: {card_data_for_ext_card.difficulty}
                        </p>
                    </div>
                    <div class="ext_card_infos_length_container">
                        <p class="ext_card_infos_length">
                        Length of this Hike: {card_data_for_ext_card.length}
                        </p>
                    </div>
                    <div class="ext_card_infos_steepness_container">
                        <p class="ext_card_infos_steepness">
                            Average Steepness: {card_data_for_ext_card.steepness}
                        </p>
                    </div>
                    <div class="ext_card_infos_duration_container">
                        <p class="ext_card_infos_duration">
                            Overall duration of this Hike (at medium pace): {card_data_for_ext_card.duration}
                        </p>
                    </div>

                    {/* description: */}
                    <div class="ext_card_description_container">
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