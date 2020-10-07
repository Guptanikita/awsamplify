import React from 'react';
import ngo1 from '../assets/janman.jpg';
import ngo2 from '../assets/chikitsa.jpg';
import ngo3 from '../assets/cropped-output-onlin.jpg';
import ngo4 from '../assets/lockdown-relief.jpg';

const ngo_lists = [ngo1, ngo2, ngo3, ngo4];

function HomeFooter() {
    return (
        <div style={{ marginLeft: "10%" }}>
            <img src={ngo1} className='ngo-image' />
            <img src={ngo2} className='ngo-image' />
            <img src={ngo3} className='ngo-image' />
            <img src={ngo4} className='ngo-image' />
        </div>
    );
}

export default HomeFooter;