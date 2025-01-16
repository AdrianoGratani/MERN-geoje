import React from 'react';
import { useCardContext } from '../../../context/CardContext';
import { useScreenContext } from '../../../context/ScreenSizeContext';
import locations_data from '../../../locations_data/locations_data';
// icons:
import {ReactComponent as GeojeSea} from "../../../img/geoje_beach.svg";
import {ReactComponent as IconSea} from "../../../img/beach.svg";
// ext mobile card:
import SecTextMob from '../SecTextMob';
import "./section_map_sea.css";
import { Helmet

 } from 'react-helmet';
export default function SectionMapSea() {

    const {es} = useScreenContext();

    // CONTEXT DATA
    const {
                // data for icon/card events:
                cmi, setCmi, setMc, cci, setCci,
                resetContextData,
                setToggle_animation,
                setCurrentlyHoveredIcon, 
                currentlyHoveredCard,
                setCardIsClicked,
                setCurrentlyVisitedSection,
                setClickedIcon,
                setCard_data_for_ext_card,
    } = useCardContext();

    

    // ___ON HOVER
    function send_icon_id_to_context(location_id, location_data) {
        setCurrentlyVisitedSection("seaside");
        setToggle_animation(true);
        setCardIsClicked(true);
        setCurrentlyHoveredIcon(location_id)
        setClickedIcon(location_id);
        setCard_data_for_ext_card(location_data);
    }
    // click to remove the card/   args needed for mobile ver.:
    function triggerExtCard(iid, ii) {   // (id, obj data)
        if(es()=='mobile') {    
            setCmi(iid);         // id is used for making the card appearing/disappearing card
            setMc(ii);           // ctx now has the data of the pushed icon and sectextmpb will use this data;
            
            // you clicked an icon? it means the card is already displayed.
            // which means you clicked AGAIN. so delete the context cci to update the icon style to default.
            if(cci!==null) { 
                if(cci === iid) {
                    setCci(null);
                }
                else if(cci !== iid) {
                    setCci(iid);
                }
            }
            else setCci(iid);             
        }  
        setToggle_animation(false);
        setCurrentlyHoveredIcon(null);      
        }

    function ep(id, p) {             // mobile: evaluate icon position, based on user interaction. 
        // arg id to check if the caller is pushed by comparison with context state data.
        // arg p to avoid relocation if the above statement is proven not to be true.

        if(cmi===id) {
            return 0;
        }
        else return p;
    }

    return (
            // {/* SVG MAP */}

            <div class="single_map_section_container_sea" tabindex='0'
            onClick={()=> resetContextData()}
            >
                {
                    window.scrollY > 900 && window.scrollY < 1400
                    ? 
                        <Helmet>
                            <title>GeojExplorer | Seaside</title>
                        </Helmet>
                    :
                        null
                }


                {
                    es() !== 'mobile'
                    ?    <GeojeSea class="geoje_land_svg" style={{ 
                         }} />
                :       <GeojeSea class="geoje_land_svg" style={{ 
                            width: '68vw'
                         }} />
                }
             

                {/* SVG ICON */}
                    {
                        locations_data.seaside.map((sea_location, tabIndex) => (
                            <div id="s_icon_container"
                            tabIndex={tabIndex + 20}
                            onMouseEnter={()=> send_icon_id_to_context(sea_location.id, sea_location)}
                            onClick={()=>triggerExtCard(sea_location.id, sea_location)}
                            // onMouseLeave={()=> remove_currently_hovered_icon_context()}

                            // on mobile: pushed icon must be repositioned on top: that's why the evaluator is needed.
                            style={{
                                position: 'absolute',
                                top:  es()!=='mobile' ? `${sea_location.top}vw` : `${ep(sea_location.id, sea_location.mtop)}vw`,
                                left: es()!=='mobile' ? `${sea_location.left}vw`: `${ep(sea_location.id,sea_location.mleft)}vw`,
                                width: 'fit-content',
                                height: 'fit-content',
                                transition: 'left 0.5s, top 0.5s'
                            }}
                            // 1 for desktop.    2 for mobile.
                            className={ `s_icon_container 
                                        ${currentlyHoveredCard === sea_location.id
                                          ? "seaside_hovered_card_icon_effect"
                                          : ""
                                        }
                                        
                                        ${es()==='mobile' && cci===sea_location.id
                                          ? "seaside_hovered_card_icon_effect"
                                          : ""
                                        }`
                                    }
                            >
                                {/* {sea_location.id} */}
                               <IconSea 
                                    style={{
                                        width: es()!=='mobile'? '1.5vw' : '3.5vw', 
                                        minWidth: es()!=='mobile'? '1.5vw' : '3.5vw',
                                        maxWidth: es()!=='mobile'? '1.5vw' : '3.5vw',
                                        height: es()!=='mobile'? '1.5vw' : '3.5vw',
                                        minHeight: es()!=='mobile'? '1.5vw' : '3.5vw',
                                        maxHeight: es()!=='mobile'? '1.5vw' : '3.5vw',
                                        margin: es()!=='mobile'?  '3px' : '1px',
                                    }}
                               /> 
                           
                                {/* on mobile devices info cards is generated from the icon. */}
                            {
                                es() === 'mobile'
                                 ?
                                 <div> 
                                    {
                                        //  ...but only if the icon is clicked
                                        sea_location.id === cmi && cmi !== null
                                        ? 
                                        <div> 
                                        {
                                            //  ...but only if the icon is clicked
                                            sea_location.id === cmi && cmi !== null
                                            ? <SecTextMob /> 
                                            : null
                                        }
                                     </div> 
                                        : null
                                    }
                                 </div>
                                 : null
                            }
                            </div>
                        ))
                    }
            </div>
    )
}