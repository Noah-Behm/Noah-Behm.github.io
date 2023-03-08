import React from 'react'
import '../App.css';
import me_photo from '../images/me.jpg';
import github_logo from '../images/GitHub-Logo.png';
import linkedin_logo from '../images/linkedin-logo.png';
import resume_logo from '../images/resume.png';
import Popup from 'reactjs-popup';

function Home() {
    const onButtonClick = () => {
    // using Java Script method to get PDF file
        fetch('../images/resume_noah_behm.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'noahbehm_resume.pdf';
                alink.click();
            })
        })
    }
  return (
    <div className='app'>
        <div className='head_line'>
            <div className='links_container'>
                <a href='/portfolio_site' className='nav_link_home'>Home</a>
                <a href='/about' className='nav_link_home'>About Me</a>
                <a href='/projects' className='nav_link_projects'>Projects</a>
            </div>
        </div>

        <div className='body'>

            <div className='body_row'>
                <h1 className='body_intro'>Hello! I'm Noah Behm.</h1>
                <img className='my_photo' src={me_photo} width="200" height="200" alt="me"></img>
            </div>

            
            <p className='body_text'>I graduated from Michigan State University in December of 2022 with a bachelor's degree in computer science engineering, and I completed a 
            minor in data science. I'm currently looking for my first full-time job in software engineering. Check out my page to learn more 
            about me and what I'm up to.</p>
        </div>


        <div className='logo_links'>
            <a href="https://github.com/Noah-Behm" target="_blank" rel="noopener noreferrer">
                <img className='Github-image' src={github_logo} alt="Github logo" height={90} width={150}></img>
            </a>
            <a href="https://www.linkedin.com/in/noah-behm-395b8522b/" target="_blank" rel="noopener noreferrer">
                <img className='Linkedin-image' src={linkedin_logo} alt="Linkedin logo" height={90} width={100}></img>
            </a>
            <Popup trigger={
                    <button onClick={onButtonClick} className="resume-button">
                        <img className='resume-image' src={resume_logo} alt="Resume logo" height={90} width={100} onClick={onButtonClick}></img>
                    </button>
                } position="right center">
                <div className='popup_div'>Thank you for downloading my resume!</div>
            </Popup>
        </div>

        <hr className='home_bottom_line'></hr>

        <p className='bottom_text'>Contact Me @ behmnoah@gmail.com</p>
    </div>
  )
}

export default Home