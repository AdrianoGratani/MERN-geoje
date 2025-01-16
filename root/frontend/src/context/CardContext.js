import {useState, useContext, createContext} from 'react';

// data from Context is accessible anywhere. if user clicks on a card, the following useContext state gets triggered INSIDE that particular Card.
// then, one data changes, an Extended version of the card compares, absolutely positioned in the Section component.

// useState data goes inside a Provided component right here. this provider must hold the childrend component. so Provider should wrap the <App /> component.
//  Provider just 'provides' the component that's why useContext is needed as well.


const CardContext = createContext();                                                      // create the Context 

export const  CardContextProvider = ( {children} ) => {                                   // this generates a Provider for the useState data.

    // which is this data.
    const [cmi, setCmi] = useState(null);  // which mobile map icon is clicked
    const [mc, setMc] = useState(null);   // data for mobile cards;
    const [cci, setCci] = useState(null); // mobile: for card container style;
    const [cardIsClicked, setCardIsClicked] = useState(false);               
    const [currentlyVisitedSection, setCurrentlyVisitedSection] = useState(null);         
    const [currentlyClickedCardID, setCurrentlyClickedCardID] = useState(null);    
    const [currentlyHoveredIcon, setCurrentlyHoveredIcon] = useState(null);    
    const [currentlyHoveredCard, setCurrentlyHoveredIconCard] = useState(null);    
    const [card_data_for_ext_card, setCard_data_for_ext_card] =useState(null);
    const [clickedIcon, setClickedIcon] =useState(null);
    // ext card appears - disappears:
    const [toggle_animation, setToggle_animation] = useState(true);

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

    return (
        // IMPORTANT: `value` is the __only__ valide props name for the Provider prop. otherwise react returns an Error because the useContext gets 'undefined': the component using Context is NOT able to access the context data.
        <CardContext.Provider value={{ 
            cmi, setCmi,
            mc, setMc,
            cci, setCci,
            cardIsClicked, setCardIsClicked, 
            currentlyVisitedSection, setCurrentlyVisitedSection,
            currentlyClickedCardID, setCurrentlyClickedCardID,
            currentlyHoveredIcon, setCurrentlyHoveredIcon,
            currentlyHoveredCard, setCurrentlyHoveredIconCard,
            card_data_for_ext_card, setCard_data_for_ext_card,
            clickedIcon, setClickedIcon,
            toggle_animation, setToggle_animation,
            resetContextData,
         }}>         {/* return a Provider of the Context, which is just a component storing the useState GLOBALLY. */}      
            { 
                children                                                                   // any other component which is wrapped within this useState Context Provider, receives the Context with the useState. 
            }
        </CardContext.Provider>
    )
};

export const useCardContext = () => useContext(CardContext);                               // this function is vital to actually manipulate and USE the global context data you just created.