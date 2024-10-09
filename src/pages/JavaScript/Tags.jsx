import React from 'react';
import Navigation from '../../components/Navigation';
import Docslist from '../../components/Docslist';
import JSTags from '../../components/JavaScript/JStags';

function Tags() {
    return (
        <div>
            <Navigation />
            <div className='hidden md:block'>
                <Docslist />
            </div>
            <JSTags />
        </div>
    );
}

export default Tags;