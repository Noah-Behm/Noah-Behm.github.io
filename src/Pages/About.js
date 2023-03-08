import React from 'react'

function About() {
  return (
    <div className='app'>
        <div className='head_line'>
            <div className='links_container'>
                <a href='/' className='nav_link_home'>Home</a>
                <a href='/about' className='nav_link_home'>About Me</a>
                <a href='/projects' className='nav_link_projects'>Projects</a>
            </div>
        </div>




        <div className='about_section_container'>
            <div className='about_section'>
              <h1 className='about_section_header'>Growing Up</h1>

              <p className='about_section_body'>
              I was born and raised in the mid-michigan area with my parents and two sisters. Growing up I participated in many
              activities including competitive swimming, reading, playing video games with friends, and more. My favorite of these was competitive swimming, and
              it led me to attend high school a town over - since my hometown's school didn't have a pool. 
              </p>

              <br/>

              <p className='about_section_body'>
              Throughout my early life and high school I was always 
              drawn to new technologies - I remember cherishing the time I had on our family desktop, being amazed by the games I could play on my dad's blackberry
              phone when he got one (shoutout brickbreaker!), and the awe I felt when I found out the new IPod touch would have a camera. I knew from an early age
              that I wanted to pursue a career in technology and engineering because of these things, and that's what led me to choosing to go into engineering at 
              Michigan State University.
              </p>
            </div>

            <hr className='about_line'></hr>
            

            <div className='about_section'>
              <h1 className='about_section_header'>University</h1>

              <p className='about_section_body'>
              I started off my time at Michigan State with my initial major being mechanical engineering. At the time I wasn't really sure what I wanted to major in, 
              other than I knew I wanted to pursue engineering and technology, so I choose mechanical as a placeholder. I began taking, and really enjoying, the basic
              engineering courses required for all engineering majors and after more thought I decided that I wanted to try out phyics as a major. 
              </p>
              <br/>
              <p className='about_section_body'>After taking a few of the early 
              physics classes I realized it wasn't as related to technology as I would have liked, and so my next choice was to try out statistics and data science. I 
              really enjoyed these classes, but yet again I wanted to be closer to actually creating new techonolgies. I finally thought back to the programming classes 
              I took in high school, which I thoroughly enjoyed, and decided to give computer science engineering a shot. Ever since then I've been enjoying learning 
              more about programming and computer science, and kicking myself for not realizing this was right for me sooner.
              </p>

              <br/>

              <p className='about_section_body'>
              I found progressing through the computer science courses at Michigan State to feel quite natural and enjoyable, and I was glad to have finally found 
              the major that felt right to me. I took classes from data structures and algorithms, to database systems, to mobile app development and each of them 
              scratched at an itch I never knew I had. My university education culminated with a senior capstone class where I worked in a team of students 
              creating a web app for Volkswagen which matched users to a suitable electric vehicle based on their driving habits and needs. Finally, after a long 
              but enjoyable 5 years, I graduated in December of 2022 with a major in computer science engineering and a minor in data science.
              </p>

            </div>

            <hr className='about_line'></hr>

            <div className='about_section'>
              <h1 className='about_section_header'>The Future</h1>
              <p className='about_section_body'>
              Now that I'm stepping into the workforce, I'm excited to be able to contribute to new technologies and software that will hopefully inspire the same 
              feelings of wonder in people that I felt growing up. I hope to continually advance my skill set to be able to contribute as much as possible to 
              whatever organization I find myself working at.
              </p>

              <br/>

              <p className='about_section_body'>
              <strong>Goals: </strong> My goals for the future are to find my niche in software development, advance my skills as much as possible, travel to new 
              places, and meet a ton of great new people to learn from and grow with. I hope to find a workplace which can facilitate these goals and discover 
              new ones to add to the list.
              </p>


            </div>



        </div>


        


        <hr className='home_bottom_line'></hr>

        <p className='bottom_text'>Contact Me @ behmnoah@gmail.com</p>





    </div>
  )
}

export default About