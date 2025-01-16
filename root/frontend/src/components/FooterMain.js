import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./footer_main.css";

//to change footer animation text, based on screen sizes:
import { useScreenContext } from '../context/ScreenSizeContext';
import { BsWindowSidebar } from 'react-icons/bs';

import { Helmet } from 'react-helmet';

function FooterTextAnimation({ textIn, intrvl }) {

    const [currCharsDisplayed, setCurrCharsDisplayed] = useState('');
    const [i, setI] = useState(0)
    const [rand, setRand] = useState(100 + Math.random() * 400);

    useEffect(() => {                                            // update the text every time the current Chars displayed increase/change

        const interval = setInterval(() => {

            setRand(                                       /// random set of interval
                Math.floor(50 + Math.random() * 300)
            )

            setCurrCharsDisplayed((prev) => {              /// show the next char
                if (prev.length >= textIn.length) {
                    return '';
                } else {
                    return prev += textIn[i]
                }
            });

            setI((prev) => {                            // update the char pointer to the next (or first)
                if (prev === textIn.length) { return prev - prev }
                else { return prev += 1 }
            });

        }, rand);

        return () => clearInterval(interval);  //to prevent weird effects;
    }, [currCharsDisplayed])


    return (
        <div
        // style={{ width: (rand) + 'px' }}
        >
            <div>
                {currCharsDisplayed}
            </div>
        </div>
    )


}

export default function FooterMain() {
    // if you don't desctructure context data as obj, it will return the whole obj.
    const { screenMode, es } = useScreenContext();
    const ev = (s) => {
        if (s === 'large') { return "desktop" };
        return s;
    }

    let animStr = es() !== 'mobile'
        ? `  Welcome to the ${ev(screenMode)} version for my Website.        `
        : `  Welcome to my Mobile Website.        `;

    const hm = () => {
        window.location.href = 'mailto:example@example.com';
    }


    return (
        // {/*  A PICTURE MAYBE?  */}
        // {/* https://ifonts.xyz/almarena-neue-font-family.html    for the animation */}
        // {/* https://fonnts.com/cotoris/   for the form description text  */}
        // {/* https://www.1001freefonts.com/bodoni.font   elegant. */}

        <div id="footer" className="footer_container playfair-display_it_light">
            {
                window.scrollY > 2400 &&

                <Helmet>
                    <title>Footer | ContactMe</title>
                    <meta name="description" content="Contact informations about Adriano Gratani, a React Frontend Developer based in Geoje, South Korea." />
                </Helmet>

            }
            <header className="footer_header_container ">
                <section className="footer_header_left">
                    <div className="footer_header_logo_container im-fell-great-primer-regular"
                        aria-label='logo. the initials of my name, Adriano Gratani.'>
                        A | G
                    </div>

                    {
                        es() !== 'mobile'
                            ?
                            <div>
                                <div className="footer_header_job_container"
                                    aria-label="Footer contact details: my name: Adriano Gratani, and my profession: FrontEnd Developer."
                                >
                                    Adriano Gratani, <br /> FrontEnd Developer.
                                </div>
                                <div className="footer_header_address_container"
                                aria-label='the city where I live: Geoje, in south Korea'
                                >
                                    Geoje, <br /> South Korea.
                                </div>
                            </div>

                            : null
                    }
                </section>

                {
                    es() !== 'mobile'
                        ?
                        <nav className="footer_header_right playfair-display_light"
                        aria-label='links about me: 1 My Journey in this field; 2 My work ethic; 3 My Github page to see my code.'
                        >
                            <div className="footer_header_aboutme link">
                                <a href="#">My Journey</a>
                            </div>
                            <div className="footer_header_method link">
                                <a href="#">Work Ethic</a>
                            </div>
                            <div className="footer_header_code link">
                                <a href="#">My Code</a>
                            </div>
                        </nav>

                        : null
                }

            </header>

            <section
                aria-label='an animation with text written automatically in real time, to show my coding skills.'
                className="footer_animation_container playfair-display_light">
                <div className="a">
                    <FooterTextAnimation textIn={animStr} interval={1000} />
                </div>
            </section>

            <main className="footer_form_links_container"
            >

                <section className="footer_form_container"
                aria-labelledby="contact-form"
                >
                    <h3 className="footer_form_description_container playfair-display_light">
                        {
                            es() !== 'mobile' ?
                                "Contact me for further discussion about Frontend development"

                                : null
                        }
                    </h3>
                    <div className="footer_form_cont">

                        <form className="footer_form">
                            <div className="inputt">
                                <placeholder className="placeholder_name" id="name"
                                >Your Name: </placeholder>
                                <input
                                    type="text" id="name" className="input_name"
                                    aria-label='this is the input for your name. to send me an email.' />
                            </div>
                            {
                                es() !== 'mobile'
                                    ? <br />
                                    : null
                            }
                            <div className="inputt">
                                <placeholder className="placeholder_mail" id="email">Your Email: </placeholder>
                                <input type="email" id="email" className="input_name" 
                                aria-label='this is the input for your email, for me to get your contacts.'
                                />
                            </div>
                            <div>
                                <textarea placeholder="Type here" 
                                aria-label='the input field for your message.'/>
                            </div>
                        </form>
                        <div className="footer_button_container">
                            <button className="footer_button"
                            aria-label='button. click it to send me your message.'>
                                {
                                    es() === 'mobile'
                                        ? "Send"
                                        : "Send Email"
                                }

                            </button>
                        </div>
                    </div>
                </section>

                <div className="footer_links_container">
                    <section className="footer_links_social_container"
                    aria-labelledby='footer_social_links'>
                        <h1 className="links_title" 
                        id='footer_social_links'
                        >
                            <FooterTextAnimation textIn={"   My Links!    "} interval={1000} />
                        </h1>
                        <a href="https://github.com/AdrianoGratani" className="link playfair-display_light"
                        aria-label='link. click to visit my Github profile and check my code.'
                        >GitHub</a>
                        <a href="https://www.linkedin.com/in/gratani" className="link playfair-display_light"
                         aria-label='link. click to visit my Github profile and check my code.'
                         >LinkedIn</a>
                        {
                            es() !== 'mobile'
                                ?
                                <div className="footer_signature_container">
                                    <div className="footer_signature playfair-display_light">
                                        <a href="https://adrianogratani.vercel.app/">
                                            Adriano Gratani
                                        </a>
                                    </div>
                                </div>

                                : null
                        }
                    </section>
                    <section className="footer_links_addresses_container">
                        <h1 className="hello_title">
                            <FooterTextAnimation textIn={"   _Say 'hello!'   "} interval={1000} />

                        </h1>

                        <Link to="#" className="link playfair-display_light"
                            onClick={(e) => {
                                hm();
                                e.preventDefault();
                            }}
                        >
                            Mail
                        </Link>
                    </section>
                </div>
            </main>

            {
                es() === 'mobile'

                    ?
                    <footer className="footer_signature_container">
                        <div className="footer_signature playfair-display_light">
                            <a href="https://adrianogratani.vercel.app/">
                                Adriano Gratani
                            </a>
                        </div>
                    </footer>

                    : null
            }

            {
                es() !== 'mobile'

                    ?
                    <footer className="footer_footer_container">
                        <div>Copyright</div>
                        <div><a href="#">Go to top</a></div>
                    </footer>

                    : null
            }

        </div>
    )
}
