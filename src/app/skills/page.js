import React from 'react';
import { FaPython, FaJava, FaJsSquare, FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa';
import { FaDartLang } from "react-icons/fa6";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiSupabase } from "react-icons/si";
import '../../styles/skills.css'

export default function Skills() {
    return (
        <div className='page'>
            <div className='skills-header'>
                <h2>My Skills</h2>
            </div>
            <div className='features'>
                <div className='skills-card'>
                    <span className='skills'><FaPython /></span>
                    <h4 className='skill-label'>Python</h4>
                </div>
                <div className='skills-card'>
                    <span className='skills'><FaJava /></span>
                    <h4 className='skill-label'>Java</h4>
                </div>
                <div className='skills-card'>
                    <span className='skills'><FaHtml5 /></span>
                    <h4 className='skill-label'>HTML</h4>
                </div>
                <div className='skills-card'>
                    <span className='skills'><FaCss3Alt /></span>
                    <h4 className='skill-label'>CSS</h4>
                </div>
                <div className='skills-card'>
                    <span className='skills'><FaJsSquare /></span>
                    <h4 className='skill-label'>Javascript</h4>
                </div>
                <div className='skills-card'>
                    <span className='skills'><FaReact /></span>
                    <h4 className='skill-label'>React</h4>
                </div>
                <div className='skills-card'>
                    <span className='skills'><FaDartLang /></span>
                    <h4 className='skill-label'>Dart</h4>
                </div>
                <div className='skills-card'>
                    <span className='skills'><BiLogoPostgresql /></span>
                    <h4 className='skill-label'>PostgreSQL</h4>
                </div>
                <div className='skills-card'>
                    <span className='skills'><SiSupabase /></span>
                    <h4 className='skill-label'>Supabase</h4>
                </div>

            </div>
            <div className='courses-header'>
                <h2>My Courses</h2>
            </div>
            <div className='container'>
                <div className='courses'>
                    <div className='courses-card'>
                        <h3>Computer Science</h3>
                        <ul>
                            <li>OOP and Data Structures</li>
                            <li>Discrete Structures</li>
                            <li>Functional Programming</li>
                        </ul>
                    </div>
                    <div className='courses-card'>
                        <h3>Operations Research</h3>
                        <ul>
                            <li>Intro to Operations Research</li>
                        </ul>
                    </div>
                    <div className='courses-card'>
                        <h3>Mathematics</h3>
                        <ul>
                            <li>Multivariable Calculus</li>
                            <li>Linear Algebra</li>
                            <li>Statistics</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}