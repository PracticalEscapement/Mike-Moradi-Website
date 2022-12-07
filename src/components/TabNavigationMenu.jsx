import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TabNavigationContext from '../context/TabNavigationContext'
import './TabNavigationMenu.css'
import { FaBars } from "react-icons/fa"

// Component for each page.
import Hello from './pages/Hello'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import Contact from './pages/Contact'
import About from './pages/About'

function TabNavigationMenu({ pageRoute }) {

  const { dispatch, pages, pageLabels } = useContext(TabNavigationContext)
  const [menuOpen, setMenuOpen] = useState(false)
  const [pageChanging, setPageChanging] = useState(false)
  const navigate = useNavigate()

  // If the state is true, the page is active or moved to the left side.
  const page1 = pages.page1
  const page2 = pages.page2
  const page3 = pages.page3
  const page4 = pages.page4
  const page5 = pages.page5

  // This is true when a page is clicked and the tab label is moved to the top left of the screen.
  const page1Label = pageLabels.page1
  const page2Label = pageLabels.page2
  const page3Label = pageLabels.page3
  const page4Label = pageLabels.page4
  const page5Label = pageLabels.page5

  const handlePageChange = (page, path) => {
    dispatch({type: page})
    setMenuOpen(false)
    localStorage.setItem("currentPage", JSON.stringify(page))
    navigate(path)
    setPageChanging(true)
    setTimeout(() => {setPageChanging(false)}, 1000)
  }

  const menuClicked = () => {
    dispatch({type: 'MENU'})
    setMenuOpen(true)
  }
  
  useEffect(() => {
    const currentPage = localStorage.getItem("currentPage")
    dispatch({type: JSON.parse(currentPage)})
  }, [dispatch])

  useEffect(() => { 
    dispatch({type: pageRoute})
    localStorage.setItem("currentPage", JSON.stringify(pageRoute))
  }, [pageRoute, dispatch])

  const handleTabTransitions = (id, e) => {
    const element = document.getElementById(id)
    if (!pageChanging) {
      if (e === 'over') {
        element.classList.add('tab__hover')
      }
      if (e === 'out') {
        element.classList.remove('tab__hover')
      }
    }
  }

  return (
    <>
      <div className='page-container'>
        <div className='menu-button__container'>
          <FaBars className={menuOpen ? 'menu-button-clicked' : 'menu-button'} onClick={menuClicked} />
        </div>
        <div
          className={page1 ? 'page page-1 page-active' : 'page page-1'}
          id='page1'
          onClick={() => handlePageChange('PAGE1', '/')}
          onMouseOver={() => handleTabTransitions('page1', 'over')}
          onMouseOut={() => handleTabTransitions('page1', 'out')}
        >
          <div className={page1Label ? 'page-label-active' : 'page-label'}>
            <h3 className={page1Label ? 'page-label-text-active' : 'page-label-text'}>
              Hello
            </h3>
            {page1Label &&
                <Hello />
            }
          </div>
        </div>
        <div
          className={page2 ? 'page page-2 page-active' : 'page page-2'}
          id='page2'
          onClick={() => handlePageChange('PAGE2', '/projects')}
          onMouseOver={() => handleTabTransitions('page2', 'over')}
          onMouseOut={() => handleTabTransitions('page2', 'out')}
        >
          <div className={page2Label ? 'page-label-active' : 'page-label'}>
            <h3 className={page2Label ? 'page-label-text-active' : 'page-label-text'}>
              Projects
            </h3>
          </div>
            {page2Label &&
              <Projects />
            }
        </div>
        <div
          className={page3 ? 'page page-3 page-active' : 'page page-3'}
          id='page3'
          onClick={() => handlePageChange('PAGE3', '/resume')}
          onMouseOver={() => handleTabTransitions('page3', 'over')}
          onMouseOut={() => handleTabTransitions('page3', 'out')}
        >
          <div className={page3Label ? 'page-label-active' : 'page-label'}>
            <h3 className={page3Label ? 'page-label-text-active' : 'page-label-text'}>
              Resume
            </h3>
            {page3Label &&
              <Resume />
            }
          </div>
        </div>
        <div
          className={page4 ? 'page page-4 page-active' : 'page page-4'}
          id='page4'
          onClick={() => handlePageChange('PAGE4', '/contact')}
          onMouseOver={() => handleTabTransitions('page4', 'over')}
          onMouseOut={() => handleTabTransitions('page4', 'out')}
        > 
          <div className={page4Label ? 'page-label-active' : 'page-label'}>
            <h3 className={page4Label ? 'page-label-text-active' : 'page-label-text'}>
              Contact
            </h3>
            {page4Label && 
              <Contact />
            }
          </div>
        </div>
        <div
          className={page5 ? 'page page-5 page-active' : 'page page-5'}
          id='page5'
          onClick={() => handlePageChange('PAGE5', '/about')}
          onMouseOver={() => handleTabTransitions('page5', 'over')}
          onMouseOut={() => handleTabTransitions('page5', 'out')}
        > 
          <div className={page5Label ? 'page-label-active' : 'page-label'}>
            <h3 className={page5Label ? 'page-label-text-active' : 'page-label-text'}>
              About
            </h3>
            {page5Label &&
              <About />
            }
          </div>
        </div>
        
      </div>
    </>
  )
}

export default TabNavigationMenu
