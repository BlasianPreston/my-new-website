import React from 'react';
import Link from 'next/link';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import '../styles/navbar.css'


export default function Navbar() {
    return (
        <nav>
            <div className='nav'>
                <div className='spacer'/>
                <div className='pages'>
                    <Link className='link' href="/">Home</Link>
                    <Link className='link' href="about">About Me</Link>
                    <Link className='link' href="/skills">Skills</Link>
                    <Link className='link' href="/projects">Projects</Link>
                </div>
                <div className='icons'>
                    <ul className='socials'>
                        <li><a href='https://www.instagram.com/isiahw06/' target="_blank"><span><FaInstagram/></span></a></li>
                        <li><a href='https://www.linkedin.com/in/preston-williams-72b581261/' target="_blank"><span><FaLinkedin/></span></a></li>
                        <li><a href='https://github.com/BlasianPreston' target="_blank"><span><FaGithub/></span></a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}