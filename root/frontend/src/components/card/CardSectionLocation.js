// location.js is an object with keys: 
    //          .NAME
    //          .REGION
    //          .DIFFICULTY
    //          .HEIGHT
    //          .LENGTH
    //          .BY_CAR
    //          .BRIDGE
    //          .HUMANS
    //          .PICTURE_SMALL
    //          .TEXT_DESCRIPTION(short);

    // use ternary operator to detect if a key stores data and NOT "" (i.e: islet card don't need "difficulty" nor "height");
    // EACH SECTION SHOULD HAVE CARDS WITH DIFFERENT COLOR.
    // hover over a card triggers an event which:
    //   1. re-sets the useContext to change color in the svg map component of a specific section.
    //   2. makes the size of the card bigger, in order to show the text .description from the data.

import React from "react";
import "./card_section_location.css";

import CardMainland from "./CardMainland";
import CardSeaside from "./CardSeaside";
import CardIslet from "./CardIslet";

export default function CardSectionLocation({card_data, id_index}) {

    const card_components = [
        <CardMainland card_data={card_data} id_index={id_index} />,
        <CardSeaside card_data={card_data} id_index={id_index}/>,
        <CardIslet card_data={card_data} id_index={id_index}/>,
    ];

    function evaluator(card_data_arg) {
        if(card_data_arg.toLowerCase().includes("mainland")) {
            return card_components[0];
        }
        else if(card_data_arg.toLowerCase().includes("seaside")) {
            return card_components[1];
        }
        else if(card_data_arg.toLowerCase().includes("islet")) {
            return card_components[2];
        }
    };

    return (
        <div className="card_container">
            {
                evaluator(card_data.id)
            }
        </div>
    );
};