import React from 'react'
import main_page from '../images/main_page_small.png';
import stats_unloaded from '../images/stats_page_unloaded_small.png';
import stats_loaded from '../images/stats_page_small.png';


function Projects() {
  return (
    <div className='app'>
        <div className='head_line'>
            <div className='links_container'>
                <a href='/portfolio_site' className='nav_link_home'>Home</a>
                <a href='/about' className='nav_link_home'>About Me</a>
                <a href='/projects' className='nav_link_projects'>Projects</a>
            </div>
        </div>



        <div className='projs_container'>
          <div className='projects_grid'>
            <h1 className='proj_section_header'>League of Legends Stats and Challenges App</h1>
            <img className='stats_proj_photo' src={main_page} width="696" height="376" alt="stats project"></img>
            <img className='stats_proj_photo' src={stats_unloaded} width="696" height="376" alt="stats project"></img>
            <img className='stats_proj_photo' src={stats_loaded} width="696" height="376" alt="stats project"></img>

            <p className='stats_proj_description'>
            <strong className='bold_text'>Technologies: React, Express.js, Javascript, HTML, CSS, MySQL, Python, Riot Games official API</strong>
            <br></br>
            <br></br>
            <strong className='bold_text'>About the project:</strong>
            <br></br>
            <br></br>
            This is an ongoing personal project of mine with the goal of learning more about full-stack web development. League of Legends 
            is a game that I've been enjoying with friends for many years, so I thought creating an app centered around this game was a great 
            way to go about learning. I also wanted to gain experience working with APIs, so since I knew Riot had an official API for game 
            data I thought this was a great place to start.
            <br></br>
            <br></br>
            <strong className='bold_text'>How it works:</strong>
            <br></br>
            <br></br>
            This application allows users to log in or create an account (seen in the first image), and are then taken to the main page of 
            the application (second and third images). If a user is signing up for the first time, their information is checked against my local 
            SQL database to make sure the login isn't taken; if it is they are required to choose a different one, and if it isn't it's saved to 
            the database.
            <br></br>
            <br></br>
            Once on the main page, the user can save a summoner name (League of Legends in-game id) to their profile to be stored in the database 
            with their login information. From there, a user can click the "Show Last 10 Games" button. Once this is clicked, the Javascript for the site 
            makes an API call to a few endpoints of the Express.js part of the application that I created. 
            <br></br>
            <br></br>
            Next, the Express.js part of my application makes SQL queries and calls to the Riot Games API, then returns the match and challenge data to 
            the front end. The front-end Javascript then parses the JSON data and uses it to fill in the match data, average stats, and challenges for the 
            user to view.
            <br></br>
            <br></br>
            <strong className='bold_text'>Additional Work:</strong>
            <br></br>
            <br></br>
            In creating this application, I also wrote a python script which calls the Riot Games API to recieve JSON data on all of the challenges (in game 
            goals which reward points), parse the JSON to pull out all of the meaningful data needed for my web app, and send that data to my local database 
            in order to reduce future api calls while running the web app to avoid hitting the developer key rate limit.
            </p>
          </div>
        </div>




        






        <hr className='home_bottom_line'></hr>

        <p className='bottom_text'>Contact Me @ behmnoah@gmail.com</p>
    </div>
  )
}

export default Projects