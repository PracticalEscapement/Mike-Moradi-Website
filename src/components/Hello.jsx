import { useContext, useEffect } from 'react'
import TabNavigationContext from '../context/TabNavigationContext'
import './Hello.css'

function Hello() {

  const { dispatch, pages, pageLabels } = useContext(TabNavigationContext)

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

  const handlePageChange = (page) => {
    dispatch({type: page})
    localStorage.setItem("currentPage", JSON.stringify(page))
  }

  useEffect(() => {
    const page = localStorage.getItem("currentPage")
    dispatch({type: JSON.parse(page)})
  }, [])

  return (
    <>
      <div className='page-container'>
        <div
          className={pageOne ? 'page-1 page-active' : 'page-1'}
          onClick={() => handlePageChange('PAGE1')}
        >
          <div className={pageOneLabel ? 'page-label-active' : 'page-label'}>
            <h3 className={pageOneLabel ? 'page-label-text-active page-label-text-dark' : 'page-label-text page-label-text-dark'}>
              Hello
            </h3>
          </div>
        </div>
        <div
          className={pageTwo ? 'page-2 page-active' : 'page-2'}
          onClick={() => handlePageChange('PAGE2')}
        >
          <div className={pageTwoLabel ? 'page-label-active' : 'page-label'}>
            <h3 className={pageTwoLabel ? 'page-label-text-active page-label-text-light' : 'page-label-text page-label-text-light'}>
              Projects
            </h3>
          </div>
        </div>
        <div
          className={pageThree ? 'page-3 page-active' : 'page-3'}
          onClick={() => handlePageChange('PAGE3')}
        >
          <div className={pageThreeLabel ? 'page-label-active' : 'page-label'}>
            <h3 className={pageThreeLabel ? 'page-label-text-active page-label-text-light' : 'page-label-text page-label-text-light'}>
              Resume
            </h3>
          </div>
        </div>
        <div
          className={pageFour ? 'page-4 page-active' : 'page-4'}
          onClick={() => handlePageChange('PAGE4')}
        > 
          <div className={pageFourLabel ? 'page-label-active' : 'page-label'}>
            <h3 className={pageFourLabel ? 'page-label-text-active page-label-text-light' : 'page-label-text page-label-text-light'}>
              Contact
            </h3>
          </div>
        </div>
        <div
          className={pageFive ? 'page-5 page-active' : 'page-5'}
          onClick={() => handlePageChange('PAGE5')}
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