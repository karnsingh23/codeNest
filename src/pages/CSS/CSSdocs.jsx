import React from 'react';
import Navigation from '../../components/Navigation';
import Docslist from '../../components/Docslist';
import CSS from '../../components/CSS/CSS';

function CSSdocs() {
    return (
        <div>
            <Navigation />
            <div className='hidden md:block'>
                <Docslist />
            </div>
            <CSS />
        </div>
    );
}

export default CSSdocs;