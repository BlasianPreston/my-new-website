import React from 'react';
import Image from 'next/image';
import Me from '../../public/me.png'
import '../styles/home.css'

export default function Home() {
    return (
        <div className="homepage">
            <div className='intro'>
                <div className='info'>
                    <h3>Aspiring Computer Science Student</h3>
                    <h1>Hey, I'm <span className='name'>Preston</span>!</h1>
                    <p>I am a freshman at <a href='https://www.engineering.cornell.edu/' target='_blank' className='underlined'>Cornell Engineering</a> who 
                    is interested in the fields of Full Stack Development and Artificial Intelligence. If you would like to
                    contact me, feel free to message me at <span className='underlined'>ipw5@cornell.edu</span>
                    </p>
                </div>
                <div className='me-image'>
                    <Image src={Me} alt ='Me' className="home-image"/>
                </div>
            </div>
        </div>
    );
}