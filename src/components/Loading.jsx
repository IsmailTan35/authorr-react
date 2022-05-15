import React from 'react';

const Loading = () => {
    return (
        <>
            <div className='loading'>
                <svg
                    className="ring"
                    viewBox="25 25 50 50"
                    strokeWidth="5"
                    >
                    <circle className="circle2" cx="50" cy="50" r="20" />
                    <circle className="circle" cx="50" cy="50" r="20" />
                </svg>
                <div>Loading...</div>
            </div>
        </>
    );
};

export default Loading;