import React from 'react';
// map svg component:
import SectionMapLand from './sectionMapLand/SectionMapLand';
import SectionMapSea from './sectionMapSea/SectionMapSea';
import SectionMapIslets from './sectionMapIslets/SectionMapIslets';
// text data:
import SectionsText from './SectionsText';
import sections_text from '../../text/sections_text';
// cards data:
import locations_data from "../../../src/locations_data/locations_data";

// cards NOT IN MOBILE VERSION

import "./sections.css";

export default function Sections() {
    // text data:
    const m = sections_text.section_mainland;
    const s = sections_text.section_seaside;
    const i = sections_text.section_islets;

    // cards data:
    const la = locations_data.mainland;
    const be = locations_data.seaside;
    const is = locations_data.islets;

    // nb: Sections_text stores BOTH text and and the cards components;
    return (
        <div class="map_sections_container">
            <div id="land" className=" single_section_container s_land">
           
                {/* 2. it takes the State. SVG <path> of the hovered location (on Card) changes its color */}
                <SectionMapLand />                                            
                {/* 1. it takes the SetState. it sends this setState to Card. when Card is hovered, it sends a setState back to Section.  */}
                <SectionsText text_data={m} cards_data={la} section={"mainland"}/>                                  
            </div>
            <div id="sea" className="single_section_container s_sea">
                <SectionMapSea/>
                <SectionsText text_data={s} cards_data={be} section={"seaside"}/>
            </div>
            <div id="islets" className="single_section_container s_islets">
                <SectionMapIslets/>
                <SectionsText text_data={i} cards_data={is} section={"islets"}/>
            </div>
            
        </div>
    )
}

// `id` is needed to apply react scrollIntoView.