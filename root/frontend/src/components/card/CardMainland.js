import React from 'react';
import { FaMountain } from "react-icons/fa6";
import { FaPersonHiking } from "react-icons/fa6";
import { FaRightLeft } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";
// import { useEffect } from 'react';

// import the utility to USE the context useState data:
import { useCardContext } from '../../context/CardContext';

import "./card_style.css";

export default function CardMainland({ card_data, id_index }) {

    // CONTEXT DATA:
    const {
        setToggle_animation,
        setCard_data_for_ext_card,
        setCardIsClicked,
        setCurrentlyVisitedSection,
        setCurrentlyClickedCardID,
        // data for hovering: 
        currentlyHoveredIcon,
        setCurrentlyHoveredIconCard,
    } = useCardContext();

    function send_hovered_card_data_to_context(hovered_card_id) {
        setCurrentlyHoveredIconCard(hovered_card_id);
        // console.log("current card: " + currentlyHoveredCard);
    }
    function remove_hovered_card_data_to_context() {
        setCurrentlyHoveredIconCard(null);
        // console.log("current card: " + currentlyHoveredCard);
    }

    //  PROPS DATA:
    let c = card_data;
    let mainland_card_data_keys = {
        id: c.id,
        // limited size card data:
        n: c.name,
        d: c.difficulty,
        l: c.length,
        du: c.duration,
        // full card data:
        h: c.height,
        s: c.steepness,
        p: c.picture,
    };

    // CONTEXT EVALUATOR FUNCTIONS:
    function evaluateCardClick() {
        setCardIsClicked(true);
    }

    function evaluateRendering() {                       // once big Card gets rendered, if you click on it, it will trigger other functions to set cardIsClicked to false and currentlyclickedCardID back to null.
        setCurrentlyClickedCardID(id_index);
    }

    function evaluateCurrentSection() {
        setCurrentlyVisitedSection("mainland");
    }

    function manipulateContextData(d_for_ext_card) {
        setToggle_animation(true);
        setCard_data_for_ext_card(d_for_ext_card);
        evaluateCardClick();
        evaluateRendering();
        evaluateCurrentSection();
    }

    return (
        // upper line: name;  lower line: infos.   >>> EVENT LISTENER GOES HERE TO THE CONTAINER.
        <div aria-label={`${mainland_card_data_keys.n} card infos. Click it to display all the informations.`}
            className={`card_mainland_container 
             ${currentlyHoveredIcon === mainland_card_data_keys.id
                    ? "m_card_effect"
                    : ""
                }`}
            onClick={() => manipulateContextData(card_data)}
            onMouseEnter={() => send_hovered_card_data_to_context(mainland_card_data_keys.id)}
            onMouseLeave={() => remove_hovered_card_data_to_context()}
        >
            {/* SMALL CARD COMPONENT. */}
            {/* name takes a full line. */}
            <section>
                <h1 className="card_name_mainland">
                    <div className="icon_container">
                        <FaMountain className="icon" aria-hidden="true" />
                    </div>
                    <div className="mainland_text"
                        style={{
                            fontSize: mainland_card_data_keys.n.length > 10 ? '0.9rem' : '1rem'
                        }}>
                        {
                            mainland_card_data_keys.n
                        }
                        {/* debug */}
                        {/* {mainland_card_data_keys.id} */}
                    </div>
                </h1>
            </section>

            {/* additional card infos take one line altogether. */}
            <section className="card_additional_infos">
                <h4 className="card_difficulty">
                    <div className="icon_container">
                        <FaPersonHiking className="icon" aria-hidden="true" />
                    </div>
                    <div className="mainland_text"
                        aria-label={`difficulty for ${mainland_card_data_keys.n}`}>
                        {mainland_card_data_keys.d}
                    </div>
                </h4>
                <h4 className="card_length">
                    <div className="icon_container"
                    >
                        <FaRightLeft className="icon" aria-hidden="true" />
                    </div>
                    <div className="mainland_text"
                        aria-label={`card info: length of ${mainland_card_data_keys.n}`}
                    >
                        {mainland_card_data_keys.l}
                    </div>
                </h4>
                <h4 className="card_duration">
                    <div className="icon_container">
                        <FaClock className="icon" aria-hidden="true" />
                    </div>
                    <div className="mainland_text"
                        aria-label={`card info: duration of ${mainland_card_data_keys.n}`}
                    >
                        {mainland_card_data_keys.du}
                    </div>
                </h4>
            </section>
        </div>
    )
}
