import React from 'react';
import Dropdown from './Dropdown';

const Card2 = ({author}) => {
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
            <div style={{width:"100%",height:"100%"}}>
                <div>YEAR</div>
                <div style={{overflow:"scroll",display:"flex",flexDirection:"column",rowGap:5}}>
                    {author[1] && author[1].map((item,index) => (
                        <Dropdown item={item} key={index}/>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Card2;