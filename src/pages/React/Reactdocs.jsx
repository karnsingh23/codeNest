import React from 'react';
import Navigation from '../../components/Navigation';
import Docslist from '../../components/Docslist';
import ReactDoc from '../../components/React/React';

function Reactdocs() {
    return (
        <div>
            <Navigation />
            <div className='hidden md:block'>
                <Docslist />
            </div>
            <ReactDoc />
        </div>
    );
}

export default Reactdocs;