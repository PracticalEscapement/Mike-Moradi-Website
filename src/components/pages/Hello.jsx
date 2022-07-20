import './hello.css'
import headShot from '../../assests/snap-shot.png'

function Hello() {
  return (
    <>
      <div className='page-container'>
        <div className='mug-shot'>
          <img src={headShot} alt='My Beautiful Face' />
        </div>
        <div className='greeting-container'>
          <div className='greeting'>
            <h1>Hello, I'm Mike.</h1>
            <h2>Software Developer</h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hello