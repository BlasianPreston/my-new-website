import React from 'react';
import Image from 'next/image';
import Family from '../../../public/family.jpg'
import Jets from '../../../public/jets.jpg'
import Arsenal from '../../../public/arsenal.jpg'
import Music from '../../../public/music.jpg'
import Gym from '../../../public/gym.jpg'
import Friends from '../../../public/friends.jpg'
import '../../styles/about.css'

export default function About() {
    return (
        <div className='container'>
            <div className="grid">
                <div className='card'>
                    <h1>Family</h1>
                    <Image src={Family} alt ='Family'/>
                    <h3>This is a photo of my wonderful family. They have supported me so much throughout the years and I attribute tons of my success to them!</h3>
                </div>
                <div className='card'>
                    <h1>Friends</h1>
                    <Image src={Friends} alt ='Friends'/>
                    <h3>These are some of my closest friends who I've shared many great moments with. If only we all went to the same college :( </h3>
                </div>
                <div className='card'>
                    <h1>Soccer</h1>
                    <Image src={Arsenal} alt ='Soccer'/>
                    <h3>These are some of the jersey's in my collection of my favorite soccer team Arsenal F.C. COYG!!</h3>
                </div>
                <div className='card'>
                    <h1>Football</h1>
                    <Image src={Jets} alt ='Football'/>
                    <h3>Growing up, I was a huge Jets fan and I've had to opportunity to attend some of the games!</h3>
                </div>
                <div className='card'>
                    <h1>Music</h1>
                    <Image src={Music} alt ='Music'/>
                    <h3>Huge Drake and Bryson Tiller fan. Waiting for Bryson to drop more music.</h3>
                </div>
                <div className='card'>
                    <h1>Gym</h1>
                    <Image src={Gym} alt ='Gym'/>
                    <h3>Working out has become a huge part of my life and I can't wait for the day I'm shredded!</h3>
                </div>
            </div>
        </div>
    );
}