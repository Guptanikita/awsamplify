import React from 'react';
import about from '../assets/about-us.jpg';
import Navigation from '../Components/Navigation';
import { Col, Container, Row, } from 'react-bootstrap';
import amritesh from '../assets/amritesh.jpg';
import priyanshu from '../assets/priyanshu.jpg';
import priya from '../assets/priya.jpg';
import aashitha from '../assets/Aashitha.jpg';
import pravesh from '../assets/pravesh.jpg';
import karan from '../assets/karan.jpg';
import bratsun from '../assets/bratsun.jpg';
import { SocialIcon } from 'react-social-icons';

const teams = [
    {
        image: amritesh,
        name: "AMRITESH SRIVASTAVA",
        desc: "Project Lead",
        linkedin_url: "http://linkedin.com/in/jaketrent",
        twiter_url: "http://twitter.com/jaketrent",

    },
    {
        image: priyanshu,
        name: "PRIYANSHU BAJPAI",
        desc: "Head - Program & Product Management",
        linkedin_url: "http://linkedin.com/in/jaketrent",
        twiter_url: "http://twitter.com/jaketrent",
    },
    {
        image: priya,
        name: "PRIYA SHARMA",
        desc: "Head of Operations and Outreach",
        linkedin_url: "http://linkedin.com/in/jaketrent",
        twiter_url: "http://twitter.com/jaketrent",
    },
    {
        image: aashitha,
        name: "AASHITHA SWAMI",
        desc: "Contributer",
        linkedin_url: "http://linkedin.com/in/jaketrent",
        twiter_url: "http://twitter.com/jaketrent",
    },
    {
        image: pravesh,
        name: "PRAVESH MEHTA",
        desc: "Contributer",
        linkedin_url: "http://linkedin.com/in/jaketrent",
        twiter_url: "http://twitter.com/jaketrent",
    },
    {
        image: karan,
        name: "KARANVEER SINGH",
        desc: "Designer / Animator",
        linkedin_url: "http://linkedin.com/in/jaketrent",
        twiter_url: "http://twitter.com/jaketrent",
    },
    {
        image: bratsun,
        name: "MAX BRATSUN",
        desc: "Founder of FoodBank.co Bali Chapter",
        linkedin_url: "http://linkedin.com/in/jaketrent",
        twiter_url: "http://twitter.com/jaketrent",
    }];
const teams_img1 = []
const teams_img2 = []

for (const [index, team] of teams.entries()) {
    if (index <= 3) {
        teams_img1.push(
            <Col>
                <img src={team.image} key={index} style={{ padding: '20px', width: '90%' }} />
                <strong style={{ color: "black", textAlign: "center" }}>{team.name}</strong>
                <p style={{ color: "black", textAlign: "center" }}>{team.desc}</p>
                <p style={{ textAlign: "center" }}>
                    <SocialIcon url={team.linkedin_url} style={{ height: 25, width: 25 }} />
                    '  '
                    <SocialIcon url={team.twiter_url} style={{ height: 25, width: 25 }} />
                </p>
            </Col>
        );
    } else {
        teams_img2.push(
            <Col>
                <img src={team.image} key={index} style={{ padding: '20px', width: '80%' }} />
                <strong style={{ color: "black", textAlign: "center" }} >{team.name}</strong>
                <p style={{ color: "black", textAlign: "center" }}>{team.desc}</p>
                <p style={{ textAlign: "center" }}>
                    <SocialIcon url={team.linkedin_url} style={{ height: 25, width: 25 }} />
                    '  '
                    <SocialIcon url={team.twiter_url} style={{ height: 25, width: 25 }} />
                </p>
            </Col>
        );
    }
}

function About() {
    return (
        <div>
            <Navigation />
            <Row>
                <img src={about} style={{ height: "300px", width: "100%", filter: "brightness(60%)" }} />
                {/* <h1 style={{ color: "red", fontWeight: "bolder" , textAlign: }}>About US</h1> */}
            </Row>
            <br />
            <Row style={{ color: 'black' }}>
                <Col style={{ color: 'black' }}>
                    <p style={{ textAlign: "center", color: 'black' }}><strong style={{ fontSize: "28px", color: 'black' }}>What is UrHope-Foodbank ?</strong></p>
                    <br />UrHope-Foodbank is a unified platform which connects help seekers with help providers
                (be it organisations/donors/volunteers) to ensure no one sleeps hungry.
                <br />After a successful launch in Bali, Kenya, we partnered with Urhope,
                 India to launch this platform. <br />Besides connecting volunteers, donors and initiatives to help seekers,
                we also have a group of volunteers that help people in need of food by connecting them to Government bodies,
                food initiatives in their area and donors.
            </Col>
                <Col style={{ color: 'black' }}>
                    <p style={{ textAlign: "center", color: 'black' }}><strong style={{ fontSize: "28px", color: 'black' }}>Why did we launch this?</strong></p>
                    <br />Thousands of Indian families are struggling to make ends meet in the wake of the COVID-19 pandemic.
                Many people from all over the country have come forward to help such people. Foodbank was created to build
                one nation-wide platform for all food distribution initiatives so we can connect them to verified people in
                need, and volunteers &amp; donors, so that they can focus on what they do best - feeding people.
                </Col>
            </Row>
            <Row>
                <Col>
                    <br />
                    <h1><p style={{ textAlign: "center", color: 'black', fontWeight: "bolder" }}>Our Team</p></h1>
                </Col>
            </Row>
            <Row>
                {teams_img1}
            </Row>
            <Row>
                {teams_img2}
                <Col />
            </Row>
        </div >
    );
}

export default About;
