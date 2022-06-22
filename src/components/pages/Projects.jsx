import React from 'react'
import Card from '../card/Card'
import './projects.css'
import Ramen from '../../assests/ramen.png'
import { IoLogoJavascript } from "react-icons/io";
import { SiRubyonrails } from "react-icons/si";
import { DiRuby, DiReact } from "react-icons/di";

function Projects() {
  return (
    <>
      <div className='projects__container'>
        <div className='project'>
          <div className='project__element project__element--left'>
            <div className="project__box pb--heading">
              <img className='ramen__img' src={Ramen} alt='ramen' />
              <h2 className='ramen__heading'>THE<br/>RAMEN<br/>CRITIQUE</h2>
            </div>
          </div>
          <div className='project__element project__element--right'>
            <div className="project__box pb--body">
              <p>
                This is a blog designed to rate many of the ramaen restaurants in New York.
                Authorized users can comment on posts made by the admin user.
                This application features a backend API built using Ruby on Rails,
                and a frontend using React.js. Custom components and component libraries
                were used to create the UI.
              </p>
            </div>
          </div>
          <div className='project__element project__element--left'>
            <div className="project__box pb--tech">
              <div className="tech-card__front">
                <IoLogoJavascript className='tech__icon' />
                <DiRuby className='tech__icon' />
                <SiRubyonrails className='tech__icon' />
                <DiReact className='tech__icon' />
              </div>
              <div className="code">
                Check Out My Code
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Projects