import React, { useState } from 'react';
import './styles/herosection.css'
import { useEffect } from 'react';
 
const HeroSection=()=>
{
    var [bubble,isbubble]=useState(false);
    useEffect(() => {
        const interval = setInterval(() => {
            isbubble(!bubble)
            console.log(bubble)
        }, 3000);
    });
    return (
        <div class="container">
        <div class="card">
            <img src='https://d33wubrfki0l68.cloudfront.net/4e39c7238cdfd48eccdfb5e1835170ec52e5f614/bd0b1/assets/img/jwoc_logo_sticker.svg' className='imgHero'/>
            <h1 class="title">JWOC</h1>
            <h1 className='title2'>JGEC WINTER OF CODE</h1>
            <div class="cardinner">
            <p class="subtitle">JWoC (JGEC Winter of Code) is a coding event organised annually by JGEC which helps students to plunge into Open Source contribution and get the realm of Software Development.</p>
        </div>
            <button class="btn">In Association With</button>
        </div>
        <div className={bubble?'blob':'blob1'}></div>
        </div>
    );
}
 
export default HeroSection;