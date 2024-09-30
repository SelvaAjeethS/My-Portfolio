import React from 'react'
import { Link } from 'react-scroll'

function About() {
  return (
    <section id="about" className="my-5">
      <div className='aboutContent'>
        <span className='hello'>Hello,</span>
        <span className='aboutText'>I'm <span className='aboutName'>Selva Ajeeth S</span><br />Frontend Developer</span>
        <p className='aboutPara'>
          I'm a front-end developer with experience in HTML, CSS, JavaScript, and React.<br />
          After two years as a copy editor, I'm excited to switch my focus to front-end development.
        </p>
        <Link to="contact" smooth={true} duration={300}><button id='aboutBtn' className='btn bg-white text-black'>Contact Me</button></Link>
      </div>
      <img src="/assets/about.png" alt="profile" className="bg" />
    </section>
  )
}

export default About