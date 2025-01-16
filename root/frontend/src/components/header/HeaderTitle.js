import React from 'react';
import "./headerTitle.css";

export default function HeaderTitle() {

    return(
        // this container is z-indexed as 10;
       <div class="header_title_container" id="header_title_container">
            <h1 class="title" id="title">
                {/* 't h e' */}
                <span class="title_letter title_letter_t" id="title_letter_t">T</span>
                <span class="title_letter title_letter_h" id="title_letter_h">h</span>
                <span class="title_letter title_letter_e" id="title_letter_e">e</span>
                <span class="space" id="space"></span>
                {/* 'l a n d' */}
                <span class="title_letter title_letter_l" id="title_letter_l">L</span>
                <span class="title_letter title_letter_a" id="title_letter_a">a</span>
                <span class="title_letter title_letter_n" id="title_letter_n">n</span>
                <span class="title_letter title_letter_d" id="title_letter_d">d</span>
                <span class="space" id="space"></span>
                {/* 'o f' */}
                <span class="title_letter title_letter_o" id="title_letter_o">o</span>
                <span class="title_letter title_letter_f" id="title_letter_f">f</span>
                <span class="space" id="space"></span>
                {/* 'G e o j e' */}
                <span class="title_letter geoje title_letter_g" id="title_letter_g">G</span>
                <span class="title_letter geoje title_letter_ee" id="title_letter_ee">e</span>
                <span class="title_letter geoje title_letter_oo" id="title_letter_oo">o</span>
                <span class="title_letter geoje title_letter_j" id="title_letter_j">j</span>
                <span class="title_letter geoje title_letter_eee" id="title_letter_eee">e</span>
            </h1>
       </div>
    );
}