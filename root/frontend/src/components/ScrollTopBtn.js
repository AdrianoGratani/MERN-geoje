import React from 'react';
import {useState, useEffect} from 'react';
import "./scrollTopBtn.css"
export default function ScrollTopBtn() {
    const [v, setV] = useState(false);     // 1 -> the button is visible
    const [a, setA] = useState(false);

    
    const t =()=> {   // go to top;
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }
    
    useEffect(()=> {
        function hv() {
            if (window.scrollY > 300) {  // user scrolled down -> show the button;
                setV(true);            // create an invisible button
                setTimeout(()=> { setA(true); },300);   //animate the appearance;
            }
            else {
                setA(false);
                setTimeout(()=> { setV(false); },300);   //animate the appearance;
            };   // otherwise make it disabbear.
        }
        window.addEventListener('scroll', hv);   // show the button or not;
        return () => {
            window.removeEventListener('scroll', hv);
        }
    }, []);

    return (
        
        v === true? 
            <button className={`sbtn ${a===true ? "sbtnapp" :"sbtnfad"} `}  onClick={t}>
                <i>
Go to top

                </i>

            </button>
        : null
      
    )
}