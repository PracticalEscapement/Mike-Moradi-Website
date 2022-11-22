import './project.css'
import Person from '../../assests/cartoon-person.png'
import { useState } from 'react'
import { IoLogoJavascript } from "react-icons/io";
import { DiReact } from "react-icons/di";
import { FaTimes } from "react-icons/fa";

function PersonalWebiste() {
  const [codeButtonClicked, setCodeButtonClicked] = useState(false)
  const [infoButtonClicked, setinfoButtonClicked] = useState(false)
  const [titleButtonClicked, setTitleButtonClicked] = useState(false)
  const [buttonsClicked, setButtonsClicked] = useState(false)

  const handleButtonState = (btn) => {
    if (btn === 'close') {
      setinfoButtonClicked(false)
      setCodeButtonClicked(false)
      setButtonsClicked(false)
    }
    if (btn === 'title') {
      setTitleButtonClicked(true)
      setinfoButtonClicked(false)
      setCodeButtonClicked(false)
      setButtonsClicked(true)
    }
    if (btn === 'info') {
      setTitleButtonClicked(false)
      setinfoButtonClicked(true)
      setCodeButtonClicked(false)
      setButtonsClicked(true)
    }
    if (btn === 'code') {
      setTitleButtonClicked(false)
      setinfoButtonClicked(false)
      setCodeButtonClicked(true)
      setButtonsClicked(true)
    }
  }


  return (
    <>
      <div className='project'>
        {!buttonsClicked &&
          <div className="project__overview">
            <img className='project__img--person' src={Person} alt='Watch' />
            <h2 className='project__heading--person'>Personal<br/>Website</h2>
            <div className="btn__container">
              <div className='btn btn__description' onClick={() => handleButtonState('info')}>Info</div>
              <div className='btn btn__description' onClick={() => handleButtonState('code')}>Code</div>
            </div>
          </div>
        }
        {infoButtonClicked &&
          <div className='project__description-card'>
            <FaTimes className='btn btn__close' onClick={() => handleButtonState('close')} />
            <p className='project__description'>
              Single page React application designed to display frontend development skills (This Website).
              Features of this app include custom components, a unique UI, and deployment with Netlify.
               Blood, sweat, and tears are also found throughout this app :).
            </p>
          </div>
        }
        {codeButtonClicked &&
          <div className='project__tech-stack'>
            <FaTimes className='btn btn__close' onClick={() => handleButtonState('close')} />
            <div className='tech-icons'>
              <IoLogoJavascript className='tech__icon' />
              <DiReact className='tech__icon' />
            </div>
            <div className="code">
              <h4>Check Out My Code</h4>
              <div className='code__links'>
                <a href='https://github.com/PracticalEscapement/Mike-Moradi-Website' target="_blank" rel="noopener noreferrer">Frontend</a>
              </div>
            </div>
          </div>
        }

      </div>
    </>
  )
}

export default PersonalWebiste