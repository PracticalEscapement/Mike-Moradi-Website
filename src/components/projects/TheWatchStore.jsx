import Watch from '../../assests/watch.png'
import './project.css'
import { useState } from 'react'
import { SiRubyonrails } from "react-icons/si";
import { DiRuby } from "react-icons/di";
import { FaTimes } from "react-icons/fa";

function TheWatchStore() {
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
              <div className="project__overview">
                <img className='project__img--watch' src={Watch} alt='Watch' />
                <h2 className='project__heading--watch'>THE<br/>Watch<br/>Store</h2>
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
                The Watch Store as the name impies, is an ecommerce store designed to sell watches. Features of this Ruby on Rails application include,
                 Stripe checkout, TaxJar tax caluculation, user authentication with Devise, and RESTful design.
              </p>
            </div>
        }
        {codeButtonClicked &&
            <div className='project__tech-stack'>
              <FaTimes className='btn btn__close' onClick={() => handleButtonState('close')} />
              <div className='tech-icons'>
                <DiRuby className='tech__icon' />
                <SiRubyonrails className='tech__icon' />
              </div>
              <div className="code">
                <h4>Check Out My Code</h4>
                <div className='code__links'>
                  <a href='https://github.com/PracticalEscapement/Watch-Store' target="_blank" rel="noopener noreferrer">Backend</a>
                </div>
              </div>
            </div>
        }
      </div>
    </>
  )
}

export default TheWatchStore