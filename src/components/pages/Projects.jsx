import { useState } from 'react'
import Card from '../card/Card'
import './projects.css'
import Ramen from '../../assests/ramen.png'
import { IoLogoJavascript } from "react-icons/io";
import { SiRubyonrails } from "react-icons/si";
import { DiRuby, DiReact } from "react-icons/di";
import { FaTimes } from "react-icons/fa";

function Projects() {

  const [codeButtonClicked, setCodeButtonClicked] = useState(false)
  const [infoButtonClicked, setinfoButtonClicked] = useState(false)
  const [buttonsClicked, setButtonsClicked] = useState(false)

  const handleButtonState = (btn) => {
    if (btn === 'close') {
      setinfoButtonClicked(false)
      setCodeButtonClicked(false)
      setButtonsClicked(false)
    }
    if (btn === 'info') {
      setinfoButtonClicked(true)
      setCodeButtonClicked(false)
      setButtonsClicked(true)
    }
    if (btn === 'code') {
      setinfoButtonClicked(false)
      setCodeButtonClicked(true)
      setButtonsClicked(true)
    }
  }


  return (
    <>
      <div className='projects__container'>
        <div className='project'>
          {!buttonsClicked &&
            <div className='project__element'>
              <div className="pb--heading">
                <img className='ramen__img' src={Ramen} alt='ramen' />
                <h2 className='ramen__heading'>THE<br/>RAMEN<br/>CRITIQUE</h2>
                <div className="btn__container">
                  <div className='btn btn__description' onClick={() => handleButtonState('info')}>Info</div>
                  <div className='btn btn__description' onClick={() => handleButtonState('code')}>Code</div>
                </div>
              </div>
            </div>
          }
            {infoButtonClicked &&
              <div className='project__element'>
                <div className="pb--body">
                  <FaTimes className='btn btn__close' onClick={() => handleButtonState('close')} />
                  <p>
                    This is a blog designed to rate many of the ramaen restaurants in New York.
                    Authorized users can comment on posts made by the admin user.
                    This application features a backend API built using Ruby on Rails,
                    and a frontend using React.js. Custom components and component libraries
                    were used to create the UI.
                  </p>
                </div>
              </div>
            }
            {codeButtonClicked &&
              <div className='project__element'>
                <div className="pb--tech">
                  <FaTimes className='btn btn__close' onClick={() => handleButtonState('close')} />
                  <div className="tech">
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
            }
          

          
          
        </div>

      </div>
    </>
  )
}

export default Projects