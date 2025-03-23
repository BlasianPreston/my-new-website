import React from 'react';
import Image from 'next/image';
import C1C0 from '../../../public/c1c0.png'
import Citi from '../../../public/citi-logo.png'
import PremierLeague from '../../../public/pl-logo.png'
import URMC from '../../../public/urmc-logo.png'
import URMCWebsite from '../../../public/urmc-website.png'
import ScholarSnacks from '../../../public/scholar-snacks.png'
import '../../styles/projects.css'

export default function Projects() {
    return (
        <div className='container'>
            <div className="grid">
                <div className='card'>
                    <h1>URMC Website</h1>
                    <Image src={URMCWebsite} alt ='URMC Website'/>
                    <h3>Maintained ReactJS frontend and created new web pages for internal use. Connected frontend to Supabase to display information that can be readily updated.</h3>
                    <h4><a className='project-link' href='https://github.com/urmc-cornell/urmc-website' target="_blank">Github Repo</a></h4>
                    <h4><a className='project-link' href='https://urmc.cs.cornell.edu/' target="_blank">Website</a></h4>
                </div>
                <div className='card'>
                    <h1>URMC Point Tracking</h1>
                    <Image src={URMC} alt ='URMC Logo'/>
                    <h3>Developed software to seamlessly link Google Forms to Supabase using Flask. Keeps track of point tallies of over 200 club members.</h3>
                    <h4><a className='project-link' href='https://github.com/urmc-cornell/urmc-sign-in' target="_blank">Github Repo</a></h4>
                </div>
                <div className='card'>
                    <h1>C1C0 Facial Recognition</h1>
                    <Image src={C1C0} alt ='C1C0'/>
                    <h3>Created new functionality for C1C0 related to facial recognition using OpenCV. Working towards implementing object detection using YOLO.</h3>
                    <h4><a className='project-link' href='https://github.com/cornell-cup/c1c0-facial-recognition' target="_blank">Github Repo</a></h4>
                </div>
                <div className='card'>
                    <h1>Soccer Match Prediction</h1>
                    <Image src={PremierLeague} alt ='Premier League Logo'/>
                    <h3>Used BeautifulSoup to scrape prior match data and predict the results of future matches using a Random Forest Model in the Sci-Kit Learn library. Achieved 70% accuracy.</h3>
                    <h4><a className='project-link' href='https://github.com/BlasianPreston/Soccer-Match-Predictor' target="_blank">Github Repo</a></h4>
                </div>
                <div className='card'>
                    <h1>Customer Complaint Analysis</h1>
                    <Image src={Citi} alt ='Citi Logo'/>
                    <h3>Analyzed over 500,000 customer complaints using Pandas at my Internship for Citi. Ran sentiment analysis on each review using NLTK for preprocessing and an LGBM model to analyze the data.</h3>
                    <h4><a className='project-link' href='https://github.com/BlasianPreston/Bank-Customer-Complaint-Analysis' target="_blank">Github Repo</a></h4>
                </div>
                <div className='card'>
                    <h1>Scholar Snacks</h1>
                    <Image src={ScholarSnacks} alt ='Scholar Snacks Logo'/>
                    <h3>Created an android app allowing students to place food orders for other students to deliver made with Flutter and Firebase for a high school midterm project alongside a partner.</h3>
                    <h4><a className='project-link' href='https://github.com/BlasianPreston/scholar_snacks' target="_blank">Github Repo</a></h4>
                </div>
            </div>
        </div>
    );
}