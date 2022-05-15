import React, { useState } from 'react';
import {ReactComponent as Arrow } from '../assets/img/arrow.svg';
import {ReactComponent as PagesIcon } from '../assets/img/layer.svg';
import {ReactComponent as ReaderIcon } from '../assets/img/read.svg';
import "../assets/css/item.css"
const Dropdown = ({item}) => {
    const [show,setShow] = useState(false)

    return (
        <>
            <div className="item">
                <div className="item-header" onClick={()=>{setShow(!show)}}>
                    <div className='item-header-text'>
                        {item.title || "data is missing"}
                    </div>
                    <div  className={`header-icon${show ? "-active":""}`}>
                        <Arrow />
                    </div>
                </div>
                <div className={`item-body${show ? "-active":""}`}>
                    <div className="item-content">
                        <div className='item-content-editions'>
                            {item.edition_count || "data is missing"} Editions
                        </div>
                        <div>
                            First Published: {item.first_publish_year || "data is missing"}
                        </div>
                    </div>
                    <div className="item-footer">
                        <div>
                            <PagesIcon/>
                            <div>{item.number_of_pages_median || "Data is missing"} Pages</div>
                        </div>
                        <div>
                            <ReaderIcon/>
                            <div>{(item.number_of_pages_median*3/60).toFixed(0)} hours read time</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dropdown;