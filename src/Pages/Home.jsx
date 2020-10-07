import React from 'react';
import Slideshow from '../Components/SlideShow';
import slide1 from "../assets/background-home.jpg";
import slide2 from "../assets/home-page2.jpg";
import slide3 from "../assets/home-page3.jpg";

const slides = [slide1, slide2, slide3];

const s = {
    container: "screenW screenH dGray col",
    header: "flex1 fCenter fSize2",
    main: "flex8 white",
    footer: "flex1 fCenter"
};

function Home() {
    return (
        <div>
            <div className={s.container}>
                <div className={s.main}>
                    <Slideshow slides={slides} />
                </div>
            </div>
            <div className={s.footer} />
        </div>
    );
}

export default Home;
