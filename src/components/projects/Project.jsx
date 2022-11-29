import './project.css'
import { useState } from 'react'

const Project = () => {
  const [titleButtonClicked, setTitleButtonClicked] = useState(true)
  const [infoButtonClicked, setinfoButtonClicked] = useState(false)
  const [codeButtonClicked, setCodeButtonClicked] = useState(false)

  const handleButtonState = (btn) => {
    if (btn === 'title') {
      setTitleButtonClicked(true)
      setinfoButtonClicked(false)
      setCodeButtonClicked(false)
    }
    if (btn === 'info') {
      setTitleButtonClicked(false)
      setinfoButtonClicked(true)
      setCodeButtonClicked(false)
    }
    if (btn === 'code') {
      setTitleButtonClicked(false)
      setinfoButtonClicked(false)
      setCodeButtonClicked(true)
    }
  }

  return (
    <>
      <div className="project__card">
        {titleButtonClicked &&
          <div className="project__title">
            <h1>Currently building a backend for this.</h1>
          </div>
        }
        {infoButtonClicked &&
          <div className="project__info">
            <p className="project__info--text">
             description of project.
            </p>
          </div>
        }
        {codeButtonClicked &&
          <div className="project__title">
            <p>Links to repos go here.</p>
          </div>
        }
        <div className="project__nav">
          <div className={titleButtonClicked ? "project__nav-tabs--title tab__active" : "project__nav-tabs--title"} onClick={() => handleButtonState('title')}>
            <div className="project__nav-tabs--icon">
              Title
            </div>
          </div>
          <div className={infoButtonClicked ? "project__nav-tabs--info tab__active" : "project__nav-tabs--info"} onClick={() => handleButtonState('info')}>
            <div className="project__nav-tabs--icon">
              Info
            </div>
          </div>
          <div className={codeButtonClicked ? "project__nav-tabs--code tab__active" : "project__nav-tabs--code"} onClick={() => handleButtonState('code')}>
            <div className="project__nav-tabs--icon">
              Code
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Project