import React from 'react';
import ngo1 from '../assets/janman.jpg';
import ngo2 from '../assets/chikitsa.jpg';
import ngo3 from '../assets/cropped-output-onlin.jpg';
import ngo4 from '../assets/lockdown-relief.jpg';
import partner1 from '../assets/partner1.jpg';
import partner2 from '../assets/partner2.jpg';
import partner3 from '../assets/partner3.jpg';

const ngo_lists = [ngo1, ngo2, ngo3, ngo4];

function HomeFooter() {
    return (
        <div>
            <div style={{ marginLeft: "10%" }}>
                <img src={ngo1} className='ngo-image' />
                <img src={ngo2} className='ngo-image' />
                <img src={ngo3} className='ngo-image' />
                <img src={ngo4} className='ngo-image' />
            </div>

            <div style={{ marginLeft: "10%" }}>
                <br />
                <p style={{ fontWeight: 'bold', fontSize: '30px', color: 'black' }}>Our Partners in Action</p>
                <img src={partner1} className='partner-image' />
                <img src={partner2} className='partner-image' />
                <img src={partner3} className='partner-image' />
            </div>
        </div>
    );
}

export default HomeFooter;