import React from 'react';
import { ReactComponent as EmptyIcon } from '../assets/img/empty.svg';
const EmptyPage = () => {
    return (
        <div className='empty-page'>
            <EmptyIcon/>
            <div className='empty-page-text'>There is no board to show</div>
        </div>
    );
};

export default EmptyPage;