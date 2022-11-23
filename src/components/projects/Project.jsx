import './project.css'
import { useState } from 'react'
import { IoLogoJavascript } from "react-icons/io";
import { DiReact } from "react-icons/di";
import { FaTimes } from "react-icons/fa";

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
            <h1>Some Cool Project</h1>
          </div>
        }
        {infoButtonClicked &&
          <div className="project__info">
            <p className="project__info--text">
              Single page React application designed to display frontend development skills (This Website).
              Features of this app include custom components, a unique UI, and deployment with Netlify.
              Blood, sweat, and tears are also found throughout this app :).
            </p>
          </div>
        }
        {codeButtonClicked &&
          <div className="project__title">
            <h1>Links to code repos will go here</h1>
          </div>
        }
        <div className="project__nav">
          <div className={titleButtonClicked ? "project__nav-tabs--top tab__active" : "project__nav-tabs--top"} onClick={() => handleButtonState('title')}>
            <div className="project__nav-tabs--icon">
              Title
            </div>
          </div>
          <div className={infoButtonClicked ? "project__nav-tabs tab__active" : "project__nav-tabs"} onClick={() => handleButtonState('info')}>
            <div className="project__nav-tabs--icon">
              Info
            </div>
          </div>
          <div className={codeButtonClicked ? "project__nav-tabs--bottom tab__active" : "project__nav-tabs--bottom"} onClick={() => handleButtonState('code')}>
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