import React, { useState } from 'react';

import "../assets/css/card.css"
import Dropdown from './Dropdown';

const Card = ({author}) => {
    const createColor = () => {
        let color = []
        let r = Math.floor(Math.random() * 255)
        let g = Math.floor(Math.random() * 255)
        let b = Math.floor(Math.random() * 255)
        color.push(r,g,b)
        return color
    }

    return (
        <>
            <div className="card-wrapper">
            <div style={{height:5,width:"100%",borderRadius:"5px 5px 0 0",background:`rgb(${createColor()})`}}></div>
            <div className="card" >
                <div className="card-header">{author[0] || "data is missing"}</div>
                    <div style={{overflow:"scroll",display:"flex",flexDirection:"column",rowGap:5}}>
                        {author[1] && author[1].map((item,index) => (
                            <Dropdown item={item} key={index}/>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;