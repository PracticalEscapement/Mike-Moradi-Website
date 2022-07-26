import myResume from '../../assests/resume-image.png'
import './resume.css'

function Resume() {
  return (
    <>
      <div className='resume-container'>
        <div className='resume-pdf__container'>
          <div className='resume-pdf__img--container'>
            <img className='resume-pdf__img' src={myResume} alt='Resume-img'/>
          </div>
            <h2 className='resume-pdf__heading'>Click To<br/>View PDF</h2>
        </div>
      </div>
    </>
  )
}

export default Resume