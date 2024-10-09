import React from 'react';
import Navigation from '../../components/Navigation';
import Docslist from '../../components/Docslist';
import ReactTags from '../../components/React/ReactTags';

function Tags() {
    return (
        <div>
            <Navigation />
            <div className='hidden md:block'>
                <Docslist />
            </div>
            <ReactTags />
        </div>
    );
}

export default Tags;