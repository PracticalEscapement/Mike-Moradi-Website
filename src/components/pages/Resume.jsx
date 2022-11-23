import myResume from '../../assests/resume-image.png'
import './resume.css'
import PDF from '../../assests/resume-v5.pdf'

function Resume() {
  return (
    <>
      <div className='resume-container'>
        <a href={PDF} target='_blank' rel='noreferrer'>
          <div className='resume-pdf__container'>
            <div className='resume-pdf__img--container'>
              <img className='resume-pdf__img' src={myResume} alt='Resume-img'/>
            </div>
            <h2 className='resume-pdf__heading'>Click To<br/>View PDF</h2>
          </div>
        </a>
      </div>
    </>
  )
}

export default Resume