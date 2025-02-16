import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../images/big-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../styles/navbar.css'


export default function Navbar() {
    return (
        <nav>
            <div className='nav'>
                <div className="logo">
                    <a href="/"><Image src={Logo} alt ='Logo' className='my-logo'/></a>
                </div>
                <div className='pages'>
                    <Link href="/">Home</Link>
                    <Link href="/about">About Me</Link>
                    <Link href="/skills">Skills</Link>
                    <Link href="/projects">Projects</Link>
                </div>
                <div className='icons'>
                    <ul className='socials'>
                        <li><a href='https://www.instagram.com/isiahw06/' target="_blank"><span><FontAwesomeIcon className='social-media' icon={faInstagram}/></span></a></li>
                        <li><a href='https://www.linkedin.com/in/isiah-preston-williams-72b581261/' target="_blank"><span><FontAwesomeIcon className='social-media' icon={faLinkedin}/></span></a></li>
                        <li><a href='https://github.com/BlasianPreston' target="_blank"><span><FontAwesomeIcon className='social-media' icon={faGithub}/></span></a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}