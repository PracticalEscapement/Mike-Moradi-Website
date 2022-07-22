import './projects.css'
import TheRamenCritique from '../projects/TheRamenCritique'
import TheWatchStore from '../projects/TheWatchStore'

function Projects() {

  return (
    <>
      <div className='projects__container'>
        <TheRamenCritique />
        <TheWatchStore />
      </div>
    </>
  )
  
}

export default Projects