//////////// <<schedule>> //////////////////////                                                                                   x = DONE

- I click on an svg icon
  it sends the icon location id to the context statevariable
  the context state variable is read by Section.text.js
  Sectiontextjs loops over every single card,
  if it finds the card 
    set card is clicked to true,
    set visited section to "mainland"
    set currently clicked card id to icon id
    set card_data_for_ext_card:
        





# TODAY DO THE LAYOUT FOR EACH SECTION: text , cards icon, events

# TODAY import data for each location into js files.
    - find TEXT and pictures [CAROUSEL] for each spot (find out if onLoad() is necessary.);                                        X
    - in locations_data.js add a `description` key. you will use this key for the expanded version of the card.
    - fix the [LAYOUT] for this section;

# <repeat EVERYTHING for these sections:> 
    >> food map
    >> towns map

# apply the [style] for the footer with TailwindCSS [FIX_THAT] (STRUCTURE DONE, layout organized) 

# turn the welcome page into the about me page

# responsiveness for: tablet   [===sligntly_adjust]
# responsiveness for: mobile

# weather API under hero text: "today is [weatherbasedon_apiData] and temperature is [APIdataforGEOJE]

////////

DONE fix seaside and islets map svg, and the card section (just copy what you did for Mainland)
DONE figure it out an algorithm to render dynamically map icons svg with proper absolute position cohordinates for `top` and `left`

DONE build a Ext_card component.
  - when the user [click] the card, the Ext_card compares with transition. 
  - when it clicks [outside] the card, or the ['X'] sign, it disappears with transition.
  - Name and all the data, [plus] pictures and the description.

  - add real names and [id] key for each location.                                                                                    X
DONE use locations_data to render icons in the map. 
    - put every icon in the svg map. then take all their cohordinates and                    X
    - ad the absolute coohordinates to each location_data ;                                  X
    - the user hovers over an icon > changes color and gets bigger 
DONE and connect them with the Cards data. 
    - store State value in the Context : currentlyHoveredIcon   and    currentlyHoveredCard  X
      const [c, setc] = useestate(null);
      const [c1, setc1] = useestate(null);
    - Icons of the Map and Cards access this context state and can `set` this State, based   X
      on the MouseEnter (set(c)) and On mouseleave (set back to(null)).

- [CASE_icon_hovered]
    - >>> [IMPORTANT]add a key to each object in the ./locations_data.JS arr to store the name of its relative icon:
        Card of "Jisaetpo" has a key named [icon_name] with ["icon_jisaetpo"] 
    - >>> user enters the mouse in `icon x`, 
      >>> `icon x` access the context state variable `currentlyHOveredicon`,
          now `currentlyHoveredicon` switches from `null` to `icon x` and this data is GLOBLAL;
          [...DEBUG_WITH_console.log()_btw]
      >>> every Card has access to this context. every card has a div with [classes].
      >>> use a ternary operator to check: [IF] the state data of context named `currentlyHOveredicon`
          stores a value which is equal to the value stored by THIS card at ["icon_jisaetpo"]
          [THEN] add a class to make that card container bigger, and with a slightly different color;

- [CASE_card_hovered]
    - >>> {is the same as card_hovered}
      >>> create a State value `currentlyHoveredCard` in the Context which stores its ID, `null` by default.
      >>> user hovers a card: it triggers an onMouseOver event which [set] the context data with its ID;
      >>> context `currentlyHoveredCard` State variable is now updated with this ID value,
          and every Icon has a [ternary] operator in their div container: 
            TTTT[if] the context value 


done REPEAT EVERYTHING you did for mainland FOR SEASIDE [X] AND ISLETS [X].
- locations_data with name for places and [ID]                                                                                      X
- same [layout] for the [icon] svg                                                                                                  X
- 'top' 'left' keys in locations_data.js                                                                                            X
- context data for currently clicked icon and card as well [id]                                                                     X
- ternary operations for adding/removing style from cards or icons, based on [context] data                                         X
- [extended] card: logic and basic appearence.                                                                                      X



//////////// <ideas to implement> //////////////////////

[animations] for Card sections like clouds, leaf mountains etc.

aggiungi dei buttons per:
    - [ordinare] le mappe in ordine di difficolta', di lunghezza o by car o sand o cafe;
    - nel menu, cambiare [lingua];
    - switch to [nightmode]

[OK] se fai click su una Card, opure se fai hover su una icon svg della mappa,
    - compare una [animazione] da top right. come la notte del welcompage,
    - e' la descrizione aprofondita di un posto,
    - e continene delle foto [carousel].
        - ogni card deve avere un [ID]


[OK] sotto hero text:
    -- metti il meteo odierno di geoje con delle icone.
