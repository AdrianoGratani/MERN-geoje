import React from "react";
import "./hero_map_animated.css";
import {ReactComponent as GeojeLand} from "./geoje_land.svg";
import {ReactComponent as GeojeBeach} from "./geoje_beach.svg";
import {ReactComponent as GeojeIslets} from "./geoje_islets.svg";

import MapsMenu from "../../navbar/MapsMenu";
// fa icons:
// import { FaMountainSun } from "react-icons/fa6";
// import { FaUmbrellaBeach } from "react-icons/fa6";
// import { FaPagelines } from "react-icons/fa6";


export default function HeroMapAnimated( index ) {
    // index.index: 'land' or 'beach' or 'islets';

    const svgMaps = ['land', 'beach', 'islets'];
    let current_hero_color_props_index = svgMaps.indexOf(index.index);       // find current prop in the map array.
    const svg_components = [<GeojeLand />, <GeojeBeach/>, <GeojeIslets/>]; // based on the current prop render one of these.
    const islets = index.index === svgMaps[2];         // for CSS class assignment: current props is 'islets'?

    
    return (
        <div class="svg_hero_container">
            <div class={`${islets ? 
                "svg_hero_map_container_islets" : 
                "svg_hero_map_container"}`}
                >
                    <div>

                {
                    svg_components[current_hero_color_props_index] || null
                }
                    </div>
            </div>
               
                {/* <div class="svg_hero_map_text_container">
                    <h3 class="svg_hero_map_text_title">
                        All about the 
                        &#8287;
                        <span class={`hero_span hero_span_${current_hero_color_props_index}`}> 
                            <div class="svg_hero_map_text_icon">
                            {text_icons[current_hero_color_props_index]} 
                            </div> {t[current_hero_color_props_index]} </span> 
                            &#8287;
                            of Geoje.
                    </h3>
                </div> */}
        </div>
    )
}


// {/* btw for loops in JSX are NOT allowed. use .maps() instead */}