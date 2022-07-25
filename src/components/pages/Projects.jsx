import './projects.css'
import TheRamenCritique from '../projects/TheRamenCritique'
import TheWatchStore from '../projects/TheWatchStore'
import PersonalWebsite from '../projects/PersonalWebiste'

function Projects() {

  return (
    <>
      <div className='projects__container'>
        <TheRamenCritique />
        <TheWatchStore />
        <PersonalWebsite />
      </div>
    </>
  )
  
}

export default Projects