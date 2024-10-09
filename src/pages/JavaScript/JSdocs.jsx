import React from 'react';
import Navigation from '../../components/Navigation';
import Docslist from '../../components/Docslist';
import JavaScript from '../../components/JavaScript/JavaScript';

function JSdocs() {
    return (
        <div>
            <Navigation />
            <div className='hidden md:block'>
                <Docslist />
            </div>
            <JavaScript />
        </div>
    );
}

export default JSdocs;