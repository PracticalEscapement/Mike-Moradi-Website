import './projectCard.css'
import Ramen from '../../assests/ramen.png'
import { useState } from 'react'

function ProjectCard() {

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
    <div className="project-card">
      <div className="project-card__img">
        <img className='project__img--ramen' src={Ramen} alt='ramen' />
      </div>
      <div className="project-card__buttons">
        <div className='btn btn__description' onClick={() => handleButtonState('info')}>Info</div>
        <div className='btn btn__description' onClick={() => handleButtonState('code')}>Code</div>
      </div>
      <div className="project-card__title">
        <h2 className='project__heading--ramen'>THE<br/>RAMEN<br/>CRITIQUE</h2>
      </div>
    </div>
  )
}

export default ProjectCard