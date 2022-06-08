import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import TabNavigationContext from '../context/TabNavigationContext'
import './Hello.css'

function Hello({ page, pageRoute }) {

  const { dispatch, pages, pageLabels } = useContext(TabNavigationContext)
  const navigate = useNavigate()

  const pageOne = pages.page1
  const pageTwo = pages.page2
  const pageThree = pages.page3
  const pageFour = pages.page4
  const pageFive = pages.page5

  const pageOneLabel = pageLabels.page1
  const pageTwoLabel = pageLabels.page2
  const pageThreeLabel = pageLabels.page3
  const pageFourLabel = pageLabels.page4
  const pageFiveLabel = pageLabels.page5

  const handlePageChange = (page, path) => {
    dispatch({type: page})
    localStorage.setItem("currentPage", JSON.stringify(page))
    navigate(path)
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
        <div
          className={pageOne ? 'page-1 page-active' : 'page-1'}
          onClick={() => handlePageChange('PAGE1', '/')}
        >
          <div className={pageOneLabel ? 'page-label-active' : 'page-label'}>
            <h3 className={pageOneLabel ? 'page-label-text-active page-label-text-dark' : 'page-label-text page-label-text-dark'}>
              Hello
            </h3>
          </div>
        </div>
        <div
          className={pageTwo ? 'page-2 page-active' : 'page-2'}
          onClick={() => handlePageChange('PAGE2', '/projects')}
        >
          <div className={pageTwoLabel ? 'page-label-active' : 'page-label'}>
            <h3 className={pageTwoLabel ? 'page-label-text-active page-label-text-light' : 'page-label-text page-label-text-light'}>
              Projects
            </h3>
          </div>
        </div>
        <div
          className={pageThree ? 'page-3 page-active' : 'page-3'}
          onClick={() => handlePageChange('PAGE3', '/resume')}
        >
          <div className={pageThreeLabel ? 'page-label-active' : 'page-label'}>
            <h3 className={pageThreeLabel ? 'page-label-text-active page-label-text-light' : 'page-label-text page-label-text-light'}>
              Resume
            </h3>
          </div>
        </div>
        <div
          className={pageFour ? 'page-4 page-active' : 'page-4'}
          onClick={() => handlePageChange('PAGE4', '/contact')}
        > 
          <div className={pageFourLabel ? 'page-label-active' : 'page-label'}>
            <h3 className={pageFourLabel ? 'page-label-text-active page-label-text-light' : 'page-label-text page-label-text-light'}>
              Contact
            </h3>
          </div>
        </div>
        <div
          className={pageFive ? 'page-5 page-active' : 'page-5'}
          onClick={() => handlePageChange('PAGE5', '/about')}
        > 
          <div className={pageFiveLabel ? 'page-label-active' : 'page-label'}>
            <h3 className={pageFiveLabel ? 'page-label-text-active page-label-text-dark' : 'page-label-text page-label-text-dark'}>
              About
            </h3>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default Hello