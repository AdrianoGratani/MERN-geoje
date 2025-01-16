// LOCATION CARDS FOR MOBILE VERSION

import React from 'react';
import {useState , useEffect  } from 'react';
import { useCardContext } from '../../context/CardContext';
import "./sectextmob.css";
// mobile card icons 
import {GiMountainRoad} from 'react-icons/gi'
import { GiStrong } from 'react-icons/gi';
import { GiMountaintop } from 'react-icons/gi';
import {BsArrowUpRight} from 'react-icons/bs';
import {PiClockCounterClockwiseBold} from 'react-icons/pi';
import {TbBeach} from "react-icons/tb";
import {FaParking} from "react-icons/fa";
import {GrCafeteria} from "react-icons/gr";
import { GiCableStayedBridge } from 'react-icons/gi';

export default function SecTextMob() {

    const { 
        cmi, setCmi,                  // for rendering/fading
        mc, setMc,                    // for data
    } = useCardContext();

    function r() {         //  handle removal of card
        setCmi(null);      // no clicked icons anymore in ctx
        setMc(null);       // and no data.
    }

    const [c, setC] = useState(0);   // 1  ?   call r() as effect;   // used to gentle removal of card text 
    const [noText, setNoText] = useState(0) // 1 = remove the text from rendering
    
    //a. REMOVE TEXT FROM CARD
    useEffect(()=> {     // monitor c if changes.
        if(c) {
            // wait the text removal transition to happen vefore removing THE TEXT.
            setTimeout(() => {
               setNoText(1);
            }, 500);
        }
    } ,[c])  ;

    //b.  REMOVE THE CARD 
    useEffect(()=> {     // monitor c if changes.
        if(c) {
            // wait the text removal transition to happen vefore removing the whole.
            setTimeout(() => {
                r();
            }, 1000);
        }
    } ,[c])  ;
    
    if(cmi===null) return <div></div>   // base case

    switch(mc.s) {       // different layout (and DATA) for each location.
        case 'm': {      
            return (
                <div 
                className={`stmc ${c ? 'rem' : ''}`} 
                onClick={()=> setC(1)} // remove the card.
                style={{display: 'flex', flexDirection: 'column', gap: '10px'}}
                >
                    {/*  THE TEXT */}
                {
                    noText ? "" :
                    <div>
                        <h1 class={`stmc ${c ? 'remt' : ''}`}
                        style={{color: 'white'}}
                        >{mc.name}</h1>
                        <div className="stcinfos"
                         >
                            <p className={`stmc ${c ? 'remt' : ''}`}>
                                <GiMountaintop/>{mc.height}
                            </p>
                            <p className={`stmc ${c ? 'remt' : ''}`}>
                                <GiStrong/>{mc.difficulty}
                            </p>
                            <p className={`stmc ${c ? 'remt' : ''}`}>
                                <GiMountainRoad/>{mc.length}
                            </p>
                            <p className={`stmc ${c ? 'remt' : ''}`}>
                                <BsArrowUpRight/>{mc.steepness}
                            </p>
                            <p className={`stmc ${c ? 'remt' : ''}`}>
                                <PiClockCounterClockwiseBold/>{mc.duration}
                            </p>
                        </div>
                        <div className={`stmc ${c ? 'remt' : ''}`}>
                            <p className={mc.description.length > 200? "mpm" : "mpp"}>Description: {mc.description}</p>
                        </div>
                    </div>
                }
                    
                </div>
              )
        };
        case 's': {      // SEASIDE CARD  
            return (
                <div className={`stmc ${c ? 'rem' : ''}`} onClick={()=> setC(1)}
                style={{display: 'flex', flexDirection: 'column', gap: '10px'}}
                >
                                {/*  THE TEXT */}
                {
                    noText ? "" :
                    <div>
                        <h1 className={`stmc ${c ? 'remt' : ''}`}
                        style={{color: 'lightblue'}}
                        >{mc.name}</h1>
                        <div className="stcinfos">
                            <p className={`stmc ${c ? 'remt' : ''}`}>
                                <TbBeach/> {mc.sand} 
                            </p>
                            <p className={`stmc ${c ? 'remt' : ''}`}>
                                <FaParking/>{mc.parking}
                            </p>
                            <p className={`stmc ${c ? 'remt' : ''}`}>
                                <GrCafeteria/> {mc.cafes}
                            </p>
                        </div>
                        <div className={`stmc ${c ? 'remt' : ''}`}>
                            <p className={mc.description.length > 200? "mpm" : "mpp"}>Description: {mc.description}</p>
                        </div>
                    </div>
                }

                </div>
              )
        };

        case 'i': {     // ISLET CARD
            return (
                <div className={`stmc ${c ? 'remt' : ''}`} onClick={()=> setC(1)}
                style={{display: 'flex', flexDirection: 'column', gap: '10px'}}
                >
                    <h1 className={`stmc ${c ? 'remt' : ''}`}
                    >{mc.name}</h1>
                     <div className="stcinfos" style={{color:'black'}}>
                        <p className={`stmc ${c ? 'remt' : ''}`}>
                            <TbBeach/> {mc.sand}
                        </p>
                        <p className={`stmc ${c ? 'remt' : ''}`}>
                            <FaParking/> {mc.car}
                        </p>
                        <p className={`stmc ${c ? 'remt' : ''}`}>
                            <GrCafeteria/>{mc.eat}
                        </p>
                        <p className={`stmc ${c ? 'remt' : ''}`}>
                            <GiCableStayedBridge/>{mc.bridge}
                        </p>
                    </div>
                    <div className={`stmc ${c ? 'remt' : ''}`}>
                            <p className={mc.description.length > 200? "mpm" : "mpp"}>Description: {mc.description}</p>
                    </div>
                </div>
              )
        }
    }
}