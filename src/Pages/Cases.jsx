import React from 'react';
import CaseModal from '../Components/CaseModal';
import slide1 from "../assets/background-home.jpg";
import slide2 from "../assets/home-page2.jpg";
import slide3 from "../assets/home-page3.jpg";
import Navigation from '../Components/Navigation';

function Cases() {
    return (
        <div>
            <Navigation />
            <a href="https://www.amazon.in/hz/wishlist/ls/UJJ95POQNA9I?type=wishlist">
                Amazon wishlist
            </a>
            <CaseModal />
        </div>
    );
}

export default Cases;