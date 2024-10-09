import React from 'react';
import Navigation from '../../components/Navigation';
import Docslist from '../../components/Docslist';
import CSSTags from '../../components/CSS/CSSTags';

function Tags() {
    return (
        <div>
            <Navigation />
            <div className='hidden md:block'>
                <Docslist />
            </div>
            <CSSTags />
        </div>
    );
}

export default Tags;