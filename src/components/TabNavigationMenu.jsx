import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TabNavigationContext from '../context/TabNavigationContext'
import './TabNavigationMenu.css'
import { FaBars } from "react-icons/fa"

import Hello from './pages/Hello'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import Contact from './pages/Contact'
import About from './pages/About'

function TabNavigationMenu({ pageRoute }) {

  const { dispatch, pages, pageLabels, menuColor } = useContext(TabNavigationContext)
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  const pageOne = pages.page1
  const pageTwo = pages.page2
  const pageThree = pages.page3
  const pageFour = pages.page4
  const pageFive = pages.page5

  const pageOneActive = pageLabels.page1
  const pageTwoActive = pageLabels.page2
  const pageThreeActive = pageLabels.page3
  const pageFourActive = pageLabels.page4
  const pageFiveActive = pageLabels.page5

  const handlePageChange = (page, path) => {
    dispatch({type: page})
    setMenuOpen(false)
    localStorage.setItem("currentPage", JSON.stringify(page))
    navigate(path)
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

  return (
    <>
      <div className='page-container'>
        <FaBars className={menuOpen ? 'menu-button-clicked' : `menu-button ${menuColor}`} onClick={menuClicked} />
        <div
          className={pageOne ? 'page-1 page-active' : 'page-1'}
          onClick={() => handlePageChange('PAGE1', '/')}
        >
          <div className={pageOneActive ? 'page-label-active' : 'page-label'}>
            <h3 className={pageOneActive ? 'page-label-text-active page-label-text-dark' : 'page-label-text page-label-text-dark'}>
              Hello
            </h3>
            {pageOneActive &&
                <Hello />
            }
          </div>
        </div>
        <div
          className={pageTwo ? 'page-2 page-active' : 'page-2'}
          onClick={() => handlePageChange('PAGE2', '/projects')}
        >
          <div className={pageTwoActive ? 'page-label-active' : 'page-label'}>
            <h3 className={pageTwoActive ? 'page-label-text-active page-label-text-light' : 'page-label-text page-label-text-light'}>
              Projects
            </h3>
          </div>
            {pageTwoActive &&
              <Projects />
            }
        </div>
        <div
          className={pageThree ? 'page-3 page-active' : 'page-3'}
          onClick={() => handlePageChange('PAGE3', '/resume')}
        >
          <div className={pageThreeActive ? 'page-label-active' : 'page-label'}>
            <h3 className={pageThreeActive ? 'page-label-text-active page-label-text-light' : 'page-label-text page-label-text-light'}>
              Resume
            </h3>
            {pageThreeActive &&
              <Resume />
            }
          </div>
        </div>
        <div
          className={pageFour ? 'page-4 page-active' : 'page-4'}
          onClick={() => handlePageChange('PAGE4', '/contact')}
        > 
          <div className={pageFourActive ? 'page-label-active' : 'page-label'}>
            <h3 className={pageFourActive ? 'page-label-text-active page-label-text-light' : 'page-label-text page-label-text-light'}>
              Contact
            </h3>
            {pageFourActive && 
              <Contact />
            }
          </div>
        </div>
        <div
          className={pageFive ? 'page-5 page-active' : 'page-5'}
          onClick={() => handlePageChange('PAGE5', '/about')}
        > 
          <div className={pageFiveActive ? 'page-label-active' : 'page-label'}>
            <h3 className={pageFiveActive ? 'page-label-text-active page-label-text-dark' : 'page-label-text page-label-text-dark'}>
              About
            </h3>
            {pageFiveActive &&
              <About />
            }
          </div>
        </div>
        
      </div>
    </>
  )
}

export default TabNavigationMenu
