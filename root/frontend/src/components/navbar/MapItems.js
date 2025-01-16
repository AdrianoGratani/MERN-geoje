import React, { useState } from 'react';
import { FaMountainSun } from "react-icons/fa6";
import { FaUmbrellaBeach } from "react-icons/fa6";
import { FaPagelines } from "react-icons/fa6";
import { FaFish } from "react-icons/fa6";
import { FaLandmarkDome } from "react-icons/fa6";
import { FaCity } from "react-icons/fa6";
import "./map_items.css";

const MapItems = ({maps_triggered, setMaps_triggered}) => {
    const [item_hides, setItem_hides] = useState(false);
    const ti = [
        <FaMountainSun className="header_icon item_hike"/>,
        <FaUmbrellaBeach className="header_icon item_sea" />,
        <FaPagelines className="header_icon item_isl"/>,
        <FaFish className="header_icon item_food"/>,
        <FaLandmarkDome className="header_icon item_infos"/>,
        <FaCity className="header_icon item_cities"/>,
    ];

    function wait_trigger_useState() {       // first animate li "maps" to disappear, then trigger animation for list items to appear.
        setItem_hides(true)
        setTimeout(() => {
            setMaps_triggered(!maps_triggered)
            setItem_hides(false);
        }, 1000)
    }

    // section id is stored at Sections.js
    function go_to_section(section_id) {
        let s = document.getElementById(section_id);
        s.scrollIntoView({behavior: "smooth"});
        return s;
    }

    return (
        <div onClick={()=>wait_trigger_useState()} className={` ${item_hides ? "map_items_container_hide" : "map_items_container"}`} >
            <li className="item_container " onClick={()=>go_to_section("land")} >
                {ti[0]} Hiking
            </li>
            <li className="item_container " onClick={()=>go_to_section("sea")}>
                {ti[1]} Seaside
            </li>
            <li className="item_container " onClick={()=>go_to_section("islets")}>
                {ti[2]} Islets
            </li>
          
        </div>
    )
}

export default MapItems;