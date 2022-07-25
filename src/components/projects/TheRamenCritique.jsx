import './project.css'
import { useState } from 'react'
import Ramen from '../../assests/ramen.png'
import { IoLogoJavascript } from "react-icons/io";
import { SiRubyonrails } from "react-icons/si";
import { DiRuby, DiReact } from "react-icons/di";
import { FaTimes } from "react-icons/fa";


function TheRamenCritique() {
  
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
        <div className='project'>
          {!buttonsClicked &&
              <div className='project__overview'>
                <img className='project__img--ramen' src={Ramen} alt='ramen' />
                <h2 className='project__heading--ramen'>THE<br/>RAMEN<br/>CRITIQUE</h2>
                <div className='btn__container'>
                  <div className='btn btn__description' onClick={() => handleButtonState('info')}>Info</div>
                  <div className='btn btn__description' onClick={() => handleButtonState('code')}>Code</div>
                </div>
              </div>
          }
            {infoButtonClicked &&
                <div className='project__description-card'>
                  <FaTimes className='btn btn__close' onClick={() => handleButtonState('close')} />
                  <p className='project__description'>
                    This is a blog designed to rate many of the ramaen restaurants in New York.
                    Authorized users can comment on posts made by the admin user.
                    This application features a backend API built using Ruby on Rails,
                    and a frontend using React.js. Custom components and component libraries
                    were used to create the UI.
                  </p>
                </div>
            }
            {codeButtonClicked &&
                <div className='project__tech-stack'>
                  <FaTimes className='btn btn__close' onClick={() => handleButtonState('close')} />
                  <div className='tech-icons'>
                    <IoLogoJavascript className='tech__icon' />
                    <DiRuby className='tech__icon' />
                    <SiRubyonrails className='tech__icon' />
                    <DiReact className='tech__icon' />
                  </div>
                  <div className="code">
                    <h4>Check Out My Code</h4>
                    <div className='code__links'>
                      <a href='https://github.com/PracticalEscapement/ramaan-react' target="_blank" rel="noopener noreferrer">Frontend</a>
                      <a href='https://github.com/PracticalEscapement/ramaan' target="_blank" rel="noopener noreferrer">Backend</a>
                    </div>
                  </div>
                </div>
            }
          

          
          
        </div>
    </>
  )
}

export default TheRamenCritique