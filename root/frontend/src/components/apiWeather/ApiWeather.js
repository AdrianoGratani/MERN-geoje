import React from "react";
import { useState, useEffect } from 'react';
import { useScreenContext } from "../../context/ScreenSizeContext";
import "./apiweather.css"

import { GiWindSlap } from "react-icons/gi";
import { GiSunCloud } from "react-icons/gi";
import { GiPlantWatering } from "react-icons/gi";
import { GiThermometerCold } from "react-icons/gi";

import { Helmet } from "react-helmet";

// https://api.openweathermap.org/data/2.5/weather?lat={lat}&long={lon}&appid={key}
// 34.8833 N
// 128.6167 E
// a777e5d5a7e35cc3333c47d96e7084b6   new one
// 4ec51e61c4fd7d4362e194d1b1f15e3a   old

export default function ApiWeather() {

    const { es } = useScreenContext();
    const [l, setL] = useState(0);             // 1 = loading
    const [e, setE] = useState(0)                 // 1= error
    const [d, setD] = useState(null);             // api data

    useEffect(() => {
        async function f() {                   // fetch data 
            try {
                setL(1);
                const r = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=34.8833&lon=128.6167&appid=4ec51e61c4fd7d4362e194d1b1f15e3a&units=metric');

                if (!r.ok) {
                    setE(1);
                    throw new Error('weather data: not fetched');
                }

                const j = await r.json();
                setD(j);
            }
            catch (err) {
                setE(err.message);
                setE(1);
            }
            finally {
                setL(0);
            }
        }

        if (es() !== 'mobile') {
            f();
        }
    }, []);

    // console.log(d);

    function evalt(s, d) {      //evaluate text based on 'd' apidata for different 's' sections
        if (s === 'title') {
            if (d === 'clear') return "today the sky is so clear!";
            if (d === 'clouds') return "today the sky is a bit cloudy, but not rainy!";
            if (d === 'rain') return "today It's rainy, bring your umbrella!";
            if (d === 'drizzle') return "today there's a romantic drizzle in the air!";
            if (d === 'thunderstorm') return "today there are thunderstorm, is dangerous to go out!";
            if (d === 'snow') return "today is snowy, let's have some fun!";
            if (d === 'mist') return "today it's misty and foggy!";
            else return null;
        }
        if (s === 'humidty') {
            if (d >= 0 && d < 30) return "there is no humidity, it can be dry.";
            if (d >= 30 && d <= 50) return "humidity is normal.";
            if (d > 50 && d < 80) return "humidity is above the average.";
            else return "it's quite humid!";
        }
        if (s === 'wind') {
            if (d >= 0 && d < 2) return "there is no wind, fantastic!";
            if (d >= 2 && d <= 4) return "A gentle breeze is around Geoje!";
            if (d > 4 && d <= 10) return "is a bit windy, wear your jacket!";
            if (d > 10 && d <= 17) return "the wind is strong, better to relax at a cafe! jacket!";
            else return "out there is really windy, be careful!";
        }

        if (s === 'temp') {
            if (d >= 0 && d < 7) return "hike to the snowy mountain top!";
            if (d >= 7 && d <= 13) return "wear your coat and you're ready to go!";
            if (d > 13 && d < 23) return "perfect weather for hiking!!!.";
            if (d >= 23 && d < 32) return "let's go to the beach!!!.";
            else return "so hot... Let's go in the fridge!";
        }

    }

    if (e === 1 || d === null) return null;

    if (l === 1) return <div>
        Loading the current weather for Geoje...
    </div>

    return (
        <div id="weather" className="apic"
            aria-label='this section provides real-time weather forecast, and it suggests what to do based on current weather.'>
            {
                window.scrollY > 1900 && window.scrollY < 2400
                    ?
                    <Helmet>
                        <title>Real-time Weather</title>
                    </Helmet>
                    : null
            }
            <p className="pt"
            >
                {
                    es() !== 'mobile'
                        ? "Some useful informations about the weather in Geoje today:"
                        : "The Weather Today"
                }
            </p>
            <p>
                <div className="apii"
                >
                    <GiSunCloud size={`${es() !== 'mobile' ? '3vw' : '10vw'}`} fill="#ffc300" />
                </div>
                {evalt('title', d.weather[0].main.toLowerCase())}
            </p>
            <p>
                <div className="apii">
                    <GiPlantWatering size={`${es() !== 'mobile' ? '3vw' : '10vw'}`} fill="#0f4c81" />
                </div>
                {evalt('humidty', d.weather[0].humidity)}
            </p>
            <p>
                <div className="apii">
                    <GiWindSlap size={`${es() !== 'mobile' ? '3vw' : '10vw'}`} fill="#1c1c3c" />
                </div>
                {evalt('wind', d.wind.speed)}
            </p>
            <p>
                <div className="apii">
                    <GiThermometerCold size="3vw" fill="#f79d84" />
                </div>
                The temperature is: {Math.floor(d.main.temp)} celsius: <br /> {evalt('temp', Math.floor(d.main.temp))}
            </p>

            
            <div className="mo">
                <div className={`${es() === 'mobile' ? "" : ""} mount `}>
                </div>
                <div className={`${es() === 'mobile' ? "skw" : ""} msh`}></div>

                <div className={`${es() === 'mobile' ? "" : ""} mount1`}></div>
                <div className={`${es() === 'mobile' ? "skw" : ""} msh1`}></div>

                <div className={`${es() === 'mobile' ? "" : ""} mount2`}></div>
                <div className={`${es() === 'mobile' ? "skw" : ""} msh2`}></div>

                <div className={`${es() === 'mobile' ? "" : ""} mount3`}></div>
                <div className={`${es() === 'mobile' ? "skw" : ""} msh3`}></div>
            </div>

        </div>
    )
}